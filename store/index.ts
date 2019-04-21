import {Module, VuexModule, Mutation} from 'vuex-module-decorators'

@Module
export default class Todo extends VuexModule {
  public list: { title: string; }[] = [];

  @Mutation
  addTodo(val: string) {
    this.list.push({
      title: val
    })
  }
}
