import {defineStore} from 'pinia'
import {ref} from "vue";

const dateStart = ref(new Date ("2023-07-01T00:00:00"))

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        lists: ref([
            {id: new Date() - dateStart.value.getTime() - 1 , name: "Убить бога", checked: false, createAt: new Date(), timeBetween: 0, categoryID: 2},
            {id: new Date() - dateStart.value.getTime() - 2, name: "Скушать кашу", checked: true, createAt: new Date(), timeBetween: 0, categoryID: 2},
            {id: new Date() - dateStart.value.getTime() - 3, name: "Посмотреть Аниме", checked: false, createAt: new Date(), timeBetween: 0, categoryID: 2}
        ]),

        currentCategoryFilter: ref(1),

        categories: ref([{id: 1, name: 'Все категории'},{id: 2, name: 'Для дома'},{id: 3, name: 'Для работы'},{id: 4,name: 'В свободное время'}])
    })
})