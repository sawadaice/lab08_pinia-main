import { defineStore } from "pinia";
import { useProductStore } from "./productStore";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
	const cart = ref([]);

	const itemCount = computed(() => cart.value.length);

	const getItemPrice = computed(() => (id) => {
		const productStore = useProductStore();
		const item = cart.value.find((item) => item.id === id);
		const price = item ? productStore.getProduct(item.id).price : 0;
		return (parseFloat(price.replace("$", "")) * item.count).toFixed(2);
	});

	const totalPrice = computed(() => {
		const productStore = useProductStore();
		let sum = cart.value.reduce((acc, item) => {
			const product = productStore.getProduct(item.id);
			return acc + parseFloat(product.price.replace("$", "")) * item.count;
		}, 0);
		return sum;
	});

	function addItem(itemData) {
		const cartItem = cart.value.find((item) => item.id === itemData.id);
		if (cartItem) {
			cartItem.count++;
		} else {
			cart.value.push({ ...itemData, count: 1 });
		}
	}

	function removeItem(id) {
		const itemIndex = cart.value.findIndex((item) => item.id === id);
		if (itemIndex !== -1) {
			cart.value.splice(itemIndex, 1);
		}
	}

	function setItemCount(id, count) {
		const cartItem = cart.value.find((item) => item.id === id);
		if (cartItem) {
			cartItem.count = parseInt(count);
		}
	}

	function emptyCart() {
		cart.value = [];
	}

	return {
		cart,
		itemCount,
		getItemPrice,
		totalPrice,
		addItem,
		removeItem,
		setItemCount,
		emptyCart,
	};
});
