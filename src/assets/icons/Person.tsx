import * as React from "react";

function Person(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_3_4061)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.929 12.053a5 5 0 10-5.857 0A8.003 8.003 0 004 19.5v.143C4 20.393 4.608 21 5.357 21h13.286c.75 0 1.357-.608 1.357-1.357V19.5a8.003 8.003 0 00-5.071-7.447zM15.5 8a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM12 13a6.5 6.5 0 00-6.5 6.5h13A6.5 6.5 0 0012 13z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3_4061">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoPerson = React.memo(Person);
export default MemoPerson;
