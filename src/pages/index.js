import React, { Component } from "react";

import {
  Container,
  Content,
  Header,
  Heading,
  Image,
  Logo,
  Paragraph,
  Section,
  Typed
} from "../components";

import screenLG from "../media/dashboard.png";
import screenMD from "../media/dashboard-md.png";
import screenSM from "../media/dashboard-sm.png";

class Homepage extends Component {
  state = {
    text: "animators"
  };

  render() {
    return (
      <Section>
        <Header>
          <Logo />
        </Header>
        <Container>
          <Content>
            <Heading>
              Finally, a single space for
              {" "}
              <Typed
                avgTypingSpeed={20}
                startDelay={1000}
                onTypingDone={this.done}
              >
                {this.state.text}
              </Typed>
              {" "}
              to manage and present their entire workflow.
            </Heading>
            <Paragraph>
              Write a script, create a moodboard, annotate your storyboards, showcase your styleframes and collaborate with your client in a single space.
              <br />
              <br />
              Anni is currently in development. Follow our progress on GitHub and sign up below to be notified when it's out!
            </Paragraph>
          </Content>
        </Container>
        <Container media>
          <Image src={screenLG} alt="dashboard" desktop />
          <Image src={screenMD} alt="dashboard" tablet />
          <Image src={screenSM} alt="dashboard" mobile />
        </Container>
      </Section>
    );
  }
}

export default Homepage;
