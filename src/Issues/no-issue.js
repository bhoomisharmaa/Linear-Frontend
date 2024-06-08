import {
  InProgressSvg,
  ToDoSvg,
  DoneSvg,
  CanceledOrDuplicateSvg,
  BacklogSvg,
} from "../svg-icons/status";

export function NoActiveIssues({ handleNewIssueVisibility }) {
  return (
    <div className="no-issue-main ">
      <div className="w-[480px] bg-[var(--color-bg-quinary)] h-max flex flex-col gap-8 cursor-default border rounded-lg border-[var(--color-border-quaternary)] p-11 m-12">
        <div className="flex gap-1.5">
          <ToDoSvg size={"32px"} />
          <InProgressSvg size={"32px"} />
          <DoneSvg size={"32px"} />
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="no-des h-max h-2">Active Issues</h2>
          <p className="">
            Active issues represent work that is in progress or should be worked
            on next.
          </p>
          <p>
            Move issues out of the backlog when you think they should be worked
            on, or when they should be picked up in the next cycle.
          </p>
        </div>
        <button
          className="w-max bg-[var(--focus-color)] button-box-shadow border border-[#7a83d4] text-[var(--color-text-primary)] font-smallPlus font-medium rounded-md px-4 py-1.5 hover:brightness-125"
          onClick={() => handleNewIssueVisibility("Todo")}
        >
          Create a new issue
        </button>
      </div>
    </div>
  );
}

export function NoAllIssues({ handleNewIssueVisibility }) {
  return (
    <div className="no-issue-main ">
      <div className="w-[480px] bg-[var(--color-bg-quinary)] h-max flex flex-col gap-8 cursor-default border rounded-lg border-[var(--color-border-quaternary)] p-11 m-12">
        <div className="flex gap-1.5">
          <BacklogSvg size={"32px"} />
          <ToDoSvg size={"32px"} />
          <InProgressSvg size={"32px"} />
          <DoneSvg size={"32px"} />
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="no-des h-max h-2">All Issues</h2>
          <p>
            All Issues is the place where you can see all of your team's work in
            one view.
          </p>
          <p>
            Once you have created some issues for your team, they will show up
            here.
          </p>
        </div>
        <button
          className="w-max bg-[var(--focus-color)] button-box-shadow border border-[#7a83d4] text-[var(--color-text-primary)] font-smallPlus font-medium rounded-md px-4 py-1.5 hover:brightness-125"
          onClick={() => handleNewIssueVisibility("Todo")}
        >
          Create a new issue
        </button>
      </div>
    </div>
  );
}

export function NoBacklogIssues({ handleNewIssueVisibility }) {
  return (
    <div className="no-issue-main ">
      <div className="w-[480px] bg-[var(--color-bg-quinary)] h-max flex flex-col gap-8 cursor-default border rounded-lg border-[var(--color-border-quaternary)] p-11 m-12">
        <div className="flex gap-1.5">
          <BacklogSvg size={"32px"} />
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="no-des h-max h-2">Backlog</h2>
          <p>
            The backlog is a place for new issues and ideas. These are issues
            that have yet to be prioritized and put on your team’s roadmap.
          </p>
          <p>
            Add new issues and requests to the backlog. When your team is ready
            to work on issues in the backlog, prioritize them, move them out of
            the backlog by setting their statuses or adding them to a Cycle.
          </p>
        </div>
        <button
          className="w-max bg-[var(--focus-color)] button-box-shadow border border-[#7a83d4] text-[var(--color-text-primary)] font-smallPlus font-medium rounded-md px-4 py-1.5 hover:brightness-125"
          onClick={() => handleNewIssueVisibility("Backlog")}
        >
          Create a new issue
        </button>
      </div>
    </div>
  );
}
