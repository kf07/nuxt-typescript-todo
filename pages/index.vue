<template>
  <div>
    <input v-model="todoInput" placeholder="入力してください">
    <button @click="addItem">追加！</button>
    <ul>
      <li v-for="(item,index) in todoList" :key=index>
        {{item.title}}
        <button @click="deleteItem(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Emit} from 'vue-property-decorator';
  import { mapMutations } from 'vuex'

  @Component
  export default class index extends Vue {
    private todoInput:string = '';
    get todoList(): { title: string;}[] {
      return this.$store.state.list;
    }

    @Emit()
    addItem(): void {
      if(this.todoInput) {
        this.$store.commit('addTodo', this.todoInput)
      } else {
        alert('入力してください')
      }
    }
    deleteItem(index:number):void {
      this.$store.commit('deleteTodo',index)
    }
  }

</script>

<style>
  body {
    margin: 50px;
  }
  input {
    padding: 5px;
  }
</style>
