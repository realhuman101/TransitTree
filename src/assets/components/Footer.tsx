import { useLocation } from 'react-router-dom'
import Home from '../images/Home.svg'
import SwitchPage from '../scripts/switchPage';

function Footer() {
	const location = useLocation().pathname;
	const pageTransition = SwitchPage();

	return (
		<div id="footer">
			{location != "#/TransitTree" && <button onClick={() => pageTransition('')}><img id="homeIcon" width="30px" height="30px" color='#fff' src={Home}/></button>}
			<p>TransitTree Demo</p>
			<p id="footerCredit"><div>Made by <a href="https://realhuman101.github.io" target="_blank">Valentina Banner</a></div></p>
		</div>
	)
}

export default Footer