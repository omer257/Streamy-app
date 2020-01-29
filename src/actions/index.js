import {
  SIGN_IN, SIGN_OUT, CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from '../reducers/types';
import Streams from '../apis/Streams';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: null
  }
}

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const {userId} = getState().auth; 
    const results = await Streams.post("/streams", {...formValues,userId});
    dispatch({ type: CREATE_STREAM, payload: results.data })
  }
}
export const fetchStream = (id) => {
  return async (dispatch, getState) => {
    const results = await Streams.get(`/streams${id}`);
    dispatch({ type: FETCH_STREAM, payload: results.data })
  }
}
export const fetchStreams = () => {
  return async (dispatch, getState) => {
    const results = await Streams.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: results.data })
  }
}

export const deleteStream = (id) => {
  return async (dispatch, getState) => {
    await Streams.delete(`/streams${id}`);
    dispatch({ type: DELETE_STREAM, payload: id })
  }
}
export const editStream = (id,formValues) => {
  return async (dispatch, getState) => {
    const results = await Streams.put(`/streams${id}`,formValues);
    dispatch({ type: EDIT_STREAM, payload: results.data })
  }
}