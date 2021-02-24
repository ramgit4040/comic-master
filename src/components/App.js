import React from 'react';
import SelectComic from './SelectedComic';
import CurrentComic from './CurrentComic';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import '../css/App.css'

const App = () => {
  return (
    <div className="container">

      <Router>
        <nav>
          <ul>
           <li><Link to={"/"}>Current</Link></li>
           <li><Link to={"/selected"}>Selected</Link></li>
        </ul> 
       </nav>
      <Switch>
        <Route exact path = "/" component = {CurrentComic} />
        <Route path = "/selected" component = {SelectComic} />
        </Switch>
        </Router>  
    </div>
  );
}

export default App;
