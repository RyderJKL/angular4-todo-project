/**
 * Created by onejustone on 2017/5/25.
 */
import {Action} from '@ngrx/store'
import {Auth} from '../domain/entities'

import {
  LOGIN_FAILED_NOT_EXISTED,
  LOGIN_FAILED_NOT_MATCH,
  LOGOUT,
  LOGIN,
  REGISTER,
  REGISTER_FAILED_EXISTED
} from '../actions/auth.action'

export function  authReducer (state : Auth = {
  user: null,
  hasError: true,
  errMsg: null,
  loading: false,
  redirectUrl: null
}, action: Action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({},action.payload,{loading:false,hasError:false});
    case LOGIN_FAILED_NOT_EXISTED:
      return Object.assign({},state,{
        user:null,
        hasError: true,
        loading: false,
        errMsg: 'Username not existed'
      });
    case LOGIN_FAILED_NOT_MATCH:
      return Object.assign({},state,{
        user: null,
        hasError: true,
        loading: false,
        errMsg: 'Password not match'
      });
    case LOGOUT:
      return Object.assign({}, state,{
        user: null,
        hasError: true,
        errMsg: 'no credentials',
        redirectUrl: '/'
      })
    case REGISTER:
      return Object.assign({}, action.payload,{loading: false,hasError:false})
    case REGISTER_FAILED_EXISTED:
      return Object.assign({}, state, {
        user: null,
        hasError: true,
        loading: false,
        errMsg: 'username existed',
        redirectUrl: null
      });
    default:
      return state;
  }
}
