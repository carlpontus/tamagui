import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}>

      <Path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" stroke={color} />
      <Path d="M14 2v4a2 2 0 0 0 2 2h4" stroke={color} />
      <_Circle cx="3" cy="17" r="1" stroke={color} />
      <Path d="M2 17v-3a4 4 0 0 1 8 0v3" stroke={color} />
      <_Circle cx="9" cy="17" r="1" stroke={color} />
    </Svg>);

};

Icon.displayName = 'FileAudio2';

export const FileAudio2 = React.memo<IconProps>(themed(Icon));