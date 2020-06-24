import React from "react"
import {Progress, Row} from "antd";

const TimerCircle = props => {
  return <Row justify={'center'} style={{ marginTop: 24 }}>
    <Progress type="dashboard"
              strokeWidth={5}
              strokeColor={props.timerType === 'work' ? '#1890ff' : '#52c41a'}
              percent={
                (props.timerType === 'work') ?
                  `${props.seconds / props.workInterval * 100}`
                  : `${props.seconds / props.relaxInterval * 100}`
              }
              format={
                () => props.isDone
                ? 'ГОТОВО'
                : `${(props.seconds / 60 < 10) ? '0' + Math.floor(props.seconds / 60) : Math.floor(props.seconds / 60)}
                 : 
                 ${(props.seconds % 60 < 10) ? '0' + props.seconds % 60 : props.seconds % 60} 
                  ${props.timerType === 'work' ? `Работа` : 'Отдых'}`
              }
              width={200}
    />
  </Row>
}

export default TimerCircle;