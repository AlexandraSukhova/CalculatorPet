import React, { forwardRef } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = {
	text: string;
	onClick?: any;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	isOperand?: boolean;
}

export const Button = (props: ButtonProps) => (
  <button onClick={props.onClick} type={props.type} className={clsx(styles.button, props.isOperand? styles['button-operand'] : styles['button-operator'])}>
		{props.text}
  </button>
);
