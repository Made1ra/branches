import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import BranchesSection from './BranchesSection';
import QuoteWrapper from './QuoteWrapper';

const StyledBranches = styled.section`
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    text-align: center;
    background-color: #e9f0f8;
    box-sizing: border-box;
    margin: 0;
    overflow: auto;
    padding: 0;
`;

function Branches() {
    return (
        <StyledBranches>
            <SectionTitle>Our Projects</SectionTitle>
            <BranchesSection />
            <QuoteWrapper />
        </StyledBranches>
    );
}

export default Branches;
