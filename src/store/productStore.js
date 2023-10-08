import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
	state: () => ({
		products: [
			{
				id: 1,
				name: "Adidas Yeezy 350",
				price: "$453.45",
				desc_short: "Unleash your inner athlete in these lightweight, breathable running shoes",
				desc_long:
					"This description underscores the athletic performance features of the shoes",
				img: new URL("../assets/img/1.webp", import.meta.url).href,
			},
			{
				id: 2,
				name: "Puma Suede Classic XXI",
				price: "$111.89",
				desc_short: "Malignant neoplasm of unspecified ciliary body",
				desc_long:
					"This highlights the durability and weather-resistance of the boots, positioning them as ideal for outdoor exploration",
				img: new URL("../assets/img/2.webp", import.meta.url).href,
			},
			{
				id: 3,
				name: "Nike Airmax AP",
				price: "$247.28",
				desc_short: "Slip into relaxation mode with these ultra-plush memory foam slippers",
				desc_long:
					"Slip into relaxation mode with these ultra-plush memory foam slippers",
				img: new URL("../assets/img/3.webp", import.meta.url).href,
			},
			{
				id: 4,
				name: "Nike Air Force 1 SP",
				price: "$342.63",
				desc_short: "Walk on the wild side with these animal print stiletto heels",
				desc_long:
					"targeting those looking to make a fashion statement",
				img: new URL("../assets/img/4.webp", import.meta.url).href,
			},
			{
				id: 5,
				name: "Nike Air Max X Off White",
				price: "$433.31",
				desc_short: "Stay cozy and warm with these faux fur-lined winter boots",
				desc_long:
					"making them perfect for cold weather",
				img: new URL("../assets/img/5.webp", import.meta.url).href,
			},
			{
				id: 6,
				name: "Vans Old Skool",
				price: "$90.74",
				desc_short: "Elevate your fashion game with these trendy high-top sneakers",
				desc_long:
					"This description focuses on the insulation and warmth provided by the boots",
				img: new URL("../assets/img/6.webp", import.meta.url).href,
			},
			{
				id: 7,
				name: "Vans Skate Old Skool",
				price: "$124.94",
				desc_short: "Experience comfort like never before in these cushioned running sneakers",
				desc_long:
					"This emphasizes the comfort and functionality of the shoes",
				img: new URL("../assets/img/7.webp", import.meta.url).href,
			},
			{
				id: 8,
				name: "Nike Black",
				price: "$231.64",
				desc_short: "Step into style with these sleek and sophisticated leather loafers",
				desc_long:
					"This description highlights the elegance and material of the shoes",
				img: new URL("../assets/img/8.webp", import.meta.url).href,
			},
			
		],
	}),
	getters: {
		getProduct: (state) => {
			return (productId) =>
				state.products.find((product) => product.id === productId);
		},
	},
});
