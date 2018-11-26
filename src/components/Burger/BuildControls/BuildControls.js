import React from "react"
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]
const buildControls=(props)=>(
   <div className={classes.BuildControls}>
<p>Current Price :{props.price}</p>
 {controls.map(ctrl=> (<BuildControl
    key ={ctrl.label} 
    label={ctrl.label} 
    type={ctrl.type} 
    added={()=>props.ingredientsAdded(ctrl.type)}
    removed={()=>props.ingredientsRemoved(ctrl.type)}
    disable={props.disabled[ctrl.type]}/>))}
    <button 
    disabled={!props.purchasable}
    onClick={props.ordered}
    className={classes.OrderButton} >Order Now</button>
  </div>
        )
export default buildControls