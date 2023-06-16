import styled from 'styled-components';

const StyledWhiteQuote = styled.p`
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-family: Gotham,sans-serif;
    font-weight: 500;
    letter-spacing: 5px;
    line-height: 1.5;
    color: #000;
    margin: 0;
`;

type WhiteQuoteProps = {
    children: string;
};

function WhiteQuote(props: WhiteQuoteProps) {
    return (
        <StyledWhiteQuote>{props.children}</StyledWhiteQuote>
    );
}

export default WhiteQuote;
