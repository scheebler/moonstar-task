import styled from 'styled-components';

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 450px) {
        width: 90%;
    }

    @media (min-width: 450px) and (max-width: 850px) {
        width: 95%;
    }

    @media (min-width: 850px) and (max-width: 1050px) {
        width: 97%;
    }

    @media (min-width: 1051) {
        width: 98%;
    }
`;

export default PostContent;