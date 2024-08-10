import { File } from "lucide-react"
import React from "react"


const FileUpload = ({handleFileUpload}) => {
    <label htmlFor="file-upload" className="cursor-pointer">
        <File size={21}/>
        <input id="file-upload" type="file" onChange={handleFileUpload} className="hidden"/>
    </label>
}