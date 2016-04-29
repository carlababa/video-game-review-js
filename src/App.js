import React from 'react';
import jQuery from 'jquery';

class App extends React.Component {
    render() {
        return (
            <div className="container">
              <h1>VideoGame Reviews, Yeah!</h1>

              {this.props.children}
            </div>
        );
    }
} 

export default App;
