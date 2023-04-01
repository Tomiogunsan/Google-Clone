import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";


export default function Home() {
  return (
    <>
    {/* header */}
    <HomeHeader />

    {/* body */}
    <div>
      <Image 
      width='300'
      height='100'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'
      />
    </div>
    </>
  )
}
