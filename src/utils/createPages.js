export const createPages = (postsNumber) => {
	const totalPages = postsNumber % 10 === 0 ? postsNumber / 10 :  Math.trunc(postsNumber / 10 )+ 1;
	let pages = [];
	for (let i = 1 ; i <= totalPages; ++i ){
		pages.push(i); 
	}
	return pages;
};
