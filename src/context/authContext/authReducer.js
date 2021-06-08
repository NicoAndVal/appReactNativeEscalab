
export const authReducer = (state, action) => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggin: true,
                user:'User 1'
            }
    
        default:
            return state;
    }
}