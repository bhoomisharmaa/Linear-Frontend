import Sidebar from "./Sidebar/sidebar";
import "./active-team.css";
import Issues from "../Issues/issues";
import NewIssue from "../New Issue/new-issue";
import { useEffect, useState } from "react";
import axios from "axios";
import TeamPage from "../TeamsPage/teams";

export default function ActiveTeam() {
  const [isNewIssueVisible, setIsNewIssueVisible] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState("");
  const [teams, setTeams] = useState([]);
  const getTeams = async () => {
    try {
      let team = await axios.get("http://localhost:3001/teams/get-team");
      setTeams(team.data);
    } catch {}
  };
  useEffect(() => {
    getTeams();
  }, []);
  const handleNewIssueVisibility = (newStatus) => {
    setIsNewIssueVisible(!isNewIssueVisible);
    setDefaultStatus(newStatus);
  };
  return (
    <div className="h-vh w-vh relative">
      <div className="acive-team-main">
        <Sidebar
          handleNewIssueVisibility={handleNewIssueVisibility}
          teams={teams}
        />
        <div className="active-page">
          {teams.map((team) => {
            return (
              <Issues
                handleNewIssueVisibility={handleNewIssueVisibility}
                teamName={team.team_name}
                teamIdentifier={team.identifier}
                teamIndex={team.team_index}
              />
            );
          })}
          <TeamPage teams={teams} />
        </div>
      </div>
      {isNewIssueVisible && (
        <NewIssue
          teamCode={"TIE"}
          handleNewIssueVisibility={handleNewIssueVisibility}
          defaultStatus={defaultStatus}
        />
      )}
    </div>
  );
}
