export default async function getData() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
		cache: `default`,
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	return res.json()
}
