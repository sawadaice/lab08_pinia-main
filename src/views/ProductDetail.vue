<script setup>
import { useRoute } from 'vue-router'
import { useProductStore } from '../store/productStore';
import AddToCart from '../components/AddToCart.vue';

const route = useRoute()
const id = parseInt(route.params.id)
const productList = useProductStore()
const product = productList.getProduct(id)

</script>

<template>
    <div class="p-4 max-w-7xl mx-auto flex flex-col lg:p-8">
        <p class="text-2xl font-bold text-gray-900">Product details</p>
        <div class="py-8 flex flex-col lg:flex-row">
            <img :src="product.img" class="border rounded-md object-cover object-center lg:max-w-xl h-80 lg:h-100 w-full">
            <div class="px-4 py-8 md:px-8 flex flex-col w-full">
                <div class="border-b w-full pb-8">
                    <p class="text-3xl font-bold text-gray-900">{{ product.name }}</p>
                    <p class="text-3xl text-gray-900">{{ product.price }}</p>
                    <p class="mt-8 text-gray-900 font-medium">{{ product.desc_short }}</p>
                    <p class="mt-2 text-gray-600">{{ product.desc_long }}</p>
                </div>
                <div class=" py-4 flex flex-row justify-between">
                    <AddToCart :product-id="id" />
                </div>
            </div>
        </div>
    </div>
</template>