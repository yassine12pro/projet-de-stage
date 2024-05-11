import React from 'react'
import classes from './thumbnails.module.css'
import { Link } from 'react-router-dom'
import Starrating from '../starrating/starrating'
import Price from '../price/price'
export default function Thumbnails({foods}) {
  return (
    <ul className={classes.list}>
        {foods.map(food=>(
            <li key={food.id}>
                <Link to={`/food/${food.id}`} >
                    <img
                        className={classes.image}
                        src={`/foodimg/${food.imgUrl}`}
                        alt={food.name}
                    />
                
                <div className={classes.content}>
                    <div className={classes.name}>{food.name}</div>
                    <span className={`${classes.favorite} ${food.favorite ? '' : classes.not}`}>
                        <i class="fa-solid fa-heart" ></i>

                    </span>
                    <div className={classes.stars}>
                        <Starrating stars={food.stars}/>
                    </div>
                    <div className={classes.product_item_footer}>
                        <div className={classes.origins}>
                            {food.origins.map(origin =>(
                                <span key={origin}>{origin}</span>
                            ))}
                        </div>
                        <div className={classes.cook_time}>
                            🕗
                            {food.cooktime}
                        </div>

                    </div>
                    <div className={classes.price}>
                            <Price price={food.price}/>
                    </div>
                </div>
                </Link>
            </li>
        ))}
    </ul>
  )
}
