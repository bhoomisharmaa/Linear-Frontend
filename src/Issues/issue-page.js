import { useNavigate, Route, Routes, redirect } from "react-router-dom";
import BugSvg from "../svg-icons/bug";
import { TheresMoreSvg } from "../svg-icons/more-icons";
import { useEffect, useState } from "react";
import axios from "axios";

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
  useEffect(() => {
    adjustTextareaHeight();
  }, [description]);

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById("myTextarea");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on content
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    updateIssue();
    navigate(
      `/issue/TIE/${issueIndex}/${title.replace(/\s+/g, "-").toLowerCase()}`
    );
  };

  const handleEnterKeyPress = (event) => {
    // handles form submission when presses key in textarea
    if (event.key === "Enter" && !event.shiftKey) {
      handleFormSubmission(event);
    }
  };
  return (
    <div className="issue-page-div">
      <div className="issue-des-div">
        <Header
          teamName={teamName}
          teamIdentifier={teamIdentifier}
          issueIndex={issueIndex}
        />
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
      </div>
      <div className="properties-sec">
        <span className="text-white">properties</span>
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
