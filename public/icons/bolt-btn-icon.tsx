const BoltBtnIcon = () => {
  return (
    <svg
      width="16"
      height="23"
      viewBox="0 0 16 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_1_415)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5759 1.49514C13.7426 1.30052 13.6043 1 13.3481 1H6.21013C6.08398 1 5.9713 1.07892 5.92819 1.19748L2.14637 11.5975C2.07522 11.7931 2.22012 12 2.42831 12H5.62602C5.81794 12 5.96051 12.1777 5.91887 12.3651L4.33223 19.505C4.2608 19.8264 4.68433 20.0115 4.87174 19.7408L12.6741 8.47076C12.8118 8.27179 12.6694 8 12.4274 8H8.65691C8.40067 8 8.26237 7.69948 8.42906 7.50486L13.5759 1.49514Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_1_415"
          x="0.128052"
          y="0"
          width="15.5206"
          height="22.8713"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0675278 0 0 0 0 0.368333 0 0 0 0 0.358784 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_415"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_415"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-0.3" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1_415"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BoltBtnIcon;
