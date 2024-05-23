const INIT_STATE = {
    carts: []
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART" : {
            const itemIndex =  state.carts.findIndex((item)=>item.id === action.payload.id);

            if(itemIndex >=0){
                state.carts[itemIndex].qnty +=1;

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }
            else {
                const temp = {...action.payload, qnty:1}
                return {
                    ...state,
                    carts:[...state.carts, temp]
                }
            }

            // return {
            //     ...state,
            //     carts:[...state.carts, action.payload]
            // }
        }

        case "RMV_CART": {
            const data= state.carts.filter((ele)=> ele.id !== action.payload)
            //return the items which don't match the item selected for deletion, payload is id
            return {
                ...state,
                carts: data
            }
        }
        case "REMOVE_ONE": {
            const itemIndex_decre = state.carts.findIndex((item)=> item.id === action.payload.id);

            if( state.carts[itemIndex_decre].qnty >=1){
                const deletitem = state.carts[itemIndex_decre].qnty -= 1;
                // console.log([...state.carts, deletitem]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[itemIndex_decre].qnty ===1){
                const data = state.carts.filter((item)=>item.id !== action.payload.id);
                //similar to RMV_CART
                return {
                    ...state,
                    carts:data
                }
            }
        }

        default : return state

    }

}

