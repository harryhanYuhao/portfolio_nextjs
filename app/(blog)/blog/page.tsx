import React from 'react'
import Markdown from 'react-markdown'

const page = () => {
  const fs = require('fs')
  const filePath = "content/example.txt"
  const str = fs.readFileSync(filePath, 'utf8')

  return (
    <div>
      <Markdown>
        {str}
      </Markdown> 
    </div>
  )
}

export default page

