import React from 'react';
import './Login.css';

class Login extends React.Component {
    state={
        msg: '',
        email: '',
    };
    render() {
        return (
            <div className="container">
                <div>
                    <label>Email: </label>
                    <div>
                        <input name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <label>{this.state.msg ? this.state.msg : ""}</label>
                </div>
                <br/>
                <div>
                    <button onClick={this.submit.bind(this)}  type="submit">Submit</button>
                </div>
            </div>
        );
    }
    handleChange(event) {
        this.setState({email: event.target.value});
    }
    submit(){
        let email = document.getElementsByName("email")[0].value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(gmail\.com|ucsb\.edu)$/;
        if (re.test(String(email).toLowerCase())) {
            this.setState({
                msg: "Email successfully recorded"
            })
        } else {
            this.setState({
                msg: "Invalid email address"
            })
        }
    }
}


export default Login;