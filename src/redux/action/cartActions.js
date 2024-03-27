export const addToCart  = (product)=>{
    return {   
        type:"ADDTOCART",
        product
    };
};
export const deleteFromCart  = (product)=>{
    return {
        type:"DELETEEROMCART",
        product
    };
};
export const deleteItemFromCart  = (product)=>{
    return {
        type:"DELETEITMEROMCART",
        product
    };
};