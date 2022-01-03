import React, { Component } from "react";
import PROJECTS from "./data/projects";
import PropTypes from "prop-types";

class Project extends Component {
  static propTypes = {
    project: PropTypes.object,
  };
  render() {

    const {id, title, description, link, image} = this.props.project;

    return (
      <div style={{ display: 'inline-block', margin:  '1%', padding: '2%' }}>
        <h3>{title}</h3>
        <img src={image} alt= "Profile" style={{ width: '200px', height: 120}}/>
        <p>{description}</p>
        <a href={link} target= "_blank" rel="noreferrer">{link}</a>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PROJECTS.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
