import getData1 from '../lib/api1'

export default async function AlbumsPage() {
	const data = await getData1()
	console.log(data)

	return (
		<>
			<section className='w-[80%] m-auto'>
				<h1 className='text-[24px] mt-[50px] mb-[30px] font-bold'>Albums pages</h1>
				{data?.map(data => {
					return (
						<div className="border rounded mb-[10px] px-[24px] py-[16px] flex items-center justify-between" key={data?.id}>
							<span>{data?.userId}</span>
							<p>{data?.title}</p>
						</div>
					)
				})}
			</section>
		</>
	)
}
