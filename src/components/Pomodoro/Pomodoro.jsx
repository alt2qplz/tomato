import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {
  resetTimer, sessionDone,
  setRelaxInterval,
  setWorkInterval,
  startTimer,
  stopTimer,
  toggleTimer
} from "../../redux/reducers/pomodoro-reducer"
import "antd/dist/antd.css"
import TimePicker from "./TimerComponents/TimePicker"
import TimerCircle from "./TimerComponents/TimerCircle"
import Buttons from "./TimerComponents/Buttons"

const Pomodoro = props => {

  const [seconds, setSeconds] = useState(props.workInterval)

  useEffect(() => {
    // Основная логика таймера
    let interval;
    if (props.isActive && seconds === 0 && props.timerType === "work") {
      setSeconds(props.relaxInterval)
      props.toggleTimer()
      props.startTimer()
    } else if (props.isActive && seconds === 0 && props.timerType === "relax") {
      setSeconds(props.workInterval)
      props.toggleTimer()
      clearInterval(interval)
      props.stopTimer()
      props.sessionDone()
    } else if (props.isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!props.isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [props.isActive, seconds, props.timerType, props.workInterval, props.relaxInterval])

  const start = () => {
    props.startTimer()
  }

  const stop = () => {
    props.stopTimer()
  }

  const reset = () => {
    props.resetTimer()
    setSeconds(props.workInterval)
  }

  const setWorkInterval = e => {
    let workInterval = e * 60
    props.setWorkInterval(workInterval)

    if (props.timerType === "work") {
      setSeconds(workInterval)
    }

  }

  const setRelaxInterval = e => {
    let relaxInterval = e * 60
    props.setRelaxInterval(relaxInterval)

    if (props.timerType === "relax") {
      setSeconds(relaxInterval)
    }
  }

  return <div className={"mainWrapper"}>
      <div className={"whiteContainer"}>
        <TimePicker workInterval={props.workInterval}
                    relaxInterval={props.relaxInterval}
                    setWorkInterval={setWorkInterval}
                    setRelaxInterval={setRelaxInterval}
                    isActive={props.isActive}
        />

        <TimerCircle seconds={seconds}
                     workInterval={props.workInterval}
                     relaxInterval={props.relaxInterval}
                     isActive={props.isActive}
                     timerType={props.timerType}
                     isDone={props.isDone}
        />

        <Buttons start={start}
                 stop={stop}
                 reset={reset}
                 isActive={props.isActive}
        />
      </div>
  </div>
}

const mapStateToProps = state => ({
  workInterval: state.pomodoro.workInterval,
  relaxInterval: state.pomodoro.relaxInterval,
  isActive: state.pomodoro.isActive,
  timerType: state.pomodoro.timerType,
  currentInterval: state.pomodoro.currentInterval,
  isDone: state.pomodoro.isDone
})

export default connect(mapStateToProps, {
  startTimer,
  stopTimer,
  setWorkInterval,
  setRelaxInterval,
  resetTimer,
  toggleTimer,
  sessionDone
})(Pomodoro)