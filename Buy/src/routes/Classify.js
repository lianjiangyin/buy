import React from 'react';
import {connect} from 'react-redux'
class Classify extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            分类
        </div>
    }
}
export default connect()(Classify);