import React from 'react';
import {connect} from 'react-redux'
import {Carousel, Icon, Button,Layout} from 'antd';
import '../../static/css/find.less'
const { Sider, Content } = Layout;
class Selected extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className="selectedBox">
            <div className="listBox">
                <Carousel autoplay>
                        <div><img src={require('../../static/images/find/swipe/5aa8ba25Ne60e7133.png.webp')} alt=""/></div>
                        <div><img src={require('../../static/images/find/swipe/5ad07d0eN74fff3e6.png.webp')} alt=""/></div>
                        <div><img src={require('../../static/images/find/swipe/5b0e5a59N50f5376c.png.webp')} alt=""/></div>
                </Carousel>
                </div>
            <div className="listFlow">
                <div className="listFlowItem">
                    <div className="listFlowItemTop">
                        【主妇购物车】一批10元厨房小工具驾到
                    </div>
                    <div className="listFlowItemLeft">
             一兜糖
                    </div>
                    <div className="listFlowItemRight">7w+人阅读</div>
                    <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
                </div>
                <div className="listFlowItem">
                    <div className="listFlowItemTop">
                        【主妇购物车】一批10元厨房小工具驾到
                    </div>
                    <div className="listFlowItemLeft">
                        一兜糖
                    </div>
                    <div className="listFlowItemRight">7w+人阅读</div>
                    <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
                </div>
                <div className="bigImg">
                    <p>“天朝四子”跨越偶像的表层含义!</p>
                   <img src="//m.360buyimg.com/mobilecms/jfs/t23896/349/240660728/57297/16708293/5b29ce58N31e8f08a.jpg!q70.jpg.dpg" alt=""/>

                </div>
                <div className="bottomDetail">
                    <span className="left">时尚先生Esquire</span><span className="right">2103人阅读</span>
                </div>
            </div>
            <div className="listFlow">
                <div className="listFlowItem">
                    <div className="listFlowItemTop">
                        【主妇购物车】一批10元厨房小工具驾到
                    </div>
                    <div className="listFlowItemLeft">
                        一兜糖
                    </div>
                    <div className="listFlowItemRight">7w+人阅读</div>
                    <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
                </div>
                <div className="listFlowItem">
                    <div className="listFlowItemTop">
                        【主妇购物车】一批10元厨房小工具驾到
                    </div>
                    <div className="listFlowItemLeft">
                        一兜糖
                    </div>
                    <div className="listFlowItemRight">7w+人阅读</div>
                    <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
                </div>
                <div className="listFlowItem">
                    <div className="listFlowItemTop">
                        【主妇购物车】一批10元厨房小工具驾到
                    </div>
                    <div className="listFlowItemLeft">
                        一兜糖
                    </div>
                    <div className="listFlowItemRight">7w+人阅读</div>
                    <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
                </div>
                <div className="listFlowItem">
                    <div className="listFlowItemTop">
                        【主妇购物车】一批10元厨房小工具驾到
                    </div>
                    <div className="listFlowItemLeft">
                        一兜糖
                    </div>
                    <div className="listFlowItemRight">7w+人阅读</div>
                    <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
                </div>
                <div className="bigImg">
                    <p>“天朝四子”跨越偶像的表层含义!</p>
                    <img src="//m.360buyimg.com/mobilecms/jfs/t23896/349/240660728/57297/16708293/5b29ce58N31e8f08a.jpg!q70.jpg.dpg" alt=""/>

                </div>
                <div className="bottomDetail">
                    <span className="left">时尚先生Esquire</span><span className="right">2103人阅读</span>
                </div>
            </div>
            <div className="listFlow">
                <div className="listFlowItem">
                    <div className="listFlowItemTop">
                        【主妇购物车】一批10元厨房小工具驾到
                    </div>
                    <div className="listFlowItemLeft">
                        一兜糖
                    </div>
                    <div className="listFlowItemRight">7w+人阅读</div>
                    <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
                </div>
                <div className="listFlowItem">
                    <div className="listFlowItemTop">
                        【主妇购物车】一批10元厨房小工具驾到
                    </div>
                    <div className="listFlowItemLeft">
                        一兜糖
                    </div>
                    <div className="listFlowItemRight">7w+人阅读</div>
                    <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
                </div>
                <div className="bigImg">
                    <p>“天朝四子”跨越偶像的表层含义!</p>
                    <img src="//m.360buyimg.com/mobilecms/jfs/t23896/349/240660728/57297/16708293/5b29ce58N31e8f08a.jpg!q70.jpg.dpg" alt=""/>

                </div>
                <div className="bottomDetail">
                    <span className="left">时尚先生Esquire</span><span className="right">2103人阅读</span>
                </div>
            </div>
            <div className="listFlow">
            <div className="listFlowItem">
                <div className="listFlowItemTop">
                    【主妇购物车】一批10元厨房小工具驾到
                </div>
                <div className="listFlowItemLeft">
                    一兜糖
                </div>
                <div className="listFlowItemRight">7w+人阅读</div>
                <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
            </div>
            <div className="listFlowItem">
                <div className="listFlowItemTop">
                    【主妇购物车】一批10元厨房小工具驾到
                </div>
                <div className="listFlowItemLeft">
                    一兜糖
                </div>
                <div className="listFlowItemRight">7w+人阅读</div>
                <div className="listFlowItemImg"><img src={require('../../static/images/find/flow/222.jpeg')} alt=""/></div>
            </div>
            <div className="bigImg">
                <p>“天朝四子”跨越偶像的表层含义!</p>
                <img src="//m.360buyimg.com/mobilecms/jfs/t23896/349/240660728/57297/16708293/5b29ce58N31e8f08a.jpg!q70.jpg.dpg" alt=""/>

            </div>
            <div className="bottomDetail">
                <span className="left">时尚先生Esquire</span><span className="right">2103人阅读</span>
            </div>
        </div>
        </section>
    }
}
export default connect()(Selected);