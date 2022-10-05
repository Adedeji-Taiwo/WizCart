import React from 'react'
import {
    ButtonWrapper
} from './style';


const Button = ({style, onClick, text}) => {
  return (
    <ButtonWrapper style={style} onClick={onClick}>{text}</ButtonWrapper>
  )
}

export default Button;