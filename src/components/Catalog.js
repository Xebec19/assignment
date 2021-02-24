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
			setLoad(true);
		}
			)
		.catch(err => {
			setItems('Loading');
		})
	},[load])
	if(load === true){
			return(items.data.map(value => {
				return <p key={value.itemId}>
				<Link to={`/item/${value.itemId}`}>
				{value.item.name}
				</Link>
				</p>
			})
			) //return ends here
			} //if ends here 
	else{
		return <h1>Loading</h1>
	}  //else ends here
}

export default Catalog;