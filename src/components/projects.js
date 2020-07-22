import React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "./constants";

export default function Projects({ repos, navbarHeight }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${navbarHeight}rem;
    color: white;
    width: 100%;
    min-height: calc(100vh - ${navbarHeight}rem);
    padding-top: 2rem;
    background-image: linear-gradient(${COLORS.secondary}, ${COLORS.color3});
    @media (max-width: ${BREAKPOINTS.phablet}) and (orientation: landscape) {
      margin-top: 0;
    }
    h2.page-title {
      color: ${COLORS.color4};
      font-size: 2.5rem;
      text-align: center;
    }
    div.projects {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      width: 100%;
      padding: 0rem 2rem;
      color: white;
    }
  `;
  return (
    <Container>
      <h2 className="page-title">{`< My projects: live from github />`}</h2>
      <div className="projects">
        {repos.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </Container>
  );
}

const ProjectContainer = styled.a`
  text-decoration: none;
  color: white;
  display: grid;
  padding: 5rem 10rem;
  margin: 2rem;
  box-shadow: 0.25rem 0.25rem 0.5rem 0rem black;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  grid-template-areas:
    "none header header none2"
    "language description description date";
  grid-gap: 2rem 2rem;
  @media (max-width: ${BREAKPOINTS.phablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 1rem;
  }
  transition: 0.125s ease-in-out all;
  &:hover {
    background: rgba(50, 50, 50, 0.75);
    transition: 0.125s ease-in-out all;
    cursor: pointer;
  }
  div.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: header;
    color: ${COLORS.color4};
    text-align: center;
    margin: 0;
    padding: 0;
    width: auto;
    h2 {
      margin: 0;
      padding: 0;
      text-align: center;
    }
  }
  div.lang {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    font-size: 1.25rem;
    width: 100%;
    grid-area: language;
    text-align: left;
    @media (max-width: ${BREAKPOINTS.phablet}) {
      align-items: center;
    }
    p {
      &::before {
        content: "<lang>";
        margin-right: 0.25rem;
        color: ${COLORS.color4};
      }
      &::after {
        content: "</lang>";
        margin-left: 0.25rem;
        color: ${COLORS.color4};
      }
    }
  }
  div.description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    word-wrap: break-word;
    grid-area: description;
    text-align: center;
    @media (max-width: ${BREAKPOINTS.phablet}) {
      margin: 1.5rem 0rem;
    }
  }
  .date {
    grid-area: date;
    text-align: right;
  }
`;

function Project({ project }) {
  return (
    <ProjectContainer href={project.html_url} target="_blank">
      <div className="title">
        <h2>{project.name}</h2>
      </div>
      <div className="lang">
        <p>{project.language || "Unknown"}</p>
      </div>
      <div className="description">
        <p className="label">Description:</p>
        <p>{project.description || "No description available on GitHub!"}</p>
      </div>
      <p className="date">{project.created_at}</p>
    </ProjectContainer>
  );
}
