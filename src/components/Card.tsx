import { useState } from 'react';
import styled from 'styled-components';

const FadeIn = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
`;

const HoverItemContainer = styled.div<{ isHovered: boolean }>`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,.3),0 20px 15px rgba(0,0,0,.22);
    cursor: default;
    height: ${props => props.isHovered ? '450px' : '400px'};
    margin: 1.5em 3em;
    overflow: hidden;
    transform: ${props => props.isHovered ? 'translateY(-10px) scale(1.05)' : 'translateZ(0)'};
    transition: .25s ease;
    width: 300px;
`;

const HoverItemContentWrapper = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    cursor: default;
    background: #fff;
    margin: 0;
    padding: 0;
    position: relative;
    text-align: center;
    z-index: 10;
`;

const HoverItemContentImage = styled.img`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    cursor: default;
    text-align: center;
    height: 250px;
    margin: 0 -100%;
    padding: 0;
`;

const HoverItemContentInfo = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    cursor: default;
    text-align: center;
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: row;
    font-size: .75em;
    height: 25px;
    justify-content: start;
    margin-top: -5px;
    padding: 10px 10px 10px .5em;
`;

const HoverItemContentTags = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
    font-size: 1em;
    background: #02f;
    color: #fff;
    cursor: pointer;
    margin-right: 15px;
    padding: .5em 1em;
`;

const HoverItemContentTitle = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    cursor: default;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    font-size: 13px;
    height: 106px;
    justify-content: left;
    padding: .25em;
`;

const HoverItemContentTitleText = styled.p`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    cursor: default;
    text-align: center;
    color: #000;
    font-size: 1.25em;
`;

const HoverItemReadMore = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
    align-items: center;
    background: #02f;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    padding: .5em 2em;
    transition: .25s ease;
    margin-top: 0;
`;

const StyledSpan = styled.span`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
    color: #fff;
    cursor: pointer;
`;

type CardProps = {
    image: string;
    tag: string;
    text: string;
    link: string;
};

function Card(props: CardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <FadeIn>
            <HoverItemContainer
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <HoverItemContentWrapper>
                    <HoverItemContentImage
                        src={props.image}
                        alt={props.tag}
                    />
                    <HoverItemContentInfo>
                        <HoverItemContentTags>
                            {props.tag}
                        </HoverItemContentTags>
                    </HoverItemContentInfo>
                    <HoverItemContentTitle>
                        <HoverItemContentTitleText>
                            {props.text}
                        </HoverItemContentTitleText>
                    </HoverItemContentTitle>
                </HoverItemContentWrapper>
                <HoverItemReadMore onClick={() => window.open(props.link, '_blank')}>
                    <StyledSpan>READ MORE</StyledSpan>
                    <StyledSpan>&gt;&gt;</StyledSpan>
                </HoverItemReadMore>
            </HoverItemContainer>
        </FadeIn >
    );
}

export default Card;
