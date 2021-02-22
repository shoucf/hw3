import React from 'react';
import './TabList.css';

class Tab extends React.Component {

    render() {
        return (
            <a onClick={this.props.clickFunc}>{this.props.content}</a>
        );
    }
}


class TabList extends React.Component {
    state = {
        tabId: this.props.TabId
    };
    render() {
        return (
            <nav>
                <div className="nav-container">
                    <Tab clickFunc={()=>{this.clicked("Text")}} content="Text"></Tab>
                    <Tab clickFunc={()=>{this.clicked("Image")}} content="Image"></Tab>
                    <Tab clickFunc={()=>{this.clicked("Video")}} content="Video"></Tab>
                    <Tab clickFunc={()=>{this.clicked("Table")}} content="Table"></Tab>
                    <Tab clickFunc={()=>{this.clicked("Email")}} content="Email"></Tab>
                </div>
            </nav>
        );
    }
    clicked(x){
        this.props.Handler(x);
        this.setState({
            tabId: x
        })
    }
}


export default TabList;