
export interface CountriesState{
    countries: any[]
} 

const initialState: CountriesState = {
    countries: [{name: "coole", type: "not cool"}]
}

export function cReducer (state: CountriesState = initialState, action): CountriesState{
    return state;
}