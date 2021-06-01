import streams from '../apis/streams';
import history from '../history';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', { ...formValues, userId });
        dispatch({ type: 'CREATE_STREAM', payload: response.data })
        // get the user back to the root route
        history.push('/');
    }
};

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({ type: 'FETCH_STREAMS', payload: response.data });
    }
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({ type: 'FETCH_STREAM', payload: response.data });
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        //const response = await streams.put(`/streams/${id}`, formValues);
        const response = await streams.patch(`/streams/${id}`, formValues);
        //put - update all properties of a record || patch - update some properties of a record
        dispatch({ type: 'EDIT_STREAM', payload: response.data });
        //navigate back to root route
        history.push('/');
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);

        dispatch({ type: 'DELETE_STREAM', payload: id });
        //navigate back to root route
        history.push('/');
    }
}