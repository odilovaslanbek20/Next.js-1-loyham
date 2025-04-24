import getData from '../lib/api'

export default async function PostsPage() {
	const posts = await getData()

	return (
		<div className='p-4'>
			<h1 className='text-xl font-bold mb-4'>Server Component Posts</h1>
			{posts.map(post => (
				<div key={post.id} className='mb-2 border p-2'>
					<h2 className='font-semibold'>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	)
}
