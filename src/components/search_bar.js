import React, {Component} from 'react';
import { BrowserRouter, Switch,Link } from 'react-router-dom'
//import { Link } from "react-router";
class SearchBar extends Component{
		constructor(props){
			super(props);
			this.state = {term:''};
		}
	render(){

		return (
			<div>
				<input onChange={event =>
				this.onInputChange(event.target.value)}/> 
				value of input: {this.state.term}
				<Link to="/detail">hello</Link>
			</div>

		);

	}

	onInputChange(term){
		 this.setState({term})
		 this.props.onSearchtermChange(term);
	}

}


export default SearchBar;