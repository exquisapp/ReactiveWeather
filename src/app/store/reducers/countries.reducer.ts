import * as CountriesActions from './../actions';

export interface CountriesState{
    countries: any[]
} 

const initialState: CountriesState = {
    countries: []
}

export function cReducer (state: CountriesState = initialState, action: CountriesActions.cActions): CountriesState{
    switch(action.type){
        case CountriesActions.GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload
            }
        }
    }
    return state;
}