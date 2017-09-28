import React from 'react';

const PostForm = (props) => {


      return(
        <div className="d-flex-column align-content-center w-50 p-3 postForm">
        {/*Formulär för inloggade användare att lägga till en ny tacokombi-post*/}
          <form onSubmit={props.onClick}>
          <div className="form-group">
            <label htmlFor="tacoName">
              Name your taco
            </label>
            <input 
              type="tacoName" 
              className="form-control" 
              name="tacoName"
              onChange={props.handleTitleInput}
              value={props.inputTacoName} />
          </div>
          <div className="form-group">
            <label htmlFor="tacoContent">
              Type in your own taco
            </label>
            <textarea 
              type="tacoContent" 
              className="form-control" 
              name="tacoContent"
              onChange={props.handleContentInput}
              value={props.inputTacoContent}
              rows="10">
            </textarea>
          </div>
          <input  type="submit" 
                  className="postButton" 
                  value="Add new taco-post" />
        </form>
      </div>
      )
    }


export default PostForm;



    