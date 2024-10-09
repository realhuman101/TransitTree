import { useCookies } from 'react-cookie'

function Wallet() {
	const [cookies] = useCookies(['coins']);

	return (
		<div id="wallet">
			<img src="../images/Coin.svg" alt="TransitTree Coin" />
			<p>{cookies.coins} Coins</p>
		</div>
	)
}

export default Wallet