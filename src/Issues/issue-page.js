import { Route, Routes } from "react-router-dom";
import BugSvg from "../svg-icons/bug";
import { TheresMoreSvg } from "../svg-icons/more-icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function IssuePage({ teamName, teamIndex, teamIdentifier }) {
  const [issues, setIssues] = useState([]);
  const getIssues = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/issues/${teamIndex}/get-issues`
      );
      console.log(response.data);
      setIssues(response.data);
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  };
  useEffect(() => {
    getIssues();
  }, []);
  return (
    <Routes>
      {issues.map((issue) => (
        <Route
          key={issue.index}
          path={`/${issue.index}/${issue.name
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          element={
            <MainTeamPage
              teamName={teamName}
              teamIdentifier={teamIdentifier}
              issueIndex={issue.index}
              issueTitle={issue.name}
              description={issue.description}
              label={issue.label}
              priority={issue.priority}
              status={issue.status}
            />
          }
        ></Route>
      ))}
      <Route path="*" element={<p className="text-white">not found</p>} />
    </Routes>
  );
}

function MainTeamPage({
  teamName,
  issueIndex,
  teamIdentifier,
  issueTitle,
  description,
  status,
  priority,
  label,
}) {
  return (
    <div className="issue-page-div">
      <Header
        teamName={teamName}
        teamIdentifier={teamIdentifier}
        issueIndex={issueIndex}
      />
    </div>
  );
}

function Header({ teamName, issueIndex, teamIdentifier }) {
  return (
    <div className="header flex items-center gap-2 text-[var(--color-text-primary)] cursor-default">
      <span>Teams</span>
      <span>›</span>
      <BugSvg
        fillColor={"var(--color-decoration-1)"}
        bgColor={"var(--color-decoration-bg-1)"}
      />
      <span>{teamName}</span>
      <span>›</span>
      <span>{teamIdentifier + "-" + issueIndex}</span>
      <button className="buttons">
        <TheresMoreSvg />
      </button>
    </div>
  );
}
