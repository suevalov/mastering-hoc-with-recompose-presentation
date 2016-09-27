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
  me: require('../assets/me.png'),
  ironmanThanks: require('../assets/ironman-thanks.gif')
};

preloader(images);

const theme = createTheme(
  {
    primary: colors.lightBlue,
    secondary: colors.navy,
    tertiary: colors.navy,
    quartenary: colors.lightGray,
    white: colors.white
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

          {/* Intro slide */}
          <Slide transition={["fade"]} bgColor={colors.lightBlue} notes="Introduce yourself">
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

          {/* Talk plan slide */}
          <Slide transition={["fade"]} bgColor={colors.lightGray}>
            <List style={{ lineHeight: '2.4em' }}>
              <ListItem>What are higher-order components?</ListItem>
              <ListItem>What are some use cases?</ListItem>
              <ListItem>Using recompose & building custom HOCs</ListItem>
            </List>
          </Slide>

          {/* What HOC are? */}
          <Slide transition={["fade"]} bgColor={colors.navy}>
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              Component => EnhancedComponent
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor={colors.navy}>
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              (arg1, arg2, Component) =>
            </Heading>
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              EnhancedComponent
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor={colors.navy}>
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              (arg1, arg2) => (Component) =>
            </Heading>
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              EnhancedComponent
            </Heading>
          </Slide>

          {/* `connect` example */}
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("!raw!../assets/code/redux-connect.example")}
            ranges={[
              { loc: [0, 1], title: 'react-redux' },
              { loc: [1, 2] },
              { loc: [3, 9] },
              { loc: [10, 13] },
              { loc: [14, 17], note: '(arg1, arg2) => (Component) => EnhancedComponent' }
            ]}
          />

          {/* `radium` example */}
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("!raw!../assets/code/radium.example")}
            ranges={[
              { loc: [0, 1], title: 'radium' },
              { loc: [14, 25] },
              { loc: [26, 28], note: '(Component) => EnhancedComponent' }
            ]}
          />

          {/* `relay` example */}
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("!raw!../assets/code/relay.example")}
            ranges={[
              { loc: [0, 1], title: 'relay' },
              { loc: [2, 7] },
              { loc: [8, 22], note: '(Component, arg1) => EnhancedComponent' }
            ]}
          />

          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/redux-connect.example")}
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
          <Slide transition={["fade"]} bgImage={images.ironmanThanks.replace("/", "")} bgDarken={0.55}>
            <Heading size={1} fit caps textColor='primary'>Thank you!</Heading>
            <List style={{ listStyle: 'none', textAlign: 'center' }}>
              <ListItem>
                <Link textColor="primary" href="http://suevalov.com" target="__blank">Alex Suevalov</Link>
              </ListItem>
              <ListItem>
                <Link textColor="primary" href="https://twitter.com/Suevalov" target="__blank">@suevalov</Link>
              </ListItem>
              <ListItem>
                <Link textColor="primary" href="http://dataart.com" target="__blank">DataArt</Link>
              </ListItem>
              <ListItem>
                <Link textColor="primary" href="mailto:suevalov.me@gmail.com" target="__blank">suevalov.me@gmail.com</Link>
              </ListItem>
              <ListItem>
                <Link textColor="primary" href="https://github.com/suevalov" target="__blank">https://github.com/suevalov</Link>
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
