export default async function getData4() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
		cache: `default`
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	return res.json()
}