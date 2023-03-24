export const getPosts = async (setPosts) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
	const data = await response.json();
	return setPosts(data);
};