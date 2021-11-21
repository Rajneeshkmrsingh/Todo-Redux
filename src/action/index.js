export const AddItem= (data)=>{
    const number = Math.random() *100
    const num = number.toFixed();
    return (
        {
            type:"ADD_TODO",
            payload:{
                id:num,
                data:data
            }

        }
    )
};
export const DelItem= (id)=>{
    return (
        {
            type:"DELETE_TODO",
            id
        }
    )
};
export const RemoveAll= ()=>{
    return (
        {
            type:"REMOVE_ALL"
        }
    )
}