import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {withRouter, NavLink} from 'react-router-dom';
import {Icon} from 'antd';

class FindTop extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='findTopBox'>
            <NavLink to='/find/selected'>
                <Icon type='star-o'/>
                <span>精选</span>
            </NavLink>
            <NavLink to='/find/encyclopedia'>
                <Icon type='book'/>
                <span>购物百科</span>
            </NavLink>
            <NavLink to='/find/delicious'>
                <Icon type='coffee'/>
                <span>好吃的</span>
            </NavLink>
            <NavLink to='/find/fun'>
                <Icon type='camera-o'/>
                <span>好玩的</span>
            </NavLink>
            <NavLink to='/find/nice'>
                <Icon type='eye-o'/>
                <span>好看的</span>
            </NavLink>
        </div>;
    }
}
export default withRouter(connect()(FindTop));