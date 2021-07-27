let store = {
  _state: {
    searchValue: '',
    navigator: [
      { id: 1, name: 'All', isActive: true },
      { id: 2, name: 'Active', isActive: false },
      { id: 3, name: 'Done', isActive: false },
    ],
    newTask: '',
    taskList: [{ id: 1, text: null, isMark: false, isDone: false }],
  },
  getState() {
    return this._state;
  },
  dispatch(action) {},
};

export default store;
