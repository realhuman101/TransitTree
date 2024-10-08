import '../assets/CSS/Home.css'
import Tree from '../assets/images/Tree.svg'

function Home() {
  return (
    <>
      <div id="CO2text">
        <h1 id="CO2tons">500 Tons</h1>
        <h1>of Carbon Emissions Reduced</h1>
      </div>
      <img src={Tree} width='100px'/>
      <h3>5 Trees Planted</h3>
      <div id="buttons">
        <button onClick={() => {
          window.location.href = '/TransitTree/RoutePlan/'
        }}>Plan New Route</button>
        <button>View Forest</button>
      </div>
    </>
  )
}

export default Home
