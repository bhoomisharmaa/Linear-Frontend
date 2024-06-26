import "./issues.css";
import {
  StarSvg,
  BellSvg,
  OpenDetailsSvg,
  FilterSvg,
  DisplaySvg,
} from "../svg-icons/more-icons";
import { NoActiveIssues, NoBacklogIssues, NoAllIssues } from "./no-issue";
import { useEffect, useState } from "react";
import IssueBasicSyntax from "./issueSectionBasicSyntax";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Outlet } from "react-router-dom";
import NotFoundPage from "../404page/not-found";
import LoadingPage from "../LoadingPage/loading-page";

export default function Issues({
  handleNewIssueVisibility,
  teamIndex,
  teamIdentifier,
  handleRenameBtnClick,
  handleFilterButtonClick,
  setStatusToFilter,
  setLabelToFilter,
  setPriorityToFilter,
  setContentToFilter,
}) {
  return (
    <Routes>
      <Route
        path={`/${teamIdentifier}/all`}
        element={
          <AllIssuesPage
            handleNewIssueVisibility={handleNewIssueVisibility}
            teamIndex={teamIndex}
            teamIdentifier={teamIdentifier}
            handleRenameBtnClick={handleRenameBtnClick}
            handleFilterButtonClick={handleFilterButtonClick}
            setContentToFilter={setContentToFilter}
            setLabelToFilter={setLabelToFilter}
            setPriorityToFilter={setPriorityToFilter}
            setStatusToFilter={setStatusToFilter}
          />
        }
      ></Route>
      <Route
        path={`/${teamIdentifier}/active`}
        element={
          <ActiveIssuesPage
            handleNewIssueVisibility={handleNewIssueVisibility}
            teamIdentifier={teamIdentifier}
            teamIndex={teamIndex}
            handleRenameBtnClick={handleRenameBtnClick}
            handleFilterButtonClick={handleFilterButtonClick}
            setContentToFilter={setContentToFilter}
            setLabelToFilter={setLabelToFilter}
            setPriorityToFilter={setPriorityToFilter}
            setStatusToFilter={setStatusToFilter}
          />
        }
      ></Route>
      <Route
        path={`/${teamIdentifier}/backlog`}
        element={
          <BacklogIssuesPage
            handleNewIssueVisibility={handleNewIssueVisibility}
            teamIdentifier={teamIdentifier}
            teamIndex={teamIndex}
            handleRenameBtnClick={handleRenameBtnClick}
            handleFilterButtonClick={handleFilterButtonClick}
            setContentToFilter={setContentToFilter}
            setLabelToFilter={setLabelToFilter}
            setPriorityToFilter={setPriorityToFilter}
            setStatusToFilter={setStatusToFilter}
          />
        }
      ></Route>
      <Route path={`/${teamIdentifier}/*`} element={<NotFoundPage />} />
    </Routes>
  );
}

function AllIssuesPage({
  handleNewIssueVisibility,
  teamIndex,
  teamIdentifier,
  handleRenameBtnClick,
  handleFilterButtonClick,
  setStatusToFilter,
  setLabelToFilter,
  setPriorityToFilter,
  setContentToFilter,
}) {
  return (
    <div className="issue-div h-full w-full flex flex-col text-[var(--color-text-primary)] cursor-default">
      <Header headerName={"All issues"} />
      <FilterDisplaySection handleFilterButtonClick={handleFilterButtonClick} />
      <IssueSection
        issueToBeDisplayed={"all"}
        NoIssuePage={
          <NoAllIssues handleNewIssueVisibility={handleNewIssueVisibility} />
        }
        handleNewIssueVisibility={handleNewIssueVisibility}
        teamIdentifier={teamIdentifier}
        teamIndex={teamIndex}
        handleRenameBtnClick={handleRenameBtnClick}
        setContentToFilter={setContentToFilter}
        setLabelToFilter={setLabelToFilter}
        setPriorityToFilter={setPriorityToFilter}
        setStatusToFilter={setStatusToFilter}
      />
    </div>
  );
}

function ActiveIssuesPage({
  handleNewIssueVisibility,
  teamIndex,
  teamIdentifier,
  handleRenameBtnClick,
  handleFilterButtonClick,
  setStatusToFilter,
  setLabelToFilter,
  setPriorityToFilter,
  setContentToFilter,
}) {
  return (
    <div className="issue-div h-full w-full flex flex-col text-[var(--color-text-primary)]">
      <Header headerName={"Active issues"} />
      <FilterDisplaySection handleFilterButtonClick={handleFilterButtonClick} />
      <IssueSection
        issueToBeDisplayed={"active"}
        NoIssuePage={
          <NoActiveIssues handleNewIssueVisibility={handleNewIssueVisibility} />
        }
        handleNewIssueVisibility={handleNewIssueVisibility}
        teamIdentifier={teamIdentifier}
        teamIndex={teamIndex}
        handleRenameBtnClick={handleRenameBtnClick}
        setContentToFilter={setContentToFilter}
        setLabelToFilter={setLabelToFilter}
        setPriorityToFilter={setPriorityToFilter}
        setStatusToFilter={setStatusToFilter}
      />
    </div>
  );
}

function BacklogIssuesPage({
  handleNewIssueVisibility,
  teamIndex,
  teamIdentifier,
  handleRenameBtnClick,
  handleFilterButtonClick,
  setStatusToFilter,
  setLabelToFilter,
  setPriorityToFilter,
  setContentToFilter,
}) {
  return (
    <div className="issue-div h-full w-full flex flex-col text-[var(--color-text-primary)]">
      <Header headerName={"Backlog issues"} />
      <FilterDisplaySection handleFilterButtonClick={handleFilterButtonClick} />
      <IssueSection
        issueToBeDisplayed={"backlog"}
        NoIssuePage={
          <NoBacklogIssues
            handleNewIssueVisibility={handleNewIssueVisibility}
          />
        }
        handleNewIssueVisibility={handleNewIssueVisibility}
        teamIdentifier={teamIdentifier}
        teamIndex={teamIndex}
        handleRenameBtnClick={handleRenameBtnClick}
        setContentToFilter={setContentToFilter}
        setLabelToFilter={setLabelToFilter}
        setPriorityToFilter={setPriorityToFilter}
        setStatusToFilter={setStatusToFilter}
      />
    </div>
  );
}

function IssueSection({
  issueToBeDisplayed,
  NoIssuePage,
  handleNewIssueVisibility,
  teamIndex,
  teamIdentifier,
  handleRenameBtnClick,
  setStatusToFilter,
  setLabelToFilter,
  setPriorityToFilter,
  setContentToFilter,
}) {
  const [backlogIssues, setBacklogIssues] = useState([]);
  const [todoIssues, setTodoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const [canceledIssues, setCanceledIssues] = useState([]);
  const [duplicateIssues, setDuplicateIssues] = useState([]);
  const [issueToReturn, setIssueToReturn] = useState([]);
  const [isSmallBoxClosed, setIsSmallBoxClosed] = useState(false); //checks if any other box is open
  const [issueIsChanged, setIssueIsChanged] = useState(false);
  const [loading, setLoading] = useState(true);
  const statusFilter = [];

  // Fetches issues from db according to their status
  const getIssues = async (status, setArray) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/issues/${teamIndex}/get-issues`,
        { params: { status } }
      );
      setArray(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
    setIssueIsChanged(false);
  }, [issueIsChanged]);

  useEffect(() => {
    if (issueToBeDisplayed === "all") {
      setIssueToReturn([
        <IssueBasicSyntax
          key="inProgress"
          issueArray={inProgressIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
        />,
        <IssueBasicSyntax
          key="todo"
          issueArray={todoIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
        />,
        <IssueBasicSyntax
          key="backlog"
          issueArray={backlogIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
        />,
        <IssueBasicSyntax
          key="done"
          issueArray={doneIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
        />,
        <IssueBasicSyntax
          key="canceled"
          issueArray={canceledIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
        />,
        <IssueBasicSyntax
          key="duplicate"
          issueArray={duplicateIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
        />,
      ]);
    } else if (issueToBeDisplayed === "active") {
      setIssueToReturn([
        <IssueBasicSyntax
          key="inProgress"
          issueArray={inProgressIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
        />,
        <IssueBasicSyntax
          key="todo"
          issueArray={todoIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
        />,
      ]);
      if (!!todoIssues.length) statusFilter.push("Todo");
      if (!!inProgressIssues.length) statusFilter.push("InProgress");
      setStatusToFilter(statusFilter);
    } else if (issueToBeDisplayed === "backlog") {
      setIssueToReturn([
        <IssueBasicSyntax
          key="backlog"
          issueArray={backlogIssues}
          setIsIssueChanged={setIssueIsChanged}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          handleNewIssueVisibility={handleNewIssueVisibility}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          handleRenameBtnClick={handleRenameBtnClick}
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

  if (loading) {
    return <LoadingPage />; // Show a loading state while fetching data
  }

  return (
    <div className="issue-section flex flex-col items-center overflow-hidden">
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

function FilterDisplaySection({ handleFilterButtonClick }) {
  return (
    <div className="filter-display flex justify-between items-center py-2">
      <button
        className="flex gap-1 px-2 py-0.5 rounded-sm hover:brightness-200 hover:bg-[#63676d19]"
        onClick={handleFilterButtonClick}
      >
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
