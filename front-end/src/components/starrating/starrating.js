import React from 'react'
import classes from './starrating.module.css'

export default function Starrating({stars,size}) {
    const styles={
        width:size+'px',
        height : size+'px',
        marginRight: size/6 +'px',
    }
    function Star({number}){
        const halfNumber = number -0.5
        return stars >= number ?(
            // <img src='' style={styles} alt={number}/>
            // <FontAwesomeIcon icon="fa-solid fa-star" />
            <i class="fa-solid fa-star" style={styles}></i>
        ): stars>=halfNumber?(
            // <img src='' style={styles} alt={number}/>
            // <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
            <i class="fa-solid fa-star-half-stroke" style={styles}></i>
        ):(
            // <img src='' style={styles} alt={number}/>
            // <FontAwesomeIcon icon="fa-regular fa-star" />
            <i class="fa-regular fa-star" style={styles}></i>
        )
    }


  return (
    <div className={classes.rating}>
        {
            [1,2,3,4,5].map(number =>(
                <Star key={number} number={number}/>
            ))
        }
    </div>
  )
}
Starrating.defaultProps={
    size:18,
}
