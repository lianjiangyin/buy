import React from 'react';
import {connect} from 'react-redux'
class Nice extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            好看的
        </div>
    }
}
export default connect()(Nice);