import { useCookies } from 'react-cookie'
import styles from '../assets/CSS/Leaderboard.module.css'

type StatProp = {
	"Name": string,
	"Trees": number
}

function Leaderboard() {
	const [cookie] = useCookies(['treesPlanted']);

	const stats: Array<StatProp> = [
		{
			"Name": "Valentina Banner",
			"Trees": 26
		},
		{
			"Name": "Maya Yan",
			"Trees": 19
		},
		{
			"Name": "Kylton Kim",
			"Trees": 9
		},
		{
			"Name": "You",
			"Trees": cookie.treesPlanted
		}
	]

	const person = stats.map((item, i) => (
		<div className={`${styles.person} ${(item.Name === 'You') ? ` ${styles.self}` : ''}`}>
			<div>
				<p className={styles.personStat}>#{i+1}</p>
				<p className={styles.personName}>{item['Name']}</p>
			</div>
			<p className={styles.personTrees}><b>Trees Planted:</b> {Math.floor(item.Trees)}</p>
		</div>
	));

	return (
		<div id={styles.leaderboard}>
			<h1>Leaderboard</h1>
			<div id={styles.board}>
				{person}
			</div>
		</div>
	)
}

export default Leaderboard