import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
// import { CVList } from './components/CVList';
// import { CVForm } from './components/CVForm';
// import { CVView } from './components/CVView';
// import { CVEdit } from './components/CVEdit';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          {/* <Route path="/cv/listing" component={CVList} />
          <Route path="/cv/create" component={CVForm} />
          <Route path="/cv/view/:id" component={CVView} />
          <Route path="/cv/edit/:id" component={CVEdit} /> */}
        </Switch>
      </div>
    </Router>
  );
}