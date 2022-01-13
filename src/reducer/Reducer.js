const initialState = {
user: null
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Login_Action':
        return { ...state,  user : action.user }
        default:
            return state
    }
}
export default Reducer