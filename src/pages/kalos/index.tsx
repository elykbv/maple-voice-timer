import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { commands } from "./commands";
import { Alert, Button, Col, Row } from "antd";
import Systems from "./systems";

function KalosTimer() {
  const { listening } = useSpeechRecognition({ commands });
  return (
    <>
      <Button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      >
        Start Listening
      </Button>
      <Button onClick={() => SpeechRecognition.stopListening()}>
        Stop Listening
      </Button>
      <Row>
        <Col span={24}>
          {listening ? (
            <Alert type="success" message="Listening" />
          ) : (
            <Alert type="error" message="Not Listening" />
          )}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Systems />
        </Col>
      </Row>
    </>
  );
}

export default KalosTimer;
