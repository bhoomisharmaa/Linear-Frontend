import { useSearchParams } from "react-router-dom";
import { TickBoxForm } from "../New Issue/small-addition-boxes";
import { statusIconMap } from "../svg-icon-map";
import { AddLabelSvg, TextIcon } from "../svg-icons/more-icons";
import { HighPrioritySvg } from "../svg-icons/priority";
import { BacklogSvg } from "../svg-icons/status";
import "./filter-box.css";
import { useState } from "react";

export default function FilterBox({
  setShowFilterBox,
  statusToFilter,
  labelToFilter,
  priorityToFilter,
  contentToFilter,
  setContentToFilter,
  setStatusToFilter,
}) {
  const [isChecked, setIsChecked] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState();
  const keyArray = Object.keys(statusToFilter);
  return (
    <div className="absolute top-0 w-screen h-screen">
      <div
        className="absolute top-0 w-screen h-screen"
        onClick={() => setShowFilterBox(false)}
      />
      <div
        className="right-click-div gap-1 text-sm py-2 px-2"
        style={{ left: 285, top: 79 }}
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
        {statusToFilter.map((icon) => {
          return (
            <TickBoxForm
              iconMap={statusIconMap}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              stuff={selectedFilter}
              setStuff={setSelectedFilter}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
}
