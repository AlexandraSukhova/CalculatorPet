import { useEffect, useState } from 'react';
import styles from '../../styles/index.module.scss';
import { Calculator } from "../calculator";

export const App = () => {

	 useEffect(()=>{
	 	const theme = localStorage.getItem('theme');
		document.documentElement.className = '';
		document.documentElement.classList.add(`theme_${theme}`);
	 }, [])

	return (
		<main
			className={styles.main}>
				<Calculator/>
		</main>
	)
};