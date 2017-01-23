import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';

const SearchBar = React.createClass({
	getInitialState(){
		return{zipcode: "", age: "", status: "", attr: "", edu: "", fAid: "", citzi: ""}
	},

	handleChange(event){
		let name = event.target.name;
		let value = event.target.value;
		this.setState({[name]: value});
	},

	makeQuery(){
		if(this.state.zipcode){
			browserHistory.push(`/search?zipcode=${this.state.zipcode}&age=${this.state.age}&status=${this.state.status}&attr=${this.state.attr}`)
			this.props.refresh ? this.props.refresh() : null;
		} else {
			alert("No zipcode entered, please enter a zip")
		}
	},

	render(){
		let imgStyle={width: 50, height: 50}
		return(
			<div>
			<div id="search">
				<input onChange={this.handleChange} type="text" name="zipcode" placeholder="Zip Code here..."></input> 
				
				<img onClick={this.makeQuery} src={require('../images/search-icon.png')} alt="search-icon" style={imgStyle} />
			</div>
			<div id="radios">
<<<<<<< HEAD
			 <input className="check" onChange={this.handleChange} type="checkbox" name="age" value="young+adult" /> Young Adult
				<input className="check" onChange={this.handleChange} type="checkbox" name="status" value="undocumented" /> Undocumented
				<input className="check" onChange={this.handleChange} type="checkbox" name="attr" value="lgbtq" />LGBTQ
				<input className="check" onChange={this.handleChange} type="checkbox" name="edu" value="education" />Education
				<input className="check" onChange={this.handleChange} type="checkbox" name="fAid" value="financial+aid+%26+Loans" />Financial Aid
				<input className="check" onChange={this.handleChange} type="checkbox" name="citzi" value="Citizenship+%26+Immigration" />Citizenship/Immigration

			
			</div>
=======
			  
			    <input id="check"  onChange={this.handleChange} type="checkbox" name="age" value="young+adult" /> Young Adult
				<input id="check"  onChange={this.handleChange} type="checkbox" name="status" value="undocumented" /> Undocumented
				<input id="check"  onChange={this.handleChange} type="checkbox" name="attr" value="lgbtq" />LGBTQ
				
		    </div>
>>>>>>> 816f6e3f9cf24d40fe5f4b2f0a7176f258abc153
	      </div>
		)
	}
});


export default SearchBar;