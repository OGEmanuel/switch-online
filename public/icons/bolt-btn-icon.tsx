const BoltBtnIcon = () => {
  return (
    <svg
      width="42"
      height="50"
      viewBox="0 0 42 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1_413)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 15H19L15 26H19L17 35L26 22H21.005L27 15Z"
          fill="white"
          fillOpacity="0.8"
        />
      </g>
      <g filter="url(#filter1_di_1_413)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.5759 15.4951C26.7426 15.3005 26.6043 15 26.3481 15H19.2101C19.084 15 18.9713 15.0789 18.9282 15.1975L15.1464 25.5975C15.0752 25.7931 15.2201 26 15.4283 26H18.626C18.8179 26 18.9605 26.1777 18.9189 26.3651L17.3322 33.505C17.2608 33.8264 17.6843 34.0115 17.8717 33.7408L25.6741 22.4708C25.8118 22.2718 25.6694 22 25.4274 22H21.6569C21.4007 22 21.2624 21.6995 21.4291 21.5049L26.5759 15.4951Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_413"
          x="0"
          y="0"
          width="42"
          height="50"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7.5"
            result="effect1_foregroundBlur_1_413"
          />
        </filter>
        <filter
          id="filter1_di_1_413"
          x="13.1281"
          y="14"
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
            result="effect1_dropShadow_1_413"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_413"
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
            result="effect2_innerShadow_1_413"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BoltBtnIcon;
