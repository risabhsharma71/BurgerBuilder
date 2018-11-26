import React,{Component} from 'react'
 import Aux from '../../hoc/Aux'
 import Burger from '../../components/Burger/Burger'
 import BuildControls from '../../components/Burger/BuildControls/BuildControls'
 import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
 const INGRIDIENT_PRICES={
  salad:0.5,
  cheese:0.4,
  meat:1.3,
  bacon:0.7
}
 class BurgerBuilder extends Component{

  state={
  ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0
  },
  totalPrice:4,
  purchasable:false,
  purchasing:false
  }
  updatePurchaseState(ingredients){
     const sum = Object.values(ingredients).map(igvalue=>{return igvalue}).reduce((sum, el)=>{
       console.log("sum===================>",sum+el)
       return sum+el
     },0)
     this.setState({purchasable:sum>0})
  }
  
  addIngredientHandler=(type)=>{
   const oldCount=this.state.ingredients[type]
   const updatedCount=oldCount+1
   const updatedIngreidents={...this.state.ingredients}
   updatedIngreidents[type]=updatedCount
 const priceAddition=INGRIDIENT_PRICES[type]
const oldPrice=this.state.totalPrice
 const newPrice=oldPrice+priceAddition
 this.setState({totalPrice:newPrice,ingredients:updatedIngreidents})
 this.updatePurchaseState(updatedIngreidents);  
  }

  deleteIngredientHandler=(type)=>{
    {
      const oldCount=this.state.ingredients[type]
      if(oldCount<=0){
        return;
      }
      const updatedCount=oldCount-1
      const updatedIngreidents={...this.state.ingredients}
      updatedIngreidents[type]=updatedCount
    const priceAddition=INGRIDIENT_PRICES[type]
   const oldPrice=this.state.totalPrice
    const newPrice=oldPrice-priceAddition
    this.setState({totalPrice:newPrice,ingredients:updatedIngreidents})
    this.updatePurchaseState(updatedIngreidents);  
  } 
  }
  
  purchaseHandler=()=>{
    this.setState({purchasing:true})
  }
  purchaseCancelHandler=()=>{
    this.setState({purchasing:false})
  }
  purchaseContinueHandler=()=>{
    alert("you continue")
  }
  render(){
    const disabledInfo={...this.state.ingredients}
   for(let key in disabledInfo){
     disabledInfo[key]=disabledInfo[key]<=0
     console.log(disabledInfo[key])
   }
    return(
          <Aux>
            <Modal 
            modalClosed={this.purchaseCancelHandler} 
            show={this.state.purchasing}>
             <OrderSummary
                 purchaseCanceled={this.purchaseCancelHandler}
                 purchaseContinue={this.purchaseContinueHandler}
                 ingredients={this.state.ingredients}
                 price={this.state.totalPrice}>
            </OrderSummary> 
              </Modal>
            <Burger 
             ingredients={this.state.ingredients}/>
                     <BuildControls 
           ingredientsAdded={this.addIngredientHandler} 
           ingredientsRemoved={this.deleteIngredientHandler} 
           disabled={disabledInfo}
            price={this.state.totalPrice} 
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}/>
          </Aux>  
        )
    }
     

}
export default BurgerBuilder;