"use client";
import { useState } from "react";

export { FaGithub as GithubIcon } from "react-icons/fa";
export { IoLogoWechat as WechatIcon } from "react-icons/io5";
export { MdEmail as MailIcon } from "react-icons/md";
export { FaBars as BarIcon } from "react-icons/fa";
export { ImCross as CrossIcon } from "react-icons/im";
export { FaXTwitter as XIcon } from "react-icons/fa6";
export const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256" {...props}>
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const FullHeartIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 66" fill="none" {...props}>
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        d="m5.887 34.142 2.829 2.829L37 65.255 65.284 36.97l2.829-2.829c7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.285 0L37 8.686l-2.828-2.828c-7.81-7.81-20.474-7.81-28.285 0-7.81 7.81-7.81 20.474 0 28.284Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      id="inside"
      fill=""
      fillRule="evenodd"
      d="m5.887 34.142 2.829 2.829L37 65.255 65.284 36.97l2.829-2.829c7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.285 0L37 8.686l-2.828-2.828c-7.81-7.81-20.474-7.81-28.285 0-7.81 7.81-7.81 20.474 0 28.284Z"
      clipRule="evenodd"
    />
    <path
      fill="#F056C7"
      d="m37 65.255-2.828 2.828L37 70.912l2.828-2.829L37 65.255ZM65.284 36.97l2.829 2.828-2.829-2.828Zm2.829-2.829-2.829-2.828 2.829 2.828ZM37 8.686l-2.828 2.829L37 14.343l2.828-2.828L37 8.686ZM11.544 34.142l-2.828-2.828-5.657 5.657 2.828 2.828 5.657-5.657Zm28.284 28.284L11.544 34.142 5.887 39.8l28.285 28.284 5.656-5.657Zm22.628-28.284L34.172 62.426l5.656 5.657L68.113 39.8l-5.657-5.657Zm2.828-2.828-2.828 2.828 5.657 5.657 2.828-2.828-5.657-5.657Zm0-22.628c6.249 6.249 6.249 16.38 0 22.628l5.657 5.657c9.373-9.373 9.373-24.569 0-33.942l-5.657 5.657Zm-22.627 0c6.248-6.248 16.379-6.248 22.627 0l5.657-5.657C61.568-6.343 46.373-6.343 37 3.03l5.657 5.657Zm-2.829 2.829 2.829-2.829L37 3.03l-2.828 2.829 5.656 5.657Zm-8.485-2.829 2.829 2.829 5.656-5.657L37 3.029l-5.657 5.657Zm-22.627 0c6.248-6.248 16.379-6.248 22.627 0L37 3.03c-9.373-9.372-24.569-9.372-33.941 0l5.657 5.657Zm0 22.628c-6.249-6.249-6.249-16.38 0-22.628L3.059 3.03c-9.373 9.373-9.373 24.569 0 33.942l5.657-5.657Z"
      mask="url(#a)"
    />
  </svg>
);

export const AnimatedHeartIcon = ({ className, size }: { className?: string; size?: string }) => {
  const [heartful, setHeartful] = useState(true);
  return (
    <button
      className={`${className} transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125`}
      onClick={() => {
        setHeartful(!heartful);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || "1em"}
        height={size || "1em"}
        viewBox="0 0 74 66"
        fill="none"
        className="transition-all duration-200 ease-in-out"
      >
        <mask id="a" fill="#fff">
          <path
            fillRule="evenodd"
            d="m5.887 34.142 2.829 2.829L37 65.255 65.284 36.97l2.829-2.829c7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.285 0L37 8.686l-2.828-2.828c-7.81-7.81-20.474-7.81-28.285 0-7.81 7.81-7.81 20.474 0 28.284Z"
            clipRule="evenodd"
          />
        </mask>
        <path
          id="inside"
          fill="#F5067C"
          className={`${heartful ? "opacity-100" : "opacity-0"} duration-300`}
          fillRule="evenodd"
          d="m5.887 34.142 2.829 2.829L37 65.255 65.284 36.97l2.829-2.829c7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.285 0L37 8.686l-2.828-2.828c-7.81-7.81-20.474-7.81-28.285 0-7.81 7.81-7.81 20.474 0 28.284Z"
          clipRule="evenodd"
        />
        <path
          fill="#F5067C"
          d="m37 65.255-2.828 2.828L37 70.912l2.828-2.829L37 65.255ZM65.284 36.97l2.829 2.828-2.829-2.828Zm2.829-2.829-2.829-2.828 2.829 2.828ZM37 8.686l-2.828 2.829L37 14.343l2.828-2.828L37 8.686ZM11.544 34.142l-2.828-2.828-5.657 5.657 2.828 2.828 5.657-5.657Zm28.284 28.284L11.544 34.142 5.887 39.8l28.285 28.284 5.656-5.657Zm22.628-28.284L34.172 62.426l5.656 5.657L68.113 39.8l-5.657-5.657Zm2.828-2.828-2.828 2.828 5.657 5.657 2.828-2.828-5.657-5.657Zm0-22.628c6.249 6.249 6.249 16.38 0 22.628l5.657 5.657c9.373-9.373 9.373-24.569 0-33.942l-5.657 5.657Zm-22.627 0c6.248-6.248 16.379-6.248 22.627 0l5.657-5.657C61.568-6.343 46.373-6.343 37 3.03l5.657 5.657Zm-2.829 2.829 2.829-2.829L37 3.03l-2.828 2.829 5.656 5.657Zm-8.485-2.829 2.829 2.829 5.656-5.657L37 3.029l-5.657 5.657Zm-22.627 0c6.248-6.248 16.379-6.248 22.627 0L37 3.03c-9.373-9.372-24.569-9.372-33.941 0l5.657 5.657Zm0 22.628c-6.249-6.249-6.249-16.38 0-22.628L3.059 3.03c-9.373 9.373-9.373 24.569 0 33.942l5.657-5.657Z"
          mask="url(#a)"
        />
      </svg>
    </button>
  );
};

// export const XIcon = ({size}: {size :string}) => (
//   <svg
//     width={size || "1em"}
//     height={size || "1em"}
//     viewBox="0 0 1200 1227"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
//       fill="black"
//     />
//   </svg>
// );
