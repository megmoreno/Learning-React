import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import TicTacToeGame from './components/tic-tac-toe'
import Navbar from './components/navbar'

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                    <Route exact path='/tic-tac-toe' element={< TicTacToeGame />}></Route>
                </Routes>

            </Router>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

