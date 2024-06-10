import { Link, Route, Routes } from "react-router-dom";
import "./teams.css";
import { DisplaySvg, FilterSvg, PlusSvg } from "../svg-icons/more-icons";
import ProjectSvg from "../svg-icons/projects";
import BugSvg from "../svg-icons/bug";
import NewTeamBox from "./new-team";
import { useState } from "react";

export default function TeamPage({ teams }) {
  return (
    <div>
      <Routes>
        <Route path="/teams" element={<TeammmmmPageeee teams={teams} />} />
      </Routes>
    </div>
  );
}

function TeammmmmPageeee({ teams }) {
  const [canShowNewTeam, setCanShowNewTeam] = useState(false);
  return (
    <div className="relative issue-div h-full w-full flex flex-col text-[var(--color-text-primary)] cursor-default">
      <Header teams={teams} setCanShowNewTeam={setCanShowNewTeam} />
      <FilterDisplaySection />
      <ThirdCol />
      {teams.map((team) => {
        return (
          <TeamInfo
            key={team.team_name}
            team_name={team.team_name}
            identifier={team.identifier}
          />
        );
      })}
      {canShowNewTeam && <NewTeamBox setCanShowNewTeam={setCanShowNewTeam} />}
    </div>
  );
}

function Header({ teams, setCanShowNewTeam }) {
  return (
    <div className="header flex justify-between items-center text-[var(--color-text-tertiary])">
      <div className="flex items-center gap-2.5 font-medium">
        <p>Teams </p>
        <span className="text-[var(--color-text-tertiary)]">
          {teams.length}
        </span>
      </div>
      <button
        className="buttons-team py-1 px-2"
        onClick={() => setCanShowNewTeam(true)}
      >
        <PlusSvg />
        <p className="text-xs">Add Team</p>
      </button>
    </div>
  );
}

function FilterDisplaySection() {
  return (
    <div className="filter-display flex justify-between items-center py-2 ">
      <button className="flex items-center gap-1  px-2 py-0.5 rounded-sm hover:brightness-200 hover:bg-[#63676d19]">
        <FilterSvg />
        <span>Filter</span>
      </button>
      <button className="buttons-team px-2 py-0.5">
        <DisplaySvg />
        Display
      </button>
    </div>
  );
}

function ThirdCol() {
  return (
    <div className="font-mini-300 third-col text-[var(--color-text-tertiary)]">
      <div className="flex gap-1">Name</div>
      <div>Identifier</div>
      <div>Members</div>
      <div>Projects</div>
    </div>
  );
}

function TeamInfo({ team_name, identifier }) {
  return (
    <Link to={`/team/${identifier}/all`}>
      <div className="teams-des text-[var(--color-text-tertiary)]">
        <div className="flex gap-2 items-center">
          <BugSvg
            fillColor={"var(--color-decoration-1)"}
            bgColor={"var(--color-decoration-bg-1)"}
          />
          <span className="font-semibold text-[var(--color-text-primary)]">
            {team_name}
          </span>
        </div>
        <div>{identifier}</div>
        <div>BS</div>
        <div>
          <div className="buttons items-center h-max w-max my-0.5">
            <ProjectSvg /> <span className="mb-[-2px] ml-[-4px]">0</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
