/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';

/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT CSS*/
import './static/css/reset.min.css';
import './static/css/common.less';

/*IMPORT COMPONENT*/
import NavTop from './component/NavTop'
import NavBottom from './component/NavBottom'
import Home from './routes/Home';
import Classify from './routes/Classify';
import Find from './routes/Find';
import ShopCart from './routes/ShopCart';
import Login from './routes/Login';

/*RENDER*/
render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                {/*HEADER*/}
                {/*MAIN=>ROUTE*/}
                <main className='container'>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/classify' component={Classify}/>
                        <Route path='/find' component={Find}/>
                        <Route path='/shopcart' component={ShopCart}/>
                        <Route path='/login' component={Login}/>
                        <Redirect to='/home'/>
                    </Switch>
                </main>
                {/*FOOTER*/}
                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);