import React from 'react'

const CardByProps = (props) => {
  return (
    <>
        <div className="card">
            <div className="imageDiv">
                <img src={props.image} />
            </div>
            <h1 className="userName">
                {props.user} , {props.age}
            </h1>
            <p className="userBio">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, aliquid!
            </p>
            <button className="userConnect">
                Connect ME !
            </button>
        </div>
    </>
  )
}

export default CardByProps;