import * as React from "react"
const RightServiceVetor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={410}
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
        <path d="M11 1C5.477 1 1 5.477 1 11v314h67c22.091 0 40 17.909 40 40v36h173c5.523 0 10-4.477 10-10V74c0 5.523-4.477 10-10 10h-68.9c-22.092 0-40-17.909-40-40V11c0-5.523 4.477-10 10-10H11Z" />
      </mask>
      <path
        fill="#000"
        fillOpacity={0.01}
        d="M11 1C5.477 1 1 5.477 1 11v314h67c22.091 0 40 17.909 40 40v36h173c5.523 0 10-4.477 10-10V74c0 5.523-4.477 10-10 10h-68.9c-22.092 0-40-17.909-40-40V11c0-5.523 4.477-10 10-10H11Z"
        shapeRendering="crispEdges"
      />
      <path
        fill="#FDFDFD"
        d="M1 11H0h1Zm0 314v1H0v-1h1Zm67 0v-1 1Zm40 76v1h-1v-1h1Zm173 0v1-1Zm10-10h1-1ZM281 84v1-1Zm-68.9 0v1-1Zm-30-83V0v2-1ZM11 1v1a9 9 0 0 0-9 9H0C0 4.925 4.925 0 11 0v1ZM1 11h1v314H0V11h1Zm0 314v-1h67v2H1v-1Zm67 0v-1c22.644 0 41 18.356 41 41h-2c0-21.539-17.46-39-39-39v-1Zm40 40h1v36h-2v-36h1Zm0 36v-1h173v2H108v-1Zm173 0v-1a9 9 0 0 0 9-9h2c0 6.075-4.925 11-11 11v-1Zm10-10h-1V74h2v317h-1Zm0-317h1c0 6.075-4.925 11-11 11v-2a9 9 0 0 0 9-9h1Zm-10 10v1h-68.9v-2H281v1Zm-68.9 0v1c-22.644 0-41-18.356-41-41h2c0 21.539 17.461 39 39 39v1Zm-40-40h-1V11h2v33h-1Zm0-33h-1c0-6.075 4.925-11 11-11v2a9 9 0 0 0-9 9h-1Zm10-10v1H11V0h171.1v1Z"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_285_221" />
        <feBlend
          in="BackgroundImageFix"
          in2="effect1_dropShadow_285_221"
          result="BackgroundImageFix"
        />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
    </defs>
  </svg>
)
export default RightServiceVetor
