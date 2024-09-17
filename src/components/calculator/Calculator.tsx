import { FormEvent, useState } from "react";
import styles from './Calculator.module.scss';
import { Button } from "../button";
import { Display } from "../display";
import { OptionElement } from "../option";
import { theme } from "../../constants/constant";

export const Calculator = () => {
  const [countOne, setCountOne] = useState('');
	const [countTwo, setCountTwo] = useState('');
	const [result, setResult] = useState(0);
	const [operator, setOperator] = useState<string | null>(null);
	const numbers: String[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
	const operators: string[] = ['+', '–', 'x', '/'];
	const [error, setError] = useState<string | null>(null);

		function createOperand (e: MouseEvent) {
			const button = e.target as HTMLButtonElement;
			setError(null);
			!operator? setCountOne(prev => {
				if(prev.includes('.')) {
				(button.textContent === '.') && setCountOne(prev)
				}
				return prev + button.textContent})
			: setCountTwo(prev => {
				if(prev.includes('.')) {
				(button.textContent === '.') && setCountTwo(prev)
				}
				return prev + button.textContent});
	}

	function getOperator(e: MouseEvent) {
		const button = e.target as HTMLButtonElement;
		setOperator(button.textContent)
	}

	function onSubmit(e: FormEvent) {
		e.preventDefault();

		const promis = new Promise<number>((resolve, reject) => {
			setTimeout(() => {
				switch(operator) {
					case '+':
						resolve(Number(countOne) + Number(countTwo));
						break;
					case '–':
						resolve(Number(countOne) - Number(countTwo));
						break;
					case '/':
						Number(countTwo) === 0? reject('error!') : resolve(Number(countOne) / Number(countTwo));
						break;
					case 'x':
						resolve(Number(countOne) * Number(countTwo));
						break
				}
			}, 300)
		})

		promis.then(res => {setResult(res); setCountOne(String(res)); setCountTwo(''); setOperator(null)})
		.catch(res => {setError(res); setCountTwo('')});

	}

		function onReset(e: FormEvent) {
			e.preventDefault();
			setCountOne('');
			setCountTwo('');
			setResult(0);
			setOperator(null);
		}

		function changeTheme(option: string) {
			document.documentElement.className = '';
			document.documentElement.classList.add(`theme_${option}`);
			localStorage.setItem('theme', option);
		}

    return (
      <div className={styles.calculator}>
        <span className={styles.display}>
        <Display text={(countOne? countOne : '0') + (operator? operator : '') + (countTwo? countTwo : '')}/>
        </span>
      <span className={styles.error}>{error? error : ''}</span>
      <ul className={styles.operands}>
        {numbers.map(num => (<Button text={`${num}`} onClick={createOperand} isOperand={true} key={`${num}`}/>))}
        <Button text={`☺`} isOperand={true} key={`pick`}/>
      </ul>
      <ul className={styles.operators}>
        {operators.map(el => (<Button text={`${el}`} onClick={getOperator} key={el} isOperand={false}/>))}
      </ul>
      <form onSubmit={onSubmit} onReset={onReset} className={styles.result_buttons}>
      <Button text={'='} type="submit"/>
      <Button text={'AC'} type="reset"/>
      </form>
			<div className={styles.options}>
				{theme.map(el => (<OptionElement onChange={changeTheme} className={styles[el]} option={el} ></OptionElement>))}
			</div>
      </div>
    )
}