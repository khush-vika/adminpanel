export function USERNAME_TASK(){
    return {
        type:'USERNAME'
    }
};
export function PASSWORD_TASK(){
    return {
        type:'PASSWORD'
    }
};


export function SIGNIN_TASK(username, password){
    return {
        type:'SIGNIN',payload:username,payload:password
    }
};


