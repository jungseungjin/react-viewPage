import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './src/home/home.js';
import Term1 from './src/term/term1.js';
import Term2 from './src/term/term2.js';
import Board from './src/more/board.js';
import BoardView from './src/more/boardView.js';
const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/information" component={Home} />
                <Route exact path="/term1" component={Term1} />
                <Route exact path="/term2" component={Term2} />
                <Route path="/more/:page" component={Board} />
                <Route path="/moreview/:id" component={BoardView} /></Switch>
        </BrowserRouter>
    );
};
export default Main;
