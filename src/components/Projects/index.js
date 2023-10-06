import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects From beginners project to Full Stack Mern Projects. Here are some of my projects with source code and you can also watch the live web app by cliking on view live app button.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'MERN Stack' ?
            <ToggleButton active value="MERN Stack" onClick={() => setToggle('MERN Stack')}>MERN Stack</ToggleButton>
            :
            <ToggleButton value="MERN Stack" onClick={() => setToggle('MERN Stack')}>MERN Stack</ToggleButton>
          }
          <Divider />
          {toggle === 'Beginer Project' ?
            <ToggleButton active value="Beginer Project" onClick={() => setToggle('Beginer Project')}>Beginer Project</ToggleButton>
            :
            <ToggleButton value="Beginer Project" onClick={() => setToggle('Beginer Project')}>Beginer Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'Intermediate Projects' ?
            <ToggleButton active value="Intermediate Projects" onClick={() => setToggle('Intermediate Projects')}>Intermediate Projects</ToggleButton>
            :
            <ToggleButton value="Intermediate Projects" onClick={() => setToggle('Intermediate Projects')}>Intermediate Projects</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects