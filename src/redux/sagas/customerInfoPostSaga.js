import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* customerInfoPostSaga() {
    yield takeEvery('POST_CUSTINFO', customerInfoPost)
   
}

function* customerInfoPost(action) {
    console.log('post customer info', action);
    try{
        yield call(axios.post, `/api/payment/customerinfo`, action.payload);
        // yield put({
        //     type: 'GET_ORGANIZATION'
        // })
    } catch (error) {
        console.log('error ing POST customerinfo:', error);
    }
}

export default customerInfoPostSaga;