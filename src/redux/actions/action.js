export const ADD = (item) => {
    return {
        type:"ADD_CART",
        payload: item
    }
}

//remove item from cart
export const DLT = (id) =>{
    return {
        type: "RMV_CART",
        payload: id
    }
}

export const REMOVE = (item) => {
    return {
        type:"REMOVE_ONE",
        payload: item
    }
}