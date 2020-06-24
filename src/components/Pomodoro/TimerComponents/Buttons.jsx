import React from "react"
import {Button, Col, Row} from "antd"
import CaretRightOutlined from "@ant-design/icons/lib/icons/CaretRightOutlined"
import RedoOutlined from "@ant-design/icons/lib/icons/RedoOutlined"
import PauseOutlined from "@ant-design/icons/lib/icons/PauseOutlined"

const Buttons = props => {
  return <Row justify="space-between" gutter={[8, 8]} style={{ marginTop: 24 }}>

    <Col span={12}>
    {props.isActive
      ? <Button type="primary" icon={<PauseOutlined />} onClick={props.stop} size={"large"} block>Пауза</Button>
      : <Button type="primary" icon={<CaretRightOutlined />} onClick={props.start} size={"large"} block>Старт</Button>
    }

    </Col>
    <Col span={12}>
    <Button onClick={props.reset} size={"large"} icon={<RedoOutlined />} block>Сброс</Button>
    </Col>


  </Row>
}

export default Buttons