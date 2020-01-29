import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';  
import Header from './Header';  

function App() {
  return (
    <div className="ui container"> 
      <BrowserRouter>
        <Route path="/" component={Header}/>
        <Route path="/" exact component={StreamList}/>
        <Route path="/streams/new" component={StreamCreate}/>
        <Route path="/streams/edit" component={StreamEdit}/>
        <Route path="/streams/delete" component={StreamDelete}/>
        <Route path="/streams/show" component={StreamShow}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
