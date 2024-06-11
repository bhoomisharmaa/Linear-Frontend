import { useState } from "react";
import { CrossSvg } from "../svg-icons/more-icons";
import "./teams.css";
import axios from "axios";

async function createTeam(team_name, identifier) {
  try {
    const team = await axios.post(`http://localhost:3001/teams/create-team`, {
      team_name,
      identifier,
    });
    console.log(team);
  } catch (error) {
    console.error("Error creating team:", error);
  }
}
export default function NewTeamBox({ setCanShowNewTeam }) {
  const [teamName, setTeamName] = useState("");
  const [identifier, setIdentifier] = useState("");
  return (
    <div className="new-anything-div items-center justify-content-center">
      <dialog className="new-anything bg-[var(--color-bg-secondary)] new-team-dia">
        <form
          className="new-anything-form"
          onSubmit={() => createTeam(teamName, identifier)}
        >
          {/* header */}
          <div className="flex justify-between items-center px-3 pt-3 pb-1.5 border-b-[1px] border-[var(--color-border-quaternary)]">
            <span className="text-[var(--color-text-primary)] text-md ">
              New Team
            </span>
            <button
              className="buttons"
              type="button"
              onClick={() => setCanShowNewTeam(false)}
            >
              <CrossSvg />
            </button>
          </div>
          {/* Input Fields */}
          <div className="grow mt-6 flex flex-col gap-8">
            {/* Team name input */}
            <div className="flex flex-col gap-2 px-4 items-start">
              <span className="text-[var(--color-text-primary)] text-sm">
                Team name :
              </span>
              <input
                className="team-input bg-[var(--color-bg-secondary)] w-full px-3.5 py-1 text-md font-medium border-[1px] border-[var(--color-border-quaternary)] rounded-md"
                value={teamName}
                placeholder="e.g. Wheeeeeeeeeeeee"
                onChange={(event) => setTeamName(event.target.value)}
              />
            </div>
            <div className="flex gap-8 items-center px-4 pb-4 border-b-[1px] border-[var(--color-border-quaternary)] ">
              {/* identifier input */}
              <div className="flex flex-col gap-2 items-start">
                <span className="text-[var(--color-text-primary)] text-sm">
                  Identifier :
                </span>
                <input
                  className="team-input bg-[var(--color-bg-secondary)] px-3.5 py-1 text-md font-medium border-[1px] border-[var(--color-border-quaternary)] rounded-md"
                  value={identifier.toUpperCase()}
                  placeholder="e.g. WHE"
                  onChange={(event) =>
                    setIdentifier(event.target.value.toUpperCase())
                  }
                />
              </div>
              {/* icon color (baad mein krege ye) */}
              <div className="flex flex-col gap-2 items-start">
                <span className="text-[var(--color-text-primary)] text-sm">
                  Icon color :
                </span>
                <input
                  className="team-input bg-[var(--color-bg-secondary)] px-3.5 py-1 text-md font-medium border-[1px] border-[var(--color-border-quaternary)] rounded-md"
                  placeholder="e.g. Wheeeeee"
                />
              </div>
            </div>
          </div>
          {/* footer only have submit button for now */}
          <div className="footer flex justify-end p-3">
            <button
              className="bg-[var(--focus-color)] button-box-shadow border border-[#7a83d4] text-[var(--color-text-primary)] font-smallPlus font-medium rounded-md px-4 py-1.5 ml-2 hover:brightness-125"
              type="submit"
            >
              Create team
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
