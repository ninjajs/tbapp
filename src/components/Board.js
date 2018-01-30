import React, { Component } from 'react';
import '../css/Board.css';
import BoardList from './BoardList';
import { view } from 'react-easy-state'

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <BoardList boardIndex="0" edge="true" position="left" />
        <BoardList boardIndex="1" />
        <BoardList boardIndex="2" />
        <BoardList boardIndex="3" edge="true" position="right" />
      </div>
    );
  }
}

export default view(Board);
