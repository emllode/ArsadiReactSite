import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
	Nav,
	NavbarContainer,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from './NavBarElements';

export const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='music'>Music</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='merch'>Merch</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='about'>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='contact'>Contact</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
