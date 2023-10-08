<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store/cartStore';
import { useProductStore } from '../store/productStore';
import { useOrderStore } from '../store/orderStore';
import { ref, computed } from 'vue';

const cartStore = useCartStore()
const orderStore = useOrderStore()
const { cart } = storeToRefs(cartStore)
const productStore = useProductStore()
const { getProduct } = storeToRefs(productStore)
const shippingPrice = computed(() => {
    return cart.value.length === 0 ? 0.0 : 5.0
})

function checkout() {
    if (cart.value.length > 0) {
        orderStore.createOrder(cart.value, parseFloat(cartStore.totalPrice), shippingPrice.value)
        cartStore.emptyCart()
    }
}

function readInput(id, value) {
    cartStore.setItemCount(id, value)
}

function itemRemove(id) {
    cartStore.removeItem(id)
}
</script>

<template>
    <div class="p-4 max-w-7xl mx-auto flex flex-col lg:p-8">
        <p class="mx-4 lg:mx-0 text-2xl font-bold text-gray-900">Shopping cart</p>
        <div class="grid grid-cols-1 divide-y">
            <div v-for="item in cart" class="flex flex-row py-8">
                <img :src="getProduct(item.id).img" alt="" class="border object-cover h-32 rounded-md">
                <div class="flex flex-col w-full p-4">
                    <div class="flex flex-row justify-between h-full">
                        <div class="flex flex-col">
                            <p class="text-gray-900 font-medium">{{ getProduct(item.id).name }}</p>
                            <div class="flex flex-row items-center">
                                <p>Qty</p>
                                <input @input="e => readInput(item.id, e.target.value)" :id="item.id + '-count'" min="1"
                                    :value="item.count" type="number" class="ml-2 border p-1 rounded-md w-12">
                            </div>
                        </div>
                        <div class="flex flex-col justify-between">
                            <p class="text-gray-900 font-medium">${{ cartStore.getItemPrice(item.id) }}
                            </p>
                            <p @click="itemRemove(item.id)" class="text-gray-400 hover:cursor-pointer">Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p v-if="cart.length == 0" class="m-16 text-3xl font-medium text-gray-300 mx-auto">Your cart is empty</p>
        <div>
            <p class="px-4 mt-4 text-gray-900 font-semibold text-2xl">Order summary</p>
            <div class="p-2 mt-8 flex flex-col divide-y space-y-4">
                <div class="p-2 flex justify-between">
                    <p class="text-gray-700">Subtotal</p>
                    <p class="text-gray-700">${{ cartStore.totalPrice.toFixed(2) }}</p>
                </div>
                <div class="p-2 flex justify-between">
                    <p class="text-gray-700">Shipping estimate</p>
                    <p class="text-gray-700">${{ shippingPrice.toFixed(2) }}</p>
                </div>
                <div class="p-2 flex justify-between">
                    <p class="text-xl font-base">Total</p>
                    <p class="text-xl font-base">${{ (parseFloat(cartStore.totalPrice) + shippingPrice).toFixed(2) }}</p>
                </div>
                <button @click="checkout()"
                    class="p-2 lg:w-40 lg:self-end rounded-md text-white font-medium bg-indigo-500 hover:bg-indigo-400">Checkout</button>
            </div>
        </div>
    </div>
</template>