import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

function* Login(action) {
    console.log(action.payload)
    try {
        const data = yield call(getPostData, action.payload)
        
        yield put({ type: 'Login_Action', user: data.data })

    } catch (e) { 
        console.log('LOGIN ERROR: ' + e) 
    }
}
const getPostData = (params) => {
    return axios.post('https://sandbox.izivan.com.vn/api/login', params)
}
function* mySaga() {
    yield takeLatest('Login_Action', Login)
}
export default mySaga