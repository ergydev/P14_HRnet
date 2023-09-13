import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'firstName',
    initialState: {
        firstName: '',
    },

    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        getFirstName: (state, action) => {
            return state.firstName
        }
    },
}
);

export default slice.reducer

const { setFirstName, getFirstName } = slice.actions
export const set = (firstName) => async dispatch => {
    try {

        dispatch(setFirstName(firstName));
    } catch (e) {
        return console.error(e.message);
    }
}

export const get = () => async dispatch => {
    try {
      return dispatch(getFirstName())
    } catch (e) {
      return console.error(e.message);
    }
  }