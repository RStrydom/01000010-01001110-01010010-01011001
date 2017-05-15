import React, { Component } from 'react';
import '../styles/taskOne.sass';

class TaskOne extends Component {
    render() {
        return (
            <div className="task-one">
                <table>
                    <thead>
                        <tr>
                            <th><span>Other formats</span></th>
                            <th><span className="bnry-logo"></span> Our price</th>
                            <th><span className="bnry-logo"></span> New from</th>
                            <th><span className="bnry-logo"></span> Used from</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Other formats">Hardcover</td>
                            <td data-label="Our price">R 300.00</td>
                            <td data-label="New from">R 334.99</td>
                            <td data-label="Used from">R 269.99</td>
                        </tr>
                        <tr>
                            <td data-label="Other formats">Paperback</td>
                            <td data-label="Our price">R 150.00</td>
                            <td data-label="New from">R 169.99</td>
                            <td data-label="Used from">R 199.99</td>
                        </tr>
                        <tr>
                            <td data-label="Other formats">Audio, CD, Audiobook, Unabridged</td>
                            <td data-label="Our price" className="active">R 89.00</td>
                            <td data-label="New from">R 89.00</td>
                            <td data-label="Used from">R 60.99</td>
                        </tr>
                        <tr>
                            <td data-label="Other formats">Unkown binding</td>
                            <td data-label="Our price">R 50.00</td>
                            <td data-label="New from">R 50.00</td>
                            <td data-label="Used from">R 50.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskOne;
