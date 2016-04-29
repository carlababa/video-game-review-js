import React from 'react';
import jQuery from 'jquery';

class Game extends React.Component {
  constructor(){
    super();

    this.state = {
      game: [],
      category: []
    };
  }

  componentDidMount() {
    this.getGame();
  }

  getGame() {
    let component = this;
    let url = "http://localhost:3000/categories/"+this.props.params.categoryId+"/games/"+this.props.params.gameId+".json";
    jQuery.getJSON(url, function(data){
      component.setState({
        game: data.game,
        category: data.category
      });
    });
  }

  render() {
    return (
      <div className="game">
      <h3>Name: {this.state.category.name}</h3>
        <h1>Game</h1>
          <ul>
            <li>Game id: {this.props.params.gameId}</li>
            <li>Name: {this.state.game.title}</li>
          </ul>
      </div>
    );
  }
}

export default Game;
