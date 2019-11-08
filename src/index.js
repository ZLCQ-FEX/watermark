import React from 'react'

const defaultStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 100,
  pointerEvents: 'none',
  backgroundRepeat: 'repeat',
}

export default function (props) {
  const {
    rectWidth,
    rectHeight,
    text,
    font = '18px Microsoft Yahei',
    textAlign = 'right',
    textBaseline = 'middle',
    fillStyle = 'rgba(184, 184, 184, 0.2)',
    rotate = 330,
    zIndex = 1000,
  } = props

  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', rectWidth)
  canvas.setAttribute('height', rectHeight)

  const ctx = canvas.getContext('2d')
  ctx.textAlign = textAlign
  ctx.textBaseline = textBaseline
  ctx.font = font
  // 文本颜色；
  ctx.fillStyle = fillStyle
  // 文本旋转角度；
  ctx.rotate((Math.PI / 180) * rotate)
  // 绘制文本；
  ctx.fillText(text, rectWidth / 2, rectHeight / 2)

  const base64 = canvas.toDataURL()
  const composedStyle = {
    ...defaultStyle,
    zIndex,
    backgroundImage: `url(${base64})`,
  }

  return (
    <div
      style={composedStyle}
    />
  )
}
