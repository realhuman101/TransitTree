import '../assets/CSS/Shop.css'

import Coin from "../assets/images/Coin.svg"
import Tree from "../assets/images/Tree.svg"
import Tree2 from "../assets/images/shop/Tree2.svg"
import Tree3 from "../assets/images/shop/Tree3.svg"
import Tree4 from "../assets/images/shop/Tree4.svg"
import Tree5 from "../assets/images/shop/Tree5.svg"
import Tree6 from "../assets/images/shop/Tree6.svg"
import Tree7 from "../assets/images/shop/Tree7.svg"
import Tree8 from "../assets/images/shop/Tree8.svg"
import Tree9 from "../assets/images/shop/Tree9.svg"
import Tree10 from "../assets/images/shop/Tree10.svg"
import Tree11 from "../assets/images/shop/Tree11.svg"
import Tree12 from "../assets/images/shop/Tree12.svg"
import Tree13 from "../assets/images/shop/Tree13.svg"
import Tree14 from "../assets/images/shop/Tree14.svg"
import Tree15 from "../assets/images/shop/Tree15.svg"

const shopItems = [
	{
		"Icon": Tree,
		"Cost": 100,
		"Owned": true
	},
	{
		"Icon": Tree13,
		"Cost": 100,
		"Owned": true
	},
	{
		"Icon": Tree14,
		"Cost": 100,
		"Owned": true
	},
	{
		"Icon": Tree15,
		"Cost": 100,
		"Owned": true
	},
	{
		"Icon": Tree2,
		"Cost": 100,
		"Owned": false
	},
	{
		"Icon": Tree3,
		"Cost": 150,
		"Owned": false
	},
	{
		"Icon": Tree4,
		"Cost": 200,
		"Owned": false
	},
	{
		"Icon": Tree5,
		"Cost": 250,
		"Owned": false
	},
	{
		"Icon": Tree6,
		"Cost": 300,
		"Owned": false
	},
	{
		"Icon": Tree7,
		"Cost": 350,
		"Owned": false
	},
	{
		"Icon": Tree8,
		"Cost": 400,
		"Owned": false
	},
	{
		"Icon": Tree9,
		"Cost": 450,
		"Owned": false
	},
	{
		"Icon": Tree10,
		"Cost": 500,
		"Owned": false
	},
	{
		"Icon": Tree11,
		"Cost": 600,
		"Owned": false
	},
	{
		"Icon": Tree12,
		"Cost": 700,
		"Owned": false
	}
]

function Shop() {
	const items = []
	for (const item of shopItems)
		items.push(<div className='shopItem' data-owned={item.Owned}><img className='itemIcon' src={item.Icon}/><div className='costBox'><img className='coin' src={Coin}/><p>{item.Cost}</p></div></div>)

	return (
		<>
			<h1>Shop</h1>
			<div id="shop">
				{items}
			</div>
		</>
	)
}

export default Shop