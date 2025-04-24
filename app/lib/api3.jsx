export default async function getData3() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
		cache: `default`
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	return res.json()
}