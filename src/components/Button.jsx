import React from 'react';

export default Button = (props) => {
	return (
		<a className={`button ${props.className}`} href='#'>
			{props.content}
		</a>
	);
};
