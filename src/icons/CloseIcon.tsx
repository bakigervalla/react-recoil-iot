import { rem } from '@mantine/core';
import React, { memo } from 'react';

import { IconProps } from '@/common/interfaces';

const CloseIcon = ({ size, style, ...others }: IconProps) => (
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
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      fill="#0A0A0A"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.16992 14.8299L14.8299 9.16992"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8299 14.8299L9.16992 9.16992"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CloseIcon.defaultProps = {
  size: 24,
};

export default memo(CloseIcon);