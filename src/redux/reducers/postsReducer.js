import * as actions from '../actionTypes/'
let allPosts = []


export const postsReducer = (state = allPosts, action) => {
    switch (action.type) {
        case actions.GET_POSTS:

            return action.payload

        default:
            return state;
    }
}