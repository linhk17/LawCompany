import { SET_FEES, SET_FILES, SET_MATTER, SET_MATTERS, 
    SET_QUOTES, SET_QUOTE_BY_ID, SET_SERVICES, 
    SET_STEP, SET_STEPS, SET_TASKS, 
    SET_TIME_PAY, SET_TYPE_SERVICES, SET_USER, 
    SET_USERS, SET_BILL, SET_BILLS } from "./constants"
const initState = {
    users: [],
    matters: [],
    type_services: [],
    services: [],
    quotes: [],
    matter: {},
    quoteOne: {},
    timePay: {},
    tasks: [],
    files: [],
    user: {},
    step: {},
    steps: [],
    fees: [],
    bills: [],
    bill: {}
}

function reducer(state, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_MATTERS:
            return {
                ...state,
                matters: action.payload
            }
        case SET_MATTER:
            return {
                ...state,
                matter: action.payload
            }
        case SET_TYPE_SERVICES:
            return {
                ...state,
                type_services: action.payload
            }
        case SET_SERVICES:
            return {
                ...state,
                services: action.payload
            }
        case SET_QUOTES:
            return {
                ...state,
                quotes: action.payload
            }
        case SET_QUOTE_BY_ID:
            return {
                ...state,
                quoteOne: action.payload
            }
        case SET_TIME_PAY:
            return {
                ...state,
                timePay: action.payload
            }
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case SET_FILES:
            return {
                ...state,
                files: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_STEP:
            return {
                ...state,
                step: action.payload
            }
        case SET_STEPS:
            return {
                ...state,
                steps: action.payload
            }
        case SET_FEES:
            return {
                ...state,
                fees: action.payload
            }
        case SET_BILLS:
            return {
                ...state,
                bills: action.payload
            }
        case SET_BILL:
            return {
                ...state,
                bill: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}
export { initState }
export default reducer