import {content} from "../Content"
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import {Pagination} from "swiper"

const Projects = () => {
	const {Projects} = content
	return (
		<section
			className='bg-bg_light_primary'
			id='projects'
		>
			<div className='md:container px-5 pt-14 min-h-screen flex flex-col justify-between'>
				<div>
					<h2
						className='title'
						data-aos='fade-down'
					>
						{Projects.title}
					</h2>
					<h4
						className='subtitle'
						data-aos='fade-down'
					>
						{Projects.subtitle}
					</h4>
					<br />
				</div>
				<div className='flex items-center lg:flex-row flex-col-reverse gap-5'>
					<img
						src={Projects.image}
						alt='...'
						data-aos='fade-right'
						className='max-w-[45vw] min-w-[22rem]'
					/>
					<Swiper
						pagination={{
							clickable: true,
						}}
						data-aos='fade-left'
						spaceBetween={20}
						modules={[Pagination]}
						className='rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start'
					>
						{Projects.project_content.map((content, i) => (
							<SwiperSlide
								key={i}
								className='bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit'
							>
								<img
									className='w-[280px] h-[146px]'
									src={content.image}
									alt='...'
								/>
								<div className='flex flex-row justify-between gap-1 mt-2 '>
									<h5 className='font-bold font-Poppins'>{content.title}</h5>
									<a href={content.url}>
										<button className='font-bold text-gray self-end'>
											<img
												className='w-7'
												src={
													content.url ==="https://www.instagram.com/p/DAfPkkyzu_k/?img_index=1"
													? Projects.igImg
													: content.url === "https://docs.google.com/spreadsheets/d/1I0JL0pU2qRfG4JOdaTRJkhq16TH6mehO/edit?gid=742395577#gid=742395577"
													? Projects.spreadshetImg
													: Projects.githubImg
												}
												alt=''
											/>
										</button>
									</a>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Projects
