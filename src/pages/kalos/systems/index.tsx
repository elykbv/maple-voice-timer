import { Card, Col, Divider, Flex, Row } from "antd";
import useSystemStore from "../stores/systemStore";

function Systems() {
  const { top, left, right, bottom } = useSystemStore();

  return (
    <Row>
      <Col span={12}>
        <Card>
          <Flex justify="space-between">
            <div>
              Top: {top ? "on" : " off"}
              Left: {left ? "on" : " off"}
              Right: {right ? "on" : " off"}
              Bottom: {bottom ? "on" : " off"}
            </div>
            <Divider type="vertical" />
            <div>Timer</div>
          </Flex>
        </Card>
      </Col>
      <Col span={6}>
        <Card>Lasers</Card>
      </Col>
      <Col span={6}>
        <Card>Arrows</Card>
      </Col>
    </Row>
  );
}

export default Systems;
