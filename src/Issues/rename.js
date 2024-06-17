import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PencileSvg } from "../svg-icons/more-icons";

export default function RenameDialog({
  teamIdentifier,
  issueIndex,
  issueTitle,
}) {
  const [title, setTitle] = useState(issueTitle);
  return (
    <div className="new-anything-div">
      <div className="new-anything w-[640px] bg-[var(--color-bg-senary)] flex flex-col left-2/4 top-2/4">
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
          <div className="flex gap-2 p-2 m-2 bg-[var(--color-button-secondary)] rounded-md">
            <PencileSvg />
            <span className="text-white">Rename issue to</span>
            <span className="text-[var(--color-text-quinary)]">"{title}"</span>
          </div>
        )}
      </div>
    </div>
  );
}
