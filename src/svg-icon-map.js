import {
  BacklogSvg,
  CanceledOrDuplicateSvg,
  DoneSvg,
  InProgressSvg,
  ToDoSvg,
} from "./svg-icons/status";
import {
  HighPrioritySvg,
  LowPrioritySvg,
  MediumPrioritySvg,
  NoPrioritySvg,
  UrgentPriority,
} from "./svg-icons/priority";
import { AddLabelSvg, NoAssignee } from "./svg-icons/more-icons";
import ProjectSvg from "./svg-icons/projects";

export const statusIconMap = {
  Todo: <ToDoSvg />,
  Done: <DoneSvg />,
  Canceled: <CanceledOrDuplicateSvg />,
  InProgress: <InProgressSvg />,
  Backlog: <BacklogSvg />,
  Duplicate: <CanceledOrDuplicateSvg />,
};

export const priorityIconMap = {
  No: <NoPrioritySvg />,
  Low: <LowPrioritySvg />,
  Medium: <MediumPrioritySvg />,
  High: <HighPrioritySvg />,
  Urgent: <UrgentPriority />,
};

export const assigneeIconMap = {
  Assignee: <NoAssignee />,
};

export const labelIconMap = {
  Bug: (
    <div className="h-2 w-2 rounded-full bg-[var(--color-decoration-red)]" />
  ),
  Feature: (
    <div className="h-2 w-2 rounded-full bg-[var(--color-decoration-purple)]" />
  ),
  Imporovement: (
    <div className="h-2 w-2 rounded-full bg-[var(--color-decoration-blue)]" />
  ),
};

export const projectIconMap = {
  "No Project": <ProjectSvg />,
};
