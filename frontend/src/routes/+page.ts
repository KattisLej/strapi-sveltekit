export async function load({ data }) {
	const res = await fetch('http://localhost:1337/api/posts?populate=*');
	const response = await res.json();
	return response;
}
