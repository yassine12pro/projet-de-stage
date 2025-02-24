import React from 'react'
import classes from './notfound.module.css'
import { Link } from 'react-router-dom'
export default function Notfound({message , linkRoute , linkText}) {
  return (
    <div className={classes.container}>
        {message}
        <Link to={linkRoute}> {linkText}</Link>
    </div>
  )
}

Notfound.defaultProps={
    message:'Nothing Found!',
    linkRoute: '/',
    linkText: 'Go To Home Page'
}