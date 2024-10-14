import { rem } from '@mantine/core';
import React, { memo } from 'react';

import { IconProps } from '@/common/interfaces';

const ScanIcon = ({ size, style, ...others }: IconProps) => (
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
      d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 2V22"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8.5V15.5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ScanIcon.defaultProps = {
  size: 24,
};

export default memo(ScanIcon);