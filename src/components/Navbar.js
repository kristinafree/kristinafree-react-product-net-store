import React, { Component } from 'react'
;
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import {ButtonContainer} from '../components/Button.js';
import styled from 'styled-components'

// import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
         <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
             {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
             Creative Commons (Attribution 3.0 Unported);
             https://www.iconfinder.com/Makoto_msk */}
             <Link to = '/'>
                <img src = {logo} alt = "store" className = "navbar-brand" style = {{width: "50px", height: "50px"}}/>
             </Link>
             <ul className = "navbar-nav align-items-center">
                 <li className = "nav-item ml-5">
                     <Link to = "/" className = "ml-auto">
                         Products
                     </Link>
                 </li>
             </ul>
             <Link to = "/cart" className = "ml-auto">
                 <ButtonContainer>
                     <span>
                        <i className = "fas fa-cart-plus" />
                        My cart
                     </span>
                 </ButtonContainer>
             </Link>
         </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        background: var(--mainWhite) !important;
    }
    .ml-auto{
        color: var(--mainWhite) !important;
    }
`;
