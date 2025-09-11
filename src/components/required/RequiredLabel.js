import { Typography } from '@mui/material';
import React from 'react'

const RequiredLabel = (props) => {
    const {label, color} = props;

  return (
    <Typography>{label ?? ''} <span style={{ color: color ?? 'red'}}>*</span></Typography>
  )
}

export default RequiredLabel