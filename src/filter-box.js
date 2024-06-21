import { AddLabelSvg, TextIcon } from "./svg-icons/more-icons";
import { HighPrioritySvg, MediumPrioritySvg } from "./svg-icons/priority";
import { BacklogSvg } from "./svg-icons/status";

export default function FilterBox({ mousePosX, mousePosY, setShowFilterBox }) {
  return (
    <div
      className="absolute top-0 w-screen h-screen"
      onClick={() => setShowFilterBox(false)}
    >
      <div
        className="right-click-div gap-3 text-sm py-2 px-2.5"
        style={{ left: mousePosX - 20, top: mousePosY + 10 }}
      >
        <button className="flex gap-2 items-center">
          <BacklogSvg /> <span>Status</span>
        </button>
        <button className="flex gap-2 items-center">
          <HighPrioritySvg /> <span>Priority</span>
        </button>
        <button className="flex gap-4 items-center">
          <AddLabelSvg /> <span>Label</span>
        </button>
        <button className="flex gap-2 items-center">
          <TextIcon /> <span>Content</span>
        </button>
      </div>
    </div>
  );
}
