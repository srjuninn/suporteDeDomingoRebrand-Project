import * as React from "react"
const LeftServiceVetor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={410}
    viewBox="0 0 300 410"
    fill="none"
    stroke="var(--white-w100, #FDFDFD)"
    strokeWidth={1}
    filter="drop-shadow(6px 4px 4px #FAFAFA)" 
    {...props}
  >
    <g mask="url(#b)">
      <path
        d="M281 1C286.523 1 291 5.477 291 11V325H224C201.909 325 184 342.909 184 365V401H11C5.477 401 1 396.523 1 391V74C1 79.523 5.477 84 11 84H79.9C101.992 84 119.9 66.091 119.9 44V11C119.9 5.477 115.423 1 109.9 1H281Z"
        fill="none"
      />
    </g>
    <defs>
      <mask
        id="b"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={292}
        height={402}
      >
        <rect fill="white" width={292} height={402} />
        <path
          d="M281 1C286.523 1 291 5.477 291 11V325H224C201.909 325 184 342.909 184 365V401H11C5.477 401 1 396.523 1 391V74C1 79.523 5.477 84 11 84H79.9C101.992 84 119.9 66.091 119.9 44V11C119.9 5.477 115.423 1 109.9 1H281Z"
          fill="black"
        />
      </mask>
    </defs>
  </svg>
)
export default LeftServiceVetor
