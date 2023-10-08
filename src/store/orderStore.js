import { defineStore } from "pinia";
import { ref } from "vue";

function createId() {
	return Date.now().toString(36);
}

export const useOrderStore = defineStore("order", () => {
	const orders = ref([]);

	function createOrder(data, subtotal, shipping) {
		const orderId = createId();
		orders.value.push({
			id: orderId,
			date: new Date(),
			total: subtotal + shipping,
			subtotal: subtotal,
			shipping: shipping,
			items: data,
		});
	}

	return {
		orders,
		createOrder,
	};
});
