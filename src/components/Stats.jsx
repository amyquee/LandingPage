import React from 'react'
import styles from '../style'
import { stats } from '../constants'

function Stats() {
  return (
    <div>
      <section className={`${styles.flexCenter} flex-row
      flex-wrap sm:mb-20 mb-6 flex justify-between`}>
        {stats.map((stat) => (
          <div key={stat.id} className='flex flex-1 justify-center items-center m-3'>
            <h4 className="font-poppins font-semibold text-white 
            xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{stat.value}</h4>
            <p className="font-poppins font-normal text-white
            xs:leading-[26px] leading-[21px] xs:text[20px] ml-3
            text-gradient uppercase">{stat.title}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Stats
