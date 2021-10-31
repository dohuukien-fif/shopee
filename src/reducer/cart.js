import { ActionTypes } from "./../contien/actiom";
var data = JSON.parse(localStorage.getItem('MU'));

var initialSate =data ?data: [];

var Carts = (state=initialSate,action)=>{
   var  {productsss,quantity}=action;
  var index = -1;
   
    switch(action.type){
      //+ product
        case ActionTypes.ADD_TO_CART:
       index = findProductInCart(state,productsss)
       if(index !==-1){
        state[index].quantity +=quantity;
      }else{
        state.push({
          productsss,
          quantity
                   });
      }
        localStorage.setItem('MU',JSON.stringify(state))
          return [...state];
            //delete
           case ActionTypes.DELETE_PRODUCT_IN_CART:
              index = findProductInCart(state,productsss);
              if(index !==-1){
                state.splice(index,1)
              }
              localStorage.setItem('MU',JSON.stringify(state))
              return [...state]
              //+ - 1 product
              case ActionTypes .UPDATE_QUANTITY:
                index = findProductInCart(state,productsss);
                if(index !==-1){
                  state[index].quantity=+quantity;
                }
                localStorage.setItem('MU',JSON.stringify(state))
                return [...state]
              
        default:return [...state];
    }
  
}
var findProductInCart = (ca,productsss)=>{
  var index = -1;
  if (ca.length>0){
    for(var i = 0;i<ca.length;i++){
      if(ca[i].productsss.id === productsss.id){
        index=i;
        break; 
      }
    }
  }
  return index;
}
export default Carts;