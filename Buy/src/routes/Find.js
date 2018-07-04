import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Icon} from 'antd'
import Selected from './find/Selected'
import Encyclopedia from './find/Encyclopedia'
import Delicious from './find/Delicious'
import Fun from './find/Fun'
import Nice from './find/Nice'
import '../static/css/find.less'
import FindTop from '../component/FindTop'
import NavTop from '../component/NavTop'
class Find extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'发现'
        }
    }
    render(){
        return <section className="findBox">
            <NavTop title={this.state.title}/>
            <FindTop/>
            <Switch>
                <Route path="/find/selected" component={Selected}/>
                <Route path="/find/encyclopedia" component={Encyclopedia}/>
                <Route path="/find/delicious" component={Delicious}/>
                <Route path="/find/fun" component={Fun}/>
                <Route path="/find/nice" component={Nice}/>
                <Redirect from="/find" to="/find/selected" />
            </Switch>
        </section>
    }
}
export default connect()(Find);