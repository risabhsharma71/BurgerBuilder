import React from 'react'
import Classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger=(props)=>{
 let transformedIngredients=Object.keys(props.ingredients).map(igkey=>{
     return[...Array(props.ingredients[igkey])].map((_,i)=>{
       return     <BurgerIngredient type={igkey} key={igkey+i} />
     })
 }).reduce((arr,el)=>{
     return arr.concat(el)
 },[]);
   console.log(transformedIngredients)
   if(transformedIngredients.length===0){
              transformedIngredients=<p>"Please start adding Ingredients"</p>
   } 
   return(
    <div className={Classes.Burger}>

    <BurgerIngredient type="bread-top" />
        {transformedIngredients}
    <BurgerIngredient type="bread-bottom" />
    </div>
)}
export default burger;