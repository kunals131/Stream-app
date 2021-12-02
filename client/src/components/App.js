import React from 'react';
import {Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';

const App = ()=>{
    return (
        <div className='ui container'>
            <Header/>
            <Route path="/" exact><StreamList/></Route>
            <Route path="/streams/new" exact><StreamCreate/></Route>
            <Route path="/streams/edit" exact><StreamEdit/></Route>
            <Route path="/streams/delete" exact><StreamDelete/></Route>
            <Route path="/streams/show" exact><StreamShow/></Route>
        </div>
    )
}

export default App;