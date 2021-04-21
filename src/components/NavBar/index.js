import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from './NavBarElements';

export const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>Arsadi</NavLogo>
					<MobileIcon>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='about'>about</NavLinks>
							<NavLinks to='contact'>Contact Form</NavLinks>
							<NavLinks to='about'>about</NavLinks>
							<NavLinks to='about'>about</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
