import React, { Component } from 'react';
import '../css/BoardList.css';
import BoardItem from './BoardItem';
import { view } from 'react-easy-state'
import store from '../store'

class BoardList extends Component {
  constructor(props) {
    super(props);

    this.titleColor = store.boardList[this.props.boardIndex].titleColor;
    this.title = store.boardList[this.props.boardIndex].title;
  }

  add(e) {
    var text = prompt("Add a card");

    if (text) {
      store.add({
        boardIndex: this.props.boardIndex,
        message: text
      })
    }
  }

  render() {
    this.items = store.boardList[this.props.boardIndex].items;

    return (
      <div className="Board-list">
        <div className="title" style={{backgroundColor: this.titleColor}}>{this.title}</div>

        <ul>
          {this.items.map((item, index) =>
            <BoardItem key={item.id} item={item} index={index} boardIndex={this.props.boardIndex} edge={this.props.edge} position={this.props.position} />
          )}
        </ul>

        <div className="add" onClick={this.add}>+ Add a card</div>
      </div>
    );
  }
}

export default view(BoardList);
