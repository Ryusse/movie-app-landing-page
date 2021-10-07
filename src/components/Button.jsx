import React from 'react';

const Button = (props) => {
    return (
        <a className={`button ${props.className}`} href="#">{props.content}</a>
    );
}

export default Button;
