import * as countries from './countries.reducer';
export *  from './countries.reducer';


import { ActionReducerMap } from '@ngrx/store';

export const allReducers: ActionReducerMap<any> = {
    countries: countries.cReducer
}

