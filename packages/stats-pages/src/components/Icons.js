import React from 'react';
import cls from 'classnames';
import styles from './Icons.module.scss';

const SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
  const { children, className, viewBox, ...otherProps } = props;

  return (
    <svg
      className={cls(styles.root, className)}
      viewBox={viewBox || '0 0 24 24'}
      ref={ref}
      {...otherProps}
    >
      {children}
    </svg>
  );
});

export const Logo = ({ ...otherProps }) => (
  <SvgIcon viewBox="0 0 512 512" {...otherProps}>
    <path
      d="M476.545,128.282L371.76,190.518l-114.229-67.876l-114.906,65.43v133.923l110.716,64.786h6.769
	l111.683-63.819l106.848,60.434L258.176,512L33.36,384.846V119.418L258.176,0L476.545,128.282z"
    />
  </SvgIcon>
);

export const Refresh = ({ ...otherProps }) => (
  <SvgIcon {...otherProps}>
    <path
      d="M0.6,10.9C0.6,10.9,0.6,10.9,0.6,10.9c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2
	c0-0.1,0-0.2,0-0.2c0,0,0-0.1,0-0.1V4c0-0.6,0.4-1,1-1s1,0.4,1,1v3.7l3-2.8c1-1,2.3-1.8,3.7-2.3c2.5-0.9,5.2-0.7,7.6,0.4
	c2.4,1.2,4.2,3.2,5.1,5.7c0.2,0.5-0.1,1.1-0.6,1.3c-0.5,0.2-1.1-0.1-1.3-0.6c-0.7-2-2.2-3.6-4.1-4.6c-1.9-0.9-4.1-1-6.1-0.3
	c-1.1,0.4-2.2,1-3,1.9L3.5,9H7c0.6,0,1,0.4,1,1s-0.4,1-1,1H1C0.9,11,0.7,11,0.6,10.9z M24,13.8c0-0.1,0-0.1,0-0.2
	c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0
	c-0.1,0-0.2,0-0.3-0.1c0,0,0,0,0,0h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.5l-2.8,2.7c-3.1,3.1-8.2,3.1-11.3,0c-0.8-0.8-1.5-1.9-1.9-3
	c-0.2-0.5-0.8-0.8-1.3-0.6c-0.5,0.2-0.8,0.8-0.6,1.3c0.5,1.4,1.3,2.7,2.4,3.7c2,2,4.5,2.9,7.1,2.9c2.6,0,5.1-1,7-2.9l3-2.8V20
	c0,0.6,0.4,1,1,1s1-0.4,1-1v-6C24,13.9,24,13.9,24,13.8z"
    />
  </SvgIcon>
);

export default SvgIcon;
