const signInReducer=(state="LogIn",action)=>

{

    switch(action.type){

        case 'LOG_IN':

            return state="LoggedIn";

            default:

            return state;

    }

}



export default signInReducer;