import { useRef } from 'react';
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
	const forestBox = useRef(null);

	if (cookies.treesPlanted == undefined)
		setCookies("treesPlanted", 15);

	const forest = useRef<JSX.Element[]>([]);

	if (forest.current.length == 0) {
		const boxSize = 350; // not assed to fix this
		const lenScale = (boxSize ? boxSize : 350)/cookies.treesPlanted;
		const midpoint = Math.floor(cookies.treesPlanted / 2);
		const minSize = 70;
		const maxSize = 200;
		for (let i = 0; i < cookies.treesPlanted; i++) {
			// const size = 50 + Math.random() * (200 - 50); 
			const size = maxSize - (Math.abs(i - midpoint) * (maxSize - minSize) / midpoint)
			const treeType = Math.floor(Math.random() * 4);
			// const left = Math.random() * 70 + "%";
			const left = (i * lenScale) - size / 2 + (minSize/2);
			// const topVal = Math.random() * 50; 
			// const top = topVal + "%";
			const zIndex = Math.ceil(Math.abs(i - midpoint));

			forest.current.push(
				<img
					className={styles.tree}
					style={{ width: size + "px", height: size + "px", left: left, bottom: 0, zIndex: zIndex }}
					src={trees[treeType]}
					alt="Tree"
					key={i}
				/>
			);
		}
	}

	return (
		<div id={styles.forestContainer}>
			<h1>Your Forest</h1>
			<div id={styles.viewForest}>
				<div id={styles.forest} ref={forestBox}>
					{forest.current}
				</div>
				<button id={styles.shop} onClick={() => pageTransition('Shop')}>Buy Items</button>
				<Wallet/>
			</div>
		</div>
	)
}

export default ViewForest