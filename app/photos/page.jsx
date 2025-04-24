import getData4 from '../lib/api4'

export default async function PhotosPage() {
	const data = await getData4()
	console.log(data);
	
	return (
		<>
		  <section className='w-[80%] m-auto'>
				<h1 className='my-[30px]'>Photos page</h1>
				{data?.map(data => {
					return (
						<div className="border mb-[20px] p-[10px]" key={data?.id}>
							<h2>{data?.title}</h2>
							<img src={data?.url} alt={data?.title} />
							<img src={data?.thumbnailUrl} alt={data?.title} />
						</div>
					)
				})}
			</section>
		</>
	)
}