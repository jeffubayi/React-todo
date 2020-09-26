const { formatRFC3339 } = require("date-fns");
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListPicker from "./ListPicker/ListPicker";
import App from "./App/App";
import NotFound from "./NotFound/NotFound";


function Router() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path ="/" component = {ListPicker}/>
            <Route path =  "/list/:listId" component={App}></Route>
            <Route component={NotFound}></Route>
        </Switch>
            
        </BrowserRouter>
    )
}

export default Router



