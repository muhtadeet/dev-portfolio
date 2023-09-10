import { Link } from "@nextui-org/react";
import { Avatar } from "@material-tailwind/react";
import Taron from './photos/taron.jpg'

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col lg:grid lg:grid-cols-2 mt-14 sm:mt-24 md:mt-12 justify-center m-5"
      >
        <div className="lg:hidden flex lg:justify-end justify-center lg:mr-96 lg:pr-20 lg:mt-10 ">
          <img
            className="border-solid border-black border-3 rounded-[50%] w-[180px] h-[250px]"
            src={Taron}
          />
        </div>
        <div className="lg:mt-24">
          <p className="font-lato font-bold flex justify-center lg:justify-center lg:ml-96 lg:pl-24 lg:mr-5 text-3xl lg:text-7xl ml-5 mt-10 text-blue-gray-800">
            Front-End Developer - React.js 👋🏼
          </p>
          <p className="font-lato flex justify-center lg:justify-center lg:ml-96 lg:pl-24 text-md lg:text-2xl text-blue-gray-700 m-5">
            Hey there! I&apos;m Muhtadee Taron,&nbsp;a passionate Front-End
            Developer based in Dhaka, Bangladesh. 📍
          </p>
        </div>
        <div className="hidden lg:flex lg:justify-end justify-center lg:mr-96 lg:pr-20 lg:mt-24 ">
          <img
            className="border-solid border-black border-3 rounded-[50%] w-[280px] h-[400px]"
            src={Taron}
          />
        </div>
        <div className="flex flex-row gap-5 justify-center m-5 lg:mt-10 lg:ml-32 lg:justify-center">
          <Link href="https://www.linkedin.com/in/muhtadee-taron-b4253628b/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-linkedin transition ease-in-out hover:stroke-light-blue-600 stroke-blue-gray-800"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </Link>
          <Link href="https://github.com/muhtadeet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition ease-in-out hover:stroke-light-blue-600 stroke-blue-gray-800 tabler-icon tabler-icon-brand-github"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex justify-center md:justify-center m-5 mt-20 gap-4 md:gap-10">
        <Avatar
          size="md"
          alt="avatar"
          src="https://img.icons8.com/?size=256&id=20909&format=png"
          className="shadow-xl transition duration-1000 ease-in-out hover:-translate-y-5 p-2 shadow-black-900/20 border border-blue-gray-50"
        />
        <Avatar
          size="md"
          alt="avatar"
          src="https://img.icons8.com/?size=256&id=21278&format=png"
          className="shadow-xl transition duration-1000 ease-in-out hover:-translate-y-5 p-2 shadow-black-900/20 border border-blue-gray-50"
        />
        <Avatar
          size="md"
          alt="avatar"
          src="https://img.icons8.com/?size=256&id=108784&format=png"
          className="shadow-xl transition duration-1000 ease-in-out hover:-translate-y-5 p-2 shadow-black-900/20 border border-blue-gray-50"
        />
        <Avatar
          size="md"
          alt="avatar"
          src="https://img.icons8.com/?size=256&id=123603&format=png"
          className="shadow-xl transition duration-1000 ease-in-out hover:-translate-y-5 p-2 shadow-black-900/20 border border-blue-gray-50"
        />
        <Avatar
          size="md"
          alt="avatar"
          src="https://img.icons8.com/?size=256&id=x7XMNGh2vdqA&format=png"
          className="shadow-xl transition duration-1000 ease-in-out hover:-translate-y-5 p-2 shadow-black-900/20 border border-blue-gray-50"
        />
      </div>
    </>
  );
}
