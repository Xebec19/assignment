import React,{ useState,useEffect } from 'react';
import {
  useParams,
  Link
} from "react-router-dom";
import { MdCancel } from 'react-icons/md';


function Item(){
	const [load,setLoad] = useState(false);
	const [item,setItem] = useState({});
	let { id } = useParams();
	
	const fetchRec = () => {
		fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`)
		.then(resp => resp.json())
		.then(response => {
			setLoad(true);
			setItem(response);
		})
		.catch(err => {
			setLoad(false);
		})
	}

	useEffect(() => {
		/*fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`)
		.then(resp => resp.json())
		.then(response => {
			setLoad(true);
			setItem(response);
		})
		.catch(err => {
			setLoad(false);
		})*/
		fetchRec();
	},[]);

	if(load && item){
		try {
			return(
			<div>
			<Link 
			style={{float:'right',paddingRight:'115px'}}
			to="/">
			<p>
			<MdCancel />
			</p>
			</Link>
			<br/>
			<h1>Name : {item.data.item.name}</h1>
			<h2>Description : {item.data.item.description}</h2>
			<h2>Cost : {item.data.item.cost}</h2>
			<br/>
			</div>
			)
			}
		catch(err){
			return <h1>Snap</h1>
		}
	}
	else{
		return <h1>Loading</h1>
	}
}

export default Item;