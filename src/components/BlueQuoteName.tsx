import styled from 'styled-components';

const StyledBlueQuoteName = styled.p`
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-family: AvenirMedium,sans-serif;
    font-weight: 700;
    line-height: 1.5;
    color: #02f;
`;

type BlueQuoteNameProps = {
    children: string;
};

function BlueQuoteName(props: BlueQuoteNameProps) {
    return (
        <StyledBlueQuoteName>{props.children}</StyledBlueQuoteName>
    );
}

export default BlueQuoteName;
