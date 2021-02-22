import React from 'react';
import './Image.css';

class Image extends React.Component {
    state={
        overlay: false,
        vid: "",
        goup: false
    };
    componentDidMount() {
        window.onscroll = ((ev) => {
            let top = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            let isShow = top / window.innerHeight > 0.25;
            if (isShow){
                this.setState({
                    goup: true
                })
            } else {
                this.setState({
                    goup: false
                })
            }

        }).bind(this)
    }

    render() {
        return (
            <>
                <div style={
                    {display: this.state.overlay ? "block" : "none"}
                } className="overlay">

                    <img src={this.state.vid} height={`${window.innerHeight / 2}px`}
                         width={`${window.innerHeight / 2}px`}/>
                </div>

                <div
                    onClick={this.disappear.bind(this)}
                    className="image-container" style={{
                    opacity: this.state.overlay ? '0.2' : '1',
                       }}>
                    <img className="grid-item" src="1.jpg" alt="" onClick={(ev)=>this.popup(ev, "1.jpg")}/>
                    <img className="grid-item" src="2.jpg" alt="" onClick={(ev)=>this.popup(ev, "2.jpg")}/>
                    <img className="grid-item" src="3.jpg" alt="" onClick={(ev)=>this.popup(ev, "3.jpg")}/>
                    <img className="grid-item" src="4.jpg" alt="" onClick={(ev)=>this.popup(ev, "4.jpg")}/>
                    <img className="grid-item" src="5.jpg" alt="" onClick={(ev)=>this.popup(ev, "5.jpg")}/>
                    <img className="grid-item" src="6.jpg" alt="" onClick={(ev)=>this.popup(ev, "6.jpg")}/>
                    <img className="grid-item" src="1.jpg" alt="" onClick={(ev)=>this.popup(ev, "1.jpg")}/>
                    <img className="grid-item" src="2.jpg" alt="" onClick={(ev)=>this.popup(ev, "2.jpg")}/>
                    <img className="grid-item" src="3.jpg" alt="" onClick={(ev)=>this.popup(ev, "3.jpg")}/>
                    <img className="grid-item" src="4.jpg" alt="" onClick={(ev)=>this.popup(ev, "4.jpg")}/>
                    <img className="grid-item" src="5.jpg" alt="" onClick={(ev)=>this.popup(ev, "5.jpg")}/>
                    <img className="grid-item" src="6.jpg" alt="" onClick={(ev)=>this.popup(ev, "6.jpg")}/>
                    <img className="grid-item" src="1.jpg" alt="" onClick={(ev)=>this.popup(ev, "1.jpg")}/>
                    <img className="grid-item" src="2.jpg" alt="" onClick={(ev)=>this.popup(ev, "2.jpg")}/>
                    <img className="grid-item" src="3.jpg" alt="" onClick={(ev)=>this.popup(ev, "3.jpg")}/>
                    <img className="grid-item" src="4.jpg" alt="" onClick={(ev)=>this.popup(ev, "4.jpg")}/>
                    <img className="grid-item" src="5.jpg" alt="" onClick={(ev)=>this.popup(ev, "5.jpg")}/>
                    <img className="grid-item" src="6.jpg" alt="" onClick={(ev)=>this.popup(ev, "6.jpg")}/>
                    <img className="grid-item" src="1.jpg" alt="" onClick={(ev)=>this.popup(ev, "1.jpg")}/>
                    <img className="grid-item" src="2.jpg" alt="" onClick={(ev)=>this.popup(ev, "2.jpg")}/>
                    <img className="grid-item" src="3.jpg" alt="" onClick={(ev)=>this.popup(ev, "3.jpg")}/>
                    <img className="grid-item" src="4.jpg" alt="" onClick={(ev)=>this.popup(ev, "4.jpg")}/>
                    <img className="grid-item" src="5.jpg" alt="" onClick={(ev)=>this.popup(ev, "5.jpg")}/>
                    <img className="grid-item" src="6.jpg" alt="" onClick={(ev)=>this.popup(ev, "6.jpg")}/>
                    <img className="grid-item" src="1.jpg" alt="" onClick={(ev)=>this.popup(ev, "1.jpg")}/>
                    <img className="grid-item" src="2.jpg" alt="" onClick={(ev)=>this.popup(ev, "2.jpg")}/>
                    <img className="grid-item" src="3.jpg" alt="" onClick={(ev)=>this.popup(ev, "3.jpg")}/>
                    <img className="grid-item" src="4.jpg" alt="" onClick={(ev)=>this.popup(ev, "4.jpg")}/>
                    <img className="grid-item" src="5.jpg" alt="" onClick={(ev)=>this.popup(ev, "5.jpg")}/>
                    <img className="grid-item" src="6.jpg" alt="" onClick={(ev)=>this.popup(ev, "6.jpg")}/>
                    <img className="grid-item" src="1.jpg" alt="" onClick={(ev)=>this.popup(ev, "1.jpg")}/>
                    <img className="grid-item" src="2.jpg" alt="" onClick={(ev)=>this.popup(ev, "2.jpg")}/>
                    <img className="grid-item" src="3.jpg" alt="" onClick={(ev)=>this.popup(ev, "3.jpg")}/>
                    <img className="grid-item" src="4.jpg" alt="" onClick={(ev)=>this.popup(ev, "4.jpg")}/>
                    <img className="grid-item" src="5.jpg" alt="" onClick={(ev)=>this.popup(ev, "5.jpg")}/>
                    <img className="grid-item" src="6.jpg" alt="" onClick={(ev)=>this.popup(ev, "6.jpg")}/>
                </div>
                {
                    this.state.goup ? <div id="scrollshow">
                        <div className="scrollv" onClick={()=>window.scrollTo(0,0)}>^
                        </div>
                    </div> : <></>
                }
            </>


        );
    }

    popup(ev, x){
        if (this.state.overlay){
            return
        }
        this.setState({
            vid: x,
            overlay: true
        });
        ev.preventDefault();
        ev.stopPropagation();
        this.forceUpdate()

    }
    disappear(ev){
        this.setState({
            overlay: false
        })
        ev.preventDefault();
        ev.stopPropagation();
    }
}


export default Image;