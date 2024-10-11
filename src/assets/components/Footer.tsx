import Home from '../images/Home.svg'
import Leaderboard from '../images/Leaderboard.svg'
import Shop from '../images/Shop.svg'
import Forest from '../images/Forest.svg'
import Route from '../images/Route.svg'
import SwitchPage from '../scripts/switchPage';

function Footer() {
	const pageTransition = SwitchPage();

	return (
		<div id="footer">
			<button onClick={() => pageTransition('')}><img id="homeIcon" width="30px" height="30px" color='#fff' src={Home}/></button>
			<button onClick={() => pageTransition('RoutePlan')}><img id="homeIcon" width="30px" height="30px" color='#fff' src={Route}/></button>
			<button onClick={() => pageTransition('ViewForest')}><img id="homeIcon" width="30px" height="30px" color='#fff' src={Forest}/></button>
			<button onClick={() => pageTransition('Shop')}><img id="homeIcon" width="30px" height="30px" color='#fff' src={Shop}/></button>
			<button onClick={() => pageTransition('Leaderboard')}><img id="homeIcon" width="30px" height="30px" color='#fff' src={Leaderboard}/></button>
			{/* <p>TransitTree Demo</p> */}
			<p id="footerCredit"><div>Made by <a href="https://realhuman101.github.io" target="_blank">Valentina Banner</a></div></p>
		</div>
	)
}

export default Footer