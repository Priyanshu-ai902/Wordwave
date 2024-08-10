import React from "react";

const IconButton = ({ Icon, onclick }) => (

    <span className="cursor-pointer flex items-center space-x-2 " onclick={onclick}>
        <Icon size={22} />

    </span>
)

export default IconButton