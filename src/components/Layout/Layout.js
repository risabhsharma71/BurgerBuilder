import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
 state={
     showSideDrawer:true
 }
    SideDrawerClosedHandler=()=>{
    this.setState({showSideDrawer:false})
 }

    render(){
   return(
   <Aux>
    <div><Toolbar/>
    <SideDrawer
    open={this.state.showSideDrawer}
    closed={this.SideDrawerClosedHandler}/> Backdrop</div>
    <main className={classes.Content}>
        {this.props.children}
        </main>
</Aux>
)
}
}
export default Layout;