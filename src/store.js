
import { store } from 'react-easy-state'

// a complex global store with a lot of derived data (getters and setters)
export default store({
  boardList: [
    {
      index: 0,
      title: 'Winnie',
      titleColor: '#8E6E95',
      items: [
        { id: 0, message: 'Text 1' },
        { id: 1, message: 'Text 2' }
      ]
    },
    {
      index: 1,
      title: 'Bob',
      titleColor: '#39A59C',
      items: [
        { id: 2, message: 'Text 1' },
        { id: 3, message: 'Text 2' }
      ]
    },
    {
      index: 2,
      title: 'Thomas',
      titleColor: '#344759',
      items: [
        { id: 4, message: 'Text 1' },
        { id: 5, message: 'Text 2' }
      ]
    },
    {
      index: 3,
      title: 'George',
      titleColor: '#E8741E',
      items: [
        { id: 6, message: 'Text 1' },
        { id: 7, message: 'Text 2' }
      ]
    }
  ],
  add(payload) {
    this.boardList[payload.boardIndex].items.push({
      id: Date.now(),
      message: payload.message
    })
  },
  moveItemLeft(payload) {

    var item = this.boardList[payload.boardIndex].items.splice(payload.itemIndex, 1);
    var newBoard = this.boardList[payload.boardIndex-1];

    newBoard.items.push({
      id: item[0].id,
      message: item[0].message
    });
  },
  moveItemRight(payload) {

    var item = this.boardList[payload.boardIndex].items.splice(payload.itemIndex, 1);
    var newBoard = this.boardList[payload.boardIndex+1];

    newBoard.items.push({
      id: item[0].id,
      message: item[0].message
    });
  }
});
