// import * as assets from '../assets/';
//! PROJECT MODEL IMPORT
import ProjectModel from "./project_model";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const PROJECTS = [
    new ProjectModel(
        1,
        "Example React App",
        "I built this project when i started learning react.js",
        "https://github.com/seeebbii",
        project1
    ),
    new ProjectModel(
        2,
        "LetterBird",
        "A hybrid application built with flutter and nodejs used as a backend",
        "https://github.com/seeebbii",
        project2
    ),
    new ProjectModel(
        3,
        "MSC Camera",
        "A custom camera application built with flutter",
        "https://github.com/seeebbii",
        project3
    ),
];


export default PROJECTS;