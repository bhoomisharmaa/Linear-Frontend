import { Link, NavLink } from "react-router-dom";
import { PlusSvg, NoAssignee } from "../svg-icons/more-icons";
import { statusIconMap, priorityIconMap } from "../svg-icon-map";

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

export default function IssueBasicSyntax({ issueArray }) {
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
            <Link
              to={`/${issue.name}`}
              key={issue.index}
              className="issueee flex justify-between items-center h-[var(--issue-section-height)] px-6"
            >
              <div className="flex items-center gap-2">
                <button>{priorityIconMap[issue.priority]}</button>
                <span className="text-[var(--color-text-tertiary)] font-small">
                  TIE-{issue.index}
                </span>
                <button className="hover:brightness-200">
                  {statusIconMap[issue.status]}
                </button>
                <span className="font-medium">{issue.name}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-tertiary)] font-small">
                <span>{issue.dateCreated}</span>
                <span>{issue.dateUpdated}</span>
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
