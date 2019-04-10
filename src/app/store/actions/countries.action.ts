import { Action } from '@ngrx/store';

export const READ_COUNTRIES = "READCOUNTRIES";
export const READ_STATES = "READSTATES";
export const GET_COUNTRIES = "GET COUNTRIES [COUNTRIES]";
export const GET_STATES = "GET STATES [COUNTRIES]";

export class getCountries implements Action{
    readonly type = GET_COUNTRIES;
    constructor(public payload: any){}
}

export class getStates implements Action{
    readonly type = GET_COUNTRIES;
    constructor(public payload: any){}
}

export class readCountries implements Action {
    readonly type = READ_COUNTRIES
}

export class readStates implements Action {
    readonly type = READ_STATES
}

export type cActions = getCountries | getStates | readCountries | readStates;