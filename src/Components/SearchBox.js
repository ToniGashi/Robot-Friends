import React from 'react';

const SearchBox = (props) => {
	return (
		<div className ='pa2'>
			<input 
				type='text'
				placeholder="search cats"
				className = 'bg-light-green pa2 calisto b--navy br3'
				onChange = {props.searchChange}
			/>
		</div>
	);

}

export default SearchBox;