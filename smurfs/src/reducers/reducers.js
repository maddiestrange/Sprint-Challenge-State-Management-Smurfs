import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE,
} from '../actions/actions';

const initialState = {
    smurfs: [  {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
      },
      {
        name: "Sleepy",
        age: 200,
        height: "5cm",
        id: 1
      }],
    isLoading: false,
    error: ''

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error:''
            };
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case POST_SMURF_START:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_SMURF_SUCCESS: {
            return {
                ...state,
                smurfs: action.payload,
                isLoading:false,
                error:''
            }
        }
        case POST_SMURF_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }   
        default:
            return state;
    }
} 