import { Avatar } from "./styles";
import React from "react";

interface LetterAvatarProps{
  name?: string;
  fillColor?: string;
}
const LetterAvatar: React.FC<LetterAvatarProps> = ({ name, fillColor }) => {
  return(
    <Avatar>
      <circle cx={32} cy={32} r={16} style={{fill: fillColor}}/>
      <text x={32} y={38}>{name}</text>
    </Avatar>
  )
}

export default LetterAvatar;