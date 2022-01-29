import React from 'react'

export default function Article(props) {
    return (
       <div className="card col-md-4" >
  <img src={props.name.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.name.title}</h5>
    <p className="card-text">{props.name.description}</p>
    <a href={props.name.url} className="btn">read more</a>
  </div>
</div>

    )
}