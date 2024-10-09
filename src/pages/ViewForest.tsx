import { useCookies } from 'react-cookie'

import Wallet from '../assets/components/Wallet'

function ViewForest() {
	const [cookies, setCookies] = useCookies(['coins', 'treesPlanted']);

	if (cookies.coins == undefined)
		setCookies("coins", 15)

	return (
		<>
			<Wallet/>
		</>
	)
}

export default ViewForest