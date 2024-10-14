import { rem } from '@mantine/core';
import React, { memo } from 'react';

import { IconProps } from '@/common/interfaces';

const CompanyIcon = ({ size, style, ...others }: IconProps) => (
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
      d="M12.4997 22.0003H4.07973C2.91973 22.0003 1.96973 21.0703 1.96973 19.9303V5.09035C1.96973 2.47035 3.91973 1.28035 6.30973 2.45035L10.7497 4.63035C11.7097 5.10035 12.4997 6.35035 12.4997 7.41035V22.0003Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.97 15.0599V18.8399C21.97 20.9999 20.97 21.9999 18.81 21.9999H12.5V10.4199L12.97 10.5199L17.47 11.5299L19.5 11.9799C20.82 12.2699 21.9 12.9499 21.96 14.8699C21.97 14.9299 21.97 14.9899 21.97 15.0599Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 9H8.97"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 13H8.97"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4697 11.53V14.75C17.4697 15.99 16.4597 17 15.2197 17C13.9797 17 12.9697 15.99 12.9697 14.75V10.52L17.4697 11.53Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.9597 14.8703C21.8997 16.0503 20.9197 17.0003 19.7197 17.0003C18.4797 17.0003 17.4697 15.9903 17.4697 14.7503V11.5303L19.4997 11.9803C20.8197 12.2703 21.8997 12.9503 21.9597 14.8703Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CompanyIcon.defaultProps = {
  size: 24,
};

export default memo(CompanyIcon);
