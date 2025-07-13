import { width } from '@mui/system';
import React from 'react'

const BlockQuote = (props) => {
    const {paragraph, link, width}=props;
    const styles = {
      borderLeftColor: "red ",
      background: "#eeeeee",
      width: width ? width : "50%"
    }
  return (
    <div style={styles}>
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