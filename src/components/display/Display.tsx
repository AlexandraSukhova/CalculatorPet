import styles from './Display.module.scss';

type TDisplayProps = {
  text: string;
}

export const Display = ({text}: TDisplayProps) => {
  return (
    <div className={styles.display}>
      <p>{text}</p>
    </div>
  )
}