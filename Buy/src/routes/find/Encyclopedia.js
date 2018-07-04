import React from 'react';
import {connect} from 'react-redux'
class Encyclopedia extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            购物百科
        </div>
    }
}
export default connect()(Encyclopedia);