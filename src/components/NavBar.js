import React from 'react'
import './styles/NavBarStyle.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from '@mui/material';

export const NavBar = (props) => {

    const {borderRadius} = props;

  return (
    <div 
    style={{ borderRadius : borderRadius ? borderRadius : '1rem'}}
    className='position-sticky top-0  d-flex flex-row justify-content-between align-items-center flex-grow-1 p-3 main'>
        <h4 className='col-lg-5'>
            Portfolio 2025
        </h4>
        <div className='col-lg-7 d-flex flex-row justify-content-evenly btn_group'>
            <Button>
                <a href='#about'>About</a>
            </Button>
            <Button>
                <a href='#project'>Projects</a>
            </Button>
            <Button>
                <a href='#contact'>Contact</a>
            </Button>
            <Button>
                <DarkModeIcon  />
            </Button>
        </div>
    </div>
  )
}
