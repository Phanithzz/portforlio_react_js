import React from 'react'

const FullviewPage = (props) => {
    const {width, height} = props;
    const styles = {
        width: width ? width : "100%",
        height: height ? height: "100vh",
        overflowY: "auto",
        padding: "1rem",
        background: "white",
    }
  return (
    <div style={styles}>
        Full Page

    </div>
  )
}

export default FullviewPage