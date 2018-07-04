import React from 'react';
import {connect} from 'react-redux'
import {Carousel, Icon, Button} from 'antd';
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
                <div className="listFlow">
                        <div className="listFlowItem">
                            <div>
                                【主妇购物车】一批10元厨房小工具驾到
                            </div>
                            <div>
                                <span>一兜糖</span>
                                <span>7w+人阅读</span>
                            </div>
                            {/*<div><img src={require('../../static/images/find/flow/5715ff6dN97d4b2d2.jpg!q70.jpg.dpg')} alt=""/></div>*/}
                        </div>
                    </div>
                </div>
        </section>
    }
}
export default connect()(Selected);