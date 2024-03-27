const cart = [];
export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case "DELETEEROMCART": {
            state = state.filter(item => item.cartQTY != 0)
            return state;
        }
        case "DELETEITMEROMCART": {
            state = state.filter(item => item.id != action.product.id)
            return state;
        }
        case "ADDTOCART": {
            let flag = 0;
            state.map(element => {
                if (element.id == action.product.id)
                    flag = 1;
            })
            if (!flag) {
                return [...state, action.product];
            }
            return state
        }
    }
    return state;
}