import { Link } from "react-router-dom";
import { PlusSvg, NoAssignee } from "../svg-icons/more-icons";
import {
  statusIconMap,
  priorityIconMap,
  labelIconMap,
  projectIconMap,
} from "../svg-icon-map";
import AdditionBoxes from "../New Issue/small-addition-boxes";
import { useEffect, useState } from "react";
import axios from "axios";

function IssueHeader({
  issueName,
  IssueSvg,
  issueCount,
  handleNewIssueVisibility,
}) {
  return (
    <div className="issue-header flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        {IssueSvg}
        <span className="font-semibold text-md">{issueName}</span>
        <span className="align-center text-[#949496]">{issueCount}</span>
      </div>
      <button
        className="buttons"
        onClick={() => handleNewIssueVisibility(issueName)}
      >
        <PlusSvg />
      </button>
    </div>
  );
}

export default function IssueBasicSyntax({
  issueArray,
  setIssueArray,
  isSmallBoxClosed,
  setIsSmallBoxClosed,
  handleNewIssueVisibility,
  teamIndex,
  teamIdentifier,
}) {
  const dateFormatter = (dateStr) => {
    const date = new Date(dateStr);
    const options = { month: "long", day: "numeric" };
    const formatedDate = date.toLocaleDateString("en-US", options);
    return formatedDate;
  };
  return (
    <div className="h-max w-full flex flex-col">
      {issueArray.length > 0 ? (
        <div className="h-full w-full flex flex-col ">
          <IssueHeader
            issueName={issueArray[0].status}
            IssueSvg={statusIconMap[issueArray[0].status]}
            issueCount={issueArray.length}
            handleNewIssueVisibility={handleNewIssueVisibility}
          />
          {issueArray.map((issue) => (
            <Link
              key={issue.index}
              to={`/issue/${teamIdentifier}/${issue.index}/${issue.name
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
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
                  issueArray={issueArray}
                  setIssueArray={setIssueArray}
                  teamIndex={teamIndex}
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
                  setIssueArray={setIssueArray}
                  teamIndex={teamIndex}
                />
                <span className="font-medium">{issue.name}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-tertiary)] font-small">
                {issue.label && (
                  <div className="px-2 bg-[var(--background-color)] border-[1px] border-[var(--color-border-tertiary)] rounded-xl">
                    <ButtonDiv
                      isSmallBoxClosed={isSmallBoxClosed}
                      setIsSmallBoxClosed={setIsSmallBoxClosed}
                      issue={issue}
                      iconMap={labelIconMap}
                      iconName={issue.label}
                      issueIndex={issue.index}
                      updateKey={"label"}
                      issueArray={issueArray}
                      setIssueArray={setIssueArray}
                      teamIndex={teamIndex}
                    />
                  </div>
                )}

                <span>{dateFormatter(issue.createdAt)}</span>
                <span>{dateFormatter(issue.updatedAt)}</span>
                <button>{<NoAssignee />}</button>
              </div>
            </Link>
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
  setIssueArray,
  teamIndex,
}) {
  const [showAdditionBox, setShowAdditionBox] = useState(false); //checks if any other box is open
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setIsSmallBoxClosed(!showAdditionBox);
  }, [showAdditionBox]);

  const updateIssue = async (updateItem) => {
    try {
      await axios.post(
        `http://localhost:3001/issues/update-issues/${teamIndex}/${issueIndex}`,
        {
          updateKey,
          updateItem,
        }
      );
      console.log(updateItem);
      setIssueArray(true);
    } catch (error) {
      console.error("Error updating issue:", error);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1.5"
        onClick={() => {
          setShowAdditionBox(isSmallBoxClosed);
        }}
      >
        {iconMap[iconName]}
        {updateKey === "label" && <span>{iconName}</span>}
      </button>

      {showAdditionBox && (
        <AdditionBoxes
          key={iconName}
          iconMap={iconMap}
          stuff={iconName}
          setStuff={updateIssue}
          changingStuff={`Change ${updateKey}`}
          isSmallerView={true}
          setShowAdditionBox={setShowAdditionBox}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      )}
    </div>
  );
}
