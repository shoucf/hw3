import React from 'react';
import './Table.css';

class Table extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Piggies Price</h1>
                <table>
                    <tr>
                        <td style={{fontWeight: "800"}}>Pig Name</td>
                        <td style={{fontWeight: "800"}}>Pig Origin Country</td>
                        <td style={{fontWeight: "800"}}>Price</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.peppapig.com/">Peppa Pig</a></td>
                        <td>Britain</td>
                        <td>$20/lbs</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ralphs.com/pl/pork-roasts-tenderloins/0500600005?fulfillment=all">Ralphs
                            Pig</a></td>
                        <td>United State</td>
                        <td>$1.99/lbs</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.costco.com/pork.html">Costco Pig</a></td>
                        <td>United State</td>
                        <td>$8.99/lbs</td>
                    </tr>

                </table>

            </div>
        );
    }
}


export default Table;