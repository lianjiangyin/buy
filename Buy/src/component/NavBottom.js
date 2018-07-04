import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import {Icon} from 'antd';

class NavBottom extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <footer className='footerNavBox'>
            <NavLink to='/home'>
                <Icon type='home'/>
                <span>首页</span>
            </NavLink>
            <NavLink to='/classify'>
                <Icon type='solution'/>
                <span>分类</span>
            </NavLink>
            <NavLink to='/find'>
                <Icon type='compass'/>
                <span>发现</span>
            </NavLink>
            <NavLink to='/shopcart'>
                <Icon type='shopping-cart'/>
                <span>购物车</span>
            </NavLink>
            <NavLink to='/login'>
                <Icon type='user'/>
                <span>未登录</span>
            </NavLink>
        </footer>;
    }
}

export default withRouter(connect()(NavBottom));