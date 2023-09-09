import { Card, CardBody, Image } from "@nextui-org/react";

export default function About() {
  return (
    <>
      <div id="about" className="flex flex-row justify-center mt-40 mb-10">
        <Card
          className="border-none bg-background/60 dark:bg-default-100/50 mx-5 max-w-7xl"
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
                  src="https://lh3.googleusercontent.com/pw/AIL4fc8ZlfZm0G8x_quDZHC5-mmaoZeLL2qU29YaCIOCe5VInO5f8tJI7g4eQHAfhoyIY3xLwQj0SPVC_3P30jhz8pRT5Xp1S2QrZTwvCF5fhRlcaMznw6mS5fSkK-y2o6-7wSxeMw1rMB22zq9Y8h_oXvhb6Sb_BEqf7vNmTUaVdDfdrlewamx_yuYEo_SijWt1ikase-GDmWFvQSbbeIy92e1w3yNC-ZuBwK0p7eQ4ul7x5ewhlbeCrFttf6swwxduvN5qE4Dxdwzz7VnzcbBlZsYzgqGl3lalsJBqLjKvd1NHz6sVVKyZBxzsrVOhbAH39Q-kuZdBfEDYgJVn-qOd5UxQ5MMQvSqpW8dzfvm0sRcviedPy1dijWZFhmFVs1iBp9xT6IctN4Z6fnWRCem2Ahyz57Ahu36eIpQ8n7I99onkQBXwtDg31hunviMvqza4yzbATPxv92-9qDZmf3s56M_O1LIe4aURxK8N0dN92Bz4gAO7R_5hm2qweN8QptviBjYeoZwzAeYvQLF8QxSITvbquBl4XuxOvd6ELJMXELSi1zHfcxR6EaI6X3ADWdDiOsu2FXb37Dw-Hi1LNWBKIYqW3ao5HfSEYnh546U6IfHkX3ojdHyQEcXg-C_brgl3oUzGrnpFIIwpFv7G8QONSwejMrTzkCs885yRDHynXgAHkPtXz983qO5PVI73sOM0DRzrLgkGOMAFAS0kA2L9iJacv8xe8HMW3IivfQhPoAotD8UJEjgdM0k_7Y5fxwyY4vKgZIbSYsxCj5Se-T4jwZpneB_w03Djijba_7QjJLnBFaOvFZAkFylGkbDcExONyzv_ujZad0m92HTiU288pDVuKa1epw_x_jXP_jZmkJ8VzI9OsZ2ySNQpWOpQw4CYZWj7CXSbwpl9GJDi0tYa3QeaxjWyq4LBS1lr4iu8ZEaee-duQ6sSDhktOoj_p24=w933-h933-s-no?authuser=0"
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
      </div>
    </>
  );
}
