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
                    src="https://lh3.googleusercontent.com/pw/AIL4fc9ipVvW9J-R6Pwmf_pernGhu5jUtTrC2n4bPVnqrP6v_Au_FaJx6o2oKnxAo8oeyTQA-j3vgfxsn5LXEUwtQttnYdO2PE8fp8FNDiYJmjic-nov1iVF-LqQnyo1j5gshMLDWI5j6qjETFkl8SEkv1YIIqzA08SGrAcQkFVv8xGTWHCHY0_SvnTkdwQw-lbtkuRAWp5PeGwHG9qz9x2ReZn4AzzLWH1snHnqLn6Z4EOMjyCEUOhqlCh3kFHPw2SOBTZ-XE0bY5Y_QQjXdmbMbPjn5nDaHt1d71qti7JbjS5BH4FHSoGXo0nZA8epwnsb6Hm5S2opauAGTLFG8ogTDxX1A7ZwXXCClhCo-5befTIkn1Uc0gb0fFFK5aSHkgcB6BTaPq2ujER6-1UlLZW8Fx9rgBQwaWdXx-5OqaCBtaNoHPMBqmtMpgu8qq2lDGnzUkDIheAkTG80cpmA9gBIAwsjzPXT4C7IfLf7LcYdEUF_bWEtmVNVad8lWHz-hA-UEmAVH8b3lH73dslBJ59r_B7N9mcx9YegcU5sZ39WmJDoeFiRCQUttDhkb05HfzQHSEoX9r3a9TVsCKI4tybSjA-nt0lj9i_T7gFcKWSgC3iJAUdxDyyTnbUYlBy2WqFY_f1uwhHIaXjMEAPMx80ss7c79YN8_uUbSz14CV8b96ess-NMWNvU1myFfwXBPJDzkyCHm3IqdM_Fyg_Dhmkw1dMA8xpj5h3NEKxQcMnYf8DSdMf_86zh1InIvMQyli9Qyd28ROQGmBzVd1Nf5GIK0k8QrxaxT5WFLtShUYtxlQCXYXjc3k1_pXI5sYmybo-Euc9FzQeqS0Md2cOgze8PEJ60M4szLTkvpKzzJRNrSU28HGSgILuyNXdow5OGf2ZpGk5a2qNh3_e30FRgow5UiQdsXj_S-T0iWDMaoYtCf1RhJ1zicBb6M1urDwcjInY=w879-h536-s-no?authuser=0"
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
                    src="https://lh3.googleusercontent.com/pw/AIL4fc_qDQTJDgjTYmZDErvJB-_WO-urKhk9DyDu9QQFvChZiBQo16GNmRs-oXlnvsCosCHE3d9aatOd1oezCdm4Nf47kak2O0fOn3IK0TbZ4d3t60PIk4qAXLW25uFE8D8CSjwpZFh7ykQH2GsgU6RdLB9l1RwUty3m-4mREjlg8v_08-Y0-3QliNXV6JokFI0gQ2D2vApBImluPO0zyca1gFc6MKT-c33BMXrwsR5g6mwfQXce3bbXq1-nJ3GYFHJRZu2_QUBaQqyZoHVu-E5sTnlCT39372Z0mWr4nES9CyQyjJryPo_F99djGeb_2HZSVDpx2oLDt2cdV8Sw-iwHHuZJx9E_ltpeSMssSK7o1mlylM7Y6v8FH0IXb2rXzUo9_RmPm75hx9aMbmh1Oxnm9zFcHdd2RyILVDiJ9QtF5dZRaGozw6HuOjJi541nYHYV5loxJxQkppIxRzrogcyxELrEPNb5pBPpNGAkcQjyBTsQ8q-tINQsRlYbl_19Fev6qtsaXBYZ6N_y4qRbQOhnATPbkBARdaLz2IDHnZfvOkHB_vjUwq6D3N8BZpHmZ4vRGNBnAE6_306ybZPLZyUxW0Jo85HfdYLwlhyHcbX9ZndjG_STt6A38lLLP6d-f1ENPijXWN2oN9BHZiHUsk9-3EtfKOlVY2dKcg6qBScSHOosskI5Z4opw5mNI1TZP3LdC_5_JF3Gb1Rb5tkuMzOlJ3tmazOh2SNkevyh5tZVvm8Oa7rr0_Sx9_1rpaNI7944oCa1xVl91c2KwmMJvVeIN_wnuVTu86em-z3LqHze5FHGPW73YmEy2JJli_SrYG7KZSLS2L4l9Kc-Kxy7FtGC7w5eposbiNUBA6Sn_B4T_-e3fK7H7qS4pebUOWJ0itjnxptknpLThRNADOsaAw0Gjc7Na9UqEnrfcYtUMxYOf5j9_BpkLPlcsD1XQ4NJKhE=w879-h542-s-no?authuser=0"
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
