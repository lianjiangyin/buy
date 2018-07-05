import React from 'react';
import {connect} from 'react-redux'
class Delicious extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            好吃的
        </div>
    }
}
export default connect()(Delicious);

