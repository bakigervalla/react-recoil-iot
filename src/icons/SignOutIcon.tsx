import { rem } from '@mantine/core';
import React, { memo } from 'react';

import { IconProps } from '@/common/interfaces';

const SignOutIcon = ({ size, style, ...others }: IconProps) => (
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
      d="M7.41602 6.29995C7.67435 3.29995 9.21602 2.07495 12.591 2.07495H12.6993C16.4243 2.07495 17.916 3.56662 17.916 7.29162V12.725C17.916 16.45 16.4243 17.9416 12.6993 17.9416H12.591C9.24102 17.9416 7.69935 16.7333 7.42435 13.7833"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5009 10H3.01758"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.87565 7.20825L2.08398 9.99992L4.87565 12.7916"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

SignOutIcon.defaultProps = {
  size: 24,
};

export default memo(SignOutIcon);
