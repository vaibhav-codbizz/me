'use client'

import { useEffect, useState } from 'react'

const MatrixBackground = () => {
  const [columns, setColumns] = useState<JSX.Element[]>([])

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const columnCount = Math.floor(window.innerWidth / 20)
    
    const newColumns = Array.from({ length: columnCount }, (_, i) => {
      const animationDelay = Math.random() * 20
      const animationDuration = 15 + Math.random() * 10
      const left = (i * 20) + Math.random() * 20
      
      const columnChars = Array.from({ length: 20 }, () => 
        chars[Math.floor(Math.random() * chars.length)]
      ).join('')

      return (
        <div
          key={i}
          className="matrix-column"
          style={{
            left: `${left}px`,
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        >
          {columnChars}
        </div>
      )
    })

    setColumns(newColumns)
  }, [])

  return <div className="matrix-bg">{columns}</div>
}

export default MatrixBackground