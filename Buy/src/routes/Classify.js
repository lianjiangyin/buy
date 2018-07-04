import React, {Component} from 'react';
import {connect} from 'react-redux';
// import ReactDOM, {render} from 'react-dom';
import {Tabs, Radio, Icon, Input} from 'antd';
// import mountNode from 'react-router-dom';
import NavTop from '../component/NavTop'
import '../static/css/Classify.less';


const TabPane = Tabs.TabPane;
const Search = Input.Search;

class Classify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
            title: '分类'
        };
    }

    render() {
        const {mode} = this.state;
        return (
            <div>
                <div className="searchBox">
                    <Icon className="icon iconLeft"  type="left"/>
                    <div className="searchInput">
                        <Icon className="icon iconSearch" type="search" />
                        <input className="search" type="text"/>
                    </div>
                    <Icon className="icon iconRight" type="ellipsis" />
                </div>
                <div className="ClassifyBox">
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition={mode}
                    >
                        <TabPane tab="热门推荐" key="1">
                            <div className="bannerList">
                                <div className="category clearfix">
                                    <h4>浏览足迹</h4>
                                    <ul className="ListBox">
                                        <li><a href=""><img src={require('../../src/static/images/category/1.jpg')} alt="图呢"/></a><span>避孕套</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/2.jpg')} alt="图呢"/></a><span>电压力锅</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/3.jpg')} alt="图呢"/></a><span>牛奶</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/4.jpg')} alt="图呢"/></a><span>零食</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/5.jpg')} alt="图呢"/></a><span>华为</span></li>
                                    </ul>
                                </div>

                                <div className="category clearfix">
                                    <h4>热门分类</h4>
                                    <ul className="ListBox">
                                        <li><a href=""><img src={require('../../src/static/images/category/6.png')} alt="图呢"/></a><span>路由器</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/7.png')} alt="图呢"/></a><span>空调扇</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/8.jpg')} alt="图呢"/></a><span>蓝牙耳机</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/9.png')} alt="图呢"/></a><span>耳机</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/10.png')} alt="图呢"/></a><span>凉席</span></li>
                                        <li><a href=""><img src={require('../../src/static/images/category/11.jpg')} alt="图呢"/></a><span>狗狗</span></li>
                                    </ul>
                                </div>

                            </div>
                        </TabPane>




                        <TabPane tab="手机数码" key="2">手机数码</TabPane>
                        <TabPane tab="家用电器" key="3">家用电器</TabPane>
                        <TabPane tab="电脑办公 " key="4">电脑办公</TabPane>
                        <TabPane tab="计生情趣 " key="5">计生情趣</TabPane>
                        <TabPane tab="美妆护肤" key="6">美妆护肤</TabPane>
                        <TabPane tab="个护清洁" key="7">个护清洁</TabPane>
                        <TabPane tab="汽车用品" key="8">汽车用品</TabPane>
                        <TabPane tab="京东超市 " key="9">京东超市</TabPane>
                        <TabPane tab="男装" key="10">男装</TabPane>
                        <TabPane tab="女装" key="11">女装</TabPane>
                        <TabPane tab="女鞋" key="12">女鞋</TabPane>
                        <TabPane tab="母婴童装 " key="13">Content of tab 2</TabPane>
                        <TabPane tab="运动户外 " key="14">Content of tab 3</TabPane>
                        <TabPane tab="内衣配饰" key="15">Content of tab 4</TabPane>
                        <TabPane tab="食品生鲜 " key="16">Content of tab 5</TabPane>
                        <TabPane tab="酒水饮料" key="17">Content of tab 6</TabPane>
                        <TabPane tab="家具家装 " key="18">Content of tab 8</TabPane>
                        <TabPane tab="家居厨具" key="19">Content of tab 9</TabPane>
                        <TabPane tab="箱包手袋 " key="20">Content of tab 10</TabPane>
                        <TabPane tab="钟表珠宝 " key="21">Content of tab 11</TabPane>
                        <TabPane tab="图书音像  " key="22">Content of tab 11</TabPane>
                        <TabPane tab="玩具乐器 " key="23">Content of tab 11</TabPane>
                        <TabPane tab="医药保健 " key="24">Content of tab 11</TabPane>
                        <TabPane tab="宠物生活 " key="25">Content of tab 11</TabPane>
                        <TabPane tab="礼品鲜花 " key="26">Content of tab 11</TabPane>
                        <TabPane tab="农资绿植 " key="27">Content of tab 11</TabPane>
                        <TabPane tab="生活旅行  " key="28">Content of tab 11</TabPane>
                        <TabPane tab="奢侈品 " key="29">Content of tab 11</TabPane>
                        <TabPane tab="全球购 " key="30">Content of tab 11</TabPane>
                        <TabPane tab="国际名牌  " key="31">Content of tab 11</TabPane>
                        <TabPane tab="艺术邮币  " key="32">Content of tab 11</TabPane>
                        <TabPane tab="二手商品 " key="33">Content of tab 11</TabPane>
                        <TabPane tab="特产馆  " key="34">Content of tab 11</TabPane>
                        <TabPane tab="京东金融  " key="35">Content of tab 11</TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

// ReactDOM.render(<Classify/>);
export default connect()(Classify);