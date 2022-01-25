const initialState = {
users:[]
}

const applyUsersChange = (state = initialState, action) => {
    switch (action.type) {
        case 'AddUser':
            console.log("Add user: " + action.payload)
            return { ...state, users: [...state.users, action.payload] }

        case 'updateUser':
            console.log("Update uset with id: " + action.payloadId)
            const Userindex = state.users.findIndex((usr) => usr.id === action.payloadId );
            const updatedUsers = [...state.users];
            updatedUsers.splice(Userindex, 1, action.payloadUser); 
            return { ...state, users: updatedUsers }

        case 'deleteUser':
            console.log("Deleting user with id: " + action.payload)
            var newArr = [...state.users];
            newArr.splice(newArr.findIndex(function(i){
                return i.id === action.payload;
            }), 1);
            return { ...state, users: newArr }

        default:
            return state
    }
}

export default applyUsersChange