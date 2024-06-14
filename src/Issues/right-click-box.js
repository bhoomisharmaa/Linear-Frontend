import axios from "axios";
import { BinSvg, CrossSvg, PencileSvg } from "../svg-icons/more-icons";

export default function RightClickBox({ issueIndex, teamIndex }) {
  console.log(issueIndex);
  const deleteIssue = async () => {
    try {
      await axios.delete(
        `http://localhost:3001/issues/${teamIndex}/deleteIssue/${issueIndex}`
      );
    } catch (error) {
      console.log("Error deleting issue", error);
    }
  };
  return (
    <form className="right-click-box gap-2 p-1 z-50">
      <div className="w-full flex gap-2 pl-2 py-1 rounded-md hover:brightness-110 hover:bg-[#63676d19]">
        <PencileSvg />
        <span>Rename...</span>
      </div>
      <button
        className="w-full flex gap-2 pl-2 py-1 rounded-md hover:brightness-110 hover:bg-[#63676d19]"
        onClick={deleteIssue}
      >
        <BinSvg />
        <span>Delete</span>
      </button>
    </form>
  );
}
