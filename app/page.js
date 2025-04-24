import Link from 'next/link'
import getData from './lib/api'

export default async function Home() {
	const data = await getData()
	console.log(data?.length);
	
	return (
		<>
			<section className='w-[70%] m-auto pt-[60px]'>
				<div className=''>
					<h2 className='font-bold text-[24px] text-[#000]'>Resources</h2>
					<span className='text-[18px] font-medium text-[#000]'>
						JSONPlaceholder comes with a set of 6 common resources:
					</span>
				</div>
				<div className='w-[250px] mt-[20px]'>
					<Link href='/posts' className='group rounded  w-full h-auto transition-all border border-[#fff] hover:border-[#000] px-[15px] py-[10px] flex items-center justify-between mb-[10px]'>
						<div className=''>
							<span className='text-[18px] text-blue-500'>/posts</span>
							<div className='w-0 group-hover:w-full transition-all h-[1px] bg-blue-500'></div>
						</div>
						<span>({data?.length}) posts</span>
					</Link>
					<Link href='/albums' className='group rounded  w-full h-auto transition-all border border-[#fff] hover:border-[#000] px-[15px] py-[10px] flex items-center justify-between mb-[10px]'>
						<div className=''>
							<span className='text-[18px] text-blue-500'>/albums</span>
							<div className='w-0 group-hover:w-full transition-all h-[1px] bg-blue-500'></div>
						</div>
						<span>(100) posts</span>
					</Link>
					<Link href='/photos' className='group rounded  w-full h-auto transition-all border border-[#fff] hover:border-[#000] px-[15px] py-[10px] flex items-center justify-between mb-[10px]'>
						<div className=''>
							<span className='text-[18px] text-blue-500'>/photos</span>
							<div className='w-0 group-hover:w-full transition-all h-[1px] bg-blue-500'></div>
						</div>
						<span>(100) posts</span>
					</Link>
					<Link href='/todos' className='group rounded  w-full h-auto transition-all border border-[#fff] hover:border-[#000] px-[15px] py-[10px] flex items-center justify-between mb-[10px]'>
						<div className=''>
							<span className='text-[18px] text-blue-500'>/todos</span>
							<div className='w-0 group-hover:w-full transition-all h-[1px] bg-blue-500'></div>
						</div>
						<span>(100) posts</span>
					</Link>
					<Link href='/user' className='group rounded  w-full h-auto transition-all border border-[#fff] hover:border-[#000] px-[15px] py-[10px] flex items-center justify-between mb-[10px]'>
						<div className=''>
							<span className='text-[18px] text-blue-500'>/user</span>
							<div className='w-0 group-hover:w-full transition-all h-[1px] bg-blue-500'></div>
						</div>
						<span>(100) posts</span>
					</Link>
				</div>
			</section>
		</>
	)
}
