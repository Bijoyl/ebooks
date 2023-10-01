export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){
        case "ADD":
            return {...state, cartList: payload.products, total: payload.total}

        case "REMOVE":
            return {...state, cartList: payload.products, total: payload.total}
        
        case "CLEAR":
            return {...state, cartList: payload.products, total: payload.total}
        
        default:
            throw new Error("Not found!");
    }
} 