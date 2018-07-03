import React from 'react';
import {connect} from 'react-redux'
class Find extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            发现
        </div>
    }
}
export default connect()(Find);