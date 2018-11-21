export const loginUser = data => {
    console.log('ACTION --- Logging in user...');
    return {
        type: 'LOGIN',
        payload: data
    }
}

export const logoutUser = data => {
    console.log('ACTION --- Logging out user...');
    return {
        type: 'LOGOUT',
        payload: data
    }
}