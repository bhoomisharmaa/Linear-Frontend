import { AddLabelSvg, TextIcon } from "../svg-icons/more-icons";
import { HighPrioritySvg } from "../svg-icons/priority";
import { BacklogSvg } from "../svg-icons/status";
import "./filter-box.css";

export default function FilterBox({ mousePosX, mousePosY, setShowFilterBox }) {
  return (
    <div className="absolute top-0 w-screen h-screen">
      <div
        className="absolute top-0 w-screen h-screen"
        onClick={() => setShowFilterBox(false)}
      />
      <div
        className="right-click-div gap-1 text-sm py-2 px-2"
        style={{ left: mousePosX - 20, top: mousePosY + 10 }}
      >
        <button className="buttons flex gap-2 items-center">
          <BacklogSvg /> <span>Status</span>
        </button>
        <button className="buttons flex gap-2 items-center">
          <HighPrioritySvg /> <span>Priority</span>
        </button>
        <button className="buttons flex items-center" style={{ gap: "16px" }}>
          <AddLabelSvg /> <span>Label</span>
        </button>
        <button className="buttons flex gap-2 items-center">
          <TextIcon /> <span>Content</span>
        </button>
      </div>
    </div>
  );
}
