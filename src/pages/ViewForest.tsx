import { useCookies } from 'react-cookie'
import styles from '../assets/CSS/ViewForest.module.css'

import Wallet from '../assets/components/Wallet'
import Tree from '../assets/images/Tree.svg'
import Tree13 from "../assets/images/shop/Tree13.svg"
import Tree14 from "../assets/images/shop/Tree14.svg"
import Tree15 from "../assets/images/shop/Tree15.svg"

import SwitchPage from '../assets/scripts/switchPage';

function ViewForest() {
	const pageTransition = SwitchPage();
	const [cookies, setCookies] = useCookies(['coins', 'treesPlanted']);
	const trees = [Tree, Tree13, Tree14, Tree15];

	if (cookies.treesPlanted == undefined)
		setCookies("treesPlanted", 15);

	const forest = [];
	for (let i = 0; i < cookies.treesPlanted; i++) {
		const size = 50 + Math.random() * (200 - 50); 
		const treeType = Math.floor(Math.random() * 4);
		const left = Math.random() * 50 + "%";
		// const topVal = Math.random() * 50; 
		// const top = topVal + "%";
		// const zIndex = Math.floor(topVal/10);

		forest.push(
			<img
				className={styles.tree}
				style={{ width: size + "px", height: size + "px", left, bottom: 0 }}
				src={trees[treeType]}
				alt="Tree"
				key={i}
			/>
		);
	}

	return (
		<div id={styles.container}>
			<div id={styles.viewForest}>
				<div id={styles.forest}>
					{forest}
				</div>
				<button id={styles.shop} onClick={() => pageTransition('Shop')}>Buy Items</button>
				<Wallet/>
			</div>
		</div>
	)
}

export default ViewForest