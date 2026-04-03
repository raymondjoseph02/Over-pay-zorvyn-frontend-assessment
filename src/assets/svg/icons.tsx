interface SearchIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const SearchIcon = ({
  className,
  width = 24,
  height = 24,
}: SearchIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Search">
      <g id="Search_2">
        <circle
          id="Ellipse_739"
          cx="11.7666"
          cy="11.7666"
          r="8.98856"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_181"
          d="M18.0183 18.4851L21.5423 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

interface NotificationBellIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const NotificationBellIcon = ({
  className,
  width = 24,
  height = 24,
}: NotificationBellIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogOutIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.33333 6.66658V4.99992C8.33333 4.55789 8.50893 4.13397 8.82149 3.82141C9.13405 3.50885 9.55797 3.33325 10 3.33325H15.8333C16.2754 3.33325 16.6993 3.50885 17.0118 3.82141C17.3244 4.13397 17.5 4.55789 17.5 4.99992V14.9999C17.5 15.4419 17.3244 15.8659 17.0118 16.1784C16.6993 16.491 16.2754 16.6666 15.8333 16.6666H10C9.55797 16.6666 9.13405 16.491 8.82149 16.1784C8.50893 15.8659 8.33333 15.4419 8.33333 14.9999V13.3333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.167 10H2.50032M2.50032 10L5.00033 7.5M2.50032 10L5.00033 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const HamburgerIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export const ChevronDownIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ChevronUpIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 15L12 9L18 15"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const QuestionCircleIcon = () => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 1.375C5.68477 1.375 1.375 5.68477 1.375 11C1.375 16.3152 5.68477 20.625 11 20.625C16.3152 20.625 20.625 16.3152 20.625 11C20.625 5.68477 16.3152 1.375 11 1.375ZM11 18.9922C6.58711 18.9922 3.00781 15.4129 3.00781 11C3.00781 6.58711 6.58711 3.00781 11 3.00781C15.4129 3.00781 18.9922 6.58711 18.9922 11C18.9922 15.4129 15.4129 18.9922 11 18.9922Z"
      fill="currentColor"
    />
    <path
      d="M13.3977 6.8041C12.7531 6.23906 11.9023 5.92969 11 5.92969C10.0977 5.92969 9.24687 6.24121 8.60234 6.8041C7.93203 7.39063 7.5625 8.1791 7.5625 9.02344V9.18672C7.5625 9.28125 7.63984 9.35859 7.73437 9.35859H8.76562C8.86016 9.35859 8.9375 9.28125 8.9375 9.18672V9.02344C8.9375 8.07598 9.86348 7.30469 11 7.30469C12.1365 7.30469 13.0625 8.07598 13.0625 9.02344C13.0625 9.6916 12.5898 10.3039 11.8572 10.5854C11.4018 10.7594 11.015 11.0645 10.7379 11.4641C10.4564 11.8723 10.3104 12.3621 10.3104 12.8584V13.3203C10.3104 13.4148 10.3877 13.4922 10.4822 13.4922H11.5135C11.608 13.4922 11.6854 13.4148 11.6854 13.3203V12.8326C11.6865 12.624 11.7504 12.4207 11.8688 12.249C11.9872 12.0773 12.1547 11.9453 12.3492 11.8701C13.6168 11.3824 14.4354 10.2652 14.4354 9.02344C14.4375 8.1791 14.068 7.39063 13.3977 6.8041ZM10.1406 15.7266C10.1406 15.9545 10.2312 16.1731 10.3923 16.3342C10.5535 16.4954 10.7721 16.5859 11 16.5859C11.2279 16.5859 11.4465 16.4954 11.6077 16.3342C11.7688 16.1731 11.8594 15.9545 11.8594 15.7266C11.8594 15.4986 11.7688 15.2801 11.6077 15.1189C11.4465 14.9577 11.2279 14.8672 11 14.8672C10.7721 14.8672 10.5535 14.9577 10.3923 15.1189C10.2312 15.2801 10.1406 15.4986 10.1406 15.7266Z"
      fill="currentColor"
    />
  </svg>
);
export const HomeIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8248 18.9583H5.17484C2.8915 18.9583 1.0415 17.1 1.0415 14.8167V8.64166C1.0415 7.50833 1.7415 6.08333 2.6415 5.38333L7.13317 1.88333C8.48317 0.833332 10.6415 0.783332 12.0415 1.76667L17.1915 5.375C18.1832 6.06666 18.9582 7.55 18.9582 8.75833V14.825C18.9582 17.1 17.1082 18.9583 14.8248 18.9583ZM7.89984 2.86667L3.40817 6.36666C2.8165 6.83333 2.2915 7.89166 2.2915 8.64166V14.8167C2.2915 16.4083 3.58317 17.7083 5.17484 17.7083H14.8248C16.4165 17.7083 17.7082 16.4167 17.7082 14.825V8.75833C17.7082 7.95833 17.1332 6.85 16.4748 6.4L11.3248 2.79167C10.3748 2.125 8.80817 2.15833 7.89984 2.86667Z"
      fill="currentColor"
    />
    <path
      d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65833 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
      fill="currentColor"
    />
  </svg>
);
export const InvoiceIcon = () => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.25016 12.8333L13.7502 7.33333L8.25016 12.8333ZM8.7085 7.79167H8.71766H8.7085ZM13.2918 12.375H13.301H13.2918ZM17.4168 19.25V4.58333C17.4168 4.0971 17.2237 3.63079 16.8799 3.28697C16.536 2.94315 16.0697 2.75 15.5835 2.75H6.41683C5.9306 2.75 5.46428 2.94315 5.12047 3.28697C4.77665 3.63079 4.5835 4.0971 4.5835 4.58333V19.25L7.79183 17.4167L11.0002 19.25L14.2085 17.4167L17.4168 19.25ZM9.16683 7.79167C9.16683 7.91322 9.11854 8.0298 9.03259 8.11576C8.94663 8.20171 8.83005 8.25 8.7085 8.25C8.58694 8.25 8.47036 8.20171 8.38441 8.11576C8.29845 8.0298 8.25016 7.91322 8.25016 7.79167C8.25016 7.67011 8.29845 7.55353 8.38441 7.46758C8.47036 7.38162 8.58694 7.33333 8.7085 7.33333C8.83005 7.33333 8.94663 7.38162 9.03259 7.46758C9.11854 7.55353 9.16683 7.67011 9.16683 7.79167ZM13.7502 12.375C13.7502 12.4966 13.7019 12.6131 13.6159 12.6991C13.53 12.785 13.4134 12.8333 13.2918 12.8333C13.1703 12.8333 13.0537 12.785 12.9677 12.6991C12.8818 12.6131 12.8335 12.4966 12.8335 12.375C12.8335 12.2534 12.8818 12.1369 12.9677 12.0509C13.0537 11.965 13.1703 11.9167 13.2918 11.9167C13.4134 11.9167 13.53 11.965 13.6159 12.0509C13.7019 12.1369 13.7502 12.2534 13.7502 12.375Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MessageIcon = () => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.6665 19.25V7.33334C3.6665 6.604 3.95624 5.90453 4.47196 5.3888C4.98769 4.87307 5.68716 4.58334 6.4165 4.58334H15.5832C16.3125 4.58334 17.012 4.87307 17.5277 5.3888C18.0434 5.90453 18.3332 6.604 18.3332 7.33334V12.8333C18.3332 13.5627 18.0434 14.2622 17.5277 14.7779C17.012 15.2936 16.3125 15.5833 15.5832 15.5833H7.33317L3.6665 19.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33301 8.25H14.6663"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33301 11.9167H12.833"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WalletIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.6665 7.08746H18.3332"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 13.7541H6.66667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.75 13.7541H12.0833"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.3665 2.92081H14.6248C17.5915 2.92081 18.3332 3.65414 18.3332 6.57914V13.4208C18.3332 16.3458 17.5915 17.0791 14.6332 17.0791H5.3665C2.40817 17.0875 1.6665 16.3541 1.6665 13.4291V6.57914C1.6665 3.65414 2.40817 2.92081 5.3665 2.92081Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ActivitiesIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4.63333H18.3333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.85 1.66666H16.4833C17.9667 1.66666 18.3333 2.03332 18.3333 3.49999V6.92499C18.3333 8.39166 17.9667 8.75832 16.4833 8.75832H11.85C10.3667 8.75832 10 8.39166 10 6.92499V3.49999C10 2.03332 10.3667 1.66666 11.85 1.66666Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.6665 14.2167H9.99984"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5165 11.25H8.14984C9.63317 11.25 9.99984 11.6167 9.99984 13.0833V16.5083C9.99984 17.975 9.63317 18.3417 8.14984 18.3417H3.5165C2.03317 18.3417 1.6665 17.975 1.6665 16.5083V13.0833C1.6665 11.6167 2.03317 11.25 3.5165 11.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 12.5C18.3333 15.725 15.725 18.3333 12.5 18.3333L13.375 16.875"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.6665 7.49999C1.6665 4.27499 4.27484 1.66666 7.49984 1.66666L6.62485 3.12499"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ChartIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.14292 8.5014V14.2182"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0316 5.76593V14.2182"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8568 11.5223V14.2182"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9046 1.66666H6.09508C3.37285 1.66666 1.6665 3.59339 1.6665 6.32095V13.679C1.6665 16.4066 3.36492 18.3333 6.09508 18.3333H13.9046C16.6348 18.3333 18.3332 16.4066 18.3332 13.679V6.32095C18.3332 3.59339 16.6348 1.66666 13.9046 1.66666Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const SendIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 8.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 16.5H8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 16.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 9.5V3.5L22 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 3.5L18 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ReceiveIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 8.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 16.5H8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 16.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 3.5V9.5L22 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 9.5L18 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const InvoicingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 7H16"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 11H15"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const MoreIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 17.5H20.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17.5 20.5V14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
export const LogoTextIcon = () => (
  <svg
    width={98}
    height={23}
    viewBox="0 0 98 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.54186 18.3754C13.8042 18.3754 17.0713 14.8431 17.0713 9.19385V9.16923C17.0713 3.53231 13.7917 0 8.54186 0C3.30452 0 0 3.53231 0 9.16923V9.19385C0 14.8431 3.27958 18.3754 8.54186 18.3754ZM8.54186 15.6185C5.32464 15.6185 3.27958 13.1446 3.27958 9.19385V9.16923C3.27958 5.21846 5.33711 2.75692 8.54186 2.75692C11.7591 2.75692 13.8042 5.23077 13.8042 9.16923V9.19385C13.8042 13.1077 11.7965 15.6185 8.54186 15.6185Z"
      fill="currentColor"
    />
    <path
      d="M22.8947 18.0677H26.3114L30.9627 5.02154H27.7205L24.6654 15.2246H24.5906L21.523 5.02154H18.2185L22.8947 18.0677Z"
      fill="currentColor"
    />
    <path
      d="M37.7338 18.3262C41.188 18.3262 43.1333 16.3077 43.5448 14.3015L43.5822 14.1662H40.6767L40.6518 14.2523C40.3525 15.1262 39.3425 15.9385 37.7962 15.9385C35.7761 15.9385 34.5041 14.5846 34.4543 12.2954H43.7069V11.3108C43.7069 7.37231 41.3626 4.75077 37.5842 4.75077C33.8058 4.75077 31.3742 7.45846 31.3742 11.5692V11.5815C31.3742 15.7292 33.7684 18.3262 37.7338 18.3262ZM37.6216 7.15077C39.2676 7.15077 40.4647 8.18462 40.6892 10.2523H34.4917C34.7411 8.24615 35.9756 7.15077 37.6216 7.15077Z"
      fill="currentColor"
    />
    <path
      d="M45.7146 18.0677H48.8196V10.4985C48.8196 8.56615 49.8795 7.47077 51.6378 7.47077C52.1615 7.47077 52.6353 7.54462 52.8972 7.64308V4.87385C52.6603 4.81231 52.2987 4.75077 51.9121 4.75077C50.3908 4.75077 49.2934 5.69846 48.8819 7.27385H48.8196V5.02154H45.7146V18.0677Z"
      fill="currentColor"
    />
    <path
      d="M54.4934 22.3754H57.5984V15.8646H57.6607C58.4089 17.3908 59.9177 18.3262 61.8007 18.3262C65.1177 18.3262 67.2376 15.7415 67.2376 11.5569V11.5446C67.2376 7.33538 65.1177 4.75077 61.7633 4.75077C59.8679 4.75077 58.4214 5.71077 57.6607 7.27385H57.5984V5.02154H54.4934V22.3754ZM60.8405 15.7415C58.9202 15.7415 57.5734 14.1046 57.5734 11.5569V11.5446C57.5734 8.98462 58.9202 7.33538 60.8405 7.33538C62.8232 7.33538 64.0702 8.93538 64.0702 11.5446V11.5569C64.0702 14.1292 62.8232 15.7415 60.8405 15.7415Z"
      fill="currentColor"
    />
    <path
      d="M73.1358 18.2892C74.8816 18.2892 76.353 17.4277 77.1137 16.0615H77.1885V18.0677H80.2935V9.09538C80.2935 6.47385 78.1612 4.75077 74.8567 4.75077C71.5023 4.75077 69.4697 6.48615 69.2826 8.8L69.2702 8.94769H72.1507L72.1756 8.83692C72.3752 7.87692 73.273 7.2 74.7444 7.2C76.3156 7.2 77.1885 8 77.1885 9.31692V10.2154L73.7344 10.4246C70.5296 10.6215 68.709 12.0123 68.709 14.3262V14.3508C68.709 16.6769 70.4922 18.2892 73.1358 18.2892ZM71.8015 14.2277V14.2154C71.8015 13.1815 72.637 12.5292 74.1708 12.4308L77.1885 12.2462V13.2308C77.1885 14.7815 75.8418 15.9508 74.0586 15.9508C72.6994 15.9508 71.8015 15.2985 71.8015 14.2277Z"
      fill="currentColor"
    />
    <path
      d="M84.5208 22.4C87.2767 22.4 88.8229 21.3785 89.833 18.5108L94.584 5.02154H91.3169L88.2119 15.4585H88.1246L85.0321 5.02154H81.6403L86.3913 18.08L86.2042 18.6092C85.8052 19.7046 85.1443 20.0369 83.9597 20.0369C83.5232 20.0369 83.1616 19.9754 82.9247 19.9262V22.2646C83.2988 22.3262 83.9223 22.4 84.5208 22.4Z"
      fill="currentColor"
    />
    <path
      d="M95.9557 18.2646C96.9657 18.2646 97.7514 17.4769 97.7514 16.48C97.7514 15.4954 96.9657 14.7077 95.9557 14.7077C94.9456 14.7077 94.1476 15.4954 94.1476 16.48C94.1476 17.4769 94.9456 18.2646 95.9557 18.2646Z"
      fill="currentColor"
    />
  </svg>
);
export const ArrowNarrowRight = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33334 8H12.6667"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 10.6667L12.6667 8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 5.33331L12.6667 7.99998"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const VerticalMoreIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12C4 12.5523 4.44772 13 5 13C5.55229 13 6 12.5523 6 12C6 11.4477 5.55229 11 5 11C4.44772 11 4 11.4477 4 12Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Ui8LogoIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9999 6.33997C17.8599 6.33997 17.4199 6.36998 17.4199 6.78998C17.4199 7.07998 17.6399 7.24997 17.9999 7.24997C18.3599 7.24997 18.5799 7.07998 18.5799 6.78998C18.5799 6.45998 18.2799 6.33997 17.9999 6.33997Z"
      fill="currentColor"
    />
    <path
      d="M17.9996 5.51001C18.2696 5.51001 18.4396 5.36 18.4396 5.13C18.4396 4.85 18.2096 4.76001 17.9996 4.76001C17.7896 4.76001 17.5596 4.86 17.5596 5.13C17.5596 5.36 17.7296 5.51001 17.9996 5.51001Z"
      fill="currentColor"
    />
    <path
      d="M18 2C15.9 2 14.19 3.61 14.02 5.66C14 5.77 14 5.89 14 6C14 8.21 15.79 10 18 10C18.35 10 18.68 9.96 19 9.87C20.73 9.43 22 7.86 22 6C22 3.79 20.21 2 18 2ZM18 8.20001C17.01 8.20001 16.4 7.70001 16.4 6.89001C16.4 6.50001 16.58 6.15 16.9 5.91C16.66 5.7 16.53 5.40999 16.53 5.07999C16.53 4.30999 17.12 3.79999 17.99 3.79999C18.86 3.79999 19.45 4.31999 19.45 5.07999C19.45 5.40999 19.33 5.7 19.08 5.91C19.41 6.14 19.59 6.49001 19.59 6.89001C19.6 7.70001 18.99 8.20001 18 8.20001Z"
      fill="currentColor"
    />
    <path
      d="M18 11.5C16.85 11.5 15.78 11.15 14.9 10.54C14.83 10.49 14.74 10.54 14.74 10.62L14.75 15.44C14.75 15.86 14.41 16.19 14 16.19C13.59 16.19 13.25 15.86 13.25 15.44V10.5C13.25 10.17 13.47 9.89004 13.77 9.79004C13.85 9.76004 13.9 9.65003 13.84 9.59003C13.01 8.63003 12.5 7.38004 12.5 6.01004C12.5 5.84004 12.51 5.66002 12.53 5.49002C12.53 5.45002 12.54 5.42004 12.54 5.38004C12.57 5.15004 12.45 4.93002 12.25 4.83002L11.35 4.40002C10.81 4.15002 10.19 4.15002 9.64999 4.40002L3.14999 7.46002C2.44999 7.79002 2 8.49002 2 9.27002V16.73C2 17.51 2.44999 18.21 3.14999 18.54L9.64999 21.6C10.19 21.85 10.81 21.85 11.35 21.6L17.85 18.54C18.55 18.21 19 17.51 19 16.73V12.02C19 11.71 18.71 11.47 18.4 11.49C18.27 11.5 18.14 11.5 18 11.5ZM11.75 13.5C11.75 15.02 10.52 16.25 9 16.25C7.48 16.25 6.25 15.02 6.25 13.5V10.5C6.25 10.09 6.59 9.75003 7 9.75003C7.41 9.75003 7.75 10.09 7.75 10.5V13.5C7.75 14.19 8.31 14.75 9 14.75C9.69 14.75 10.25 14.19 10.25 13.5V10.5C10.25 10.09 10.59 9.75003 11 9.75003C11.41 9.75003 11.75 10.09 11.75 10.5V13.5Z"
      fill="currentColor"
    />
  </svg>
);

export const MutualWallet = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.43997 1.67868L8.41997 1.72534L6.48664 6.21201H4.58664C4.13331 6.21201 3.69997 6.30534 3.30664 6.47201L4.47331 3.68534L4.49997 3.61868L4.54664 3.51201C4.55997 3.47201 4.57331 3.43201 4.59331 3.39868C5.46664 1.37868 6.45331 0.918676 8.43997 1.67868Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.033 6.34538C11.733 6.25204 11.413 6.21204 11.093 6.21204H6.48633L8.41966 1.72538L8.43966 1.67871C8.53966 1.71204 8.63299 1.75871 8.73299 1.79871L10.2063 2.41871C11.0263 2.75871 11.5997 3.11204 11.9463 3.53871C12.013 3.61871 12.0663 3.69204 12.113 3.77871C12.173 3.87204 12.2197 3.96538 12.2463 4.06538C12.273 4.12538 12.293 4.18538 12.3063 4.23871C12.4863 4.79871 12.3797 5.48538 12.033 6.34538Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.3475 9.46549V10.7655C14.3475 10.8988 14.3408 11.0322 14.3342 11.1655C14.2075 13.4922 12.9075 14.6655 10.4408 14.6655H5.24082C5.08082 14.6655 4.92082 14.6522 4.76749 14.6322C2.64749 14.4922 1.51415 13.3588 1.37415 11.2388C1.35415 11.0855 1.34082 10.9255 1.34082 10.7655V9.46549C1.34082 8.12549 2.15415 6.97216 3.31415 6.47216C3.71415 6.30549 4.14082 6.21216 4.59415 6.21216H11.1008C11.4275 6.21216 11.7475 6.25883 12.0408 6.34549C13.3675 6.75216 14.3475 7.99216 14.3475 9.46549Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.47301 3.6853L3.30634 6.47197C2.14634 6.97197 1.33301 8.1253 1.33301 9.4653V7.51197C1.33301 5.61864 2.67967 4.03864 4.47301 3.6853Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.3457 7.51185V9.46519C14.3457 7.99852 13.3724 6.75185 12.0391 6.35185C12.3857 5.48519 12.4857 4.80519 12.3191 4.23852C12.3057 4.17852 12.2857 4.11852 12.2591 4.06519C13.4991 4.70519 14.3457 6.01852 14.3457 7.51185Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MoneyIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.333 13.6666H4.66634C2.66634 13.6666 1.33301 12.6666 1.33301 10.3333V5.66659C1.33301 3.33325 2.66634 2.33325 4.66634 2.33325H11.333C13.333 2.33325 14.6663 3.33325 14.6663 5.66659V10.3333C14.6663 12.6666 13.333 13.6666 11.333 13.6666Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.66699 6.33325V9.66659"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.333 6.33325V9.66659"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MaximizeIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 8V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
