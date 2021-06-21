import React from 'react';
import { mainRouts } from '../../routs/mainRouters';
import { NavLink , withRouter } from 'react-router-dom';
import {HeaderNavConteinerStyled} from './HeaderStyled';

const Header = ({ location }) => {

 return (
   
  <HeaderNavConteinerStyled>
   <ul className="NavLinkContainer">
    {mainRouts.map(
     ({path, name, exact,isLink}) =>
      isLink && (
       <li key={path}>
        <NavLink
         to={{
          pathname: path,
          state: { from: location.pathname },
         }}
         exact= {exact}
         className="NavLink"
         activeClassName="NavLinkActiv"
        >
         {name}
        </NavLink>
       </li>
      )
    )}
   </ul>
  </HeaderNavConteinerStyled>
 );
};

export default withRouter(Header);