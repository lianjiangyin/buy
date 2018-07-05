/**
 * Created by pc on 2018/7/5.
 */
import React from 'react';
import {connect} from 'react-redux';
import '../static/css/Classify.less';


class HotSearch extends React.Component {
    constructor(props, connect) {
        super(props, connect);
    }

    render() {
        return <div className="hotSearchBox">
            <div className="hotSearch">
                <div className="hotHead clearfix">
                    <p>热门搜索</p>
                </div>
                <div className="hotList clearfix">
                    <span><a href="">录音笔</a></span>
                    <span><a href="">魔术头巾</a></span>
                    <span><a href="">不锈钢汤锅</a></span>
                    <span><a href="">加湿器</a></span>
                    <span><a href="">自动喂食器</a></span>
                    <span><a href="">晾衣架</a></span>
                    <span><a href="">除湿器</a></span>
                    <span><a href="">自动波箱油</a></span>
                    <span><a href="">篮球</a></span>
                    <span><a href="">七度空间</a></span>
                    <span><a href="">养生壶</a></span>
                    <span><a href="">茶叶</a></span>
                </div>
            </div>
        </div>
    }
}
;
export default connect()(HotSearch);