import { useCookies } from 'react-cookie'

import Wallet from '../assets/components/Wallet'
import Tree from '../assets/images/Tree.svg'

import switchPage from '../assets/switchPage';

function ViewForest() {
	const [cookies, setCookies] = useCookies(['coins', 'treesPlanted']);

	if (cookies.treesPlanted == undefined)
		setCookies("treesPlanted", 15);

	const forest = []
	for (let i = 0; i < cookies.treesPlanted; i++) {
		const size = 45 + Math.random()*(70-45);
		forest.push(<img className="tree" width={size+"px"} height={size+"px"}  src={Tree}/>)
	}

	return (
		<>
			<Wallet/>
			<div id="forest">
				{forest}
			</div>
			<button id="shop" onClick={() => switchPage('Shop')}>Buy Items</button>
		</>
	)
}

export default ViewForest