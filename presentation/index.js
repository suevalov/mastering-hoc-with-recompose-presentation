// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./theme";
import fonts from './theme/fonts';
import colors from './theme/colors';

import CodeSlide from 'spectacle-code-slide';
import Suevalov from './components/Suevalov';

// Require CSS
require("normalize.css");
require("./theme/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  markdown: require("../assets/markdown.png"),
  me: require('../assets/me.png')
};

preloader(images);

const theme = createTheme(
  {
    primary: colors.lightBlue,
    secondary: colors.navy,
    tertiary: colors.navy,
    quartenary: colors.lightGray
  },
  {
    primary: fonts.OpenSans,
    secondary: fonts.Lato,
    tertiary: fonts.Monospace
  }
);

class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress="bar">

          <Slide transition={["fade"]} bgColor={colors.lightBlue}>
            <Heading size={1} fit>
              Mastering HOC with
            </Heading>
            <Heading size={2} fit caps style={{ fontWeight: 700 }}>
              Recompose
            </Heading>
            <Heading size={6} style={{ marginTop: 30, marginBottom: 30 }}>
              ReactJS Wroclaw #7
            </Heading>
            <Suevalov photo={images.me.replace("/", "")} />
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("!raw!../assets/code/example.example")}
            ranges={[
              { loc: [0, 1], title: "The Beginning!" },
              { loc: [2, 6], note: "Here is a note" },
              { loc: [4, 9] }
            ]}
          />
          <Slide transition={["fade"]} bgColor={colors.lightGray} notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
