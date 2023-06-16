import styled from 'styled-components';
import src from '../images/quote-svgrepo-com.3aab7c5625d9ee7a4e04372c1b9602f9.svg'

const StyledQuoteImage = styled.img`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
    left: 42%;
    padding: 0 3%;
    position: relative;
    top: -27px;
    height: 60px;
    margin-right: 15px;
    width: 60px;
`;

function QuoteWrapper() {
    return (
        <StyledQuoteImage
            src={src}
            alt="quote"
        />
    );
}

export default QuoteWrapper;
