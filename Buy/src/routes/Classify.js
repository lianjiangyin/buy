import React,{Component} from 'react';
import {connect} from 'react-redux';
// import ReactDOM, {render} from 'react-dom';
import { Tabs, Radio } from 'antd';
// import mountNode from 'react-router-dom';

const TabPane = Tabs.TabPane;

class Classify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
        };
    }

    // handleModeChange = (e) => {
    //     const mode = e.target.value;
    //     this.setState({ mode });
    // }


    render() {
        const { mode } = this.state;
        return (
            <div>
                {/*<Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>*/}
                    {/*/!*<Radio.Button value="top">Horizontal</Radio.Button>*!/*/}
                    {/*/!*<Radio.Button value="left">Vertical</Radio.Button>*!/*/}
                {/*</Radio.Group>*/}
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={mode}
                    style={{ }}
                >
                    <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                    <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                    <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                    <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                    <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                    <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                    <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                    <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                    <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
                    <TabPane tab="Tab 12" key="12">Content of tab 1</TabPane>
                    <TabPane tab="Tab 13" key="13">Content of tab 2</TabPane>
                    <TabPane tab="Tab 14" key="14">Content of tab 3</TabPane>
                    <TabPane tab="Tab 15" key="15">Content of tab 4</TabPane>
                    <TabPane tab="Tab 16" key="16">Content of tab 5</TabPane>
                    <TabPane tab="Tab 17" key="17">Content of tab 6</TabPane>
                    <TabPane tab="Tab 18" key="18">Content of tab 8</TabPane>
                    <TabPane tab="Tab 19" key="19">Content of tab 9</TabPane>
                    <TabPane tab="Tab 20" key="20">Content of tab 10</TabPane>
                    <TabPane tab="Tab 21" key="21">Content of tab 11</TabPane>
                </Tabs>
            </div>
        );
    }
}

// ReactDOM.render(<Classify/>);
export default connect()(Classify);