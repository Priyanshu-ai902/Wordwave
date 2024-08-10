"use client"

import "regenerator-runtime/runtime";
import Image from "next/image";
import TextArea from '@/components/Input/TextArea'
import { ChangeEvent, useState } from "react";
import SpeechRecognitionComponent from '@/components/SpeechRecognition/SpeechRecognition'
import { Volume2 } from "lucide-react";

export default function Home() {

  const [sourceText, setSourceText] = useState<string>("");


  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }
  return (
    <div>
      <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative overflow-hidden h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
            <div className="text-center"></div>
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">Word
              <span className="text-purple-700">Wave</span></h1>
            <p className="mt-3 text-purple-300">WordWave: Translate, Connect, Communicate </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className=" bg-black relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg border-purple-500 shadow-purple-500/50 p-4">

                  <TextArea
                    id='source-language'
                    value={sourceText}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                      setSourceText(e.target.value);
                    }}
                    placeholder='Source Language'
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row shadow-lg text-purple-500">
                      <SpeechRecognitionComponent setSourceText={setSourceText} />
                      <Volume2 size={22} onClick={() => handleAudioPlayback(sourceText)} />
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
