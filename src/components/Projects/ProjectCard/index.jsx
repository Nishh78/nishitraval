import React from "react";
import { ProjectList } from "../../../data";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./elements";
import ProjectImages from "./model";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// import ScrollAnimation from "react-animate-on-scroll";
function ProjectCard() {

  const [{
    isOpen,
    list
  }, setState] = React.useState({
    isOpen: false,
    list: []
  });

  console.log(isOpen,
    list);
  const handleModelOpen = (e, list) => {
    e.preventDefault();
    setState({
      isOpen: true,
      list: list.imgs || []
    })
  }

  const handleModelClose = () => {
    setState({
      isOpen: false,
      list: []
    })
  }

  return (
    <>
      {ProjectList.map((list, index) => {
        return (
          // <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card key={index}>
            <CardLeft>
              <em onClick={e => handleModelOpen(e, list)}> <img src={list.img} alt={list.name} /> </em>
            </CardLeft>
            <CardRight>
              <h4>{list.title}  {list.demo_url.length > 0 &&
                <a
                  className="blank-icon"
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              }</h4>

              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 &&
                  <a
                    className="blank-icon"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                }

              </BtnGroup>
            </CardRight>
          </Card>
          // </ScrollAnimation>
        )
      })}
      {isOpen && (
        <ProjectImages open={isOpen} items={list} handleClose={handleModelClose} />
      )}
    </>
  );
}

export default ProjectCard;
