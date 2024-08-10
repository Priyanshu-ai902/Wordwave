import { LinkIcon } from "lucide-react"
import React from "react"


const LinkPast = ({handleLinkPaste}) => (
    <label htmlFor="link-input" className="cursor-pointer">
        <LinkIcon size={21}/>
        <input type="text" id="link-input" className="hidden" onChange={handleLinkPaste} />
    </label>
)

export default LinkPast;