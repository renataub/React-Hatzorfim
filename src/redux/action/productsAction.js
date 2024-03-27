export const decreaseQty  = (product)=>{
    return {   
        type:"DECREASEQTY",
        payload: product,
    };
};
export const addQty  = (product)=>{
    return {
        type:"ADDQTY",
        payload: product,
    };
};
export const addAllQty  = (product,howMany)=>{
    return {
        type:"ADDALLQTY",
        payload: product,
        howMany:howMany
    };
};