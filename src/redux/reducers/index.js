import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import pipeline from './pipelineReducer';
import organization from './organizationReducer';
import campaign from './campaignReducer';
import product from './productReducer';
import orgLeaderOrder from './orgLeaderOrderReducer';
import orderView from './orderViewReducer'

const store = combineReducers({
  user,
  login,
  product,
  campaign,
  pipeline,
  organization,
  orgLeaderOrder,
  orderView
});

export default store;
