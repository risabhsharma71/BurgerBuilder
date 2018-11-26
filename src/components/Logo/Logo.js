import React from 'react'
import burgerLogo from '../../assets/images/images.jpeg'
import classes from './Logo.css'
const logo=(props)=>(
<div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurgrer"/>
    </div>
)
export default logo;