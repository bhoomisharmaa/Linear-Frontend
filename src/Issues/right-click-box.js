import axios from "axios";
import { BinSvg, CrossSvg, PencileSvg } from "../svg-icons/more-icons";
import RenameDialog from "./rename";

export default function RightClickBox({
  issueIndex,
  teamIndex,
  issueTitle,
  handleRenameBtnClick,
  setShowSmallBox,
}) {
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
    <div className="right-click-box gap-2 p-1 z-50">
      <button
        className="w-full flex gap-2 pl-2 py-1 rounded-md hover:brightness-110 hover:bg-[#63676d19]"
        onClick={() => {
          handleRenameBtnClick(issueIndex, issueTitle);
          setShowSmallBox(false);
        }}
      >
        <PencileSvg />
        <span>Rename...</span>
      </button>
      <button
        className="w-full flex gap-2 pl-2 py-1 rounded-md hover:brightness-110 hover:bg-[#63676d19]"
        onClick={deleteIssue}
      >
        <BinSvg />
        <span>Delete</span>
      </button>
    </div>
  );
}
