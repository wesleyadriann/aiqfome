import * as React from "react";

function Share(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_3_4701)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 9c.874 0 1.661-.374 2.21-.97l4.922 3.087a3.002 3.002 0 000 1.766l-4.923 3.088a3 3 0 10.708 1.327l5.001-3.138a3 3 0 100-4.32l-5-3.137A3 3 0 108 9zm0-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM19.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          fill="#580F78"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3_4701">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoShare = React.memo(Share);
export default MemoShare;
