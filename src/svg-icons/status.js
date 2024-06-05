export function ToDoSvg({ size }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      style={{ width: size, height: size }}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#e2e2e2"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="#e2e2e2"
        strokeWidth="4"
        strokeDasharray="0 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );
}

export function InProgressSvg({ size }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ width: size, height: size }}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#f2be00"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="#f2be00"
        strokeWidth="4"
        strokeDasharray="6.2517693806436885 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );
}

export function DoneSvg({ size }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ width: size, height: size }}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#5e6ad2"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        cx="7"
        cy="7"
        r="3"
        fill="none"
        stroke="#5e6ad2"
        strokeWidth="6"
        strokeDasharray="18.84955592153876 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
      <path
        stroke="none"
        fill="#000000"
        d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z"
      ></path>
    </svg>
  );
}

export function BacklogSvg({ size }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{ width: size, height: size }}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#bec2c8"
        strokeWidth="2"
        strokeDasharray="1.4 1.74"
        strokeDashoffset="0.65"
      ></circle>
      <circle
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="#bec2c8"
        strokeWidth="4"
        strokeDasharray="0 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );
}

export function CanceledOrDuplicateSvg({ size }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{ width: size, height: size }}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#95a2b3"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        cx="7"
        cy="7"
        r="3"
        fill="none"
        stroke="#95a2b3"
        strokeWidth="6"
        strokeDasharray="18.84955592153876 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
      <path
        stroke="none"
        fill="#000000"
        d="M3.73657 3.73657C4.05199 3.42114 4.56339 3.42114 4.87881 3.73657L5.93941 4.79716L7 5.85775L9.12117 3.73657C9.4366 3.42114 9.94801 3.42114 10.2634 3.73657C10.5789 4.05199 10.5789 4.56339 10.2634 4.87881L8.14225 7L10.2634 9.12118C10.5789 9.4366 10.5789 9.94801 10.2634 10.2634C9.94801 10.5789 9.4366 10.5789 9.12117 10.2634L7 8.14225L4.87881 10.2634C4.56339 10.5789 4.05199 10.5789 3.73657 10.2634C3.42114 9.94801 3.42114 9.4366 3.73657 9.12118L4.79716 8.06059L5.85775 7L3.73657 4.87881C3.42114 4.56339 3.42114 4.05199 3.73657 3.73657Z"
      ></path>
    </svg>
  );
}
