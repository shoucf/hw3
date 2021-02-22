import './App.css';
import TabList from "./components/TabList";
import Body from './components/Body'
import React from "react";


class App extends React.Component {
    state = {
        tabId: "Text"
    };
    updateTab(x){
        this.setState({
            tabId: x
        })
    }

    render() {
        return (
            <div className="App" >
                <TabList TabId={this.state.tabId} Handler={this.updateTab.bind(this)}/>
                <Body TabId={this.state.tabId} />
            </div>
        );
    }
}

export default App;
