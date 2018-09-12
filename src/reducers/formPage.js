import { handleActions } from 'redux-actions';

import { lineChange } from 'actions/formPage';
import { errorForm } from 'actions/formPage';

export default handleActions(
    {
        [lineChange]: (state, action) => {
            return {
                ...state,
                active: action.payload,
                placeholder: action.payload,
            };
        },
        [errorForm]: (state, action) => {
            return {
                ...state,
                formError: action.payload,
            };
        },
    },
    {
        active: '',
        formError: false,
        placeholder: true,
    },
);
