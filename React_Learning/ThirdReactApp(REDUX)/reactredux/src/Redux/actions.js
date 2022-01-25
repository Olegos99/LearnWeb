const AddUser = (user) => {
    return {
        type: 'AddUser',
        payload: user
    }
}

const updateUser = (id, user) => {
    return {
        type: 'updateUser',
        payloadId: id,
        payloadUser: user
    }
}

const deleteUser = (id) => {
    return {
        type: 'deleteUser',
        payload: id
    }
}


export { AddUser, updateUser, deleteUser }