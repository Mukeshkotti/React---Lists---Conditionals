import React from 'react';

const validation = (props) => {
   let validationMsg = null;
    if(props.stringLength < 5){
       validationMsg =  <p>Text too short</p>
    } else {
        validationMsg =  <p>Text too enough</p>
    }

    return (
        <div>
            {validationMsg}
        </div>
    )
}

export default validation;