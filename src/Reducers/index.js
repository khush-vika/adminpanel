const setUserName = (state=0, action) => {
    var value = 10;
    switch (action.type) {
        case 'USERNAME': 
            return state;
        case 'PASSWORD':
             return state;
        case 'SIGNIN': 
               window.alert(action.payload.value);
                return state = action.payload.value;
        default: return state
    }
};

export default setUserName;
