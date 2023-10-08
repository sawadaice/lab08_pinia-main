<script setup>
import { useCartStore } from '../store/cartStore'

const props = defineProps({
    productId: Number
})

const cartStore = useCartStore()

const addCartItem = () => {
    cartStore.addItem({
        id: props.productId,
        count: 1
    })
}
</script>

<template>
    <button @click="addCartItem(props.productId)"
        class="mt-2 p-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-950 rounded-md">Add to
        cart</button>
</template>