import React from 'react';
import jQuery from 'jquery';
import {Link} from 'react-router';

class Categories extends React.Component {
  constructor(){
    super();

    this.state = {
      categories: [],
      category: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    let component = this;
    let url = "http://localhost:3000/categories.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        categories: data.categories,
        category: data.category
      });
    });
  }

  render() {
    return (
        <div className="categories">
          <h1>Categories</h1>
          <ul>
            {this.state.categories.map(function(category){
              return(
                <li key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
    )
  }
}

export default Categories;
