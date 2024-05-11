import React from 'react'
import classes from './profile.module.css'
// import userimage from '../../../../public/foodimg/user.png'
export default function ProfilePage() {
   const User={
        name:"Yassine",
        lastname:"Belkhiria",
        age:20,
        position:"random"
    }
  return (
    <div  className={classes.container}>
        <div className={classes.leftside}>
            <h1 className={classes.name}>{User.name}</h1>
            <img src={`/foodimg/user.png`}  alt='user'/>
        </div>
        <div className={classes.rightside}>
            <ul>
                <li>FirstName : <span>{User.name}</span> </li>
                <li>LastName : <span>{User.lastname}</span></li>
                <li>Age : <span>{User.age}</span></li>
                <li>Position : <span>{User.position}</span></li>
            </ul>
        </div>
    </div>
  )
}
