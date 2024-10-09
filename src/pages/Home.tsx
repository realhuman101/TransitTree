import { useCookies } from 'react-cookie';

import Wallet from '../assets/components/Wallet';
import styles from '../assets/CSS/Home.module.css'
import Tree from '../assets/images/Tree.svg'

function Home() {
  const [cookies, setCookies] = useCookies(['CO2amt', 'treesPlanted']);

  if (cookies.CO2amt == undefined)
    setCookies("CO2amt", 500);

  setCookies("treesPlanted", cookies.CO2amt/100);

  return (
    <div id={styles.homepage}>
      <Wallet/>
      <div id={styles.CO2text}>
        <h1 id={styles.CO2tons}>{cookies.CO2amt} Tons</h1>
        <h1>of Carbon Emissions Reduced</h1>
      </div>
      <img src={Tree} width='100px'/>
      <h3>{cookies.treesPlanted} Trees Planted</h3>
      <div id={styles.buttons}>
        <button onClick={() => {
          window.location.href = '#/TransitTree/RoutePlan/'
        }}>Plan New Route</button>
        
        <button onClick={() => {
          window.location.href = '#/TransitTree/ViewForest/'
        }}>View Forest</button>
      </div>
    </div>
  )
}

export default Home
