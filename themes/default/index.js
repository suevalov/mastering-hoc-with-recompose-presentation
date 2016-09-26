const colors = {
  primary: '#A9ECF8',
  yellowTheme: '#fbd152',
  darkPrimary: '#49848E',
  secondary: 'black',
  light: '#f2f2f2'
};

const fonts = {
  primary: 'Source Sans Pro',
  secondary: 'Open Sans Condensed',
  tertiary: 'monospace',
  segoe: 'SegoeUILight'
};

module.exports = {
  colors: colors,
  fonts: fonts,
  global: {
    body: {
      background: colors.primary,
      fontFamily: fonts.segoe,
      fontWeight: 'normal',
      fontSize: '2em',
      color: colors.darkPrimary,
      overflow: 'hidden'
    },
    'html, body': {
      height: '100%'
    },
    '*': {
      boxSizing: 'border-box'
    }
  },
  progress: {
    pacman: {
      container: {
        position: 'absolute',
        bottom: '5px',
        left: '50%',
        transition: 'all 1s ease-in-out 0.2s',
        zIndex: 1000
      },
      pacman: {
        position: 'absolute',
        transition: 'left 0.3s ease-in-out 0.2s',
        width: '20px',
        height: '20px',
        transform: 'translate(-5px, -5px)',
      },
      pacmanTop: {
        position: 'absolute',
        content: ' ',
        width: '20px',
        height: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        background: colors.darkPrimary
      },
      pacmanBottom: {
        position: 'absolute',
        content: ' ',
        width: '20px',
        height: '10px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        background: colors.darkPrimary,
        top: '10px'
      },
      point: {
        position: 'absolute',
        float: 'left',
        background: 'transparent',
        width: '10px',
        height: '10px',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.darkPrimary,
        borderRadius: '50%',
        transition: 'all 0.01s ease-out 0.4s'
      }
    },
    bar: {
      container: {
        position: 'absolute',
        height: '4px',
        width: '100%',
        top: 0,
        left: 0,
        transition: 'all 1s ease-in-out 0.2s',
        zIndex: 1000
      },
      bar: {
        height: '100%',
        background: colors.darkPrimary,
        transition: 'all 0.3s ease-out'
      }
    },
    number: {
      container: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 1000,
        color: colors.light
      }
    }
  },
  components: {
    blockquote: {
      textAlign: 'left',
      position: 'relative',
      display: 'inline-block'
    },
    quote: {
      borderLeft: '1px solid ' + colors.primary,
      paddingLeft: 40,
      display: 'block',
      color: colors.primary,
      fontSize: '3.9em',
      lineHeight: 1.1,
      fontWeight: 'bold'
    },
    cite: {
      color: colors.light,
      display: 'block',
      clear: 'left',
      fontSize: '2em',
      marginTop: '1em'
    },
    content: {
      margin: 'auto',
      textAlign: 'center'
    },
    codePane: {
      pre: {
        margin: 'auto',
        fontSize: '1em',
        fontWeight: 'normal',
        fontFamily: fonts.tertiary,
        minWidth: '100%',
        maxWidth: 800
      },
      code: {
        textAlign: 'left',
        padding: 20,
        fontWeight: 'normal'
      }
    },
    code: {
      color: 'black',
      fontSize: '2.66em',
      fontFamily: fonts.tertiary,
      margin: '0.25em auto',
      backgroundColor: 'rgba(0,0,0,0.15)',
      padding: '0 10px',
      borderRadius: 3
    },
    heading: {
      h1: {
        color: colors.light,
        fontSize: '7.05em',
        fontFamily: fonts.segoe,
        lineHeight: 1,
        fontWeight: '300',
        margin: 0,
        zoom: 1
      },
      h2: {
        color: colors.secondary,
        fontSize: '5.88em',
        fontFamily: fonts.segoe,
        lineHeight: 1,
        fontWeight: '300',
        margin: 0
      },
      h3: {
        color: 'black',
        fontSize: '4.9em',
        fontFamily: fonts.segoe,
        lineHeight: 1,
        fontWeight: '300',
        margin: '0.5em auto'
      },
      h4: {
        color: 'black',
        fontSize: '3.82em',
        fontFamily: fonts.segoe,
        lineHeight: 1,
        fontWeight: '300',
        margin: '0.5em auto'
      },
      h5: {
        color: 'black',
        fontSize: '3.19em',
        fontFamily: fonts.segoe,
        lineHeight: 1.4,
        fontWeight: '300',
        margin: '0.5em auto'
      },
      h6: {
        color: 'black',
        fontSize: '2.44em',
        fontFamily: fonts.segoe,
        lineHeight: 1.4,
        fontWeight: '300',
        margin: '0.5em auto'
      }
    },
    image: {
      display: 'block',
      margin: '0.5em auto'
    },
    link: {
      textDecoration: 'none'
    },
    listItem: {
      fontSize: '2.96em',
      fontWeight: '500',
      marginBottom: '10px'
    },
    list: {
      textAlign: 'left',
      listStylePosition: 'inside',
      padding: 0
    },
    s: {
      strikethrough: {}
    },
    text: {
      color: 'black',
      fontSize: '2.66em',
      fontFamily: fonts.segoe,
      margin: '0.25em auto'
    }
  }
};
