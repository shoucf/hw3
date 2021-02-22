import React from 'react';
import './Video.css';

class Video extends React.Component {
    state={
        overlay: false,
        vid: ""
    };
    constructor(props) {
        super(props);
        this.x = React.createRef();
    }
    render() {
        return (
            <>
                <div style={
                    {display: this.state.overlay ? "block" : "none"}
                } className="overlay">

                    <video controls height={`${window.innerHeight / 2}px`}
                           width={`${window.innerHeight / 2}px`} ref={this.x}>
                        <source id="overlay" src={this.state.vid} type="video/mp4"/>
                    </video>
                </div>
                <div className="papa" style={{
                }} onClick={this.disappear.bind(this)}>
                    <div className="image-container" style={
                        {opacity: this.state.overlay ? '0.2' : '1'}
                    }>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "1.mp4")}>
                            <source src="1.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "2.mp4")}>
                            <source src="2.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "3.mp4")}>
                            <source src="3.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "3.mp4")}>
                            <source src="3.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "1.mp4")}>
                            <source src="1.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "2.mp4")}>
                            <source src="2.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "3.mp4")}>
                            <source src="3.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "3.mp4")}>
                            <source src="3.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "1.mp4")}>
                            <source src="1.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "2.mp4")}>
                            <source src="2.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "3.mp4")}>
                            <source src="3.mp4" type="video/mp4"/>
                        </video>
                        <video className="grid-item" controls onClick={(ev)=>this.popup(ev, "3.mp4")}>
                            <source src="3.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </>

        );

    }
    popup(ev, y){
        if (this.state.overlay){
            return
        }
        this.setState({
            vid: y,
            overlay: true
        });
        ev.preventDefault();
        ev.stopPropagation();
        this.forceUpdate();
        this.x.current.load();

    }
    disappear(ev){
        this.setState({
            overlay: false
        })
        ev.preventDefault();
        ev.stopPropagation();
    }
}


export default Video;