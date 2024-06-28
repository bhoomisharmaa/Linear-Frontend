import { Link, Route, Routes } from "react-router-dom";
import "./teams.css";
import { DisplaySvg, FilterSvg, PlusSvg } from "../svg-icons/more-icons";
import ProjectSvg from "../svg-icons/projects";
import BugSvg from "../svg-icons/bug";
import NewTeamBox from "./new-team";
import { useState } from "react";
import { MsgBox } from "../Issues/issue-page";

export default function TeamPage({ teams }) {
  const [canShowNewTeam, setCanShowNewTeam] = useState(false);
  const [msgAnimation, setMsgAnimation] = useState("");

  const handleAddBtnClick = () => {
    setMsgAnimation(
      canShowNewTeam
        ? "button-pop 0.5s forwards ease-in-out"
        : "button-up 0.5s forwards ease-in-out"
    );
    setCanShowNewTeam(true);
  };
  return (
    <div className="issue-div h-full w-full flex flex-col text-[var(--color-text-primary)] cursor-default overflow-hidden">
      <Header teams={teams} handleAddBtnClick={handleAddBtnClick} />
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
      {canShowNewTeam &&
        (teams.length < 2 ? (
          <NewTeamBox setCanShowNewTeam={setCanShowNewTeam} teams={teams} />
        ) : (
          <div className="absolute bottom-0 right-0 m-2 h-max w-max bg-red-500">
            <MsgBox
              msgAnimation={msgAnimation}
              msgText={"You've reached the limit of teams."}
              setMsgAnimation={setMsgAnimation}
              setShowMsgBox={setCanShowNewTeam}
            />
          </div>
        ))}
    </div>
  );
}

function Header({ teams, handleAddBtnClick }) {
  return (
    <div className="header flex justify-between items-center text-[var(--color-text-tertiary])">
      <div className="flex items-center gap-2.5 font-medium">
        <p>Teams </p>
        <span className="text-[var(--color-text-tertiary)]">
          {teams.length}
        </span>
      </div>
      <button className="buttons-team py-1 px-2" onClick={handleAddBtnClick}>
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
