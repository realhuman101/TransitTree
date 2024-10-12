import { useCookies } from 'react-cookie';

import Wallet from '../assets/components/Wallet';
import styles from '../assets/CSS/Home.module.css'
import Tree from '../assets/images/Tree.svg'
import { useEffect } from 'react';
import SwitchPage from '../assets/scripts/switchPage';

function Home() {
	const [cookies, setCookies] = useCookies(['CO2amt', 'treesPlanted']);
	const pageTransition = SwitchPage();

	useEffect(() => {
		if (cookies.CO2amt == undefined || cookies.CO2amt < 500000) {
			setCookies("CO2amt", 500000);
		}

		setCookies("treesPlanted", cookies.CO2amt/100000);
	}, [cookies, setCookies]);
	
	return (
		<div id={styles.homepage}>
			<div id={styles.CO2text}>
				<h1 id={styles.CO2tons}>{Math.floor(cookies.CO2amt ? cookies.CO2amt : 500000).toLocaleString()}</h1>
				<h1>Kg of Carbon Emissions Reduced</h1>
			</div>
			<div id={styles.treeBox}>
				<img src={Tree} width='150px'/>
				<h3>{Math.floor(cookies.treesPlanted ? cookies.treesPlanted : 500000).toLocaleString()} Trees Planted</h3>
			</div>
			<div id={styles.buttons}>
				<button className={styles.button} onClick={() => {
					pageTransition('RoutePlan');
				}}>Plan New Route</button>
				
				<button className={styles.button} onClick={() => {
					pageTransition('ViewForest');
				}}>View Forest</button>
				<button className={styles.button} onClick={() => {
					pageTransition('Shop');
				}}>Buy Items</button>
			</div>
			<Wallet/>
		</div>
	)
}

export default Home
