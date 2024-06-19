import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import BugSvg from "../svg-icons/bug";
import {
  AddLabelSvg,
  CopyIssueID,
  CopyIssueURL,
  CrossSvg,
  InfoIcon,
} from "../svg-icons/more-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  assigneeIconMap,
  labelIconMap,
  priorityIconMap,
  projectIconMap,
  statusIconMap,
} from "../svg-icon-map";
import AdditionBoxes from "../New Issue/small-addition-boxes";
import NotFoundPage from "../404page/not-found";
import LoadingPage from "../LoadingPage/loading-page";
import { updateIssue } from "./update-issue";

// Page that apppears after you click on an issue
export default function IssuePage({
  teamName,
  teamIndex,
  teamIdentifier,
  handleRenameBtnClick,
}) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [issueHasUpdated, setIssueHasUpdated] = useState(true);
  const getIssues = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/issues/${teamIndex}/get-issues`
      );
      setIssues(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching issues:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getIssues();
    setIssueHasUpdated(false);
  }, [issueHasUpdated]);
  if (loading) {
    return <LoadingPage />; // Show a loading state while fetching data
  }
  return (
    <Routes>
      {issues.map((issue) => (
        <Route
          key={issue.index}
          path={`/${issue.index}/${issue.name
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          element={
            <MainTeamPage
              teamName={teamName}
              teamIndex={teamIndex}
              teamIdentifier={teamIdentifier}
              issueIndex={issue.index}
              issueTitle={issue.name}
              issueDescription={issue.description}
              label={issue.label}
              priority={issue.priority}
              status={issue.status}
              issueHasUpdated={issueHasUpdated}
              setIssueHasUpdated={setIssueHasUpdated}
              handleRenameBtnClick={handleRenameBtnClick}
            />
          }
        ></Route>
      ))}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

function MainTeamPage({
  teamName,
  teamIndex,
  issueIndex,
  teamIdentifier,
  issueTitle,
  issueDescription,
  status,
  priority,
  label,
  issueHasUpdated,
  setIssueHasUpdated,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTitle(issueTitle);
    setDescription(issueDescription);
  }, [issueHasUpdated]);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    updateIssue(
      {
        name: title,
        description,
      },
      teamIndex,
      issueIndex,
      setIssueHasUpdated
    );
    navigate(
      `/issue/TIE/${issueIndex}/${title.replace(/\s+/g, "-").toLowerCase()}`
    );
  };

  return (
    <div className="issue-page-div">
      <div className="issue-des-div">
        <Header
          teamName={teamName}
          teamIdentifier={teamIdentifier}
          issueIndex={issueIndex}
        />
        <MainContentDiv
          description={description}
          handleFormSubmission={handleFormSubmission}
          setDescription={setDescription}
          title={title}
          setTitle={setTitle}
        />
      </div>

      <div className="properties-sec">
        <PropertyDiv
          issueIndex={issueIndex}
          teamIdentifier={teamIdentifier}
          teamIndex={teamIndex}
          setIssueHasUpdated={setIssueHasUpdated}
          status={status}
          priority={priority}
          label={label}
        />
      </div>
    </div>
  );
}

function MsgBox({ msgText, msgAnimation, setMsgAnimation, setShowMsgBox }) {
  return (
    <div
      className="absolute w-max bottom-0 right-0 m-2 bg-[var(--color-button-tertiary)] text-white font-semibold px-3 py-2 flex gap-10 text-[13px] border-[1px] border-[var(--color-button-border)] rounded-md"
      style={{ animation: msgAnimation }}
      onAnimationEnd={() => {
        if (msgAnimation.includes("down")) setShowMsgBox(false);
        setMsgAnimation("");
      }}
    >
      <div className="flex gap-2 items-center">
        <InfoIcon />
        <span>{msgText}</span>
      </div>
      <button
        className="buttons"
        onClick={() => setMsgAnimation("button-down 0.5s forwards ease-in-out")}
      >
        <CrossSvg />
      </button>
    </div>
  );
}

function Header({ teamName, issueIndex, teamIdentifier }) {
  return (
    <div className="header flex items-center gap-2 text-[var(--color-text-primary)] cursor-default">
      <span>Teams</span>
      <span>›</span>
      <BugSvg
        fillColor={"var(--color-decoration-1)"}
        bgColor={"var(--color-decoration-bg-1)"}
      />
      <span>{teamName}</span>
      <span>›</span>
      <span>{teamIdentifier + "-" + issueIndex}</span>
    </div>
  );
}

function MainContentDiv({
  handleFormSubmission,
  title,
  setTitle,
  description,
  setDescription,
}) {
  const handleEnterKeyPress = (event) => {
    // handles form submission when presses key in textarea
    if (event.key === "Enter" && !event.shiftKey) {
      handleFormSubmission(event);
    }
  };
  const adjustTextareaHeight = (id) => {
    const textarea = document.getElementById(id);
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on content
    }
  };
  useEffect(() => {
    adjustTextareaHeight("titleTextarea");
    adjustTextareaHeight("descriptionTextarea");
  }, [title, description]);
  return (
    <div className="grow flex flex-col mx-[60px] mt-[60px]">
      <form
        className="flex flex-col gap-2"
        onSubmit={(event) => handleFormSubmission(event)}
      >
        <textarea
          id="titleTextarea"
          className="issue-title-input py-1.5"
          value={title}
          placeholder="Issue title"
          onChange={(event) => {
            setTitle(event.target.value);
            adjustTextareaHeight("titleTextarea");
          }}
          rows="1"
          onKeyPress={(event) => handleEnterKeyPress(event)}
        />
        <textarea
          id="descriptionTextarea"
          className="issue-description-input text-sm"
          value={description}
          placeholder="Issue description"
          onChange={(event) => {
            setDescription(event.target.value);
            adjustTextareaHeight("descriptionTextarea");
          }}
          rows="1"
          onKeyPress={(event) => handleEnterKeyPress(event)}
        />
      </form>
    </div>
  );
}

function PropertyDiv({
  issueIndex,
  teamIndex,
  teamIdentifier,
  setIssueHasUpdated,
  status,
  priority,
  label,
  assignee,
}) {
  const [isSmallBoxClosed, setIsSmallBoxClosed] = useState(true);
  const location = useLocation();

  return (
    <div className="relative w-full h-full flex flex-col gap-6 px-6 text-[var(--color-text-tertiary)]">
      <div className="w-full h-max flex flex-col gap-2">
        <div className="flex justify-between items-center h-10">
          <h3>Properties</h3>
          <div className="flex items-center gap-[6px]">
            <CopyButton
              svg={<CopyIssueURL />}
              copySt={"Copy issue URL"}
              copyStuff={"http://localhost:3000" + location.pathname}
              msgText={`Issue "${
                teamIdentifier + "-" + issueIndex
              }" URL copied to clipboard`}
            />
            <CopyButton
              svg={<CopyIssueID />}
              copySt={"Copuy issue ID"}
              copyStuff={teamIdentifier + "-" + issueIndex}
              msgText={`"${
                teamIdentifier + "-" + issueIndex
              }" copied to clipboard `}
            />
          </div>
        </div>
        <div className="w-10/12 py-1 px-1 rounded-md hover:brightness-110 hover:bg-[#63676d19]">
          <InfoButtons
            iconMap={statusIconMap}
            stuff={status}
            changingStuff={"Change status"}
            isSmallBoxClosed={isSmallBoxClosed}
            setIsSmallBoxClosed={setIsSmallBoxClosed}
            teamIndex={teamIndex}
            issueIndex={issueIndex}
            setIssueHasUpdated={setIssueHasUpdated}
            updateKey={"status"}
          />
        </div>
        <div className="w-10/12 py-1 px-1 rounded-md hover:brightness-110 hover:bg-[#63676d19]">
          <InfoButtons
            iconMap={priorityIconMap}
            stuff={priority}
            changingStuff={"Change priority"}
            isSmallBoxClosed={isSmallBoxClosed}
            setIsSmallBoxClosed={setIsSmallBoxClosed}
            teamIndex={teamIndex}
            issueIndex={issueIndex}
            setIssueHasUpdated={setIssueHasUpdated}
            updateKey={"priority"}
          />
        </div>
        <div className="w-10/12 py-1 px-1 rounded-md hover:brightness-110 hover:bg-[#63676d19]">
          <InfoButtons
            iconMap={assigneeIconMap}
            stuff={"Assignee"}
            changingStuff={"Assignee to"}
            isSmallBoxClosed={isSmallBoxClosed}
            setIsSmallBoxClosed={setIsSmallBoxClosed}
            teamIndex={teamIndex}
            issueIndex={issueIndex}
            setIssueHasUpdated={setIssueHasUpdated}
            updateKey={"assignee"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Labels</h3>
        <div className="w-max border-[1px] border-[var(--color-button-border)] px-2 py-0.5 rounded-2xl hover:brightness-110 hover:bg-[#63676d19]">
          <InfoButtons
            iconMap={labelIconMap}
            stuff={label}
            changingStuff={"Change label"}
            isSmallBoxClosed={isSmallBoxClosed}
            setIsSmallBoxClosed={setIsSmallBoxClosed}
            teamIndex={teamIndex}
            issueIndex={issueIndex}
            setIssueHasUpdated={setIssueHasUpdated}
            updateKey={"label"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Project</h3>
        <InfoButtons
          iconMap={projectIconMap}
          stuff={"No Project"}
          changingStuff={"Add to project"}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          isSmallerView={true}
          teamIndex={teamIndex}
          issueIndex={issueIndex}
          setIssueHasUpdated={setIssueHasUpdated}
          updateKey={"project"}
        />
      </div>
    </div>
  );
}

function InfoButtons({
  isSmallBoxClosed,
  setIsSmallBoxClosed,
  iconMap,
  stuff,
  changingStuff,
  updateKey,
  teamIndex,
  issueIndex,
  setIssueHasUpdated,
}) {
  const [showAdditionBox, setShowAdditionBox] = useState(false); //checks if any other box is open
  const [isChecked, setIsChecked] = useState(true);
  const updateIssue = async (updateItem) => {
    try {
      await axios.post(
        `http://localhost:3001/issues/update-issues/${teamIndex}/${issueIndex}`,
        {
          data: {
            [updateKey]: updateItem,
          },
        }
      );
      setIssueHasUpdated(true);
    } catch (error) {
      console.error("Error updating issue:", error);
    }
  };
  return (
    <div className="w-full">
      <button
        type="button "
        onClick={() => {
          setShowAdditionBox(isSmallBoxClosed);
        }}
        className="relative-div w-full flex items-center justify-start gap-2"
      >
        {stuff ? (
          iconMap[stuff]
        ) : (
          <div className="flex gap-3 items-center">
            <AddLabelSvg />
            <span className="text-sm">Add label</span>
          </div>
        )}
        <span className="text-sm font-medium">{stuff}</span>
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
          iconMap={iconMap}
          stuff={stuff}
          setStuff={updateIssue}
          changingStuff={changingStuff}
          isSmallBoxClosed={isSmallBoxClosed}
          setIsSmallBoxClosed={setIsSmallBoxClosed}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setShowAdditionBox={setShowAdditionBox}
          isSmallerView={true}
        />
      )}
    </div>
  );
}

function CopyButton({ svg, copySt, copyStuff, msgText }) {
  const [showMsgBox, setShowMsgBox] = useState(false);
  const [msgAnimation, setMsgAnimation] = useState("");

  const handleCopyButtonClick = () => {
    setMsgAnimation(
      showMsgBox
        ? "button-pop 0.5s forwards ease-in-out"
        : "button-up 0.5s forwards ease-in-out"
    );
    setShowMsgBox(true);
  };
  return (
    <div className="relative-div">
      <button
        className="buttons"
        onClick={() => {
          handleCopyButtonClick();
          navigator.clipboard.writeText(copyStuff);
        }}
      >
        {svg}
      </button>
      <div
        className="hover-div text-white text-xs mt-1"
        style={{ right: "10%" }}
      >
        <span className="">{copySt}</span>
      </div>
      {showMsgBox && (
        <MsgBox
          msgAnimation={msgAnimation}
          msgText={msgText}
          setMsgAnimation={setMsgAnimation}
          setShowMsgBox={setShowMsgBox}
        />
      )}
    </div>
  );
}
