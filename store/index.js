export const state = () => ({
  list: []
});

export const mutations = {
  addTodo(state, text) {
    state.list.push({
      title: text
    })
  },
  deleteTodo(state, index) {
    this.state.list.splice(index, 1)
  }
};
