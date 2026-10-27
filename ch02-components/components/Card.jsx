import React from 'react'

const Card = () => {
    let user = 'dsg';
    let user_age = 22;
  return (
    <div className='card'>
        <h1>
            Hello I am {user}
        </h1>
        <h2>
            and I'm {user_age} years old !
        </h2>
    </div>
  )
}

export default Card;