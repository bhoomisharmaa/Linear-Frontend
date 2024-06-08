import Sidebar from "./Sidebar/sidebar";
import "./active-team.css";
import Issues from "../Issues/issues";
import NewIssue from "../New Issue/new-issue";
import { useState } from "react";

export default function ActiveTeam() {
  const [isNewIssueVisible, setIsNewIssueVisible] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState("");
  const handleNewIssueVisibility = (newStatus) => {
    setIsNewIssueVisible(!isNewIssueVisible);
    setDefaultStatus(newStatus);
  };
  return (
    <div className="h-vh w-vh relative">
      <div className="acive-team-main">
        <Sidebar handleNewIssueVisibility={handleNewIssueVisibility} />
        <div className="active-page">
          <Issues handleNewIssueVisibility={handleNewIssueVisibility} />
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
