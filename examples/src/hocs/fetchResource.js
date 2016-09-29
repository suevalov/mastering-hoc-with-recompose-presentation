import React from 'react';

const fetchResource = (get) => (WrappedComponent) => {
  
  return class extends React.Component {
    state = { 
        resource: null,
        hasLoaded: false,
        error: null
    };
    componentDidMount() {
      get(this.props)
        .then(
          resource => this.setState({ resource, hasLoaded: true }),
          error => this.setState({ error, hasLoaded: false })
        );
    }
    render() {
      const { resource } = this.state;
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

}

export default fetchResource;