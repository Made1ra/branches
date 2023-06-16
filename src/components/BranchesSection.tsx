import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import quotely from '../images/Quotely.jpg';
import crm from '../images/crm.png';
import blue from '../images/blue.png';
import Card from './Card';

const StyledBranchesSection = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-align: center;
`;

const StyledDiv = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-align: center;
`;

const CardContainer = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: flex-start;
    max-width: 825px;
    margin: 0 auto;
    height: 100%;

    > div {
        flex-basis: calc(50%);
        flex-grow: 0;
        flex-shrink: 0;
    }

    @media (max-width: 825px) {
        align-items: start;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
`;

const ArrowButton = styled.button`
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    background-color: #02f;
    border: none;
    color: #fff;
    padding: 0.25%;
    cursor: pointer;
    font-size: 1.5em;

    @media (max-width: 825px) {
        display: none;
    }
`;

const LeftArrowButton = styled(ArrowButton)`
    left: 19%;

    @media (max-width: 1400px) {
        left: 15%;
    }

    @media (max-width: 1200px) {
        left: 10%;
    }

    @media (max-width: 992px) {
        left: 1%;
    }
`;

const RightArrowButton = styled(ArrowButton)`
    right: 20%;

    @media (max-width: 1400px) {
        right: 16%;
    }

    @media (max-width: 1200px) {
        right: 11%;
    }

    @media (max-width: 992px) {
        right: 1%;
    }
`;

function BranchesSection() {
    const cards = [
        {
            id: 'zxc123',
            image: quotely,
            tag: 'Qoutely Wallpapers',
            text: `Inspirierende Hintergrundbilder-App: Quotely. Große
                        Auswahl an Zitaten, Hintergrundbildern von Stars und
                        Naturfotos.`,
            link: 'https://apps.apple.com/ua/app/quotely-wallpapers/id1642336358'
        },
        {
            id: '321cxz',
            image: crm,
            tag: 'Super Easy CRM',
            text: `Super Easy CRM: Plattform zur Rationalisierung von
                        Verkaufs- und Kundendienstprozessen.`,
            link: 'https://apps.apple.com/ua/app/super-easy-crm/id6447245139'
        },
        {
            id: 'abc123',
            image: blue,
            tag: 'Lorem ipsum',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            link: 'https://example.com'
        },
        {
            id: '321bca',
            image: blue,
            tag: 'Lorem ipsum',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            link: 'https://example.com'
        },
        {
            id: '123xyz',
            image: blue,
            tag: 'Lorem ipsum',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            link: 'https://example.com'
        },
        {
            id: '321zyx',
            image: blue,
            tag: 'Lorem ipsum',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            link: 'https://example.com'
        }
    ];

    const [swiper, setSwiper] = useState<HTMLDivElement | null>(null);
    const cardContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (cardContainerRef.current) {
            setSwiper(cardContainerRef.current);
        }
    }, []);

    function handleScroll(scrollOffset: number) {
        if (swiper) {
            const cardWidth = swiper.clientWidth / 2;
            const visibleCards = Math.floor(swiper.clientWidth / cardWidth);
            swiper.scrollBy({
                left: scrollOffset * cardWidth * visibleCards,
                behavior: 'smooth',
            });
        }
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 826) {
                setSwiper(null);
            } else {
                setSwiper(cardContainerRef.current);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StyledBranchesSection>
            <StyledDiv>
                <CardContainer ref={cardContainerRef}>
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            image={card.image}
                            tag={card.tag}
                            text={card.text}
                            link={card.link}
                        />
                    ))}
                    {swiper && (
                        <>
                            <LeftArrowButton onClick={() => handleScroll(-1)}>&#8592;</LeftArrowButton>
                            <RightArrowButton onClick={() => handleScroll(1)}>&#8594;</RightArrowButton>
                        </>
                    )}
                </CardContainer>
            </StyledDiv>
        </StyledBranchesSection>
    );
}

export default BranchesSection;
