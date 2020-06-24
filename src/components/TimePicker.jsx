import React from "react"
import {Slider, InputNumber, Row, Col} from 'antd';

const TimePicker = props => {
  return <div>

    <h3>
      Рабочая сессия (мин):
    </h3>
    <Row justify={'space-between'}>

      <Col span={6}>
      <InputNumber min={1} max={30} value={props.workInterval / 60} onChange={props.setWorkInterval}
                   disabled={props.isActive} style={{marginBottom: '10px'}}/>
      </Col>

      <Col span={16}>
        <Slider min={1} max={30} value={props.workInterval / 60} onChange={props.setWorkInterval}
                disabled={props.isActive}/>
      </Col>

    </Row>



    <h3>
      Перерыв (мин):
    </h3>

    <Row justify={'space-between'}>
      <Col span={6}>

      <InputNumber min={1} max={10} value={props.relaxInterval / 60} onChange={props.setRelaxInterval}
                   disabled={props.isActive}/>

      </Col>
      <Col span={16}>
    <Slider min={1} max={10} value={props.relaxInterval / 60} onChange={props.setRelaxInterval}
            disabled={props.isActive}/>
      </Col>






    </Row>

  </div>
}

export default TimePicker;