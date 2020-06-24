// action types

const START_TIMER = 'pomodoro/START'
const STOP_TIMER = 'pomodoro/STOP'
const RESET_TIMER = 'pomodoro/RESET_TIMER'
const TOGGLE_TIMER_TYPE = 'pomodoro/TOGGLE_TIMER_TYPE'
const SET_WORK_INTERVAL = 'pomodoro/SET_WORK_INTERVAL'
const SET_RELAX_INTERVAL = 'pomodoro/SET_RELAX_INTERVAL'
const SESSION_DONE ='pomodoro/SESSION_DONE'

// initial state

const initialState = {
    workInterval: 900,
    relaxInterval: 300,
    timerType: 'work',
    isActive: false,
    isDone: false,
    pomodoro: 0
}

// reducer

const pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER: {
            return {
                ...state,
                isActive: true,
                isDone: false
            }
        }
        case STOP_TIMER: {
            return {
                ...state,
                isActive: false
            }
        }
        case SET_WORK_INTERVAL: {
            return {
                ...state,
                workInterval: action.interval
            }
        }
        case SET_RELAX_INTERVAL: {
            return {
                ...state,
                relaxInterval: action.interval
            }
        }

        case RESET_TIMER: {
            return {
                ...state,
                timerType: 'work',
                startTime: 0,
                stopTime: 0,
                isActive: false,
                isDone: false
            }
        }

        case TOGGLE_TIMER_TYPE: {
            return {
                ...state,
                timerType: state.timerType === 'work' ? 'relax' : 'work'
            }
        }

        case SESSION_DONE: {
            return {
                ...state,
                isDone: true
            }
        }
        default:
            return state;
    }
};

// action creators

export const startTimer = () => ({type: START_TIMER})

export const stopTimer = () => ({type: STOP_TIMER})

export const resetTimer = () => ({type: RESET_TIMER})

export const toggleTimer = () => ({type: TOGGLE_TIMER_TYPE})

export const setWorkInterval = (interval) => ({type: SET_WORK_INTERVAL, interval})

export const setRelaxInterval = (interval) => ({type: SET_RELAX_INTERVAL, interval})

export const sessionDone = () => ({type: SESSION_DONE})

// export

export default pomodoroReducer