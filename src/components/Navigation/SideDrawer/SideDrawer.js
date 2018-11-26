import React from 'react'
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
var sideDrawer=(props)=>{
    var attachedClasses=[classes.sideDrawer,classes.Close]
    if (props.open){
          attachedClasses=[classes.SideDrawer,classes.Open]
    }
    return(
        <Aux>
             <Backdrop show={props.open} clicked={props.closed}> </Backdrop>
<div className={attachedClasses.join(' ')}>
   
    <div  className={classes.Logo}><Logo/></div>
    <nav><NavigationItems/>
        </nav>
       
</div>
</Aux>
    );
}
export default sideDrawer