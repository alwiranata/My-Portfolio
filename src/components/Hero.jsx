// import content
import {content} from "../Content"
const Hero = () => {
	const {hero} = content

	return (
		<section
			id='home'
			className='overflow-hidden'
		>
			<div className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center'>
				<div
					data-aos='slide-left'
					data-aos-delay='1200'
					className='absolute h-full md:w-4/12 w-8/12 top-0  right-0 bg-primaryLinear bottom-0 -z-10'
				>
					<h1 className='absolute rotate-90 top-[25%] right-[-40%] md:top-[40%] md:right-[-48%] text-[#EAF2FA]'>
						{hero.firstName}{" "}
						<span className='text-dark_primary'>{hero.LastName}</span>
					</h1>
				</div>

				{/* first col */}
				<div
					className='pb-16 px-6 pt-5 '
					data-aos='fade-down'
				>
					<h2 className='text-3xl'>{hero.title}</h2>
					<br />
					<div className='flex justify-center gap-5'>
						<a href={hero.urlLinkedin}>
							<button className='btn bg-dark_primary text-white hover:bg-white hover:text-dark_primary'>
								{hero.linkedin}
							</button>
						</a>

						<a href={hero.urlGithub}>
							<button className='btn bg-white text-dark_primary hover:bg-dark_primary hover:text-white'>
								{hero.github}
							</button>
						</a>
					</div>
					<div className='flex flex-col gap-10 mt-10'>
						{hero.hero_content.map((content, i) => (
							<div
								key={i}
								data-aos='fade-down'
								data-aos-delay={i * 300}
								className={`flex items-center w-80 gap-5${
									i === 1 && " flex-row-reverse text-right"
								}  `}
							>
								<h3>{content.count}</h3>
								<p>{content.text}</p>
							</div>
						))}
					</div>
				</div>

				{/* sec col */}
				<div className='md:h-[36rem] h-80'>
					<img
						src={hero.image}
						data-aos='slide-up'
						alt='...'
						className='h-full object-cover '
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
