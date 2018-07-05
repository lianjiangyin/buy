import React, {Component} from 'react';
import {connect} from 'react-redux';
// import ReactDOM, {render} from 'react-dom';
import {Tabs, Radio, Icon, Input} from 'antd';
// import mountNode from 'react-router-dom';
import NavTop from '../component/NavTop'
import '../static/css/Classify.less';
import ClassifyOne from '../component/ClassifyOne';
import HotSearch from '../component/HotSearch';


const TabPane = Tabs.TabPane;
const Search = Input.Search;

class Classify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
            title: '分类',
            change:true,
        };
    }
    clickInput=()=>{
        this.setState({change:true})
    }

    handle=()=> {
        this.props.history.go(-1)
    }

    render() {
        const {mode,change} = this.state;
        return (
            <div>
                <div className="searchBox">
                    <Icon className="icon iconLeft"  type="left" onClick={this.state.change===false?this.handle:()=>this.setState({change:false})}/>
                    <div className="searchInput">
                        <Icon className="icon iconSearch" type="search" />
                        <input className="search" type="text" onClick={this.clickInput}/>
                    </div>
                    <Icon className="icon iconRight" type="ellipsis" />
                </div>
                {!change?<ClassifyOne/>:<HotSearch/>}
            </div>
        );
    }
}

// ReactDOM.render(<Classify/>);
export default connect()(Classify);