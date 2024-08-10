import { Mic } from 'lucide-react'
import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SpeechRecognitionComponent = ({ setSourceText }) => {
    const { transcript, listening } = useSpeechRecognition()

    useEffect(() => {
        setSourceText(transcript)
    }, [transcript, setSourceText])

    const handlingVoiceRecording = () => {
        if(listening){
            SpeechRecognition.stopListening()
        }else{
            SpeechRecognition.startListening()
        }
    }

    return (
        <div className="">
            <Mic
            size={22}
            className='shadow-lg text-purple-500'
            onClick={handlingVoiceRecording}/>
        </div>
    )
}


export default SpeechRecognitionComponent;