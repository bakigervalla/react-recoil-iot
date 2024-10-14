import { rem } from '@mantine/core';
import React, { memo } from 'react';

import { IconProps } from '@/common/interfaces';

const ApartmentIcon = ({ size, style, ...others }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    style={{ width: rem(size), height: rem(size), ...style }}
    {...others}
  >
    <path
      d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.3702 8.41998V19.58C17.3702 21.19 16.5702 22 14.9602 22H9.12018C7.51018 22 6.7002 21.19 6.7002 19.58V8.41998C6.7002 6.80998 7.51018 6 9.12018 6H14.9602C16.5702 6 17.3702 6.80998 17.3702 8.41998Z"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4004 6V4.15002C13.4004 2.72002 14.1204 2 15.5504 2H19.8503C21.2803 2 22.0004 2.72002 22.0004 4.15002V15.85C22.0004 17.28 21.2803 18 19.8503 18H17.3704"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 11H14"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14H14"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V19"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ApartmentIcon.defaultProps = {
  size: 24,
};

export default memo(ApartmentIcon);
