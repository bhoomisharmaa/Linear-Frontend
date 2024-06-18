import { useState } from "react";
import { PencileSvg } from "../svg-icons/more-icons";

export default function RenameDialog({
  teamIdentifier,
  issueIndex,
  issueTitle,
  setShowRenameBox,
}) {
  const [title, setTitle] = useState("");
  useState(() => {
    setTitle(issueTitle);
  }, []);
  return (
    <div className="new-anything-div">
      <div
        className="absolute w-screen h-screen"
        onClick={() => setShowRenameBox(false)}
      />
      <div className="new-anything w-[640px] bg-[var(--color-bg-senary)] flex flex-col left-1/4 right-1/2 top-1/4">
        <div className="w-max text-[var(--color-text-secondary)] ml-4 mt-4 rounded-md px-2 py-1 font-light bg-[var(--color-button-secondary)]">
          {teamIdentifier + "-" + issueIndex + " - " + issueTitle}
        </div>
        <form className="new-anything-form text-white p-5 border-b border-[var(--color-border-quaternary)]">
          <input
            className="bg-[var(--color-bg-senary)] text-lg font-medium"
            value={title}
            placeholder="Rename..."
            onChange={(event) => setTitle(event.target.value)}
          />
        </form>
        {!!title.length && (
          <div className="flex items-center gap-2 p-2 m-2 bg-[var(--color-button-secondary)] rounded-md max-h-10">
            <PencileSvg />
            <span className="text-white">Rename issue to</span>
            <span className="text-[var(--color-text-quinary)] text-ellipsis overflow-hidden max-w-md">
              "{title}"
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
