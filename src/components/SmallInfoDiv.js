import React from 'react'
import reactLogo from '../img/1280px-React-icon.png'

const SmallInfoDiv = ({ currTheme }) => {
    return (
        <div className={`react-info-div ${"calc-buttons-theme" + currTheme} ${"normal-text-theme" + currTheme} ${"react-info-div-theme" + currTheme}`}>
            <a href="https://reactjs.org/" target='_blank' rel='noreferrer'><img src={reactLogo} alt="text" width='90px' height='60px' /></a>
            <h4>Made with React</h4>
        </div>
    )
}

export default SmallInfoDiv
