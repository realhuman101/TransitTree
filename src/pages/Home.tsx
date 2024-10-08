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
      <button>Plant Tree</button>
    </>
  )
}

export default Home
