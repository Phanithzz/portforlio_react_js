import { Card, CardActionArea, CardContent, Link, Typography } from '@mui/material';
import React from 'react'

const BlockQuote = (props) => {
    const {id, title, content, link, width, goTo}=props;
    const styles = {
      borderLeft: "3px solid black ",
      background: "#eeeeee",
      width: width ?? "50%",
      padding: "0.5rem",
      borderRadius: "0rem"
    }
  return (
    <Card id = {id ?? ""} sx={styles} raised={false} >
      <CardActionArea>
      <CardContent className='d-flex flex-column justify-content-center gap-1'>
        <Typography variant='h2'>
          {title ?? ""}
        </Typography>
        <Typography variant='subtitle'>
            {content ?? ""}
        </Typography>
        <Link href={goTo ? goTo : ""} >
            {link ? link : ""}
        </Link>
      </CardContent>
      </CardActionArea>

    </Card>
  )
}

export default BlockQuote