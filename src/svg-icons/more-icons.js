export function FilterSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#969799"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.25 3a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8Zm2.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
      ></path>
    </svg>
  );
}

export function DisplaySvg() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#969799"
      role="img"
      focusable="false"
      style={{ "--icon-color": "#949496" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 10.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 14v-3a.5.5 0 0 1 .5-.5h1Zm-2.5 1V13H1.75a.75.75 0 0 1 0-1.5H7Zm7.25 0a.75.75 0 0 1 0 1.5H11v-1.5h3.25ZM5.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1ZM3 7.25v1.5H1.75a.75.75 0 0 1 0-1.5H3Zm11.25 0a.75.75 0 0 1 0 1.5H7v-1.5h7.25Zm-2.75-5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1ZM9 3v1.5H1.75a.75.75 0 0 1 0-1.5H9Zm5.25 0a.75.75 0 0 1 0 1.5H13V3h1.25Z"
      ></path>
    </svg>
  );
}

export function BellSvg() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#969799"
      role="img"
      focusable="false"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M6 13h4a2 2 0 0 1-3.995.15L6 13h4-4ZM8 1a4 4 0 0 1 4 4v3.03l1.684 1.578a1 1 0 0 1 .316.73V11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-.662a1 1 0 0 1 .316-.73L4 8.03V5a4 4 0 0 1 4-4Z"></path>
    </svg>
  );
}

export function OpenDetailsSvg({ isOpen }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#969799">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 2C2.45508 2 1 3.45508 1 5.25V10.7499C1 12.5449 2.45508 13.9999 4.25 13.9999H11.75C13.5449 13.9999 15 12.5449 15 10.7499V5.25C15 3.45508 13.5449 2 11.75 2H4.25ZM2.5 10.4999C2.5 11.6045 3.39543 12.4999 4.5 12.4999H11.75C12.7165 12.4999 13.5 11.7164 13.5 10.7499V5.25C13.5 4.28351 12.7165 3.5 11.75 3.5H4.5C3.39543 3.5 2.5 4.39543 2.5 5.5V10.4999Z"
      ></path>
      <rect x="9" y="3" width="1.5" height="10"></rect>
      <rect
        x="10"
        y="3"
        width={isOpen ? "4" : "0"}
        height="10"
        fill="#969799"
      ></rect>
    </svg>
  );
}

export function StarSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#969799"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M10.5193 4.98997L9.46118 2.01693C9.34483 1.70806 9.1452 1.45362 8.88451 1.27433C8.62466 1.09562 8.31641 1 8.00081 1C7.68521 1 7.37696 1.09562 7.11712 1.27433C6.85642 1.45362 6.65679 1.70806 6.54528 2.00374L5.48248 4.98997L2.55536 4.98997C2.23765 4.98973 1.92683 5.08675 1.66556 5.26809C1.40342 5.45004 1.20379 5.70812 1.09414 6.00737C0.984248 6.30728 0.970192 6.63372 1.05394 6.94194C1.13753 7.2496 1.31442 7.52386 1.56019 7.7275L4.08545 9.80411L3.02371 12.9604C2.91854 13.2733 2.91647 13.6112 3.01776 13.9252C3.11884 14.2385 3.3175 14.5113 3.58464 14.7044C3.85102 14.8969 4.17178 15.0003 4.50071 14.9996C4.82872 14.9993 5.14907 14.8951 5.41483 14.702L8.00053 12.8223L10.5851 14.7014C10.8496 14.8944 11.17 14.9991 11.4991 15C11.8281 15.0009 12.1491 14.8978 12.4157 14.7054C12.6831 14.5124 12.882 14.2394 12.9833 13.926C13.0848 13.6113 13.0827 13.2731 12.9773 12.9602L11.9156 9.80207L14.444 7.72408C14.695 7.51166 14.8686 7.23684 14.9493 6.92968C15.0168 6.67352 15.0167 6.40505 14.9504 6.15011L14.9022 5.99753C14.791 5.70157 14.5918 5.44667 14.3314 5.26673C14.0718 5.08736 13.7637 4.9909 13.4479 4.98998L10.5193 4.98997ZM13.4986 6.54821C13.4962 6.55733 13.491 6.56562 13.4832 6.57224L10.7049 8.85551C10.546 8.98629 10.4307 9.16168 10.3739 9.35896C10.3168 9.55714 10.3214 9.76807 10.3875 9.96371L11.5556 13.4385C11.5586 13.4474 11.5587 13.4565 11.5559 13.4652C11.553 13.4741 11.5467 13.4827 11.5378 13.4891C11.5281 13.4961 11.5159 13.5 11.503 13.5C11.4902 13.5 11.4779 13.496 11.4683 13.4889L8.60012 11.4036C8.42554 11.2769 8.21577 11.2088 8.00055 11.2088C7.78531 11.2088 7.5755 11.2769 7.40134 11.4034L4.53289 13.4886C4.52321 13.4957 4.511 13.4996 4.49835 13.4996C4.48523 13.4997 4.47312 13.4958 4.46329 13.4887C4.45442 13.4822 4.44826 13.4738 4.4453 13.4646C4.44255 13.4561 4.4426 13.4471 4.44547 13.4386L5.61393 9.96499C5.67961 9.76981 5.68428 9.5592 5.62728 9.3612C5.57043 9.16375 5.45499 8.98835 5.29643 8.85789L2.51507 6.57069C2.50925 6.56586 2.50387 6.55753 2.50146 6.54865C2.49919 6.54032 2.49957 6.53163 2.50257 6.52343C2.50583 6.51453 2.5121 6.50643 2.52085 6.50035C2.53046 6.49368 2.54238 6.48996 2.55479 6.48997H5.8221C6.03248 6.4897 6.23685 6.42501 6.40824 6.30453C6.58053 6.18341 6.71109 6.01179 6.78158 5.81318L7.9609 2.49821C7.95727 2.50944 7.95646 2.51419 7.9574 2.5155C7.97668 2.50367 7.98851 2.5 8.00081 2.5C8.01311 2.5 8.02494 2.50367 8.03451 2.51025C8.04324 2.51625 8.04952 2.52427 8.05284 2.53307L9.22029 5.81379C9.29053 6.01192 9.42137 6.18383 9.59407 6.30503C9.76589 6.4256 9.97082 6.49011 10.1806 6.48997H13.4457C13.4563 6.49001 13.4686 6.49385 13.4786 6.50077L13.4902 6.5114L13.4977 6.52418C13.5004 6.53198 13.5007 6.54022 13.4986 6.54821Z"></path>
    </svg>
  );
}

export function NoAssignee() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#969799"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M8 4C6.89545 4 6 4.89545 6 6V6.5C6 7.60455 6.89545 8.5 8 8.5C9.10455 8.5 10 7.60455 10 6.5V6C10 4.89545 9.10455 4 8 4Z"></path>
      <path d="M5.15493 12.8571C4.48326 12.3982 4.54607 11.4539 5.12128 10.8787V10.8787C5.6839 10.316 6.44696 10 7.24255 10H8.75732C9.55292 10 10.316 10.3161 10.8786 10.8787V10.8787C11.4538 11.4539 11.5167 12.3982 10.845 12.8571C10.478 13.1079 10.0762 13.3079 9.65017 13.4499L9.59096 13.4697C8.55825 13.8139 7.44175 13.8139 6.40904 13.4697L6.3499 13.45C5.92382 13.3079 5.52198 13.1079 5.15493 12.8571Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9878 8.41658C14.9716 8.69225 14.7189 8.88531 14.445 8.84959L13.9492 8.78492C13.6754 8.7492 13.4847 8.49813 13.4956 8.2222C13.4985 8.14856 13.5 8.07449 13.5 8C13.5 7.92551 13.4985 7.85144 13.4956 7.7778C13.4847 7.50187 13.6754 7.2508 13.9492 7.21508L14.445 7.15041C14.7189 7.11469 14.9716 7.30775 14.9878 7.58342C14.9959 7.72124 15 7.86014 15 8C15 8.13986 14.9959 8.27876 14.9878 8.41658ZM14.2609 4.86589C14.3847 5.11273 14.2621 5.40623 14.007 5.51201L13.5451 5.70354C13.29 5.80932 12.9995 5.68696 12.8709 5.4426C12.8025 5.3127 12.729 5.18581 12.6507 5.0622C12.503 4.82892 12.5419 4.5161 12.7609 4.34784L13.1573 4.04317C13.3763 3.87491 13.6918 3.9151 13.8441 4.14548C13.9967 4.3764 14.136 4.61691 14.2609 4.86589ZM11.8545 2.1559C12.0849 2.30816 12.1251 2.62371 11.9568 2.84266L11.6522 3.23912C11.4839 3.45808 11.1711 3.49703 10.9378 3.34927C10.8142 3.27098 10.6873 3.19752 10.5574 3.12914C10.313 3.0005 10.1907 2.70997 10.2965 2.45489L10.488 1.99303C10.5938 1.73795 10.8873 1.61531 11.1341 1.73911C11.3831 1.86399 11.6236 2.00329 11.8545 2.1559ZM8.41658 1.01219C8.69225 1.02837 8.88531 1.28114 8.84959 1.55497L8.78492 2.05077C8.7492 2.32459 8.49813 2.5153 8.2222 2.50438C8.14856 2.50147 8.07449 2.5 8 2.5C7.92551 2.5 7.85144 2.50147 7.7778 2.50438C7.50187 2.5153 7.2508 2.32459 7.21508 2.05077L7.15041 1.55497C7.11469 1.28114 7.30775 1.02837 7.58342 1.01219C7.72124 1.0041 7.86014 1 8 1C8.13986 1 8.27876 1.0041 8.41658 1.01219ZM4.86589 1.73911C5.11273 1.61531 5.40623 1.73795 5.51201 1.99303L5.70354 2.45489C5.80932 2.70997 5.68696 3.0005 5.4426 3.12914C5.3127 3.19752 5.18581 3.27098 5.0622 3.34927C4.82892 3.49703 4.5161 3.45808 4.34784 3.23912L4.04317 2.84266C3.87491 2.62371 3.9151 2.30816 4.14548 2.1559C4.3764 2.00329 4.61691 1.86399 4.86589 1.73911ZM2.1559 4.14548C2.30816 3.9151 2.62371 3.87491 2.84266 4.04317L3.23912 4.34784C3.45808 4.5161 3.49703 4.82892 3.34927 5.0622C3.27098 5.18581 3.19752 5.3127 3.12914 5.44261C3.0005 5.68696 2.70997 5.80932 2.45489 5.70354L1.99303 5.51201C1.73795 5.40624 1.61531 5.11273 1.73911 4.86589C1.86399 4.61691 2.00329 4.3764 2.1559 4.14548ZM1.55497 7.15041C1.28114 7.11469 1.02837 7.30775 1.01219 7.58342C1.0041 7.72124 1 7.86014 1 8C1 8.13986 1.0041 8.27876 1.01219 8.41658C1.02837 8.69225 1.28114 8.88531 1.55497 8.84959L2.05077 8.78492C2.32459 8.7492 2.5153 8.49813 2.50438 8.2222C2.50147 8.14856 2.5 8.07449 2.5 8C2.5 7.92551 2.50147 7.85144 2.50438 7.7778C2.5153 7.50187 2.32459 7.2508 2.05077 7.21508L1.55497 7.15041ZM1.73911 11.1341C1.61531 10.8873 1.73795 10.5938 1.99303 10.488L2.45489 10.2965C2.70997 10.1907 3.0005 10.313 3.12914 10.5574C3.19752 10.6873 3.27098 10.8142 3.34927 10.9378C3.49703 11.1711 3.45808 11.4839 3.23912 11.6522L2.84266 11.9568C2.62371 12.1251 2.30816 12.0849 2.1559 11.8545C2.00329 11.6236 1.86399 11.3831 1.73911 11.1341ZM4.14548 13.8441C3.9151 13.6918 3.87491 13.3763 4.04317 13.1573L4.34784 12.7609C4.5161 12.5419 4.82892 12.503 5.0622 12.6507C5.18582 12.729 5.3127 12.8025 5.4426 12.8709C5.68696 12.9995 5.80932 13.29 5.70354 13.5451L5.51201 14.007C5.40624 14.2621 5.11273 14.3847 4.86589 14.2609C4.61691 14.136 4.3764 13.9967 4.14548 13.8441ZM7.58342 14.9878C7.30775 14.9716 7.11469 14.7189 7.15041 14.445L7.21508 13.9492C7.2508 13.6754 7.50187 13.4847 7.7778 13.4956C7.85144 13.4985 7.92551 13.5 8 13.5C8.07449 13.5 8.14856 13.4985 8.2222 13.4956C8.49813 13.4847 8.7492 13.6754 8.78492 13.9492L8.84959 14.445C8.88531 14.7189 8.69225 14.9716 8.41658 14.9878C8.27876 14.9959 8.13986 15 8 15C7.86014 15 7.72124 14.9959 7.58342 14.9878ZM11.1341 14.2609C10.8873 14.3847 10.5938 14.2621 10.488 14.007L10.2965 13.5451C10.1907 13.29 10.313 12.9995 10.5574 12.8709C10.6873 12.8025 10.8142 12.729 10.9378 12.6507C11.1711 12.503 11.4839 12.5419 11.6522 12.7609L11.9568 13.1573C12.1251 13.3763 12.0849 13.6918 11.8545 13.8441C11.6236 13.9967 11.3831 14.136 11.1341 14.2609ZM13.1573 11.9568C13.3763 12.1251 13.6918 12.0849 13.8441 11.8545C13.9967 11.6236 14.136 11.3831 14.2609 11.1341C14.3847 10.8873 14.2621 10.5938 14.007 10.488L13.5451 10.2965C13.29 10.1907 12.9995 10.313 12.8709 10.5574C12.8025 10.6873 12.729 10.8142 12.6507 10.9378C12.503 11.1711 12.5419 11.4839 12.7609 11.6522L13.1573 11.9568Z"
      ></path>
    </svg>
  );
}

export function PlusSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#999b9e"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z"></path>
    </svg>
  );
}

export function LargerArrows() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M7.28 8.72a.75.75 0 0 1 0 1.06L5 12l1.25 1.25a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75V10.5a.75.75 0 0 1 .75-.75L4 11l2.22-2.28a.75.75 0 0 1 1.06 0ZM8.72 7.28a.75.75 0 0 1 0-1.06L11 4 9.75 2.75A.75.75 0 0 1 10.5 2h2.75a.75.75 0 0 1 .75.75V5.5a.75.75 0 0 1-.75.75L12 5 9.78 7.28a.75.75 0 0 1-1.06 0Z"></path>
    </svg>
  );
}

export function SmallerArrows() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M2.22 12.72a.75.75 0 1 0 1.06 1.06L5.5 11.5l1.25 1.25A.75.75 0 0 0 7.5 12V9.25a.75.75 0 0 0-.75-.75H4a.75.75 0 0 0-.75.75L4 10l.5.5-2.28 2.22Z"></path>
      <path d="M13.78 3.28a.75.75 0 0 0-1.06-1.06L10.5 4.5 9.25 3.25A.75.75 0 0 0 8.5 4v2.75c0 .414.336.75.75.75H12a.75.75 0 0 0 .75-.75L12 6l-.5-.5 2.28-2.22Z"></path>
    </svg>
  );
}

export function CrossSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L8 6.939L11.9697 2.96967C12.2626 2.67678 12.7374 2.67678 13.0303 2.96967C13.3232 3.26256 13.3232 3.73744 13.0303 4.03033L9.061 8L13.0303 11.9697C13.2966 12.2359 13.3208 12.6526 13.1029 12.9462L13.0303 13.0303C12.7374 13.3232 12.2626 13.3232 11.9697 13.0303L8 9.061L4.03033 13.0303C3.73744 13.3232 3.26256 13.3232 2.96967 13.0303C2.67678 12.7374 2.67678 12.2626 2.96967 11.9697L6.939 8L2.96967 4.03033C2.7034 3.76406 2.6792 3.3474 2.89705 3.05379L2.96967 2.96967Z"></path>
    </svg>
  );
}

export function AddLabelSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496", marginRight: "-8px" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2105 4C10.6337 4 11.0126 4.18857 11.24 4.48L14 8L11.24 11.52C11.0126 11.8114 10.6337 12 10.2105 12L3.26316 11.9943C2.56842 11.9943 2 11.4857 2 10.8571V5.14286C2 4.51429 2.56842 4.00571 3.26316 4.00571L10.2105 4ZM11.125 9C11.6773 9 12.125 8.55228 12.125 8C12.125 7.44772 11.6773 7 11.125 7C10.5727 7 10.125 7.44772 10.125 8C10.125 8.55228 10.5727 9 11.125 9Z"
      ></path>
    </svg>
  );
}

export function TheresMoreSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
    </svg>
  );
}

export function AttachStuffSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496" }}
    >
      <path d="M12.6429 7.69048L8.92925 11.4041C7.48164 12.8517 5.34347 13.0101 4.16667 11.8333C2.98733 10.654 3.14447 8.52219 4.59216 7.07451L8.00206 3.66461C8.93557 2.73109 10.2976 2.63095 11.0333 3.36667C11.7681 4.10139 11.6658 5.4675 10.7361 6.39727L7.32363 9.8097C6.90202 10.2313 6.32171 10.2741 6.02381 9.97619C5.72651 9.6789 5.76949 9.09718 6.1989 8.66776L9.29048 5.57619C9.56662 5.30005 9.56662 4.85233 9.29048 4.57619C9.01433 4.30005 8.56662 4.30005 8.29048 4.57619L5.1989 7.66776C4.24737 8.6193 4.13865 10.091 5.02381 10.9762C5.9095 11.8619 7.37984 11.7535 8.32363 10.8097L11.7361 7.39727C13.1876 5.94573 13.3564 3.68975 12.0333 2.36667C10.7099 1.04326 8.45782 1.20884 7.00206 2.66461L3.59216 6.07451C1.62229 8.04437 1.39955 11.0662 3.16667 12.8333C4.93146 14.5981 7.9596 14.3737 9.92925 12.4041L13.6429 8.69048C13.919 8.41433 13.919 7.96662 13.6429 7.69048C13.3667 7.41433 12.919 7.41433 12.6429 7.69048Z"></path>
    </svg>
  );
}

export function TickSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#949496", marginTop: "1.5px" }}
    >
      <path d="M6.336 13.6a1.049 1.049 0 0 1-.8-.376L2.632 9.736a.992.992 0 0 1 .152-1.424 1.056 1.056 0 0 1 1.456.152l2.008 2.4 5.448-8a1.048 1.048 0 0 1 1.432-.288A.992.992 0 0 1 13.424 4L7.2 13.144a1.04 1.04 0 0 1-.8.456h-.064Z"></path>
    </svg>
  );
}

export function CopyIssueURL() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#999b9e"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#999b9e" }}
    >
      <path d="M9.30558 10.206C9.57224 10.4726 9.59447 10.8912 9.37225 11.1831L9.30558 11.2594L6.84751 13.7175C5.58692 14.9781 3.54311 14.9781 2.28252 13.7175C1.0654 12.5004 1.02344 10.5531 2.15661 9.28564L2.28252 9.15251L4.74059 6.69443C5.0315 6.40353 5.50315 6.40353 5.79405 6.69443C6.06071 6.9611 6.08294 7.37963 5.86072 7.67161L5.79405 7.74789L3.33598 10.206C2.6572 10.8847 2.6572 11.9853 3.33598 12.664C3.98082 13.3089 5.00628 13.3411 5.68918 12.7608L5.79405 12.664L8.25212 10.206C8.54303 9.91506 9.01468 9.91506 9.30558 10.206ZM9.82982 6.17019C10.1207 6.46109 10.1207 6.93274 9.82982 7.22365L7.34921 9.70427C7.0583 9.99518 6.58665 9.99518 6.29575 9.70427C6.00484 9.41337 6.00484 8.94172 6.29575 8.65081L8.77637 6.17019C9.06727 5.87928 9.53892 5.87928 9.82982 6.17019ZM13.7175 2.2825C14.9346 3.49962 14.9766 5.44688 13.8434 6.71436L13.7175 6.84749L11.2594 9.30557C10.9685 9.59647 10.4969 9.59647 10.206 9.30557C9.93931 9.03891 9.91709 8.62037 10.1393 8.32839L10.206 8.25211L12.664 5.79403C13.3428 5.11525 13.3428 4.01474 12.664 3.33596C12.0192 2.69112 10.9938 2.65888 10.3109 3.23923L10.206 3.33596L7.74791 5.79403C7.457 6.08494 6.98535 6.08494 6.69445 5.79403C6.42779 5.52737 6.40556 5.10883 6.62778 4.81686L6.69445 4.74057L9.15252 2.2825C10.4131 1.02191 12.4569 1.02191 13.7175 2.2825Z"></path>
    </svg>
  );
}

export function CopyIssueID() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#999b9e"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#999b9e" }}
    >
      <path d="M7.5 4.75C7.5 4.33579 7.83579 4 8.25 4H11.25C11.6642 4 12 4.33579 12 4.75C12 5.16421 11.6642 5.5 11.25 5.5H8.25C7.83579 5.5 7.5 5.16421 7.5 4.75Z"></path>
      <path d="M7.5 7.25C7.5 6.83579 7.83579 6.5 8.25 6.5H11.25C11.6642 6.5 12 6.83579 12 7.25C12 7.66421 11.6642 8 11.25 8H8.25C7.83579 8 7.5 7.66421 7.5 7.25Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 1C5.95507 1 4.5 2.45507 4.5 4.25V4.5H4.25C2.45507 4.5 1 5.95507 1 7.75V11.75C1 13.5449 2.45507 15 4.25 15H8.25C10.0449 15 11.5 13.5449 11.5 11.75V11.5H11.75C13.5449 11.5 15 10.0449 15 8.25V4.25C15 2.45507 13.5449 1 11.75 1H7.75ZM10 11.5H7.75C5.95507 11.5 4.5 10.0449 4.5 8.25V6H4.25C3.2835 6 2.5 6.7835 2.5 7.75V11.75C2.5 12.7165 3.2835 13.5 4.25 13.5H8.25C9.2165 13.5 10 12.7165 10 11.75V11.5ZM6 4.25C6 3.2835 6.7835 2.5 7.75 2.5H11.75C12.7165 2.5 13.5 3.2835 13.5 4.25V8.25C13.5 9.2165 12.7165 10 11.75 10H7.75C6.7835 10 6 9.2165 6 8.25V4.25Z"
      ></path>
    </svg>
  );
}

export function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6ZM6 8C6 7.58579 6.33579 7.25 6.75 7.25H7.5C8.19036 7.25 8.75 7.80964 8.75 8.5V11.25C8.75 11.6642 8.41421 12 8 12C7.58579 12 7.25 11.6642 7.25 11.25V8.75H6.75C6.33579 8.75 6 8.41421 6 8Z"
      ></path>
    </svg>
  );
}

export function PencileSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#9c9da0" }}
    >
      <path d="M10.1805 3.34195L4.14166 9.416C5.32948 9.77021 6.29238 10.6629 6.74008 11.8184L12.6877 5.8425C11.6642 5.22123 10.8043 4.36352 10.1805 3.34195Z"></path>
      <path d="M13.7391 4.71631C14.1575 4.02948 14.0727 3.11738 13.4846 2.5219C12.8908 1.92072 11.9784 1.83892 11.298 2.27649C11.8547 3.31132 12.7037 4.15999 13.7391 4.71631Z"></path>
      <path d="M3.03104 10.7502C4.30296 10.7658 5.36645 11.7423 5.49783 13.0114C4.83268 13.426 3.40197 13.7922 2.53114 13.9886C2.2001 14.0632 1.92026 13.7602 2.02075 13.4373C2.25326 12.6902 2.64592 11.5136 3.03104 10.7502Z"></path>
    </svg>
  );
}

export function CopyIconSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#9c9da0" }}
    >
      <path d="M12.2517 1C13.7705 1 15.0017 2.23122 15.0017 3.75V8.25C15.0017 9.76878 13.7705 11 12.2517 11H11.001L11.0017 12.25C11.0017 13.7688 9.77049 15 8.25171 15H3.75C2.23122 15 1 13.7688 1 12.25V7.75C1 6.23122 2.23122 5 3.75 5H5V3.75C5 2.23122 6.23122 1 7.75 1H12.2517ZM5 6.5H3.75C3.05964 6.5 2.5 7.05964 2.5 7.75V12.25C2.5 12.9404 3.05964 13.5 3.75 13.5H8.25171C8.94206 13.5 9.50171 12.9404 9.50171 12.25V12L9.501 9.5L9.50171 7.75C9.50171 7.05964 8.94206 6.5 8.25171 6.5H6.66217H5ZM12.2517 2.5H7.75C7.05964 2.5 6.5 3.05964 6.5 3.75V5H8.25171C9.77049 5 11.0017 6.23122 11.0017 7.75L11.001 9.5H12.2517C12.9421 9.5 13.5017 8.94036 13.5017 8.25V3.75C13.5017 3.05964 12.9421 2.5 12.2517 2.5Z"></path>
    </svg>
  );
}

export function CopyTitleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#9c9da0" }}
    >
      <path d="M12.585 7c.465 0 .911.185 1.24.514l.665.668c.327.328.51.772.51 1.235V13a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 8 13V8.75C8 7.784 8.784 7 9.75 7h2.835Zm-1.839-6a3.75 3.75 0 0 1 3.75 3.75v.496a.75.75 0 0 1-1.5 0V4.75a2.25 2.25 0 0 0-2.25-2.25h-6a2.25 2.25 0 0 0-2.25 2.25v6.22a2.25 2.25 0 0 0 2.25 2.25h1.307a.75.75 0 1 1 0 1.5H4.746a3.75 3.75 0 0 1-3.75-3.75V4.75A3.75 3.75 0 0 1 4.746 1h6Zm1.84 7.5H9.75a.25.25 0 0 0-.25.25V13c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V9.417a.25.25 0 0 0-.073-.176l-.665-.668a.25.25 0 0 0-.177-.073Zm-.336 3a.5.5 0 1 1 0 1h-1.5a.5.5 0 0 1 0-1h1.5Zm0-1.5a.5.5 0 1 1 0 1h-1.5a.5.5 0 0 1 0-1h1.5Z"></path>
    </svg>
  );
}

export function BinSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da0"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ "--icon-color": "#9c9da0" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3687 6.5C12.6448 6.5 12.8687 6.72386 12.8687 7C12.8687 7.03856 12.8642 7.07699 12.8554 7.11452L11.3628 13.4581C11.1502 14.3615 10.3441 15 9.41597 15H6.58403C5.65593 15 4.84977 14.3615 4.6372 13.4581L3.14459 7.11452C3.08135 6.84572 3.24798 6.57654 3.51678 6.51329C3.55431 6.50446 3.59274 6.5 3.6313 6.5H12.3687ZM8.5 1C9.88071 1 11 2.11929 11 3.5H13C13.5523 3.5 14 3.94772 14 4.5V5C14 5.27614 13.7761 5.5 13.5 5.5H2.5C2.22386 5.5 2 5.27614 2 5V4.5C2 3.94772 2.44772 3.5 3 3.5H5C5 2.11929 6.11929 1 7.5 1H8.5ZM8.5 2.5H7.5C6.94772 2.5 6.5 2.94772 6.5 3.5H9.5C9.5 2.94772 9.05228 2.5 8.5 2.5Z"
      ></path>
    </svg>
  );
}
