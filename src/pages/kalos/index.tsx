import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { commands } from './commands';

function KalosTimer() {
    const { transcript } = useSpeechRecognition( { commands })
    return (
        <>
        </>
    )
}

export default KalosTimer