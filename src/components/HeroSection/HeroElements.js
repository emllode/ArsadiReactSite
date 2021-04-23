import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';

export const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-wdith: 100px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeroH1 = styled.h1`
	color: #fff;
	font-size: 48px;
	text-align: center;
	letter-spacing: 4px;

	@media screen at (max-width: 788px) {
		font-size: 40px;
	}

	@media screen at (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.p`
	margin-top: 24px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	max-width: 600px;

	@media screen at (max-width: 788px) {
		font-size: 24px;
	}

	@media screen at (max-width: 480px) {
		font-size: 18px;
	}
`;

export const IconYoutube = styled(FaYoutube)`
	font-size: 48px;
	margin-right: 0.5rem;
`;

export const IconFacebook = styled(FaFacebook)`
	font-size: 48px;
	margin-right: 0.5rem;
`;

export const IconInstagram = styled(FaInstagram)`
	font-size: 48px;
	margin-right: 0.5rem;
`;

export const IconSpotify = styled(FaSpotify)`
	font-size: 48px;
	letter-spacing: 2px;
`;

export const a = styled.a`
	text-decoration: none;
	color: white;
`;
