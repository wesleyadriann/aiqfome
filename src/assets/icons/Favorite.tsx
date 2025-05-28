import * as React from "react";

function Favorite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_3_4703)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18.4c.277 0 .671-.239 1-.442.9-.558 1.76-1.18 2.571-1.862 2.725-2.398 3.929-4.797 3.929-6.898 0-2.01-1.71-3.698-3.45-3.698h-.003a3.683 3.683 0 00-1.615.37C13.95 6.107 13 7 13 7l-1 1-1-1s-.95-.892-1.432-1.13a3.683 3.683 0 00-1.615-.37H7.95C6.21 5.5 4.5 7.187 4.5 9.198c0 2.102 1.205 4.5 3.929 6.898A22.056 22.056 0 0011 17.958c.328.203.723.442 1 .442zm-4.55-1.166C4.54 14.674 3 11.896 3 9.198 3 6.428 5.313 4 7.95 4a5.182 5.182 0 012.277.522A4.77 4.77 0 0112 6.025a4.78 4.78 0 011.773-1.503A5.183 5.183 0 0116.05 4C18.687 4 21 6.43 21 9.198c0 2.697-1.54 5.476-4.45 8.035A23.568 23.568 0 0113 19.701S12.406 20 12 20c-.408 0-1-.299-1-.299a23.554 23.554 0 01-3.55-2.467z"
          fill="#580F78"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3_4703">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoFavorite = React.memo(Favorite);
export default MemoFavorite;
