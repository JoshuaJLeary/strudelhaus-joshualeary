import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import pipelineSaga from './pipelineSaga';
import organizationSaga from './organizationSaga';
import addOrganizationSaga from './createOrganizationSaga';
import addCampaign from './createCampaignSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    addCampaign(),
    pipelineSaga(),
    organizationSaga(),
    addOrganizationSaga(),
    // watchIncrementAsync()
  ]);
}
