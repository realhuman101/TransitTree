import { useLocation } from 'react-router-dom'
import Home from '../images/Home.svg'

function Footer() {
	const location = useLocation().pathname;
	return (
		<div id="footer">
			{location != "#/TransitTree" && <a href="#/TransitTree/"><img id="homeIcon" width="30px" height="30px" color='#fff' src={Home}/></a>}
			<p>TransitTree Demo</p>
			<p id="footerCredit"><div>Made by <a href="https://realhuman101.github.io" target="_blank">Valentina Banner</a></div></p>
		</div>
	)
}

export default Footer