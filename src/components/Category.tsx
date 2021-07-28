import React from 'react';
import { CategoryProps } from '../types';
import classes from '../styles/emoji-picker.module.css';
import withTooltip from '../helpers/with-tooltip';
import { useState } from 'react';

const Category: React.FC<CategoryProps> = ({
  IconOutlined,
  IconFilled,
  isSelected,
  onSelect,
  className,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const Icon = isSelected || isHovering ? IconFilled : IconOutlined;

  return (
    <Icon
      className={`${classes.category} ${className}`}
      onClick={onSelect}
      onMouseEnter={setIsHovering.bind(null, true)}
      onMouseLeave={setIsHovering.bind(null, false)}
    />
  );
};

export default withTooltip(Category, classes['category-container']);
