import "./sidebar.css";
import NewIssueSvg from "../../svg-icons/new-issue";
import SearchIconSvg from "../../svg-icons/search-icon";
import InboxSvg from "../../svg-icons/inbox";
import MyIssueSvg from "../../svg-icons/my-issue";
import ArrowDownSvg from "../../svg-icons/arrow-down";
import ArrowUpSvg from "../../svg-icons/arrow-up";
import { useEffect, useState } from "react";
import ViewsSvg from "../../svg-icons/viwes";
import RoadMapSvg from "../../svg-icons/roadmaps";
import TeamsSvg from "../../svg-icons/teams";
import BugSvg from "../../svg-icons/bug";
import IssueSvg from "../../svg-icons/issues";
import ProjectSvg from "../../svg-icons/projects";
import { NavLink } from "react-router-dom";

export default function Sidebar({ handleNewIssueVisibility, teams }) {
  return (
    <div className="sidebar">
      <HeaderDiv handleNewIssueVisibility={handleNewIssueVisibility} />
      <div className="flex flex-col">
        <button className="buttons">
          <InboxSvg /> <span>Inbox</span>
        </button>
        <button className="buttons">
          <MyIssueSvg /> My issues
        </button>
      </div>
      <Workspace teams={teams} />

      <YourTeams teams={teams} />
    </div>
  );
}

function HeaderDiv({ handleNewIssueVisibility }) {
  return (
    <div className="flex flex-col gap-3 my-3 text-xs">
      <div className="flex items-center gap-2.5 px-2.5 py-2">
        <p className="workspace-icon ">TI</p>
        <p style={{ fontWeight: "var(--font-weight-medium)" }}>Tierra</p>
      </div>
      <div>
        <div className="flex gap-2 justify-center">
          <button
            className="new-issue-button"
            onClick={() => handleNewIssueVisibility("Backlog")}
          >
            <NewIssueSvg />
            <p>New issue</p>
          </button>
          <button className="search-button ">
            <SearchIconSvg />
          </button>
        </div>
      </div>
    </div>
  );
}

function Workspace({ teams }) {
  const [isWorkSpaceOpen, setIsWorkSpaceOpen] = useState(true);

  return (
    <div className="flex flex-col h-max">
      <button
        className="buttons mt-4 text-xs px-1 text-[var(--color-text-tertiary)] flex items-center"
        onClick={() => setIsWorkSpaceOpen(!isWorkSpaceOpen)}
      >
        Workspace
        <div>{isWorkSpaceOpen ? <ArrowDownSvg /> : <ArrowUpSvg />}</div>
      </button>

      <div className="overflow-hidden">
        <div
          className={`flex flex-col pl-2.5 text-[13px] ${
            isWorkSpaceOpen ? "open" : "close"
          }`}
        >
          <button className="buttons">
            <ViewsSvg /> <span>Views</span>
          </button>
          <button className="buttons">
            <RoadMapSvg /> <span>Roadmap</span>
          </button>
          <NavLink to={"/teams"} className="buttons">
            <TeamsSvg /> <span>Teams</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function YourTeams({ teams }) {
  const [isYourTeamOpen, setIsYourTeamOpen] = useState(true);

  return (
    <div className="flex flex-col">
      <button
        className="buttons mt-4 text-xs px-1 text-[var(--color-text-tertiary)] flex items-center"
        onClick={() => setIsYourTeamOpen(!isYourTeamOpen)}
      >
        Your teams
        <div>{isYourTeamOpen ? <ArrowDownSvg /> : <ArrowUpSvg />}</div>
      </button>
      <div className="overflow-hidden">
        <div
          className={`flex flex-col pl-2.5 text-[13px] ${
            isYourTeamOpen ? "open" : "close"
          }`}
        >
          {teams.map((team, index) => (
            <Teams
              teamName={team.team_name}
              teamIdentifier={team.identifier}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Teams({ teamName, teamIdentifier }) {
  const [isTeamOpen, setIsTeamOpen] = useState(true);
  return (
    <div className="flex flex-col">
      <button
        className="flex gap-2 mt-0.5 pl-0.5 buttons-no-glow font-semibold"
        onClick={() => setIsTeamOpen(!isTeamOpen)}
      >
        <BugSvg
          fillColor={"var(--color-decoration-1)"}
          bgColor={"var(--color-decoration-bg-1)"}
        />
        {teamName}
        {isTeamOpen ? <ArrowDownSvg /> : <ArrowUpSvg />}
      </button>
      <div className="overflow-hidden">
        <div
          className={`flex flex-col pl-2.5 text-[13px] ${
            isTeamOpen ? "open" : "close"
          }`}
        >
          <div className="flex flex-col">
            <NavLink to={`/team/${teamIdentifier}/all`} className="buttons">
              <IssueSvg /> <span>Issues</span>
            </NavLink>
            <div className="issues-div">
              <NavLink to={`/team/${teamIdentifier}/active`} className="m-1">
                Active
              </NavLink>
              <NavLink to={`/team/${teamIdentifier}/backlog`} className="m-1">
                Backlog
              </NavLink>
            </div>
          </div>

          <button className="buttons">
            <ProjectSvg /> <span>Project</span>
          </button>
          <button className="buttons">
            <ViewsSvg /> <span>Views</span>
          </button>
        </div>
      </div>
    </div>
  );
}
