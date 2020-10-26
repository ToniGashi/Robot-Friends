import React from 'react';
import CardList from '../Components/CardList.js';
import {robots} from '../Robots.js';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
import '../App.css'


class App extends React.Component{
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(result => result.json() )
			.then(users => this.setState({robots:users}));
		this.setState({robots:robots});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {

		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		return (
			<div className='tc '>
				<h1> Cat Friends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;