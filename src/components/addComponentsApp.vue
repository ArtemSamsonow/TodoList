<script setup>
import { ref} from "vue";
import {useTodoStore} from "@/store/store";

const todoStore = useTodoStore()

const add = ref(''),
      addCategory = ref(''),
      dateStart = ref(new Date ("2023-07-01T00:00:00")),
      currentCategory = ref(2);

function addList (){
  if (add.value !== ''){
    todoStore.lists.push({id: new Date() - dateStart.value.getTime() - 1,name: add.value, checked: false, createAt: new Date(), timeBetween: 0, categoryID: currentCategory.value});
    add.value = '';
  }
}

function createCategory(){
  if (addCategory.value !== ''){
    todoStore.categories.push({id: new Date().getTime(), name: addCategory.value});
    addCategory.value = '';
  }
}
</script>

<template>
  <div class="BodySite">
    <div class="BodySite__setTask">
      <input v-model="add" placeholder="Добавить новую задачу">
      <button v-on:click="addList">Добавить</button>
      <select name="" id="" @change="(e) => currentCategory = Number(e.target.value)">
        <option v-for="category in todoStore.categories.filter(item => item.id !== 1)" :key="`category_${category.id}`" :value="category.id">{{category.name}}</option>
      </select>
    </div>
    <hr size="1px" width="90%" color="gray">
    <div class="BodySite__setCategory">
      <input v-model="addCategory" placeholder="Добавить новую категорию">
      <button v-on:click="createCategory">Добавить</button>
    </div>
    <hr size="1px" width="90%" color="gray">
  </div>
</template>

<style scoped>

</style>