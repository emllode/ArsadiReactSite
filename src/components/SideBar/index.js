import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from './SideBarElements';

export const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='music' onClick={toggle}>
						Music
					</SidebarLink>
					<SidebarLink to='merch' onClick={toggle}>
						Merch
					</SidebarLink>
					<SidebarLink to='about' onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to='Contact' onClick={toggle}>
						Contact us
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
