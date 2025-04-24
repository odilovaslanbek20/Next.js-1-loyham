export default async function getData1() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/albums`, {
		cache: `default`,
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	return res.json()
}
