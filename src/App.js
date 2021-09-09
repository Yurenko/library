import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Books from './component/Books/Books';
import BookStore from './component/BookStore/BookStore';
import Header from './component/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route path="/store" component={BookStore} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
