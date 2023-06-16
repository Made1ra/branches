import styled from 'styled-components';
import QuoteImage from './QuoteImage';
import WhiteQuote from './WhiteQuote';

const StyledQuoteContent = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    flex-direction: column;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
    display: flex;
`;

type QuoteContentProps = {
    children: string;
};

function QuoteContent(props: QuoteContentProps) {
    return (
        <StyledQuoteContent>
            <QuoteImage />
            <WhiteQuote>
                {props.children}
            </WhiteQuote>
        </StyledQuoteContent>
    );
}

export default QuoteContent;
