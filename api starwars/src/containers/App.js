import React, { Component } from 'react';
import Results from '../components/Results';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			searchfield: '',
			results: []
		};
	}

	onSearchChange = (e) => {
		this.setState({ searchfield: e.target.value });
		let searchUrl = 'https://swapi.co/api/people/?search=' + this.state.searchfield;
		fetch(searchUrl)
			.then((r) => {
				return r.json();
			})
			.then((payload) => {
				this.setState({ results: payload.results });
			});
	};
	render() {
		const { results, searchfield } = this.state;
		const filterCharacters = results.filter((character) => {
			return character.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return (
			<div className="tc">
				<h1 className="f1">Star Wars Characters</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<Results results={filterCharacters} />
				</Scroll>
			</div>
		);
	}
}
export default App;
