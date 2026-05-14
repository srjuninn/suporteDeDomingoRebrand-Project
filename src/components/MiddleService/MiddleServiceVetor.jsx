import * as React from "react"
const MiddleServiceVetor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 410" // proporção original

    fill="none"
    stroke="var(--white-w100, #FDFDFD)"
    strokeWidth={1}
    filter="drop-shadow(6px 4px 4px #FAFAFA)" 
    {...props}
  >
    <g filter="url(#a)">
      <mask
        id="b"
        width={292}
        height={402}
        x={0}
        y={0}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M0 0h292v402H0z" />
        <path d="M87 44c0 22.091 17.909 40 40 40h38.9c22.092 0 40-17.909 40-40V11c0-5.523 4.478-10 10-10H283a8 8 0 0 1 8 8v382c0 5.523-4.477 10-10 10h-71.7c-5.523 0-10-4.477-10-10v-26c0-22.091-17.909-40-40-40H132c-22.091 0-40 17.909-40 40v26c0 5.523-4.477 10-10 10H11c-5.523 0-10-4.477-10-10V11C1 5.477 5.477 1 11 1h66c5.523 0 10 4.477 10 10v33Z" />
      </mask>
      <path
        fill="#000"
        fillOpacity={0.01}
        d="M87 44c0 22.091 17.909 40 40 40h38.9c22.092 0 40-17.909 40-40V11c0-5.523 4.478-10 10-10H283a8 8 0 0 1 8 8v382c0 5.523-4.477 10-10 10h-71.7c-5.523 0-10-4.477-10-10v-26c0-22.091-17.909-40-40-40H132c-22.091 0-40 17.909-40 40v26c0 5.523-4.477 10-10 10H11c-5.523 0-10-4.477-10-10V11C1 5.477 5.477 1 11 1h66c5.523 0 10 4.477 10 10v33Z"
        shapeRendering="crispEdges"
      />
      <path
        fill="#FDFDFD"
        d="M87 44h-1 1Zm40 40v1-1Zm38.9 0v1-1ZM283 1V0v1Zm-83.7 364h1-1ZM87 44h-1c0 22.644 18.356 41 41 41v-2c-21.539 0-39-17.46-39-39h-1Zm40 40v1h38.9v-2H127v1Zm38.9 0v1c22.644 0 41-18.356 41-41h-2c0 21.539-17.461 39-39 39v1Zm40-40h1V11h-2v33h1Zm10-43v1H283V0h-67.1v1ZM283 1v1a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v1Zm8 8h-1v382h2V9h-1Zm-10 392v-1h-71.7v2H281v-1Zm-81.7-10h1v-26h-2v26h1Zm0-26h1c0-22.644-18.357-41-41-41v2c21.539 0 39 17.461 39 39h1Zm-40-40v-1H132v2h27.3v-1Zm-27.3 0v-1c-22.644 0-41 18.356-41 41h2c0-21.539 17.461-39 39-39v-1Zm-40 40h-1v26h2v-26h-1Zm-10 36v-1H11v2h71v-1ZM1 391h1V11H0v380h1ZM11 1v1h66V0H11v1Zm76 10h-1v33h2V11h-1ZM77 1v1a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11v1Zm15 390h-1a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11h-1Zm117.3 10v-1a9 9 0 0 1-9-9h-2c0 6.075 4.925 11 11 11v-1Zm81.7-10h-1a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11h-1ZM11 401v-1a9 9 0 0 1-9-9H0c0 6.075 4.925 11 11 11v-1ZM1 11h1a9 9 0 0 1 9-9V0C4.925 0 0 4.925 0 11h1Zm204.9 0h1a9 9 0 0 1 9-9V0c-6.075 0-11 4.925-11 11h1Z"
        mask="url(#b)"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={300}
        height={410}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4} dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.980392 0 0 0 0 0.980392 0 0 0 0 0.980392 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_280_114" />
        <feBlend
          in="BackgroundImageFix"
          in2="effect1_dropShadow_280_114"
          result="BackgroundImageFix"
        />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
    </defs>
  </svg>
)
export default MiddleServiceVetor
