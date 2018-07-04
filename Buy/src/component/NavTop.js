import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon} from 'antd';
import action from '../store/action/index';
/*TRANSITION*/
import Transition from 'react-transition-group/Transition';

class NavTop extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return <header className='headerNavBox'>
            {/*首页的导航*/}
            <div className="baseBox">
                <div className='homeBox'>
                    <Icon type="left"/>
                    <span>{this.props.title}</span>
                    <Icon type="ellipsis"/>
                </div>
            </div>
        </header>;
    }
}

export default withRouter(connect(null, action.course)(NavTop));