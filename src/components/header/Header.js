import React from 'react';
import { mainRouts } from '../../routs/mainRouters';
import { NavLink } from 'react-router-dom';
import {HeaderNavConteinerStyled} from './HeaderStyled';
const Header = () => {
    return (
     <HeaderNavConteinerStyled>
      <ul className="NavLinkContainer">
       {mainRouts.map(
        (rout) =>
         rout.isLink && (
          <li key={rout.path}>
           <NavLink
            to={rout.path}
            exact={rout.exact}
            className="NavLink"
            activeClassName="NavLinkActiv"
           >
            {rout.name}
           </NavLink>
          </li>
         )
       )}
      </ul>
     </HeaderNavConteinerStyled>
    );
}

export default Header;