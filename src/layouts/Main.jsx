const MainLayout = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1262}
    height={900}
    fill="none"
    {...props}
  >
    <g filter="url(#a)" shapeRendering="crispEdges">
      <path
        fill="#121212"
        fillOpacity={0.82}
        d="M197.581 138.956H75c-19.33 0-35 15.67-35 35V760c0 19.33 15.67 35 35 35h980.94c19.33 0 35-15.67 35-35v-8.013c0-19.33 15.67-35 35-35H1187c19.33 0 35-15.67 35-35V171.338c0-19.33-15.62-35-34.95-35H988.332c-19.33 0-34.946-15.67-34.946-35V75c0-19.33-15.67-35-35-35H262.581c-16.568 0-30 13.431-30 30v33.956c0 19.33-15.67 35-35 35Z"
      />
      <path
        stroke="#FDFDFD"
        d="M197.581 138.956H75c-19.33 0-35 15.67-35 35V760c0 19.33 15.67 35 35 35h980.94c19.33 0 35-15.67 35-35v-8.013c0-19.33 15.67-35 35-35H1187c19.33 0 35-15.67 35-35V171.338c0-19.33-15.62-35-34.95-35H988.332c-19.33 0-34.946-15.67-34.946-35V75c0-19.33-15.67-35-35-35H262.581c-16.568 0-30 13.431-30 30v33.956c0 19.33-15.67 35-35 35Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={1383}
        height={956}
        x={-56.5}
        y={-56.5}
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
        <feGaussianBlur stdDeviation={50} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.980392 0 0 0 0 0.980392 0 0 0 0 0.980392 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_18" />
        <feBlend
          in="BackgroundImageFix"
          in2="effect1_dropShadow_16_18"
          result="BackgroundImageFix"
        />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
    </defs>
  </svg>
)
export default MainLayout
