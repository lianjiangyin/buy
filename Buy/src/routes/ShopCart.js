import React from 'react';
import {connect} from 'react-redux'
class ShopCart extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            购物车
        </div>
    }
}
export default connect()(ShopCart);