import { Card, CardBody, Image } from "@nextui-org/react";
import PC from './photos/pc.jpg'
import { Fade } from 'react-awesome-reveal';

export default function About() {
  return (
    <>
    <div id="about" className="m-5">

    </div>
      <div className="flex flex-row justify-center mt-40 md:mt-72 mb-10">
        <Fade direction="left">
        <Card
          className="border-none bg-background/60 dark:bg-default-100/50 mx-5 max-w-7xl lg:mb-32"
          shadow="sm"
        >
          <CardBody className="flex lg:flex-col justify-center">
            <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative lg:w-unit-7xl col-span-6 lg:mr-2 md:-mr-8 lg:col-span-4">
                <Image
                  alt="cover"
                  className="flex justify-center items-center object-cover"
                  height={200}
                  shadow="md"
                  src={PC}
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-medium flex justify-center lg:justify-start text-lg font-lato text-light-blue-600">
                      About Me
                    </h3>
                    <p className="text-2xl flex justify-center lg:justify-start font-bold font-ubuntu text-foreground/80 mt-3">
                      A dedicated Front-End Developer from Dhaka, Bangladesh 📍
                    </p>
                    <h3 className=" flex justify-center lg:justify-start text-large font-lato font-medium mt-2">
                      A junior, dedicated and skilled Front-End Developer with
                      expertise in a wide range of web development technologies.
                      Proficient in HTML, CSS, and JavaScript, with a strong
                      command of React.js and Tailwind CSS. Known for creating
                      responsive, visually appealing, and user-friendly web
                      applications. Adept at collaborating with cross-functional
                      teams to deliver exceptional digital experiences.
                      Continuously learning and staying up-to-date with the
                      latest industry trends and best practices. Seeking
                      opportunities to apply technical prowess and creativity to
                      solve complex web development challenges.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        </Fade>
      </div>
    </>
  );
}
