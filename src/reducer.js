

export const initialState={
    basket: [{
        id:"12345", 
        title:"Apple Watch Series 3",
        price:11.96,
        rating:5,

        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNQZyxN339VE725fsMiqloN5dTS31HhqY6Dw&usqp=CAU"
    },
],
    user: null,
};
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price + amount,0);

const reducer=(state, action) =>{
    console.log(action);
    switch(action.type){
    case 'ADD_TO_BASKET':
        return {
            ...state,
            basket: [...state.basket,action.item],
        };
        break;
    case 'REMOVE_FROM_BASKET':
        let newBasket=[...state.basket];
        const index=state.basket.findIndex((basketItem)=> basketItem.id ===action.id)
        if(index >=0){

            newBasket.splice(index,1);
        
        }
        else{
            console.warn(
               'Cant remove product(id: ${action.id}) as it is not in basket'
            );
        }
        return { ...state,basket:newBasket,};
       
    default:
        return state;
}
};

export default reducer;

