<script setup>
import { useOrderStore } from '../store/orderStore';
import { useProductStore } from '../store/productStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router'

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const router = useRouter()
const orderStore = useOrderStore()
const productStore = useProductStore()
const { getProduct } = storeToRefs(productStore)
const { orders } = storeToRefs(orderStore)

function viewProduct(id) {
    router.push({ name: 'product', params: { id: id } })
}

</script>

<template>
    <div class="max-w-7xl mx-auto flex flex-col p-4 lg:p-8">
        <p class="font-bold text-2xl text-gray-950">Order history</p>
        <div class="lg:px-4 mt-8" v-for="order in orders">
            <div class="flex md:divide-y-0 divide-y flex-col md:flex-row gap-x-16">
                <div class="flex justify-between md:flex-col py-2">
                    <p class="font-semibold text-base text-gray-950">Date placed</p>
                    <p class="text-base text-gray-500">{{ months[order.date.getMonth()] + ' ' +
                        order.date.getDate() + ', ' + order.date.getFullYear() }}
                    </p>
                </div>
                <div class="flex justify-between md:flex-col py-2">
                    <p class="font-semibold text-base text-gray-950">Order number</p>
                    <p class="text-base text-gray-500">{{ (order.id).toUpperCase() }}</p>
                </div>
                <div class="flex justify-between md:flex-col py-2">
                    <p class="font-semibold text-base text-gray-950">Total amount</p>
                    <p class="text-base text-gray-500">${{ order.subtotal + order.shipping }}</p>
                </div>
            </div>
            <div class="divide-y">
                <div v-for="item in order.items" class="gap-x-8 py-8 p-2 md:p-8 w-full flex flex-row items-center">
                    <img class="self-start h-40 object-contain rounded-md" :src="getProduct(item.id).img" alt="">
                    <div class="flex flex-col self-start w-full">
                        <div class="flex flex-col md:flex-row justify-between">
                            <p class="font-semibold text-slate-900 text-xl">{{ getProduct(item.id).name }}</p>
                            <p class="font-semibold text-slate-900 text-xl">{{ getProduct(item.id).price }}</p>
                        </div>
                        <p>Qty. {{ item.count }}</p>
                        <p class="text-gray-500 hidden md:flex">{{ getProduct(item.id).desc_short }}</p>
                        <p @click="viewProduct(item.id)" class="text-indigo-600 font-medium hover:cursor-pointer">View
                            product</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>