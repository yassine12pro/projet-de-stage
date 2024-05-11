import React, { useEffect, useState } from 'react'
import classes from './foodpage.module.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getById } from '../../../services/foodservice'
import Starrating from '../../starrating/starrating'
import Tags from '../../tags/tags'
import Price from '../../price/price'
import { useCart } from '../../../hooks/useCart'
import Notfound from '../../notfound/notfound'
export default function Foodpage() {
    const [food , setFood]=useState({})
    const {id}= useParams()
    const {addToCart}= useCart()
    const navigate = useNavigate()
    const handelAddToCart=()=>{
        addToCart(food)
        navigate('/cart')
    }
    useEffect(()=>{
        getById(id).then(setFood)
    },[id])
  return (
    <>
        {!food ? (<Notfound message= "Food Not Found !"  linkText='Back To Homepage '/>) : (
            <div className={classes.container}>
                <img 
                className={classes.image}
                src={`/foodimg/${food.imgUrl}`}
                alt={food.name}
                />
                <div className={classes.detailes}>
                    <div className={classes.header}>
                        <span className={classes.name}>{food.name}</span>
                        <span
                        className={`${classes.favorite} ${
                            food.favorite ? '' :classes.not
                        }`}>
                            <i class="fa-solid fa-heart" ></i>

                        </span>

                    </div>
                    <div className={classes.rating}>
                        <Starrating stars={food.stars} size={25}/>
                    </div>
                    <div className={classes.origins}>
                        {food.origins?.map(origin =>(
                            <span key={origin}>{origin}</span>
                        ))}
                    </div>
                    <div className={classes.tags}>
                        {food.tags &&(
                            <Tags
                                tags={food.tags.map(tag =>({name : tag}))}
                                forFoodPage={true}
                            />
                        )}
                    </div>
                    <div className={classes.cook_time}>
                        <span>
                            Time to cook about <strong>{food.cooktime}</strong>minutes
                        </span>

                    </div>
                    <div className={classes.price}>
                        <Price price={food.price}/>
                    </div>
                    <button onClick={handelAddToCart}>Add To Cart</button>

                </div>
            </div>
        )}
    </>
  )
}
