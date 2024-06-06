import "./issues.css";
import {
  StarSvg,
  BellSvg,
  OpenDetailsSvg,
  FilterSvg,
  DisplaySvg,
  PlusSvg,
  NoAssignee,
} from "../svg-icons/more-icons";
import { NoActiveIssues, NoBacklogIssues, NoAllIssues } from "./no-issue";
import { useEffect, useState } from "react";
import IssueBasicSyntax from "./issueSectionBasicSyntax";
import { Route, Routes } from "react-router-dom";
import axios, { all } from "axios";

export default function Issues({ handleNewIssueVisibility }) {
  return (
    <Routes>
      <Route path="/issues" element={<AllIssuesPage />}></Route>
      <Route path="/issues/active" element={<ActiveIssuesPage />}></Route>
      <Route path="/issues/backlog" element={<BacklogIssuesPage />}></Route>
    </Routes>
  );
}

function AllIssuesPage() {
  return (
    <div className="issue-div h-full w-full flex flex-col text-[var(--color-text-primary)] cursor-default">
      <Header headerName={"All issues"} />
      <FilterDisplaySection />
      <IssueSection issueToBeDisplayed={"all"} NoIssuePage={<NoAllIssues />} />
    </div>
  );
}

function ActiveIssuesPage() {
  return (
    <div className="issue-div h-full w-full flex flex-col text-[var(--color-text-primary)]">
      <Header headerName={"Active issues"} />
      <FilterDisplaySection />
      <IssueSection
        issueToBeDisplayed={"active"}
        NoIssuePage={<NoActiveIssues />}
      />
    </div>
  );
}

function BacklogIssuesPage() {
  return (
    <div className="issue-div h-full w-full flex flex-col text-[var(--color-text-primary)]">
      <Header headerName={"Backlog issues"} />
      <FilterDisplaySection />
      <IssueSection
        issueToBeDisplayed={"backlog"}
        NoIssuePage={<NoBacklogIssues />}
      />
    </div>
  );
}

function IssueSection({ issueToBeDisplayed, NoIssuePage }) {
  const [backlogIssues, setBacklogIssues] = useState([]);
  const [todoIssues, setTodoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const [canceledIssues, setCanceledIssues] = useState([]);
  const [duplicateIssues, setDuplicateIssues] = useState([]);
  const [issueToReturn, setIssueToReturn] = useState([]);
  const [isSmallBoxClosed, setIsSmallBoxClosed] = useState(false); //checks if any other box is open

  // Fetches issues from db according to their status
  const getIssues = async (status, setArray) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/issues/get-issues/${status}`
      );
      setArray(response.data);
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  };

  useEffect(() => {
    getIssues("Todo", setTodoIssues);
    getIssues("InProgress", setInProgressIssues);
    getIssues("Backlog", setBacklogIssues);
    getIssues("Done", setDoneIssues);
    getIssues("Canceled", setCanceledIssues);
    getIssues("Duplicate", setDuplicateIssues);
  }, []);

  useEffect(() => {
    if (issueToBeDisplayed === "all") {
      setIssueToReturn([
        <IssueBasicSyntax
          key="inProgress"
          issueArray={inProgressIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
        <IssueBasicSyntax
          key="todo"
          issueArray={todoIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
        <IssueBasicSyntax
          key="backlog"
          issueArray={backlogIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
        <IssueBasicSyntax
          key="done"
          issueArray={doneIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
        <IssueBasicSyntax
          key="canceled"
          issueArray={canceledIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
        <IssueBasicSyntax
          key="duplicate"
          issueArray={duplicateIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
      ]);
    } else if (issueToBeDisplayed === "active") {
      setIssueToReturn([
        <IssueBasicSyntax
          key="inProgress"
          issueArray={inProgressIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
        <IssueBasicSyntax
          key="todo"
          issueArray={todoIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
      ]);
    } else if (issueToBeDisplayed === "backlog") {
      setIssueToReturn([
        <IssueBasicSyntax
          key="backlog"
          issueArray={backlogIssues}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />,
      ]);
    }
  }, [
    issueToBeDisplayed,
    inProgressIssues,
    todoIssues,
    backlogIssues,
    doneIssues,
    canceledIssues,
    duplicateIssues,
  ]);

  return (
    <div className="issue-section flex flex-col items-center">
      {issueToReturn
        .map((issue) => !!issue.props.issueArray.length)
        .find((element) => element === true)
        ? issueToReturn
        : NoIssuePage}
    </div>
  );
}

function Header({ headerName }) {
  return (
    <div className="header flex justify-between items-center">
      <div className="flex items-center gap-2.5 font-medium">
        {headerName}
        <button className="buttons">
          <StarSvg />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button className="buttons">
          <BellSvg />
        </button>
        <div className="vertical-line" />
        <button className="buttons">
          <OpenDetailsSvg />
        </button>
      </div>
    </div>
  );
}

function FilterDisplaySection() {
  return (
    <div className="filter-display flex justify-between items-center py-2">
      <button className="flex items-center gap-1  px-2 py-0.5 rounded-sm hover:brightness-200 hover:bg-[#63676d19]">
        <FilterSvg />
        <span>Filter</span>
      </button>
      <button className="flex items-center gap-1 bg-[var(--color-bg-tertiary)] px-2 py-0.5 rounded-sm hover:brightness-110">
        <DisplaySvg />
        Display
      </button>
    </div>
  );
}
