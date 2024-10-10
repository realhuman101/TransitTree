import { useCookies } from 'react-cookie'
import styles from '../assets/CSS/ViewForest.module.css'

import Wallet from '../assets/components/Wallet'
import Tree from '../assets/images/Tree.svg'
import Tree13 from "../assets/images/shop/Tree13.svg"
import Tree14 from "../assets/images/shop/Tree14.svg"
import Tree15 from "../assets/images/shop/Tree15.svg"

import switchPage from '../assets/scripts/switchPage';

function ViewForest() {
	const [cookies, setCookies] = useCookies(['coins', 'treesPlanted']);
	const trees = [Tree, Tree13, Tree14, Tree15];

	if (cookies.treesPlanted == undefined)
		setCookies("treesPlanted", 15);

	const forest = []
	for (let i = 0; i < cookies.treesPlanted; i++) {
		const size = 45 + Math.random()*(70-45);
		const tree = Math.floor(Math.random()*3);
		forest.push(<img className={styles.tree} width={size+"px"} height={size+"px"}  src={trees[tree]}/>)
	}

	return (
		<div id={styles.container}>
			<div id={styles.viewForest}>
				<div id={styles.forest}>
					{forest}
				</div>
				<button id={styles.shop} onClick={() => switchPage('Shop')}>Buy Items</button>
				<Wallet/>
			</div>
		</div>
	)
}

export default ViewForest