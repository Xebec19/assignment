import React,{ useState,useEffect } from 'react';
import {
	Link
} from 'react-router-dom';

function Catalog(){
	const [items,setItems] = useState([]);
	const [load,setLoad] = useState(false);
	useEffect(() => {
		fetch('https://fortnite-api.theapinetwork.com/store/get')
		.then(resp => resp.json())
		.then(response => {
			setItems(response);
			console.log(items);
			setLoad(true);
		}
			)
		.catch(err => {
			setItems('Loading');
			console.log(err);
		})
	},[load])
	var elem;
	if(load === true){
			console.log(items.data);
			return(items.data.map(value => {
				return <p key={value.itemId}>
				<Link to={`/item/${value.itemId}`}>
				{value.item.name}
				</Link>
				</p>
			})
			) //return ends here
			}
	else{
		return <h1>Loading</h1>
	}
}

export default Catalog;