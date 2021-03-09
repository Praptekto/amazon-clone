export const initialState={
    basket:[],
    user:null
};


//selector
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>  item.price+amount,0 );
    //reduce berguna untuk maps through the basket
    //and then tally up the total
    //0 adalah initialamount
    //reduce is native js array method


const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],//push the item into the basket
            //kata basket diatas adalah bagian yang ingin kita rubah
            //setelah ":" adalah value yang ingn kita masukan
            };
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex(
                (basketItem)=> (basketItem.id===action.id)
            )
            let newBasket=[...state.basket];
            if (index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `can't remove product (id : ${action.id}) as it is not in teh basket! `
                )
            }
            return {
                ...state,
                basket:newBasket
            }
        case 'SET_USER' :
            return {
                ...state, user:action.user
            }
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []

            }
        default:
            return state;
    }

}

export default reducer;