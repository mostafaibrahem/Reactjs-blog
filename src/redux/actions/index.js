import * as actions from '../actionTypes'
import { apiUrl } from '../../shared/consts'

export const getPosts =(posts)=>{
    return{
        type: actions.GET_POSTS,
        payload:posts
    }
}
export const fetchPosts = () => {
    return (dispatch) => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((json) => {
            dispatch(getPosts(json.posts))
        })
        .catch((e) => {
            console.error(e);
        }
        );
    };
  };