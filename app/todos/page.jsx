import getData2 from '../lib/api2'

export default async function TodosPage() {
	const data = await getData2()
	console.log(data)

	return (
		<>
			<section className='w-[80%] m-auto'>
				<div className="">
					{data?.map(todos => {
						return (
							<div className="border rounded p-[10px] flex items-center gap-[10px]" key={todos?.id}>
							<div className="border rounded p-[10px]">
                 <span>{todos?.id}</span>
							</div>
							<div className="border rounded p-[10px]">
                 <span>{todos?.title}</span>
							</div>
							<div className="border rounded p-[10px]">
                 <span>{todos?.completed === true ? "✅" : "❌"}</span>
							</div>
						</div>
						)
					})}
				</div>
			</section>
		</>
	)
}
