import { Languages } from "lucide-react"
import React from "react"



const LanguageSelector = ({ selectedLanguage, setSelectedLanguage, language }) => (

    <span className="cursor-pointer rounded-full space-x-2 pl-2 bg-black">
        <Languages size={20} />
        <select value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-black flex flex-row rounded-full py-1 text-white">
            {language.map((language) => (
                <option key={language} value={language}>
                    {language}
                </option>
            ))}
        </select>
    </span>

)

export default LanguageSelector;