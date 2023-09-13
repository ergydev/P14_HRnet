const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
}

const formulaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            }
        default:
            return state
    }  
}

export default formulaireReducer