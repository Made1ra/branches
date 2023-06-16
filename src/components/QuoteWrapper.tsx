import styled from 'styled-components';
import QuoteContent from './QuoteContent';
import BlueQuoteName from './BlueQuoteName';

const StyledQuoteWrapper = styled.div`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
`;

function QuoteWrapper() {
    return (
        <StyledQuoteWrapper>
            <QuoteContent>Opportunities don't happen, you create them.</QuoteContent>
            <BlueQuoteName>— Chris Grosser</BlueQuoteName>
        </StyledQuoteWrapper>
    );
}

export default QuoteWrapper;
