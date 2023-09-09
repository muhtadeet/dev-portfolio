import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenuItem, NavbarMenu,  NavbarItem} from "@nextui-org/react";
import Logo from '../assets/Logo'
import {Link} from 'react-scroll'
import { animateScroll as scroll } from "react-scroll";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Logo/>
        </NavbarBrand>
      </NavbarContent>
        <div className="pr-5 font-ubuntu font-semibold">
      <NavbarContent className="hidden sm:flex gap-10">
        <NavbarItem>
          <Link className=" cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600" color="foreground" onClick={() => scroll.scrollToTop()} smooth={true} duration={700}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600" color="foreground" to="about" smooth={true} duration={700}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600" color="foreground" to="projects" smooth={true} duration={700}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600" color="foreground" to="contact" smooth={true} duration={700}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
      </div>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarMenu className="max-w-sm">
          <NavbarMenuItem>
            <Link
              className="cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600 text-blue-gray-800 w-full font-ubuntu font-semibold"
              size="lg"
              onClick={() => scroll.scrollToTop()} smooth={true} duration={700}
            >
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600 text-blue-gray-800 w-full font-ubuntu font-semibold"
              to="about"
              size="lg"
              smooth={true} duration={700}
            >
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600 text-blue-gray-800 w-full font-ubuntu font-semibold"
              to="projects"
              size="lg"
              smooth={true} duration={700}
            >
              Projects
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600 text-blue-gray-800 w-full font-ubuntu font-semibold"
              to="contact"
              size="lg"
              smooth={true} duration={700}
            >
              Contact
            </Link>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
