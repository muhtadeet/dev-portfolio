import { Card, CardBody, Image, Link } from "@nextui-org/react";

export default function Projects() {
  return (
    <div id="projects" className="m-5 mt-28">
      <h3 className="font-medium flex justify-center md:justify-center text-xl font-lato text-light-blue-600">
        Projects
      </h3>
      <p className="text-3xl flex justify-center md:justify-center font-bold font-ubuntu text-foreground/80 mt-3">
        Created with utmost dedication and made responsive ✨
      </p>
      <div className="flex flex-row justify-center mt-20 mb-10">
        <Card
          className="border-none bg-background/60 dark:bg-default-100/50 mx-5 max-w-4xl"
          shadow="sm"
        >
          <CardBody className="flex lg:flex-col justify-center">
            <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative lg:w-unit-7xl col-span-6 lg:mr-2 md:-mr-8 lg:col-span-4">
                <Link
                  className="flex justify-center"
                  href="https://muhtadee.pages.dev/"
                >
                  <Image
                    alt="cover"
                    className="flex justify-center items-center object-cover"
                    height={200}
                    shadow="md"
                    src="/src/assets/portf.png"
                    width="100%"
                  />
                </Link>
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="lg:ml-40 lg:mr-10 sm:ml-14 text-3xl flex justify-center md:justify-center font-bold font-ubuntu text-foreground/80 mt-3">
                      Photography Portfolio 📸
                    </h3>
                    <h3 className=" lg:ml-40 lg:mr-10 text-xl flex justify-center md:justify-center font-medium font-lato text-foreground/80 mt-3">
                      A Portfolio of some of the photographs I captured and some
                      of the arts I have made.
                    </h3>
                    <Link
                      className="flex justify-center lg:ml-28 mt-5"
                      href="https://github.com/muhtadeet/muhtadee"
                    >
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
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-row justify-center mt-40 mb-10">
        <Card
          className="border-none bg-background/60 dark:bg-default-100/50 mx-5 max-w-4xl"
          shadow="sm"
        >
          <CardBody className="flex lg:flex-col justify-center">
            <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative lg:w-unit-7xl col-span-6 lg:col-span-4">
                <Link
                  className="flex justify-center"
                  href="https://e-commerce-app-d0j.pages.dev/"
                >
                  <Image
                    alt="cover"
                    className="flex justify-center items-center object-cover"
                    height={200}
                    shadow="md"
                    src="/src/assets/e-com.png"
                    width="100%"
                  />
                </Link>
              </div>
              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className=" sm:ml-14 text-3xl flex justify-center md:justify-center font-bold font-ubuntu text-foreground/80 mt-3">
                      A2Z E-Commerce 🛒
                    </h3>
                    <h3 className="lg:pl-24 lg:ml-14 text-xl flex justify-center md:justify-center font-medium font-lato text-foreground/80 mt-3">
                      An E-commerce site with a focus on simplicity and clean
                      design, prioritizing user experience and making it easy
                      for customers to find and purchase the products they need.
                    </h3>
                    <Link
                      className="flex justify-center lg:ml-32 mt-5"
                      href="https://github.com/muhtadeet/shopping-cart"
                    >
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
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
