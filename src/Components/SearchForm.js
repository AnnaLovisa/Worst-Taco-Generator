import React from 'react';

const SearchForm = (props) => {
        return(           
            <div className="d-flex searchInput">
                <input  type="text"
                        name="searchInputField"
                        onChange={props.onChange}
                        placeholder="Search for a taco"
                        value={props.inputField} />
            </div>
        )
}



export default SearchForm;