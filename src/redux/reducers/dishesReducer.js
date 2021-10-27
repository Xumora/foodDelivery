
const initialState = {
    dishes: [
        [
            { img: "./Images/food1.png", name: "Spicy seasoned seafood noodles", price: "2.29", available: "20" },
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" },
            { img: "./Images/food3.png", name: "Beef dumpling in hot and sour soup", price: "2.99", available: "18" },
            { img: "./Images/food4.png", name: "Healthy noodle with spinach leaf", price: "3.29", available: "22" },
            { img: "./Images/food5.png", name: "Hot spicy fried rice with omelet", price: "3.49", available: "13" },
            { img: "./Images/food6.png", name: "Spicy instant noodle with special omelette", price: "3.59", available: "17" },
            { img: "./Images/food7.png", name: "Spicy seasoned seafood noodles", price: "3.00", available: "10" },
            { img: "./Images/food8.png", name: "Spicy seasoned seafood noodles", price: "2.50", available: "25" }
        ],
        [
            { img: "./Images/food5.png", name: "Hot spicy fried rice with omelet", price: "3.49", available: "13" },
            { img: "./Images/food6.png", name: "Spicy instant noodle with special omelette", price: "3.59", available: "17" },
            { img: "./Images/food7.png", name: "Spicy seasoned seafood noodles", price: "3.00", available: "10" },
            { img: "./Images/food8.png", name: "Spicy seasoned seafood noodles", price: "2.50", available: "25" }
        ],
        [
            { img: "./Images/food6.png", name: "Spicy instant noodle with special omelette", price: "3.59", available: "17" },
            { img: "./Images/food1.png", name: "Spicy seasoned seafood noodles", price: "2.29", available: "20" },
            { img: "./Images/food5.png", name: "Hot spicy fried rice with omelet", price: "3.49", available: "13" },
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" },
            { img: "./Images/food3.png", name: "Beef dumpling in hot and sour soup", price: "2.99", available: "18" },
            { img: "./Images/food4.png", name: "Healthy noodle with spinach leaf", price: "3.29", available: "22" },
            { img: "./Images/food5.png", name: "Hot spicy fried rice with omelet", price: "3.49", available: "13" },
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" },
            { img: "./Images/food3.png", name: "Beef dumpling in hot and sour soup", price: "2.99", available: "18" }
        ],
        [
            { img: "./Images/food1.png", name: "Spicy seasoned seafood noodles", price: "2.29", available: "20" },
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" },
            { img: "./Images/food3.png", name: "Beef dumpling in hot and sour soup", price: "2.99", available: "18" }
        ],
        [
            { img: "./Images/food5.png", name: "Hot spicy fried rice with omelet", price: "3.49", available: "13" },
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" },
            { img: "./Images/food3.png", name: "Beef dumpling in hot and sour soup", price: "2.99", available: "18" },
            { img: "./Images/food5.png", name: "Hot spicy fried rice with omelet", price: "3.49", available: "13" },
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" },
            { img: "./Images/food5.png", name: "Hot spicy fried rice with omelet", price: "3.49", available: "13" },
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" },
            { img: "./Images/food3.png", name: "Beef dumpling in hot and sour soup", price: "2.99", available: "18" },
            { img: "./Images/food5.png", name: "Hot spicy fried rice with omelet", price: "3.49", available: "13" },
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" }
        ],
        [
            { img: "./Images/food2.png", name: "Salted Pasta with mushroom sauce", price: "2.69", available: "11" },
            { img: "./Images/food3.png", name: "Beef dumpling in hot and sour soup", price: "2.99", available: "18" }
        ]
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default reducer;