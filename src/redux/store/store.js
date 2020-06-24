import {combineReducers, createStore} from "redux";
import pomodoroReducer from "../reducers/pomodoro-reducer";

let rootReducer = combineReducers({
  pomodoro: pomodoroReducer
});

let store = createStore(rootReducer);

export default store;