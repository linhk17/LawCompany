import {
    SET_USERS,
    SET_MATTERS,
    SET_TYPE_SERVICES,
    SET_SERVICES,
    SET_QUOTES,
    SET_QUOTE_BY_ID,
    SET_TIME_PAY,
    SET_MATTER,
    SET_TASKS,
    SET_FILES
} from './constants'

export const setUsers = payload => (
    {
        type: SET_USERS,
        payload
    }
)
export const setMatters = payload => (
    {
        type: SET_MATTERS,
        payload
    }
)
export const setTypeServices = payload => (
    {
        type: SET_TYPE_SERVICES,
        payload
    }
)
export const setServices = payload => (
    {
        type: SET_SERVICES,
        payload
    }
)
export const setQuotes = payload => (
    {
        type: SET_QUOTES,
        payload
    }
)
export const setQuoteById = payload => (
    {
        type: SET_QUOTE_BY_ID,
        payload
    }
)
export const setTimePay = payload => (
    {
        type: SET_TIME_PAY, 
        payload
    }
 )
export const setMatter = payload => (
    {
        type: SET_MATTER,
        payload
    }
)
export const setTasks = payload => (
    {
        type: SET_TASKS,
        payload
    }
)
export const setFiles = payload => (
    {
        type: SET_FILES,
        payload
    }
)