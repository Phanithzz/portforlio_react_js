import React from 'react'

const BlockQuote = (props) => {
    const {paragraph, link}=props;
  return (
    <div>
        <p>
            {paragraph ? paragraph : "Nothing Yet"}
        </p>
        <a>
            {link ? link : ""}
        </a>
    </div>
  )
}

export default BlockQuote