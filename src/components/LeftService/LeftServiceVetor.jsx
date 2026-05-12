import * as React from "react"
const LeftServiceVetor = (props) => (
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
        <path d="M281 1c5.523 0 10 4.477 10 10v314h-67c-22.091 0-40 17.909-40 40v36H11c-5.523 0-10-4.477-10-10V74c0 5.523 4.477 10 10 10h68.9c22.092 0 40-17.909 40-40V11c0-5.523-4.477-10-10-10H281Z" />
      </mask>
      <path
        fill="#000"
        fillOpacity={0.01}
        d="M281 1c5.523 0 10 4.477 10 10v314h-67c-22.091 0-40 17.909-40 40v36H11c-5.523 0-10-4.477-10-10V74c0 5.523 4.477 10 10 10h68.9c22.092 0 40-17.909 40-40V11c0-5.523-4.477-10-10-10H281Z"
        shapeRendering="crispEdges"
      />
      <path
        fill="#FDFDFD"
        d="M281 1V0v1Zm10 10h1-1Zm0 314v1h1v-1h-1Zm-107 76v1h1v-1h-1Zm-173 0v1-1ZM1 391H0h1ZM11 84v1-1Zm68.9 0v1-1Zm30-83V0v2-1ZM281 1v1a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11v1Zm10 10h-1v314h2V11h-1Zm0 314v-1h-67v2h67v-1Zm-67 0v-1c-22.644 0-41 18.356-41 41h2c0-21.539 17.461-39 39-39v-1Zm-40 40h-1v36h2v-36h-1Zm0 36v-1H11v2h173v-1Zm-173 0v-1a9 9 0 0 1-9-9H0c0 6.075 4.925 11 11 11v-1ZM1 391h1V74H0v317h1ZM1 74H0c0 6.075 4.925 11 11 11v-2a9 9 0 0 1-9-9H1Zm10 10v1h68.9v-2H11v1Zm68.9 0v1c22.644 0 41-18.356 41-41h-2c0 21.539-17.461 39-39 39v1Zm40-40h1V11h-2v33h1Zm0-33h1c0-6.075-4.925-11-11-11v2a9 9 0 0 1 9 9h1Zm-10-10v1H281V0H109.9v1Z"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_196" />
        <feBlend
          in="BackgroundImageFix"
          in2="effect1_dropShadow_284_196"
          result="BackgroundImageFix"
        />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
    </defs>
  </svg>
)
export default LeftServiceVetor
