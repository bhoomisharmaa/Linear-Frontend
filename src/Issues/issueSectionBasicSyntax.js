import { Link, NavLink } from "react-router-dom";
import { PlusSvg, NoAssignee } from "../svg-icons/more-icons";
import { statusIconMap, priorityIconMap } from "../svg-icon-map";
import AdditionBoxes from "../New Issue/small-addition-boxes";
import { useEffect, useState } from "react";
import axios from "axios";

function IssueHeader({ issueName, IssueSvg, issueCount }) {
  return (
    <div className="issue-header flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        {IssueSvg}
        <span className="font-semibold text-md">{issueName}</span>
        <span className="align-center text-[#949496]">{issueCount}</span>
      </div>
      <button className="buttons">
        <PlusSvg />
      </button>
    </div>
  );
}

export default function IssueBasicSyntax({
  issueArray,
  isSmallBoxClosed,
  setIsSmallBoxClosed,
}) {
  return (
    <div className="h-max w-full flex flex-col">
      {issueArray.length > 0 ? (
        <div className="h-full w-full flex flex-col ">
          <IssueHeader
            issueName={issueArray[0].status}
            IssueSvg={statusIconMap[issueArray[0].status]}
            issueCount={issueArray.length}
          />
          {issueArray.map((issue) => (
            <div
              key={issue.index}
              className="issueee flex justify-between items-center h-[var(--issue-section-height)] px-6"
            >
              <div className="flex items-center gap-2">
                <ButtonDiv
                  isSmallBoxClosed={isSmallBoxClosed}
                  setIsSmallBoxClosed={setIsSmallBoxClosed}
                  issue={issue}
                  iconMap={priorityIconMap}
                  iconName={issue.priority}
                  issueIndex={issue.index}
                  updateKey={"priority"}
                />
                <span className="text-[var(--color-text-tertiary)] font-small">
                  TIE-{issue.index}
                </span>
                <ButtonDiv
                  isSmallBoxClosed={isSmallBoxClosed}
                  setIsSmallBoxClosed={setIsSmallBoxClosed}
                  issue={issue}
                  iconMap={statusIconMap}
                  iconName={issue.status}
                  issueIndex={issue.index}
                  updateKey={"status"}
                />
                <span className="font-medium">{issue.name}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-tertiary)] font-small">
                <span>{issue.createdAt}</span>
                <span>{issue.updatedAt}</span>
                <button>{<NoAssignee />}</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function ButtonDiv({
  isSmallBoxClosed,
  setIsSmallBoxClosed,
  iconMap,
  iconName,
  issueIndex,
  updateKey,
}) {
  const [showAdditionBox, setShowAdditionBox] = useState(false); //checks if any other box is open
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setIsSmallBoxClosed(!showAdditionBox);
  }, [showAdditionBox]);

  const updateIssue = async (updateItem) => {
    try {
      console.log(updateKey + " " + updateItem);
      const response = await axios.post(
        `http://localhost:3001/issues/update-issues/${issueIndex}`,
        {
          updateKey,
          updateItem,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error updating issue:", error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setShowAdditionBox(isSmallBoxClosed);
        }}
      >
        {iconMap[iconName]}
      </button>

      {showAdditionBox && (
        <AdditionBoxes
          key={iconName}
          iconMap={iconMap}
          stuff={iconName}
          setStuff={updateIssue}
          changingStuff={"Change Priority"}
          isSmallerView={true}
          setShowAdditionBox={setShowAdditionBox}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      )}
    </div>
  );
}
