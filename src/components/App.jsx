import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from './Home.jsx'
import BannerSlider from './BannerSlider.jsx'
import TaskOne from './TaskOne.jsx'
import TaskTwo from './TaskTwo.jsx'
import TaskThree from './TaskThree.jsx'
import TaskFour from './TaskFour.jsx'
import TaskFive from './TaskFive.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Link to="/" className="top-bar">
                        <div className="bnry-logo"></div>
                        <div>Renier Strydom BNRY FED Test</div>
                    </Link>

                    <BannerSlider />

                    <nav className="task-nav">
                        <Link to="/task-one">
                            <div>Task 1</div>
                            <span></span>
                        </Link>
                        <Link to="/task-two">
                            <div>Task 2</div>
                            <span></span>
                            <span></span>
                        </Link>
                        <Link to="/task-three">
                            <div>Task 3</div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Link>
                        <Link to="/task-four">
                            <div>Task 4</div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Link>
                        <Link to="/task-five">
                            <div>Task 5</div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Link>
                    </nav>
                    <Route exact path="/" component={Home}/>
                    <Route path="/task-one" component={TaskOne}/>
                    <Route path="/task-two" component={TaskTwo}/>
                    <Route path="/task-three" component={TaskThree}/>
                    <Route path="/task-four" component={TaskFour}/>
                    <Route path="/task-five" component={TaskFive}/>
                </div>
            </Router>
        );
    }
}

export default App;
