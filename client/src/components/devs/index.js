import { Button } from "react-bootstrap";
import bryson from "../photos/TeamAvatars-Bryson.jpg";
import ian from "../photos/TeamAvatars-Ian.jpg";
import ilya from "../photos/TeamAvatars-Ilya.jpg";
import josh from "../photos/TeamAvatars-Josh.jpg";
import thomas from "../photos/TeamAvatars-Thomas.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const devs = [
  {
    id: 1,
    name: "Bryson Palmer",
    image: bryson,
    github: (
      <Button variant="success" href="https://github.com/Bryson-Palmer">
        <FaGithub /> GitHub
      </Button>
    ),
    linkedin: (
      <Button
        variant="success"
        href="https://www.linkedin.com/in/bryson-palmer-555b3862/"
      >
        <FaLinkedin /> LinkedIn
      </Button>
    ),
    description:
      "I am a husband, father, jiujiteiro, musician, and now a student. I have been a stay-at-home dad for nine years and now I'm transitioning into web development.",
    title: "Full-Stack Web Developer",
    role: "Back End",
  },
  {
    id: 2,
    name: "Ian Fleshman-Cooper",
    image: ian,
    github: (
      <Button variant="success" href="https://github.com/Ianaac27">
        <FaGithub /> GitHub
      </Button>
    ),
    linkedin: (
      <Button
        variant="success"
        href="https://www.linkedin.com/in/ian-fleshman-cooper/"
      >
        <FaLinkedin /> LinkedIn
      </Button>
    ),
    description:
      "Developer with a BA in Mathematics & IT from Northwest University, and a Certificate from the University of Washington- Professional and Continuing Education",
    title: "Full-Stack Web Developer",
    role: "Front & Back End",
  },
  {
    id: 3,
    name: "Ilya Libershtyen",
    image: ilya,
    github: (
      <Button variant="success" href="https://github.com/ilya-libershteyn">
        <FaGithub /> GitHub
      </Button>
    ),
    linkedin: (
      <Button
        variant="success"
        href="https://www.linkedin.com/in/ilya-libershteyn/"
      >
        <FaLinkedin /> LinkedIn
      </Button>
    ),
    description: "Back end guru",
    title: "Full-Stack WebDeveloper",
    role: "Back End",
  },
  {
    id: 4,
    name: "Joshua Haller",
    image: josh,
    github: (
      <Button variant="success" href="https://github.com/JJHPhoto">
        <FaGithub /> GitHub
      </Button>
    ),
    linkedin: (
      <Button
        variant="success"
        href="https://www.linkedin.com/in/joshuajhaller/"
      >
        <FaLinkedin /> LinkedIn
      </Button>
    ),
    description:
      "Full Stack Web Developer with a background in Photography and Graphic Design. International experience managing diverse groups.",
    title: "Full-Stack Web Developer || Photographer",
    role: "Front End",
    phone: "206 235 9798",
  },
  {
    id: 5,
    name: "Thomas Kading",
    image: thomas,
    github: (
      <Button variant="success" href="https://github.com/Tskading">
        <FaGithub /> GitHub
      </Button>
    ),
    linkedin: (
      <Button
        variant="success"
        href="https://www.linkedin.com/in/thomas-kading/"
      >
        <FaLinkedin /> LinkedIn
      </Button>
    ),
    description:
      "Current web developer with a background in environmental science.",
    title: "Full-Stack Web Developer",
    role: "Front End",
  },
];

export default devs;
