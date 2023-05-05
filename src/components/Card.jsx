import React from 'react'

const Card = ({image, userName, userStatus, userWriteUp, testimonyHeader, cardNumber}) => {
  return (
    <div className={`card ${cardNumber}`}>
        <article className='card__article flex'>
            <header className='card__header flex'>
                <img src={image} alt='user-img' className='card__img'/>
                <div className='user-details'>
                    <h5>{userName}</h5>
                    <p className='card__user-status'>{userStatus}</p>
                </div>
            </header>
            <h3 className='card__testimony-header'>{testimonyHeader}</h3>
            <p className='card__user-write-up'>{userWriteUp}</p>
        </article>
    </div>
  )
}

export default Card