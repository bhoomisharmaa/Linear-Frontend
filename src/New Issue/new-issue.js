import "./new-issue.css";
import BugSvg from "../svg-icons/bug";
import {
  priorityIconMap,
  statusIconMap,
  assigneeIconMap,
  labelIconMap,
  projectIconMap,
} from "../svg-icon-map";
import {
  AddLabelSvg,
  AttachStuffSvg,
  CrossSvg,
  LargerArrows,
  NoAssignee,
  SmallerArrows,
  TheresMoreSvg,
} from "../svg-icons/more-icons";
import { useEffect, useRef, useState } from "react";
import AdditionBoxes from "./small-addition-boxes";
import axios from "axios";

export default function NewIssue({
  teamCode,
  handleNewIssueVisibility,
  defaultStatus,
  teamIndex,
}) {
  const [isSmallerView, setIsSmallerView] = useState(true);
  const [animationName, setAnimationName] = useState("");
  // Those small buttons at the botton which sets status and priority stuff
  const [issueStatus, setIssueStatus] = useState(
    defaultStatus ? defaultStatus : "Backlog"
  );
  const [issuePriority, setIssuePriority] = useState("No");
  const [issueAssignee, setIssueAssignee] = useState("Assignee");
  const [issueLabel, setIssueLabel] = useState("");
  const [issueProject, setIssueProject] = useState("No Project");
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const handleBoxAnimation = () => {
    if (isSmallerView)
      setAnimationName("window-grow 0.5s ease-in-out forwards");
    else setAnimationName("window-shrink 0.5s ease-in-out forwards");
  };
  const createIssue = async () => {
    try {
      const issue = await axios.post(
        `http://localhost:3001/issues/${teamIndex}/create-issues`,
        {
          name: issueTitle,
          description: issueDescription,
          status: issueStatus,
          createdAt: new Date(),
          priority: issuePriority,
          label: issueLabel,
        }
      );
    } catch (error) {
      console.error("Error creating issue:", error);
    }
  };
  return (
    <div className="new-anything-div z-[100]">
      <dialog
        className={`new-anything bg-[var(--color-bg-secondary)] ${
          isSmallerView ? "smallWindow" : "largeWindow"
        }`}
        style={{ animation: animationName }}
      >
        <form className="new-anything-form" onSubmit={createIssue}>
          <div className="h-full flex flex-col grow">
            <Header
              teamCode={teamCode}
              isSmallerView={isSmallerView}
              setIsSmallerView={setIsSmallerView}
              handleNewIssueVisibility={handleNewIssueVisibility}
              handleBoxAnimation={handleBoxAnimation}
            />
            <InputArea
              issueDescription={issueDescription}
              setIssueDescription={setIssueDescription}
              issueTitle={issueTitle}
              setIssueTitle={setIssueTitle}
            />
            <InfoButtons
              isSmallerView={isSmallerView}
              issueAssignee={issueAssignee}
              setIssueAssignee={setIssueAssignee}
              issueLabel={issueLabel}
              setIssueLabel={setIssueLabel}
              issuePriority={issuePriority}
              setIssuePriority={setIssuePriority}
              issueStatus={issueStatus}
              setIssueStatus={setIssueStatus}
              issueProject={issueProject}
              setIssueProject={setIssueProject}
            />
            <Footer />
          </div>
        </form>
      </dialog>
    </div>
  );
}

function Header({
  teamCode,
  isSmallerView,
  setIsSmallerView,
  handleNewIssueVisibility,
  handleBoxAnimation,
}) {
  return (
    <div className={`flex justify-between items-center px-3 pt-3 pb-1.5 `}>
      <div className="flex items-center gap-2 cursor-default">
        <div className="button-box-shadow flex items-center text-xs px-1 py-0.5 bg-[var(--color-button-secondary)] border rounded border-[var(--color-border-quaternary)] opacity-60">
          <BugSvg fillColor={"var(--color-decoration-1)"} height={"16"} />
          <span className="pr-1 ">{teamCode}</span>
        </div>
        <span className="text-[var(--color-text-primary)] text-sm">
          New issue
        </span>
      </div>
      <div className="flex align-center gap-1">
        <button
          className="buttons"
          type="button"
          onClick={() => {
            setIsSmallerView(!isSmallerView);
            handleBoxAnimation();
          }}
        >
          {isSmallerView ? <LargerArrows /> : <SmallerArrows />}
        </button>
        <button
          className="buttons"
          type="button"
          onClick={handleNewIssueVisibility}
        >
          <CrossSvg />
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer flex justify-between p-3">
      <button type="button" className="buttons">
        <AttachStuffSvg />
      </button>
      <div className="flex gap-1.5 items-center">
        <SlidingButton />
        <span className="text-xs text-[var(--color-text-tertiary)]">
          Create more
        </span>
        <button
          className="bg-[var(--focus-color)] button-box-shadow border border-[#7a83d4] text-[var(--color-text-primary)] font-smallPlus font-medium rounded-md px-4 py-1.5 ml-2 hover:brightness-125"
          type="submit"
        >
          Create issue
        </button>
      </div>
    </div>
  );
}

export function InfoButtons({
  isSmallerView,
  issueAssignee,
  setIssueAssignee,
  issueStatus,
  setIssueStatus,
  issueLabel,
  setIssueLabel,
  issueProject,
  setIssueProject,
  issuePriority,
  setIssuePriority,
}) {
  const [isSmallBoxClosed, setIsSmallBoxClosed] = useState(true); //checks if any other box is open

  return (
    <div className="flex gap-2 text-[var(--color-text-secondary)] px-3 pt-1.5 pb-3 border-b border-[var(--color-border-quaternary)]">
      <AddStuffButtons
        iconMap={statusIconMap}
        stuff={issueStatus}
        setStuff={setIssueStatus}
        changingStuff={"Change Status"}
        isSmallBoxClosed={isSmallBoxClosed}
        setIsSmallBoxClosed={setIsSmallBoxClosed}
        isSmallerView={isSmallerView}
      />
      <AddStuffButtons
        iconMap={priorityIconMap}
        stuff={issuePriority}
        setStuff={setIssuePriority}
        changingStuff={"Change Priority"}
        isSmallBoxClosed={isSmallBoxClosed}
        setIsSmallBoxClosed={setIsSmallBoxClosed}
        isSmallerView={isSmallerView}
      />
      <AddStuffButtons
        iconMap={assigneeIconMap}
        stuff={issueAssignee}
        setStuff={setIssueAssignee}
        changingStuff={"Assignee to"}
        isSmallBoxClosed={isSmallBoxClosed}
        setIsSmallBoxClosed={setIsSmallBoxClosed}
        isSmallerView={isSmallerView}
      />
      <AddStuffButtons
        iconMap={labelIconMap}
        stuff={issueLabel}
        setStuff={setIssueLabel}
        changingStuff={"Add label"}
        isSmallBoxClosed={isSmallBoxClosed}
        setIsSmallBoxClosed={setIsSmallBoxClosed}
        isSmallerView={isSmallerView}
      />
      <AddStuffButtons
        iconMap={projectIconMap}
        stuff={issueProject}
        setStuff={setIssueProject}
        changingStuff={"Add to project"}
        isSmallBoxClosed={isSmallBoxClosed}
        setIsSmallBoxClosed={setIsSmallBoxClosed}
        isSmallerView={isSmallerView}
      />
      <button
        type="button"
        className="relative relative-div button-box-shadow flex items-center px-3 py-0.5 bg-[var(--color-button-secondary)] border rounded border-[var(--color-border-quaternary)] gap-2 hover:brightness-110"
      >
        <TheresMoreSvg />
        <div className="hover-div">
          <span className="">More actions</span>
        </div>
      </button>
    </div>
  );
}

export function AddStuffButtons({
  iconMap,
  stuff,
  setStuff,
  changingStuff,
  isSmallBoxClosed,
  setIsSmallBoxClosed,
  isSmallerView,
}) {
  const [showAdditionBox, setShowAdditionBox] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setIsSmallBoxClosed(!showAdditionBox);
  }, [showAdditionBox]);

  return (
    <div className="relative h-max w-max z-50">
      <button
        type="button"
        onClick={() => {
          setShowAdditionBox(isSmallBoxClosed);
        }}
        className=" relative-div button-box-shadow flex items-center z-0 px-3 py-0.5 bg-[var(--color-button-secondary)] border rounded border-[var(--color-border-quaternary)] gap-2 hover:brightness-110"
      >
        {stuff ? iconMap[stuff] : <AddLabelSvg />}
        <span className="text-xs">{stuff}</span>
        {!showAdditionBox && (
          <div
            className="hover-div"
            style={{ fontSize: "var(--font-size-small)", left: "-10%" }}
          >
            <span className="">{changingStuff}</span>
          </div>
        )}
      </button>

      {showAdditionBox && (
        <AdditionBoxes
          key={stuff}
          iconMap={iconMap}
          setStuff={setStuff}
          changingStuff={changingStuff}
          stuff={stuff}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isSmallerView={isSmallerView}
          setShowAdditionBox={setShowAdditionBox}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
        />
      )}
    </div>
  );
}

function InputArea({
  issueTitle,
  setIssueTitle,
  issueDescription,
  setIssueDescription,
}) {
  return (
    <div className="flex flex-col gap-1.5 grow text-[var(--color-text-primary)]">
      <input
        aria-label="issue-title"
        className="bg-[var(--color-bg-secondary)] px-3.5 text-lg font-medium"
        value={issueTitle}
        placeholder="Issue Title"
        onChange={(event) => setIssueTitle(event.target.value)}
      />
      <textarea
        aria-label="issue-description"
        className="issue-description px-3.5 bg-[var(--color-bg-secondary)] text-sm text-wrap grow"
        value={issueDescription}
        placeholder="Add description..."
        onChange={(event) => setIssueDescription(event.target.value)}
      />
    </div>
  );
}

function SlidingButton() {
  const [isSlideOpen, setIsSlideOpen] = useState(true);

  return (
    <div
      className={`h-3.5 w-6 rounded-lg relative z-0 ${
        isSlideOpen ? "bg-[var(--focus-color)]" : "bg-[var(--light-color)]"
      }`}
      onClick={() => {
        setIsSlideOpen(!isSlideOpen);
      }}
    >
      <button
        type="button"
        onClick={() => {
          setIsSlideOpen(!isSlideOpen);
        }}
        className={`absolute cursor-default h-3 w-3 bg-gray-50 rounded-full my-[1px] ${
          isSlideOpen ? "openSlide" : "closeSlide"
        }`}
      ></button>
    </div>
  );
}
