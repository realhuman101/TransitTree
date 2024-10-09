import { useCookies } from 'react-cookie'
import Coin from '../images/Coin.svg'

function Wallet() {
	const [cookies, setCookies] = useCookies(['coins']);

	if (cookies.coins == undefined)
		setCookies("coins", 15)

	return (
		<div id="wallet">
			<img width="40px" height="40px" src={Coin} alt="TransitTree Coin" />
			<p>{cookies.coins} Coins</p>
		</div>
	)
}

export default Wallet