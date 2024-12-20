import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/ClickOutside";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="flex items-center gap-2 font-medium text-dark dark:text-dark-6">
          <span className="hidden lg:block">Admin</span>

          <svg
            className={`fill-current duration-200 ease-in ${dropdownOpen && "rotate-180"}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.6921 7.09327C3.91674 6.83119 4.3113 6.80084 4.57338 7.02548L9.99997 11.6768L15.4266 7.02548C15.6886 6.80084 16.0832 6.83119 16.3078 7.09327C16.5325 7.35535 16.5021 7.74991 16.24 7.97455L10.4067 12.9745C10.1727 13.1752 9.82728 13.1752 9.59322 12.9745L3.75989 7.97455C3.49781 7.74991 3.46746 7.35535 3.6921 7.09327Z"
              fill=""
            />
          </svg>
        </span>
      </Link>

      {/* <!-- Dropdown Star --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-7.5 flex w-[280px] flex-col rounded-lg border-[0.5px] border-stroke bg-white shadow-default dark:border-dark-3 dark:bg-gray-dark`}
        >
          <div className="flex items-center gap-2.5 px-5 pb-5.5 pt-3.5">
            <span className="block">
              <span className="block font-medium text-dark dark:text-white">
                Admin
              </span>
              <span className="block font-medium text-dark-5 dark:text-dark-6">
                admin@email.com
              </span>
            </span>
          </div>
          <ul className="flex flex-col gap-1 border-y-[0.5px] border-stroke p-2.5 dark:border-dark-3">
            <li>
              <Link
                href="/pages/settings"
                className="flex w-full items-center gap-2.5 rounded-[7px] p-2.5 text-sm font-medium text-dark-4 duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 6.1875C7.4467 6.1875 6.1875 7.4467 6.1875 9C6.1875 10.5533 7.4467 11.8125 9 11.8125C10.5533 11.8125 11.8125 10.5533 11.8125 9C11.8125 7.4467 10.5533 6.1875 9 6.1875ZM7.3125 9C7.3125 8.06802 8.06802 7.3125 9 7.3125C9.93198 7.3125 10.6875 8.06802 10.6875 9C10.6875 9.93198 9.93198 10.6875 9 10.6875C8.06802 10.6875 7.3125 9.93198 7.3125 9Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.98106 0.9375C8.64771 0.937495 8.36943 0.93749 8.14097 0.953078C7.90315 0.969304 7.6785 1.00429 7.46071 1.0945C6.95534 1.30383 6.55382 1.70535 6.34449 2.21072C6.23551 2.47381 6.206 2.75109 6.19473 3.05247C6.18567 3.29474 6.0634 3.49688 5.88296 3.60106C5.70253 3.70523 5.46634 3.71005 5.252 3.59676C4.98535 3.45583 4.73046 3.34275 4.44812 3.30557C3.9058 3.23418 3.35732 3.38114 2.92334 3.71414C2.73632 3.85765 2.5937 4.0347 2.46074 4.23255C2.33301 4.42261 2.19387 4.66361 2.02721 4.9523L2.00826 4.98511C1.84159 5.27379 1.70245 5.51478 1.60172 5.72042C1.49686 5.9345 1.41483 6.14654 1.38406 6.38026C1.31266 6.92259 1.45963 7.47107 1.79262 7.90504C1.96596 8.13094 2.1913 8.29512 2.44663 8.45555C2.65196 8.58457 2.76591 8.79158 2.7659 8.99999C2.76589 9.20837 2.65194 9.41535 2.44663 9.54435C2.19127 9.7048 1.9659 9.86899 1.79255 10.0949C1.45955 10.5289 1.31259 11.0774 1.38399 11.6197C1.41476 11.8534 1.49678 12.0654 1.60164 12.2795C1.70237 12.4852 1.84151 12.7262 2.00818 13.0148L2.02713 13.0476C2.1938 13.3363 2.33294 13.5773 2.46067 13.7674C2.59363 13.9652 2.73625 14.1423 2.92327 14.2858C3.35724 14.6188 3.90572 14.7658 4.44805 14.6944C4.73038 14.6572 4.98525 14.5441 5.25188 14.4032C5.46625 14.2899 5.70247 14.2947 5.88293 14.3989C6.06339 14.5031 6.18567 14.7053 6.19473 14.9476C6.206 15.2489 6.23552 15.5262 6.34449 15.7893C6.55382 16.2947 6.95534 16.6962 7.46071 16.9055C7.6785 16.9957 7.90315 17.0307 8.14097 17.0469C8.36943 17.0625 8.64771 17.0625 8.98105 17.0625H9.01894C9.35228 17.0625 9.63056 17.0625 9.85902 17.0469C10.0968 17.0307 10.3215 16.9957 10.5393 16.9055C11.0446 16.6962 11.4462 16.2947 11.6555 15.7893C11.7645 15.5262 11.794 15.2489 11.8053 14.9475C11.8143 14.7052 11.9366 14.5031 12.117 14.3989C12.2975 14.2947 12.5337 14.2899 12.7481 14.4032C13.0147 14.5441 13.2695 14.6572 13.5519 14.6943C14.0942 14.7657 14.6427 14.6188 15.0766 14.2858C15.2637 14.1423 15.4063 13.9652 15.5392 13.7673C15.667 13.5773 15.8061 13.3363 15.9728 13.0476L15.9917 13.0148C16.1584 12.7262 16.2975 12.4851 16.3983 12.2795C16.5031 12.0654 16.5852 11.8534 16.6159 11.6196C16.6873 11.0773 16.5404 10.5288 16.2074 10.0949C16.034 9.86895 15.8087 9.70476 15.5533 9.54431C15.348 9.41532 15.2341 9.20834 15.2341 8.99996C15.2341 8.79161 15.348 8.58466 15.5533 8.45568C15.8087 8.29522 16.0341 8.13102 16.2074 7.90509C16.5404 7.47112 16.6874 6.92264 16.616 6.38031C16.5852 6.14659 16.5032 5.93455 16.3983 5.72048C16.2976 5.51484 16.1585 5.27387 15.9918 4.98522L15.9729 4.95238C15.8062 4.66369 15.6671 4.42266 15.5393 4.2326C15.4064 4.03475 15.2637 3.8577 15.0767 3.71419C14.6427 3.38119 14.0943 3.23423 13.5519 3.30563C13.2696 3.3428 13.0147 3.45586 12.7481 3.59679C12.5337 3.71009 12.2975 3.70527 12.1171 3.60108C11.9366 3.49689 11.8143 3.29473 11.8053 3.05243C11.794 2.75106 11.7645 2.4738 11.6555 2.21072C11.4462 1.70535 11.0446 1.30383 10.5393 1.0945C10.3215 1.00429 10.0968 0.969304 9.85902 0.953078C9.63056 0.93749 9.35228 0.937495 9.01893 0.9375H8.98106ZM7.89123 2.13386C7.94909 2.10989 8.037 2.08779 8.21755 2.07547C8.40315 2.06281 8.64284 2.0625 8.99999 2.0625C9.35715 2.0625 9.59684 2.06281 9.78244 2.07547C9.96298 2.08779 10.0509 2.10989 10.1088 2.13386C10.3385 2.22901 10.521 2.41152 10.6161 2.64123C10.6461 2.71369 10.671 2.82665 10.681 3.09448C10.7033 3.68876 11.01 4.26097 11.5546 4.57536C12.0991 4.88976 12.748 4.8693 13.2738 4.59141C13.5108 4.46617 13.621 4.43124 13.6988 4.421C13.9453 4.38855 14.1946 4.45535 14.3919 4.60671C14.4415 4.64484 14.5047 4.70992 14.6056 4.86012C14.7094 5.01452 14.8295 5.22195 15.008 5.53125C15.1866 5.84055 15.3062 6.04829 15.388 6.21535C15.4676 6.37787 15.4925 6.46505 15.5006 6.52715C15.5331 6.77366 15.4663 7.02297 15.3149 7.22023C15.2672 7.28246 15.1818 7.3605 14.9548 7.5031C14.4513 7.81947 14.1091 8.37116 14.1091 8.9999C14.1091 9.62871 14.4512 10.1805 14.9548 10.4969C15.1817 10.6395 15.2671 10.7175 15.3148 10.7797C15.4662 10.977 15.533 11.2263 15.5006 11.4728C15.4924 11.5349 15.4676 11.6221 15.388 11.7846C15.3061 11.9517 15.1865 12.1594 15.008 12.4687C14.8294 12.778 14.7093 12.9854 14.6055 13.1398C14.5046 13.29 14.4415 13.3551 14.3918 13.3932C14.1945 13.5446 13.9452 13.6114 13.6987 13.5789C13.6209 13.5687 13.5107 13.5338 13.2738 13.4086C12.748 13.1307 12.099 13.1102 11.5545 13.4247C11.01 13.7391 10.7033 14.3112 10.681 14.9055C10.671 15.1733 10.6461 15.2863 10.6161 15.3588C10.521 15.5885 10.3385 15.771 10.1088 15.8661C10.0509 15.8901 9.96298 15.9122 9.78244 15.9245C9.59684 15.9372 9.35715 15.9375 8.99999 15.9375C8.64284 15.9375 8.40315 15.9372 8.21755 15.9245C8.037 15.9122 7.94909 15.8901 7.89123 15.8661C7.66151 15.771 7.47901 15.5885 7.38386 15.3588C7.35384 15.2863 7.32896 15.1733 7.31895 14.9055C7.29672 14.3112 6.98998 13.739 6.44543 13.4246C5.90088 13.1102 5.25196 13.1307 4.72619 13.4086C4.48924 13.5338 4.37897 13.5688 4.30121 13.579C4.0547 13.6115 3.80539 13.5447 3.60813 13.3933C3.55844 13.3552 3.49534 13.2901 3.39439 13.1399C3.29063 12.9855 3.17052 12.7781 2.99194 12.4688C2.81337 12.1594 2.69378 11.9517 2.61195 11.7847C2.53235 11.6221 2.50754 11.5349 2.49936 11.4728C2.46691 11.2263 2.53371 10.977 2.68507 10.7798C2.73282 10.7175 2.81821 10.6395 3.04515 10.4969C3.54869 10.1805 3.89086 9.62882 3.8909 9.00005C3.89093 8.3712 3.54874 7.8194 3.04516 7.50299C2.81826 7.36042 2.73289 7.2824 2.68515 7.22018C2.53378 7.02292 2.46698 6.77361 2.49943 6.5271C2.50761 6.465 2.53242 6.37782 2.61202 6.2153C2.69386 6.04824 2.81344 5.8405 2.99202 5.5312C3.17059 5.2219 3.2907 5.01447 3.39447 4.86007C3.49541 4.70987 3.55851 4.64479 3.6082 4.60666C3.80546 4.4553 4.05477 4.3885 4.30128 4.42095C4.37905 4.43119 4.48932 4.46613 4.7263 4.59138C5.25205 4.86926 5.90093 4.88972 6.44546 4.57534C6.98999 4.26096 7.29672 3.68878 7.31894 3.09451C7.32896 2.82666 7.35384 2.7137 7.38386 2.64124C7.47901 2.41152 7.66151 2.22901 7.89123 2.13386Z"
                    fill=""
                  />
                </svg>
                Account Settings
              </Link>
            </li>
          </ul>
          <div className="p-2.5">
            <button className="flex w-full items-center gap-2.5 rounded-[7px] p-2.5 text-sm font-medium text-dark-4 duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base">
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1815_13085)">
                  <path
                    d="M11.209 0.9375C10.1833 0.937485 9.35657 0.937473 8.70635 1.02489C8.03127 1.11566 7.46286 1.30983 7.01142 1.76126C6.61773 2.15496 6.4188 2.63877 6.31437 3.20727C6.2129 3.75969 6.19349 4.43572 6.18897 5.24687C6.18724 5.55753 6.43768 5.81076 6.74833 5.81249C7.05899 5.81422 7.31223 5.56379 7.31396 5.25313C7.31852 4.43301 7.33982 3.8517 7.42086 3.41051C7.49895 2.9854 7.62433 2.73935 7.80692 2.55676C8.01449 2.34919 8.30592 2.21385 8.85625 2.13986C9.42276 2.0637 10.1736 2.0625 11.2502 2.0625H12.0002C13.0767 2.0625 13.8276 2.0637 14.3941 2.13986C14.9444 2.21385 15.2358 2.34919 15.4434 2.55676C15.651 2.76433 15.7863 3.05576 15.8603 3.60609C15.9365 4.1726 15.9377 4.92344 15.9377 6V12C15.9377 13.0766 15.9365 13.8274 15.8603 14.3939C15.7863 14.9442 15.651 15.2357 15.4434 15.4432C15.2358 15.6508 14.9444 15.7862 14.3941 15.8601C13.8276 15.9363 13.0767 15.9375 12.0002 15.9375H11.2502C10.1736 15.9375 9.42276 15.9363 8.85625 15.8601C8.30592 15.7862 8.01449 15.6508 7.80692 15.4432C7.62433 15.2607 7.49895 15.0146 7.42086 14.5895C7.33982 14.1483 7.31852 13.567 7.31396 12.7469C7.31223 12.4362 7.05899 12.1858 6.74833 12.1875C6.43768 12.1892 6.18724 12.4425 6.18897 12.7531C6.19349 13.5643 6.2129 14.2403 6.31437 14.7927C6.4188 15.3612 6.61773 15.845 7.01142 16.2387C7.46286 16.6902 8.03127 16.8843 8.70635 16.9751C9.35657 17.0625 10.1833 17.0625 11.209 17.0625H12.0413C13.067 17.0625 13.8937 17.0625 14.544 16.9751C15.2191 16.8843 15.7875 16.6902 16.2389 16.2387C16.6903 15.7873 16.8845 15.2189 16.9753 14.5438C17.0627 13.8936 17.0627 13.0668 17.0627 12.0412V5.95885C17.0627 4.93316 17.0627 4.10641 16.9753 3.45619C16.8845 2.78111 16.6903 2.2127 16.2389 1.76126C15.7875 1.30983 15.2191 1.11566 14.544 1.02489C13.8938 0.937473 13.067 0.937485 12.0413 0.9375H11.209Z"
                    fill=""
                  />
                  <path
                    d="M11.25 8.4375C11.5607 8.4375 11.8125 8.68934 11.8125 9C11.8125 9.31066 11.5607 9.5625 11.25 9.5625H3.02058L4.49107 10.8229C4.72694 11.0251 4.75426 11.3802 4.55208 11.6161C4.34991 11.8519 3.9948 11.8793 3.75893 11.6771L1.13393 9.42708C1.00925 9.32022 0.9375 9.16421 0.9375 9C0.9375 8.83579 1.00925 8.67978 1.13393 8.57292L3.75893 6.32292C3.9948 6.12074 4.34991 6.14806 4.55208 6.38393C4.75426 6.6198 4.72694 6.97491 4.49107 7.17708L3.02058 8.4375H11.25Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1815_13085">
                    <rect width="18" height="18" rx="5" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
