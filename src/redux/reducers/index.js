import {postsReducer} from './postsReducer'
import {combineReducers} from 'redux'

export const allReducers =combineReducers({
    posts:postsReducer
})