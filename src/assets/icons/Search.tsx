import * as React from "react";

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_4_7503)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.391 16.452a7 7 0 111.061-1.06l3.328 3.328a.747.747 0 010 1.06.748.748 0 01-1.06 0l-3.329-3.328zm-.502-1.563a5.5 5.5 0 11-7.778-7.778 5.5 5.5 0 017.778 7.778z"
          fill="#A8ADB7"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_4_7503">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
