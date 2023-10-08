<script setup>
import { useProductStore } from '../store/productStore'
import { useRouter } from 'vue-router'
import AddToCart from '../components/AddToCart.vue';
import { storeToRefs } from 'pinia';
const router = useRouter()
const productStore = useProductStore()
const { products } = storeToRefs(productStore)
const goToProductDetail = (productId) => {
    router.push({ name: 'product', params: { id: productId } })
}

</script>

<template>
    <div class="mx-auto max-w-7xl p-8">
        <p class="text-2xl font-bold text-gray-900">Products</p>
        <div class="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="product in products">
                <div class="border rounded-md">
                    <div class="flex flex-col">
                        <img @click="goToProductDetail(product.id)" :src="product.img" alt=""
                            class="rounded-t-md object-cover object-center h-96 hover:opacity-75 hover:cursor-pointer">
                        <div class="p-4">
                            <div class="flex flex-col text-center">
                                <p class="text-gray-500">{{ product.name }}</p>
                                <p class="text-gray-900 font-medium">{{ product.price }}</p>
                            </div>
                            <AddToCart :product-id="product.id" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>