// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
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
  me: require('../assets/me.png'),
  ironmanThanks: require('../assets/ironman-thanks.gif'),
  compose: require('../assets/compose.gif')
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

          <Slide transition={["fade"]} bgColor={colors.lightGray}>
            <Heading size={3} color="primary">
              What can I do with HOC?
            </Heading>
            <List style={{ textAlign: "center" }}>
              <ListItem>
                Code reuse, logic abstraction
              </ListItem>
              <ListItem>
                Render Highjacking
              </ListItem>
              <ListItem>
                State abstraction and manipulation
              </ListItem>
              <ListItem>
                Props manipulation
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.lightGray}>
            <Heading size={3} color="primary">
              Props Proxy
            </Heading>
            <Heading size={2} color="primary">
              &
            </Heading>
            <Heading size={3} color="primary">
              Inheritance Inversion
            </Heading>
          </Slide>

          {/* Props Proxy */}
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/props-proxy-1.example')}
            style={{ fontSize: '0.8em' }}
            ranges={[
              { loc: [0, 1], title: 'Props Proxy' },
              { loc: [2, 3] },
              { loc: [4, 18] },
              { loc: [21, 22] },
              { loc: [25, 26] },
              { loc: [27, 36] },
              { loc: [37, 38] },
              { loc: [41, 42] }
            ]}
          />

          <Slide transition={["fade"]} bgColor={colors.lightGray}>
            <Heading size={3} color="primary">
              Container
            </Heading>
            <Heading size={3} color="primary">
              vs.
            </Heading>
            <Heading size={3} color="primary">
              Presentational
            </Heading>
            <Heading size={3} color="primary">
              Components
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.dark}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/presentational-component-post.example")}
              margin="20px auto"
              style={{ fontSize: '1em' }}
            />
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.dark}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/container-component-post.example")}
              margin="20px auto"
              style={{ fontSize: '0.9em' }}
            />
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.dark}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/fetch-post.example")}
              margin="20px auto"
              style={{ fontSize: '0.65em' }}
            />
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.dark}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/fetch-resource.example")}
              margin="20px auto"
              style={{ fontSize: '0.65em' }}
            />
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.dark}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/fetch-user.example")}
              margin="20px auto"
              style={{ fontSize: '0.8em' }}
            />
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.lightGray}>
            <Heading size={3} color="primary">
              Props Proxy
            </Heading>
            <Heading size={2} color="primary">
              &
            </Heading>
            <Heading size={3} color="primary">
              Inheritance Inversion
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.dark}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/inheritance-inversion.example")}
              margin="20px auto"
              style={{ fontSize: '1em' }}
            />
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/inheritance-inversion-examples.example')}
            style={{ fontSize: '0.7em' }}
            ranges={[
              { loc: [0, 1], title: 'Inheritance Inversion' },
              { loc: [2, 3] },
              { loc: [4, 15] },
              { loc: [16, 17] },
              { loc: [18, 34] },
              { loc: [36, 37] },
              { loc: [39, 40] },
              { loc: [41, 55] }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/composing-hocs.example')}
            style={{ fontSize: '0.8em' }}
            ranges={[
              { loc: [0, 1], title: 'Composing HOCs' },
              { loc: [2, 6] },
              { loc: [7, 14] },
              { loc: [15, 23] },
              { loc: [25, 26] },
              { loc: [26, 29] },
              { loc: [29, 32] },
              { loc: [32, 41] }              
            ]}
          />

          <Slide transition={["fade"]} bgColor={colors.lightGray}>
            <Heading size={2} fit caps style={{ fontWeight: 300 }}>
              Recompose
            </Heading>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/with-state.example')}
            style={{ fontSize: '0.7em' }}
            ranges={[
              { loc: [0, 0], title: 'lift state into functional wrappers' },
              { loc: [0, 1] },
              { loc: [1, 8] }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/with-reducer.example')}
            style={{ fontSize: '0.7em' }}
            ranges={[
              { loc: [0, 0], title: 'lift state in Redux style' },
              { loc: [0, 10] },
              { loc: [11, 12] },
              { loc: [12, 19] }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/recompose-optimize.example')}
            style={{ fontSize: '0.7em' }}
            ranges={[
              { loc: [0, 0], title: 'optimize rendering performance' },
              { loc: [0, 2] },
              { loc: [3, 6] },
              { loc: [7, 11] }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/recompose-modify-props.example')}
            style={{ fontSize: '0.7em' }}
            ranges={[
              { loc: [0, 0], title: 'modify props' },
              { loc: [0, 2] },
              { loc: [3, 6] },
              { loc: [7, 11] }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/recompose-other-stuff.example')}
            style={{ fontSize: '0.7em' }}
            ranges={[
              { loc: [0, 0], title: 'do other awesome things' },
              { loc: [0, 2] },
              { loc: [3, 6] },
              { loc: [7, 11] }
            ]}
          />

          <Slide transition={["fade"]} bgImage={images.compose.replace("/", "")} bgDarken={0.55}>
            <Heading size={3} textColor={colors.white}>
              HOCs can be composed
            </Heading>
            <Heading size={3} textColor={colors.white}>
              into more useful HOCs
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.dark}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/recompose-composed-post.example")}
              margin="20px auto"
              style={{ fontSize: '0.7em' }}
            />
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
