import React from 'react';
import video from '../../videos/video.mov';

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	IconYoutube,
	IconFacebook,
	IconSpotify,
	IconInstagram,
	a,
} from './HeroElements';

function HeroSection() {
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={video} type='/video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>ARSADI</HeroH1>
				<HeroP>
					<a
						href='https://www.facebook.com/arsadimusic/'
						target='_blank'
						rel='noreferrer'
						style={{ color: 'white' }}
					>
						<IconFacebook />
					</a>
					<a
						href='https://www.instagram.com/arsadimusic'
						target='_blank'
						rel='noreferrer'
						style={{ color: 'white' }}
					>
						<IconInstagram />
					</a>
					<a
						href='https://www.youtube.com/channel/UCMXraHIHxkhu1y1hidM4Hkg'
						target='_blank'
						rel='noreferrer'
						style={{ color: 'white' }}
					>
						<IconYoutube />
					</a>
					<a
						href='https://open.spotify.com/artist/30PReAPlWzpwfF2OJYiZ4N'
						target='_blank'
						rel='noreferrer'
						style={{ color: 'white' }}
					>
						<IconSpotify />
					</a>
				</HeroP>
			</HeroContent>
		</HeroContainer>
	);
}

export default HeroSection;
