import styled from 'styled-components';

const PagesNumbers = styled.div`
    display: flex;
    @media (max-width: 680px) {
        div:not(:nth-child(${props => props.currentPage})) {
            display:none;
        }
    }
`;

export default PagesNumbers;