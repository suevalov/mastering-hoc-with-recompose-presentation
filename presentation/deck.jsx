import React from 'react/addons';
import * as Slides from './slides/index';
import {
  Deck, Slide
} from '../src/spectacle';

import preloader from '../src/utils/preloader';

const images = {
  questions: require('./images/questions.png'),
  thanks: require('./images/ironman-thanks.gif'),
  logo: require('./images/react-logo.png'),
  like: require('./images/like-icon.png'),
  nativeApps: require('./images/native-apps.png'),
  buildingNativeApps: require('./images/building-native-apps.jpeg'),
  me: require('./images/me.png'),
  phones: require('./images/ios-android.png'),
  webHero: require('./images/web-superhero.png'),
  splitBackground: require('./images/split-background.png'),
  reactNativeBackground: require('./images/react-native-background.jpg'),
  htmlCssJS: require('./images/html-js-css.png')
};

preloader([images.me, images.logo, images.thanks]);

const slides = [
  // Intro
  {
    component: Slides.Intro,
    slideProps: {
      bgColor: 'primary'
    },
    props: {
      logo: images.logo.replace('/', ''),
      photo: images.me.replace('/', '')
    }
  },
  // Why do we love native apps
  {
    component: Slides.WhyDoWeLoveNativeApps,
    slideProps: {
      bgColor: 'light',
    },
    props: {
      like: images.like.replace('/', '')
    }
  },
  // Native Apps Bullet
  {
    component: Slides.BulletLoveNativeApps,
    slideProps: {
      bgColor: 'light'
    },
    props: {
      image: images.nativeApps.replace('/', '')
    }
  },
  {
    component: Slides.BuildingNativeAppsIsHard,
    slideProps: {
      bgImage: images.buildingNativeApps.replace('/', ''),
      bgDarken: 0.7
    }
  },
  {
    component: Slides.BulletHardNativeApps,
    slideProps: {
      bgColor: 'light'
    },
    props: {
      image: images.phones.replace('/', '')
    }
  },
  {
    component: Slides.WebSolvesThisProblem,
    slideProps: {
      bgColor: 'darkPrimary'
    },
    props: {
      image: images.webHero.replace('/', '')
    }
  },
  {
    component: Slides.HowWebSolvedTheProblems,
    slideProps: {
      bgImage: images.splitBackground.replace('/', '')
    },
    props: {
      image: images.htmlCssJS.replace('/', '')
    }
  },
  {
    component: Slides.WebBrowser,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.UserExperinceOrDeveloperVelocity,
    slideProps: {
      bgColor: 'darkPrimary'
    }
  },
  {
    component: Slides.BothAreImportant,
    slideProps: {
      bgColor: 'darkPrimary'
    }
  },
  {
    slideProps: {
      bgImage: images.reactNativeBackground.replace('/', '')
    }
  },
  {
    component: Slides.ReactJSFramework,
    slideProps: {
      bgColor: 'primary'
    }
  },
  {
    component: Slides.CountExample,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.CountFunction1,
    slideProps: {
      bgColor: '#F9F6ED'
    }
  },
  {
    component: Slides.ReactIsAbstract,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.ReactIsAbstract2,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.NotWriteOnce,
    slideProps: {
      bgColor: 'darkPrimary'
    }
  },
  {
    component: Slides.LearnOnce,
    slideProps: {
      bgColor: 'darkPrimary'
    }
  },
  {
    component: Slides.Tags,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.ReactStyles,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.TwoWaysToDiffer,
    slideProps: {
      bgColor: 'darkPrimary'
    }
  },
  {
    component: Slides.ReactBenefits,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.FacebookAdsManager,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.DemoTime,
    slideProps: {
      bgColor: 'light'
    }
  },
  {
    component: Slides.FinalSlide,
    slideProps: {
      bgImage: images.thanks.replace('/', ''),
      bgDarken: 0.6
    }
  }
];

export default class extends React.Component {

  renderSlides() {
    return slides.map((slide, index) => {
      if (slide.component) {
        return (
          <Slide {...slide.slideProps}>
            <slide.component {...slide.props} index={index} />
          </Slide>
        );
      }
      return <Slide {...slide.slideProps} />;
    });
  }

  render() {
    return (
      <Deck transition={['fade']} transitionDuration={800} progress='bar'>
        { this.renderSlides() }
      </Deck>
    );
  }
}
