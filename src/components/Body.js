import React from 'react';
import './Body.css';
import Login from "./Login";
import Video from "./Video";
import Text from "./Text";
import Image from "./Image";
import Table from "./Table";
class Body extends React.Component {
    render() {
        return (
            <div className="kcontainer" >
                {
                    this.props.TabId == 'Text' ? <Text></Text> :
                        this.props.TabId == 'Image' ? <Image></Image> :
                            this.props.TabId == 'Video' ? <Video></Video> :
                                this.props.TabId == 'Table' ? <Table></Table> :
                                this.props.TabId == 'Email' ? <Login></Login> : <p></p>
                }
            </div>
        );
    }
}


export default Body;