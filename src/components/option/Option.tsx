import { useEffect, useRef, useState } from "react";
import styles from "./Option.module.scss"
import clsx from "clsx";

type OptionProps = {
 option: string;
 className?: string;
 onChange: (option: string) => void;
}

export const OptionElement = ({option, className, onChange}: OptionProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const[isDisabled, setIsDisabled] = useState(false);
  const theme = localStorage.getItem('theme');

  const onClick = () => {
   if (ref.current?.getAttribute('data-theme')){onChange(ref.current?.getAttribute('data-theme') as string)} 
  }

  useEffect(()=>{
    if(theme === ref.current?.getAttribute('data-theme')) {
      setIsDisabled(true);
    }
  }, []);

  return (<button className={clsx(styles.option, className)} ref={ref} data-theme={option} disabled={isDisabled? true : false} onClick={onClick}>

  </button>)
}