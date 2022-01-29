import React from 'react'

export default function Button(props) {
    return (
      
        <div type="button" className="btn  Category-Title" data-value={props.name}> {props.name}
        </div>
      
    )
   
}
