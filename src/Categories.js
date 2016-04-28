import React from 'react';
import jQuery from 'jquery';

class Categories extends React.Component {
  componentDidMount(){
      var self = this;
      jQuery.getJSON("https://glacial-taiga-31766.herokuapp.com/categories.json", function(data){
        console.log(data);
        //only here the this get's other value
        self.setState({
          categories: data.categories
        });
      });
    }


  render() {
    return (
        <h1>Categories</h1>
    );
  }
}

export default Categories;
