import styled from 'styled-components';

const StyledSectionTitle = styled.h2`
    -webkit-font-smoothing: antialiased;
    text-align: center;
    color: #02f;
    font-family: Cairo,sans-serif;
    font-size: 42px;
`;

type SectionTitleProps = {
    children: string;
};

function SectionTitle(props: SectionTitleProps) {
    return (
        <StyledSectionTitle>{props.children}</StyledSectionTitle>
    );
}

export default SectionTitle;
