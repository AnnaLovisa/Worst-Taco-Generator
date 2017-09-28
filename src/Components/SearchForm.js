import React from 'react';

const SearchForm = (props) => {
        return(           
            <div className="d-flex searchInput">
                {/*<h5>Search for a taco</h5>*/}
                {/*List refereras till den skapade arrayen ovan*/}
                <input  type="text"
                        name="searchInputField"
                        onChange={props.onChange}
                        value={props.inputField} />
            </div>
        )
}



export default SearchForm;