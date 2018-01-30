import React, { Component } from 'react';
import '../css/BoardItem.css';
import classNames from 'classnames';
import { view } from 'react-easy-state'
import store from '../store'

class BoardItem extends Component {
  constructor(props) {
    super(props);

    this.arrowLeftClasses = classNames(
      'arrow',
      'left',
      {
        'hidden': (this.props.position === "left") ? true : false
      }
    );

    this.arrowRightClasses = classNames(
      'arrow',
      'right',
      {
        'hidden': (this.props.position === "right") ? true : false
      }
    );
  }

  moveItemLeft(index) {
    store.moveItemLeft({ itemIndex: index, boardIndex: parseInt(this.props.boardIndex, 10) });
  }

  moveItemRight(index) {
    store.moveItemRight({ itemIndex: index, boardIndex: parseInt(this.props.boardIndex, 10) });
  }

  render() {
    return (
      <li className="Board-item">
        <span className={this.arrowLeftClasses} onClick={() => this.moveItemLeft(this.props.index)}>{"<"}</span>
        {this.props.item.message}
        <span className={this.arrowRightClasses} onClick={() => this.moveItemRight(this.props.index)}>{">"}</span>
      </li>
    );
  }
}

export default view(BoardItem);
