var num = prompt("Enter", "");
num=Number(num);
const counterReducer=(state=num,action)=>
{
    const x = 2;
    switch(action.type){
        case "INCREMENT":
            return state+x;
        case "DECREMENT":
            return state-x;
        default:
            return state;
    }
}
export default counterReducer;


