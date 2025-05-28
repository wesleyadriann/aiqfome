import * as React from "react";

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  const { fill } = props;
  return (
    <svg width="1em" height="1em" viewBox="0 0 8 8" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_22_228)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.61 1.607a.384.384 0 01.532 0L5.39 3.741a.359.359 0 010 .518L3.142 6.393a.384.384 0 01-.613-.118.359.359 0 01.081-.399L4.592 4 2.61 2.124a.359.359 0 010-.517z"
          fill={fill || "#00A296"}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_22_228">
          <path fill="#fff" d="M0 0h8v8H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export const MemoChevronRight = React.memo(ChevronRight);
export default MemoChevronRight;
