import React, { Component } from 'react';
import Searchbar from './components/searchbar/Searchbar';
import Tranding from './components/trending/Tranding';

class App extends Component {
    state = { 

     }
    render() {
        return (
         <>
          <Tranding />
          <Searchbar />
         </>
        );
    }
}

export default App;