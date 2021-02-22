import React from 'react';
import './TabList.css';

class Tab extends React.Component {

    render() {
        return (
            <a onClick={this.props.clickFunc}
               style={{background: this.props.tab === this.props.content ? '#aaa': 'transparent'}}>
                {this.props.content}
            </a>
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
                    <Tab clickFunc={()=>{this.clicked("Text")}} content="Text" tab={this.state.tabId}/>
                    <Tab clickFunc={()=>{this.clicked("Image")}} content="Image" tab={this.state.tabId}/>
                    <Tab clickFunc={()=>{this.clicked("Video")}} content="Video" tab={this.state.tabId} />
                    <Tab clickFunc={()=>{this.clicked("Table")}} content="Table" tab={this.state.tabId} />
                    <Tab clickFunc={()=>{this.clicked("Email")}} content="Email" tab={this.state.tabId} />
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