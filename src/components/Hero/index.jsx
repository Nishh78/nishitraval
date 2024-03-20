import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Header from "../Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroName,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./elements";
import { TypeAnimation } from 'react-type-animation';
import { HomeCodeIcon } from "../../assests";
// import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            {/* <ScrollAnimation animateIn="fadeIn" > */}
            <p>Hey there <span className="name-animation">👋</span>, my name is</p>
            <HeroName>Nishit Raval_</HeroName>
            {/* <TypeAnimation
              cursor={false}
              sequence={[
                'Hi, I\'m Pedro.',
                () => setShowSubtitle(true)
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 150 }}
              wrapper="h1"
              repeat={0}
            /> */}
            <p>I'm a software engineer from India, currently specialising in development of web SPAs with React.js, REST/GraphQL APIs in Node.js, and other web technologies.</p>
            {/* {showSubtitle &&
              <TypeAnimation
                cursor={true}
                sequence={[
                  500,
                  'A Full-Stack Developer.',
                  1000,
                  'A BCIT graduate.',
                  // 'I design and code beautifully simple things, and I love what I do.',
                  1000,
                  'A problem solver.',
                  1000,
                  'An innovative thinker.',
                  1000,
                  'A....',
                  1000,
                  'A.... cool guy?',
                  1000,
                  "Ok...",
                  1000,
                  "Ok...  I'm running out of ideas...",
                  1000,
                  "Uhh...",
                  1000,
                  "Uhh... you can scroll down to see my projects now...",
                  300,
                  () => setShowScrollDown(true),
                  1000,
                  "Seriously, my projects are really cool, go check them out!",
                  1000,
                  "You're uh...",
                  1000,
                  "You're uh... still here?",
                  1000,
                  "Ok, this has been fun, but I'm gonna restart the loop now...",
                  // 1000,
                  // "Or...",
                  // 1000,
                  // "Or... I could scroll you by force! Muahaha!",
                  1000,
                  "See ya! :)",
                  500,
                ]}
                speed={50}
                deletionSpeed={65}
                wrapper="h5"
                repeat={Infinity}
              />
            } */}
            {/* </ScrollAnimation> */}
            <div className="hero-social-wrapper">
              <a href="mailto:ravalnishit81@gmail.com" className="hero-email">Email Me</a>
              <a href="https://github.com/Nishh78" target="_blank" className="hero-github">Visit My GitHub Profile</a>
            </div>
          </HeroLeft>
          <HeroRight>
            {/* <ScrollAnimation animateIn="fadeIn"> */}
            <Image
              src={HomeCodeIcon}
              alt="man-svgrepo"
            />
            {/* </ScrollAnimation> */}
          </HeroRight>
        </HeroWrapper>
        {/* {showScrollDown &&
          // <ScrollAnimation animateIn="flipInX" offset={0}>
          <ScrollDown to="projects" id="scrollDown">
            <ScrollLink>
              Scroll down
              <img
                src="/scroll-down.svg"
                alt="scroll-down"
              />
            </ScrollLink>
          </ScrollDown>
          // </ScrollAnimation>
        } */}
      </HeroContainer>
    </main>
  );
}

export default Hero;
