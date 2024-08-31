import Image from 'next/image'
import Navbar from './Navbar'
import HeroDescription from './HeroDescription'

const overlayStyle = {
  backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.19))',
}
const Hero = () => {
  return (
    <div className="h-[850px] w-full">
      <Navbar />
      <div className="relative">
        <div className="overlay absolute inset-0 " style={overlayStyle}></div>
        <Image
          src="/work/0006.jpg"
          alt="hero"
          width={1920}
          height={1080}
          priority={true}
          className="w-full h-[850px] object-cover"
        />
      </div>
      <HeroDescription />
    </div>
  )
}

export default Hero
