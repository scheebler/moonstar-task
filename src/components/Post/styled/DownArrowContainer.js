import styled from 'styled-components';

const DownArrowContainer = styled.div`
    cursor: pointer;
    align-self: flex-start;
    transition: transform 0.3s ease-out;
    ${
	props => props.shouldRotate && `
        transform: rotate(180deg);`
}
    @media (max-width: 450px) {
        width: 10%;
    }

    @media (min-width: 450px) and (max-width: 850px) {
        width: 5%;
    }

    @media (min-width: 850px) and (max-width: 1050px) {
        width: 3%;
    }

    @media (min-width: 1051) {
        width: 2%;
    }
`;

export default DownArrowContainer;