export const initialState={
    basket:[]
};


//selector
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>  item.price+amount,0 );


const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],//push the item into the basket
            };
        default:
            return state;
    }

}

export default reducer;