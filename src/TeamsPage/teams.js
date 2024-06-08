import { Route, Routes } from "react-router-dom";
import "./teams.css";
import { DisplaySvg, FilterSvg, PlusSvg } from "../svg-icons/more-icons";
import ProjectSvg from "../svg-icons/projects";

export default function TeamPage({ teams }) {
  return (
    <Routes>
      <Route path="/teams" element={<TeammmmmPageeee teams={teams} />} />
    </Routes>
  );
}

function TeammmmmPageeee({ teams }) {
  return (
    <div className="issue-div h-full w-full flex flex-col text-[var(--color-text-primary)] cursor-default">
      <Header teams={teams} />
      <FilterDisplaySection />
      <ThirdCol />
      {teams.map((team) => {
        return (
          <div className="teams-des">
            <div className="min-w-72">{team.team_name}</div>
            <div className="min-w-56 max-w-[28rem]">{team.identifier}</div>
            <div className="max-w-36">BS</div>
            <div className="max-w-24">
              <div className="buttons items-center h-max w-max my-0.5">
                <ProjectSvg /> <span>0</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Header({ teams }) {
  return (
    <div className="header flex justify-between items-center text-[var(--color-text-tertiary])">
      <div className="flex items-center gap-2.5 font-medium">
        <p>Teams </p>
        <span className="text-[var(--color-text-tertiary)]">
          {teams.length}
        </span>
      </div>
      <button className="buttons-team py-1 px-2">
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
      <div className="min-w-72">Name</div>
      <div className="min-w-56 max-w-[28rem]">Identifier</div>
      <div className="max-w-36">Members</div>
      <div className="max-w-24">Projects</div>
    </div>
  );
}
