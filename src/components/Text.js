import React from 'react';
import './Text.css';

class Text extends React.Component {
    render() {
        return (
            <form className="login-container">
                <div>
                    <label>Pig's Name: </label>
                    <div>
                        <input name="fn"/>
                    </div>
                </div>
                <div>
                    <br />
                        <label>Pig's Owner: </label>
                        <div>
                            <input name="ln"/>
                        </div>
                </div>
                <div>
                    <br/>
                        <label>Pig Breed: </label>
                        <div>
                            <input type="radio" id="sc" name="pi" value="sc" defaultChecked/>
                                <label htmlFor="sc">Ralphs Pig</label>
                        </div>

                        <div>
                            <input type="radio" id="gv" name="pi" value="gv"/>
                                <label htmlFor="gv">Costco Pig</label>
                        </div>

                        <div>
                            <input type="radio" id="tb" name="pi" value="tb"/>
                                <label htmlFor="tb">Peppa Pig</label>
                        </div>
                </div>
                <br/>

                    <div>
                        <input type="submit" value="Done"/>
                    </div>
            </form>
        );
    }
}


export default Text;