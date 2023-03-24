import styled from 'styled-components';

const PageIndexContainer = styled.div`
    cursor: pointer;
    color: #0000FF;
    margin: 10px;
    padding: 10px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.active ? '5px 10px 18px #888888;' : 'none'};

    &:hover {
        box-shadow: 5px 10px 18px #888888;
    }
`;

export default PageIndexContainer;