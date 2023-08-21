<script setup>
import { ref} from "vue";
import {useTodoStore} from "@/store/store";

const todoStore = useTodoStore()

const date = ref(new Date()),
      options = {year: 'numeric', month: 'long', day: 'numeric'},
      formatDate = date.value.toLocaleString('ru-RU', options);

</script>

<template>
  <header>
    <div class="header__content">
      <h1>TodoList</h1>
      <p>{{formatDate}}</p>
    </div>
    <div class="allCategory">
      <button v-for="category in todoStore.categories" :key="`category_button_${category.id}`" @click="() => todoStore.currentCategoryFilter = category.id" :class="{'active-category': category.id === todoStore.currentCategoryFilter}">{{category.name}}</button>
    </div>
    <hr size="1px" width="90%" color="gray">
  </header>
</template>

<style scoped>

</style>