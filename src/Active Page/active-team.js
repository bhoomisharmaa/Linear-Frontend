import Sidebar from "./Sidebar/sidebar";
import "./active-team.css";
import Issues from "../Issues/issues";
import NewIssue from "../New Issue/new-issue";
import { useEffect, useState } from "react";
import axios from "axios";
import TeamPage from "../TeamsPage/teams";
import { Route, Routes } from "react-router-dom";
import IssuePage from "../Issues/issue-page";

export default function ActiveTeam() {
  const [isNewIssueVisible, setIsNewIssueVisible] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState("");
  const [teams, setTeams] = useState([]);
  const [activeTeamIndex, setActiveTeamIndex] = useState(1);
  const [activeTeamIdentifier, setActiveTeamIdentifier] = useState("");
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
          setActiveTeamIdentifier={setActiveTeamIdentifier}
          setActiveTeamIndex={setActiveTeamIndex}
        />

        <Routes>
          <Route
            path="/team/*"
            element={
              <div className="active-page">
                {teams.map((team) => {
                  return (
                    <Issues
                      key={team.identifier}
                      handleNewIssueVisibility={handleNewIssueVisibility}
                      teamIdentifier={team.identifier}
                      teamIndex={team.team_index}
                    />
                  );
                })}
                <TeamPage teams={teams} />
              </div>
            }
          ></Route>
          {teams.map((team) => {
            return (
              <Route
                key={team.team_index}
                path={`issue/${team.identifier}/*`}
                element={
                  <IssuePage
                    teamName={team.team_name}
                    teamIdentifier={team.identifier}
                    teamIndex={team.team_index}
                  />
                }
              ></Route>
            );
          })}
          <Route path="*" element={<p className="text-red-500">not found</p>} />
        </Routes>
      </div>
      {isNewIssueVisible && (
        <NewIssue
          teamIndex={activeTeamIndex}
          teamCode={activeTeamIdentifier}
          handleNewIssueVisibility={handleNewIssueVisibility}
          defaultStatus={defaultStatus}
        />
      )}
    </div>
  );
}
