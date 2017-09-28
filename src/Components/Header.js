import React from 'react';
import SearchForm from 'react';

const Header = (props) => {

    return(
        <header className="mb-2">
            <div className="d-flex justify-content-between"> 
            {/*If user is logged in, the log out button and post form will appear*/}           
            {/*If user is logged in, print out this parapraph below*/}
            {props.loginUser && 
                <p className="nav-item">
                    Logged in as <strong>{props.loginUser.email}</strong>
                </p>}
            {props.loginUser &&
                <p>
                    {props.children}
                </p>} 
            </div>  
            <h1 className="text-center mb-2"><span>Worst Taco</span> Generator</h1>
            <hr/>
            <h3 className="text-center mb-5">Log in, vote and share your own worst combi with others to get votes!</h3>
        </header>
    )
}

export default Header;
