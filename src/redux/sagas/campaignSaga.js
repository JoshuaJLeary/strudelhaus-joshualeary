import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* campaignSaga() {
    yield takeEvery('GET_CAMPAIGN', getCampaign),
    yield takeEvery('DELETE_CAMPAIGN', deleteCampaign),
    yield takeEvery('ADD_CAMPAIGN', createCampaign),
    yield takeEvery('EDIT_CAMPAIGN', editCampaign)
}

function* createCampaign(action) {
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }
    try{
        yield call(axios.post, `/admin/campaign`, action.payload, config);
        yield put({
            type: 'GET_CAMPAIGN'
        })
    } catch (error) {
        console.log('error in POST createCampaign', error);
    }
}

function* deleteCampaign(action) {
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    } 
    try{
        yield call(axios.delete, `/admin/campaign/${action.payload.campaign_id}`, config);
        yield put({
            type: 'GET_CAMPAIGN',
        })
    } catch (error) {
        console.log('error in deleteCampaign:', error);
    }
}

function* getCampaign(action) {
    try {
        const campaignResponse = yield call(axios.get, `/admin/campaign`);
        yield put({
            type: 'FETCH_CAMPAIGN',
            payload: campaignResponse.data,
        })
    } catch (error) {
        console.log('error in getCampaign:', error);
    }
}

function* editCampaign(action) {
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    } 
    try{
        yield call(axios.put, `/admin/campaign`, action.payload, config);
        yield put({
            type: 'GET_CAMPAIGN',
        })
    } catch (error) {
        console.log('error in editCampaign', error);
    }
}

export default campaignSaga;

