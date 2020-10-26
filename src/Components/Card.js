import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className= 'tc bg-light-red ma2 grow dib dark-blue ba br3'>
			<img alt='' src={`https://robohash.org/${id}.png?set=set4`} max-width="200" max-height="200"/>
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}

export default Card;