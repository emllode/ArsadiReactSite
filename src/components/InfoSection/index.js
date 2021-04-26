import React from 'react';
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
} from './InfoElements';

function InfoSection({
	lightBg,
	id,
	topLine,
	lightText,
	headline,
	darkText,
	description,
}) {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading>
									{lightText}
									{headline}
								</Heading>
								<Subtitle>
									darkText = {darkText}
									{description}
								</Subtitle>
							</TextWrapper>
						</Column1>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
}

export default InfoSection;
