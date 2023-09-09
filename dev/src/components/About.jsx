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
                  src="https://lh3.googleusercontent.com/pw/AIL4fc8SkyQ5imJSRt6iaRJ9cs4rtpRgPW4ewF1F8nGnPUaQ_XsLKkjvKg6qqBOkOCZ1w2aw0zyZRGcY1u2R8rqpgfSIAhKoYxsGSPveg73ZIzkEpdnAFYnakMJXWiQG2eZB_qDJIu2UO_sNpVaAyuFC0F6ouG9C0KZ7zibzDMOUgv_-L0QA-5lwS_pLJR4I3gkj2rlw_wjbhd47jhqrMgksx99WSZ23aXt8JlmW081yWIJ2yvTSOWtW6h1flq4lCXLaRIFntqEbzhEnooMlBKyYPK-20NtPT_eNR0Qcw1xBV4LeckK7tnfvWSmPQfOYS55LV4JJIr-uj2g8mpppJrzF_kDUR9rhleYgtAcsj3zNmDyOImkll0CzOXLHe_LE_OKl5ub4j_FN91K-GZnXUsUjw4r-D3_KLOx9wkymJoWFOXSKwpsYyklD03WssiU_J_UW52Qb7KS0OmXTEF3h0yUJhmjO2tBMdrfVRIb071mg018OYovV4ryChcpugg2gG7K6jtJurQid_81KkQN0T1EEiKLNur5wCJkg6yS_TJM3Qw5Hh8H438-7EtxqW1zbD1kFZdZV5rCjscZmRkiIxp7J4IypGEEboiQksUEIC2iUCQY0c8UFHhSw8qAFMtKYwHqC7yvxe4hoFN00_42Br-rUydlfUZDwDfTAmouRV9xsXEUnm2a_DR1tJT3k2i47LYTkPJeI-siZiiiX-_t1MvTgbBwVuCuBeuWfVLcl0pCdbSdP1s2xYQbmHiB0XuqAtHaP_pjYtNApcjjQYu3n0AweE5uxL6e65dR--CsUadWLmSx5PNhMYEjgSdrenmlRm0PaPOISyzU46PnXCvbMT-yFPE1Jzi7YTPm0dGmNsqEM_-AIntDvtNywznN5IQvtEJ1txGpmHydhUC7s8fN4i4qSyxRmWLl2GgRHmhPTmtpp8bHUhVUX5T1R1aXHTrYU7RU=w570-h912-s-no?authuser=0"
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
