import NavMenu from "./NavMenu"
import {Link} from '@nextui-org/react'
import { Avatar } from "@material-tailwind/react";
import { GitHub, LinkedIn } from "./icons"

export default function Home() {
  return (
    <>
      <NavMenu/>
      <div className="flex flex-col justify-center m-5">
        <p className="font-lato font-bold flex justify-center md:justify-start text-3xl md:text-5xl text-blue-gray-800">Front-End Developer - React</p>
        <p className="font-lato flex justify-center md:justify-start text-md md:text-xl text-blue-gray-700 m-5">Hey there! I&apos;m Muhtadee Taron. A passionate Front-end React Developer based in Dhaka, Bangladesh. 📍</p>
        <div className="flex flex-row gap-5 justify-center md:justify-start">
          <Link href="https://www.linkedin.com/in/muhtadee-taron-b4253628b/">
            <LinkedIn/>
          </Link>
          <Link href="https://github.com/muhtadeet">
            <GitHub/>
          </Link>
        </div>
        <div>
        <Avatar
            size="xl"
            alt="avatar"
            src="/img/face-2.jpg"
            className="shadow-xl shadow-black-900/20 border border-blue-gray-50"
          />
        </div>
      </div>
    </>
  )
}
