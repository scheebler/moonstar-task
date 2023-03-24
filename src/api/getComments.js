export const getComments = async (setComments, postId) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
	const data = await response.json();
	return setComments(data);
};