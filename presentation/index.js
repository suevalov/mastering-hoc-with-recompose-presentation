// Import React

import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from 'spectacle-code-slide';
import React from "react";
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

import colors from './theme/colors';
import createTheme from "./theme";
import fonts from './theme/fonts';
import Suevalov from './components/Suevalov';

// Import Spectacle Core tags

// Import image preloader util

// Import theme


// Require CSS
require("normalize.css");
require("./theme/index.css");

const images = {
  me: require('../assets/me.png'),
  ironmanThanks: require('../assets/ironman-thanks.gif'),
  compose: require('../assets/compose.gif'),
  mindBlown: require('../assets/mind-blown.gif'),
  itnonstop: require('../assets/it-non-stop.png')
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
          <Slide transition={["fade"]} 
                 bgColor={colors.lightGray}
                 notes={`
                  <ul>
                    <li>a deep dive</li>  
                    <li>might be familiar with</li>
                    <li>explore a couple 
of typical situations</li>
                    <li>removing boilerplate, making more readable, easier to refactor</li>
                  </ul>
                 `}>
            <List style={{ lineHeight: '2.4em' }}>
              <ListItem>What are higher-order components?</ListItem>
              <ListItem>What are some use cases?</ListItem>
              <ListItem>Using recompose & building custom HOCs</ListItem>
            </List>
          </Slide>

          {/* What HOC are? */}
          <Slide 
            transition={["fade"]} 
            bgColor={colors.navy}
            notes={`
                <ul>
                  <li>let's do a recap - on the same page</li>
                  <li>really fancy name for a really
simple concept</li>
                  <li>It's a function that accepts the component and 
returns a new component which behavior is enhanced.</li>
                </ul>
            `}
          >
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              Component => EnhancedComponent
            </Heading>
          </Slide>

          <Slide 
            transition={["fade"]} 
            bgColor={colors.navy}
            notes={`
              They might also accept some additional parameters.
            `}
          >
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              (arg1, arg2, Component) =>
            </Heading>
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              EnhancedComponent
            </Heading>
          </Slide>

          <Slide 
            transition={["fade"]} 
            bgColor={colors.navy}
            notes={`
              Or they might use currying. Good reason for that.  
            `}
          >
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              (arg1, arg2) => (Component) =>
            </Heading>
            <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
              EnhancedComponent
            </Heading>
          </Slide>

          {/* `connect` example */}
          <CodeSlide
            notes={`
              Let's take a look on concrete examples.
              Describe how 'react-redux' work.
            `}
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
            notes={`
              <ul>
                <li>Radium is library for inline-styles approach and handling pseudo selectors.</li>
                <li>Wrap the render function</li>
                <li>Recurse into the result of the original render</li>
              </ul>  
            `}
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
            notes={`
              <ul>
                <li>Slightly different signature</li>
                <li>passes down the data that is being fetched from 
GraphQL Endpoint</li>
                <li>delay
rendering until data dependency is resolved</li>
                <li>'connect', 'radium' and 'relay' are different</li>
                <li>but each time you enhance the 
behaviour of component by wrapping it by HOC</li>
              </ul>  
            `}
            transition={["fade"]}
            lang="js"
            code={require("!raw!../assets/code/relay.example")}
            ranges={[
              { loc: [0, 1], title: 'relay' },
              { loc: [2, 7] },
              { loc: [8, 22], note: '(Component, arg1) => EnhancedComponent' }
            ]}
          />

          <Slide 
            transition={["fade"]} 
            bgColor={colors.lightGray}
            notes={`
              <ul>
                <li>will see this items in more detail</li>
                <li>study the ways of implementing HOCs</li>
              </ul>
            `}
          >
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

          <Slide 
            transition={["fade"]} 
            bgColor={colors.lightGray}
            notes={`
              There're two ways to do that  
            `}
          >
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
            notes={`
              <ul>
                <li>You can read, add, edit and remove the props that are being passed 
to the WrappedComponent.</li>
                <li>You can abstract state by providing props and callbacks, 
similar to how container deal with presentational.
</li>
                <li>Let's review this pattern first.</li>
              </ul>  
            `}
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

          <Slide 
            transition={["fade"]} 
            bgColor={colors.lightGray}
            notes={`
              <ul>
                <li>There's pattern in React that separating components according to certain
types of responsibilities they have.</li>
              </ul>  
            `}
          >
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

          <Slide 
            transition={["fade"]} 
            bgColor={colors.dark}
            notes={`
            Some components are designed to be purely presentational. They simply
accept props and return React elements.
            `}
          >
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/presentational-component-post.example")}
              margin="20px auto"
              style={{ fontSize: '1em' }}
            />
          </Slide>

          <Slide 
            transition={["fade"]} 
            bgColor={colors.dark}
            notes={`
              <ul>
                <li>
                Another components perform more complex tasks: manage subs, fetch stuff, biz logic.
                </li>
                <li>These components
are called Containers.</li>
                <li>They do all the heavy job before passing
down props</li>
                <li>Some people call these Smart vs. Dumb components.</li>
              </ul>  
            `}
          >
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

          <Slide 
            transition={["fade"]} 
            bgColor={colors.dark}
            notes={`
              <ul>
                <li>(Enhancer) extends the WrappedComponent</li>
                <li>called II, cause instead of the WrappedComponent 
extending some Enhancer class</li>
                <li>it is passively extended by the Enhancer</li>
                <li>II allows the HOC to have access to the WrappedComponent 
instance via this (state, props, component 
lifecycle hooks)</li>
              </ul>  
            `}
          >
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/inheritance-inversion.example")}
              margin="20px auto"
              style={{ fontSize: '0.9em' }}
            />
          </Slide>

          <CodeSlide
            notes={`
              <ul>
                <li>What can you do with Inheritance Inversion?</li>
                <li>Render Highjacking because the HOC takes control of the render output of the 
WrappedComponent and can do all sorts of stuff with it</li>
                <li>cannot change received props, but can change output</li>
              </ul>
            `}
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

          <Slide 
            transition={["fade"]} 
            bgColor={colors.lightGray}
            notes={`
              <ul>
                <li>looks like we solid with what HOCs are and how we can use then in our applications</li>
                <li>has significally changed the way I develop</li>
                <li>Open-sourced by Andrew Clark, co-creator of Redux, in 2015.</li>
                <li>always start with presentational component</li>
                <li>Recompose helps you to ease the pain and enhance your presentational component by gradually using composition.
</li>
              </ul>  
            `}
          >
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
              { loc: [0, 5] },
              { loc: [6, 8] },
              { loc: [10, 20] },
              { loc: [20, 28] },
              { loc: [30, 36] },
              { loc: [39, 44] },
              { loc: [45, 49] },
              { loc: [52, 57] },
              { loc: [58, 67] },
              { loc: [68, 69] }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require('!raw!../assets/code/recompose-other-stuff.example')}
            style={{ fontSize: '0.7em' }}
            ranges={[
              { loc: [0, 0], title: 'do other awesome things' },
              { loc: [0, 8] },
              { loc: [11, 18] },
              { loc: [19, 21] }
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

          <Slide transition={["fade"]} bgImage={images.mindBlown.replace("/", "")} bgDarken={0.55}>
            <Heading size={3} textColor={colors.white}>
              Let's try to create something
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.lightGray}>
            <Heading size={2}>Pros</Heading>
            <List style={{ textAlign: 'center', lineHeight: '2.2em' }}>
              <ListItem>Less code dublication</ListItem>
              <ListItem>Pushes to use composition pattern</ListItem>
              <ListItem>Speed up development and refactoring</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor={colors.lightGray}>
            <Heading size={2}>Cons</Heading>
            <List style={{ textAlign: 'center', lineHeight: '2.2em' }}>
              <ListItem>More complex for newcomers</ListItem>
              <ListItem>Expensive to change when abstraction is wrong</ListItem>
              <ListItem>Performance cavets</ListItem>
            </List>
          </Slide>

          <Slide 
            transition={["fade"]} 
            bgColor={colors.lightGray}
            notes={`
              <ul>
                <li> using higher-order component helpers leads to smaller, more focused components, and provides a better programming model</li>
                <li>, any abstraction over an existing API is going to come with trade-offs</li>
                <li>there is a performance overhead when introducing a new component to the tree</li>
                <li>referentially transparent</li>
                <li>Recompose uses a special version of createElement() that returns the output of stateless functions instead of creating a new element.</li>
              </ul>
            `}
          >
            <Heading size={2}>Performance & Optimizations</Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.ironmanThanks.replace("/", "")} bgDarken={0.55}>
            <Heading size={1} textColor='primary'>Thank you!</Heading>
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

          <Slide 
            transition={["fade"]} 
            bgImage={images.itnonstop.replace("/", "")} 
            notes={`
              <ul>
                <li>a series of conferences organized by DataArt</li>
                <li>IT NonStop conferences are held in 10 cities across Poland, Ukraine, and Russia.</li>
                <li>Each of the conferences is focused on a particular aspect of IT development</li>
                <li>10 December</li>
                <li>We will talk about standards, elegant solutions and the latest trends of front-end development.</li>
<li>Сomplex things in simple terms, that is the beauty of front-end.</li>
              </ul>
            `}
          />

        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
