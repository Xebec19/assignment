import React,{ useState,useEffect } from 'react';
import {
	Link
} from 'react-router-dom';

function Catalog(){
	const [items,setItems] = useState([]);
	const [load,setLoad] = useState(false);
	const [search,setSearch] = useState('');
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
	/*console.log('Check',items.data[0].item.name)*/
	
	
	if(load === true){
			const filtered = items.data.filter((item) => {
		return item.item.name.toLowerCase().includes(search.toLowerCase());
	});		console.log('filtered',filtered)
			return(
				<div>
				{console.log(items.data)}
				<input 
				type='text'
				onChange={(e) => setSearch(e.target.value)}/>
				{console.log(search)}
				{filtered.map((value,index) => {
				if(index<10) return <p key={value.itemId}>
				<Link to={`/item/${value.itemId}`}>
				{value.item.name}
				</Link>
				</p>
			})}
				</div>
			) //return ends here
			} //if ends here 
	else{
		return <h1>Loading</h1>
	}  //else ends here
}

export default Catalog;