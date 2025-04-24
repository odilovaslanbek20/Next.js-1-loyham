import getData3 from '../lib/api3'

export default async function UserPage() {
	const data = await getData3()
	console.log(data);
	
	return (
		<>
		  <section className='w-[80%] m-auto'>
				<h1 className='my-[30px] text-[24px]'>User page</h1>
				{data?.map(data => {
					return (
						<div key={data?.id} className="border p-[10px] mb-[20px]">
							<h2>{data?.name}</h2>
							<a href={`mailto:${data?.email}`}>{data?.email}</a>
						</div>
					)
				})}
			</section>
		</>
	)
}