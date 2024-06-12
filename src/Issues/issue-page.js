import { useNavigate, Route, Routes, redirect } from "react-router-dom";
import BugSvg from "../svg-icons/bug";
import {
  CopyIssueID,
  CopyIssueURL,
  TheresMoreSvg,
} from "../svg-icons/more-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { AddStuffButtons } from "../New Issue/new-issue";
import { projectIconMap, statusIconMap } from "../svg-icon-map";
import AdditionBoxes from "../New Issue/small-addition-boxes";

export default function IssuePage({ teamName, teamIndex, teamIdentifier }) {
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
    return <div className="text-white">Loading...</div>; // Show a loading state while fetching data
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
              setIssueHasUpdated={setIssueHasUpdated}
            />
          }
        ></Route>
      ))}
      <Route path="*" element={<p className="text-white">not found</p>} />
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
  setIssueHasUpdated,
}) {
  const [title, setTitle] = useState(issueTitle);
  const [description, setDescription] = useState(issueDescription);
  const navigate = useNavigate();
  const updateIssue = async (event) => {
    try {
      await axios.post(
        `http://localhost:3001/issues/update-issues/${teamIndex}/${issueIndex}`,
        {
          data: {
            name: title,
            description,
          },
        }
      );
      setIssueHasUpdated(true);

      // console.log(updateItem);
      // setIssueArray(true);
    } catch (error) {
      console.error("Error updating issue:", error);
    }
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    updateIssue();
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
          teamIndex={teamIndex}
          setIssueHasUpdated={setIssueHasUpdated}
          status={status}
        />
      </div>
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
      <button className="buttons">
        <TheresMoreSvg />
      </button>
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
  const adjustTextareaHeight = () => {
    const textarea = document.getElementById("myTextarea");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on content
  };
  useEffect(() => {
    adjustTextareaHeight();
  }, [description]);
  return (
    <div className="grow flex flex-col mx-[60px] mt-[60px]">
      <form
        className="flex flex-col gap-2"
        onSubmit={(event) => handleFormSubmission(event)}
      >
        <input
          className="issue-title-input py-1.5"
          value={title}
          placeholder="Issue title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          id="myTextarea"
          className="issue-description-input text-sm"
          value={description}
          placeholder="Issue description"
          onChange={(event) => {
            setDescription(event.target.value);
            adjustTextareaHeight();
          }}
          rows="1"
          onKeyPress={(event) => handleEnterKeyPress(event)}
        />
      </form>
    </div>
  );
}

function PropertyDiv({ issueIndex, teamIndex, setIssueHasUpdated, status }) {
  const [updateKey, setUpdateKey] = useState("");
  const [isSmallBoxClosed, setIsSmallBoxClosed] = useState(true);
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
    <div className="flex flex-col gap-4 text-white px-6">
      <div className="flex justify-between items-center h-10">
        <span className="text-white text-sm">Properties</span>
        <div className="flex items-center gap-[6px]">
          <CopyButton svg={<CopyIssueURL />} copySt={"Copy issue URL"} />
          <CopyButton svg={<CopyIssueID />} copySt={"Copuy issue ID"} />
        </div>
      </div>
      <AdditionBoxes
        iconMap={statusIconMap}
        stuff={status}
        setStuff={updateIssue}
        changingStuff={"Change Status"}
        isSmallBoxClosed={isSmallBoxClosed}
        setIsSmallBoxClosed={setIsSmallBoxClosed}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setShowAdditionBox={setShowAdditionBox}
        isSmallerView={true}
      />
    </div>
  );
}

function CopyButton({ svg, copySt }) {
  return (
    <div className="relative-div">
      <button className="buttons">{svg}</button>
      <div
        className="hover-div text-white text-xs mt-1"
        style={{ right: "10%" }}
      >
        <span className="">{copySt}</span>
      </div>
    </div>
  );
}
