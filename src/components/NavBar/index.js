import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavBarElements';

export const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>Arsadi</NavLogo>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
