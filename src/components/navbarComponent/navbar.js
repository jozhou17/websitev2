import React, {useState} from 'react';
import './navbar.css';
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {CSSTransition} from 'react-transition-group';




const StyledBurger = styled.div`
  position:absolute;
  margin-top:1rem;
  width: 2rem;
  height: 2rem;
  right:5%;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#2D848A' : '#3587A4'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.35s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


function Navbar(){   

    const [click,setClick] = useState(false)
    const handleClick = () =>setClick(!click)
    const closeMenu = () => setClick(false)


    return (
        <>
        <div className = 'navContainer'>
          <div className = 'responsiveContainer'>
            <StyledBurger open = {click} onClick = {handleClick}>
                <div />
                <div />
                <div />
            </StyledBurger>
            
            <CSSTransition 
              in ={click} 
              unmountOnExit 
              timeout={550}
              onEnter ={()=>handleClick}
              onExit ={()=>handleClick}
              classNames = 'dropdownAni'
              >
                  <nav className = 'dropdown'>
                      <ul className = 'dropdownList'>
                          <li className = 'options'><Link to = 'aboutMe' spy = {true} smooth = {true} duration = {1000}><a href = '#'  className = 'aboutLink' onClick = {closeMenu}>About</a></Link></li>
                          <li className = 'options'><Link to = 'expID' spy = {true} smooth = {true} duration = {1000}><a href = '#' className = 'aboutLink' onClick = {closeMenu}>Experience</a></Link></li>
                          <li className = 'options'><Link to = 'projID' spy = {true} smooth = {true} duration = {1000}><a href = '#' className = 'aboutLink' onClick = {closeMenu}>Projects</a></Link></li>
                          <li className = 'options'><Link to = 'contactID' spy = {true} smooth = {true} duration = {1000}><a href = '#' className = 'aboutLink' onClick = {closeMenu}>Contact</a></Link></li>
                      </ul>
                  </nav>
            </CSSTransition>
          </div>
          <div className = 'normContainer'>
            <nav className = 'normDropdown'>
                <ul className = 'normDropdownList'>
                    <li className = 'options'><Link to = 'aboutMe' spy = {true} smooth = {true} duration = {1000}><a href = '#'  className = 'aboutLink'>About</a></Link></li>
                    <li className = 'options'><Link to = 'expID' spy = {true} smooth = {true} duration = {1000}><a href = '#' className = 'aboutLink'>Experience</a></Link></li>
                    <li className = 'options'><Link to = 'projID' spy = {true} smooth = {true} duration = {1000}><a href = '#' className = 'aboutLink'>Projects</a></Link></li>
                    <li className = 'options'><Link to = 'contactID' spy = {true} smooth = {true} duration = {1000}><a href = '#' className = 'aboutLink'>Contact</a></Link></li>
                </ul>
            </nav>

          </div>
        </div>

        </>
    );
}

export default Navbar

