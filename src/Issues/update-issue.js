import axios from "axios";

export const updateIssue = async (
  data,
  teamIndex,
  issueIndex,
  setIssueHasUpdated
) => {
  try {
    await axios.patch(
      `http://localhost:3001/issues/update-issues/${teamIndex}/${issueIndex}`,
      data
    );
    setIssueHasUpdated(true);
  } catch (error) {
    console.error("Error updating issue:", error);
  }
};
