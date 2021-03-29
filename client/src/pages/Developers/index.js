import React from "react";
import { Container } from "react-bootstrap";
import DeveloperCards from "../../components/DeveloperCards";
import devs from "../../components/devs";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Wrapper from "../../components/Wrapper";

function Developers() {
  return (
    <Container>
      <NavBar />
      <Header />
      <Wrapper>
        {devs.map((dev) => {
          return (
            <DeveloperCards
              key={dev.id}
              name={dev.name}
              image={dev.image}
              role={dev.role}
              github={dev.github}
              linkedin={dev.linkedin}
              description={dev.description}
              title={dev.title}
              portfolio={dev.portfolio}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default Developers;
