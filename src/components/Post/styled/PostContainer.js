import styled from 'styled-components';

const PostContainer = styled.div`
    display: ${props => props.isVisible ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 5px 10px 18px #888888;
    border-radius: 16px;
    margin-bottom: 30px;
    padding: 30px;
`;

export default PostContainer;