<script setup>

import image from "@/assets/trash.png";
import {computed} from "vue";
import {useTodoStore} from "@/store/store";

const todoStore = useTodoStore()
const isDefaultCategoryFilter = computed(() => todoStore.currentCategoryFilter === 1);

function timeInterval (timeBetween){
  return {
    minute: Math.floor((timeBetween / 1000) / 60),
    hour: Math.floor((timeBetween / 1000) / 60 / 60),
    day: Math.floor((timeBetween / 1000) / 60 / 60 / 24)
  };
}


function deleteList (id){
  const element = {id: id},
      indexTodo = todoStore.lists.findIndex(obj => obj.id === element.id);
  todoStore.lists.splice(indexTodo, 1);
}
</script>

<template>
  <div class="BodySite">
  <div class="BodySite__getTask">
    <div class="BodySite__getTask_created">
      <p>Все задачи</p>
      <div v-for="list in todoStore.lists.filter(item => !item.checked && (isDefaultCategoryFilter ? true : item.categoryID === todoStore.currentCategoryFilter))" :key="list.id" class="BodySite__getTask_task">
        <div class="BodySite__getTask_taskInfo">
          <div class="getTask_taskLeft">
            <input type="checkbox" v-model="list.checked">
            <p class="nameTodo">{{list.name}}</p>
          </div>
          <img :src="image" v-on:click="deleteList(list.id)"  class="image" />
        </div>
        <p v-if="timeInterval(list.timeBetween).minute <= 0" class="timeCreate">Только что</p>
        <p v-else-if="timeInterval(list.timeBetween).minute > 0" class="timeCreate">{{timeInterval(list.timeBetween).minute}} минут(у) назад</p>
        <p v-else-if="timeInterval(list.timeBetween).minute >= 60" class="timeCreate">{{timeInterval(list.timeBetween).hour}} час(ов) назад</p>
        <p v-else-if="timeInterval(list.timeBetween).hour >= 24" class="timeCreate">{{timeInterval(list.timeBetween).day}} день(ей) назад</p>
      </div>
    </div>
    <div class="BodySite__getTask_completed">
      <p>Выполненные</p>
      <div v-for="list in todoStore.lists.filter(item => item.checked && (isDefaultCategoryFilter ? true : item.categoryID === todoStore.currentCategoryFilter))" :key="list.id" class="BodySite__getTask_task complited">
        <div class="BodySite__getTask_taskInfo">
          <div class="getTask_taskLeft">
            <input type="checkbox" v-model="list.checked">
            <p class="nameTodo" style="text-decoration: line-through;">{{list.name}}</p>
          </div>
          <img :src="image" v-on:click="deleteList(list.id)"  class="image" />
        </div>
        <p v-if="timeInterval(list.timeBetween).minute <= 0" class="timeCreate">Только что</p>
        <p v-else-if="timeInterval(list.timeBetween).minute > 0" class="timeCreate">{{timeInterval(list.timeBetween).minute}} минут(у) назад</p>
        <p v-else-if="timeInterval(list.timeBetween).minute >= 60" class="timeCreate">{{timeInterval(list.timeBetween).hour}} час(ов) назад</p>
        <p v-else-if="timeInterval(list.timeBetween).hour >= 24" class="timeCreate">{{timeInterval(list.timeBetween).day}} день(ей) назад</p>
      </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>