import React from 'react'
import styles, { layout } from '../style'
import { card } from '../../assets'

function CardDeal() {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Find a better card deal 
        <br className='sm:block hidden'/>
        in few easy steps</h2>
        <p className={`${styles.paragraph} mt-10`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita accusantium repudiandae quae eius deleniti nesciunt ea quam id ex tenetur.</p>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} className='w-[100%] h-[100%]' alt="" />
      </div>
    </section>
  )
}

export default CardDeal
