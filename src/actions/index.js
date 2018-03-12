export const ADD_TO_CART = `ADD_TO_CART`
const CART_DEFAULT = [
    {
        id: 1,
        name: 'Emmett',
        price: 9.99,
        quantity: 3,
        get subtotal() {
            return this.price * this.quantity
        },
        relatedItems: [
            { name: 'Blah' }
        ],
        description: 'Everything is awesome.',
        isActive: true
    },
    {
        id: 2,
        name: 'President Business',
        price: 7.99,
        quantity: 1,
        get subtotal() {
            return this.price * this.quantity
        },
        description: 'Micro-managing robots',
        isActive: true
    }
]

// newState = (state, action) => {....}
export default (state = [...CART_DEFAULT], action = {}) => {

    switch (action.type) {
        case ADD_TO_CART :
            return [...state, {
                ...action.product,
                quantity: action.quantity,
                subtotal: action.product.price * action.quantity,
            }]
    }

    return state
}
