import React from 'react';

class Game extends React.Component {
  constructor(){
    super();

    this.state = {
      games: []
    };
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    let component = this;
    let url = "https://glacial-taiga-31766.herokuapp.com/categories/"+this.props.params.categoryId+"/games/"+this.props.params.gameId+".json";
    jQuery.getJSON(url, function(data){
      component.setState({
        games: data.games
      });
    });
  }

  render() {
    return (
        <h1>Game</h1>
    );
  }
}

export default Game;
