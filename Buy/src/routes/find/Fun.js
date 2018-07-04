import React from 'react';
import {connect} from 'react-redux'
class Fun extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            好玩的
        </div>
    }
}
export default connect()(Fun);