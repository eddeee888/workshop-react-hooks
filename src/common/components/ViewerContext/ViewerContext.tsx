import React from 'react';

export interface Viewer {
  email: string;
}

export type SetViewerFn = (viewer: Viewer) => void;
export type ClearViewerFn = () => void;

interface ContextProps {
  children: React.ReactNode;
}

interface ContextState {
  viewer: Viewer | null;
}

interface ContextFunctions {
  setViewer: SetViewerFn;
  clearViewer: ClearViewerFn;
}

type ContextVariables = ContextState & ContextFunctions;

const ViewerContext = React.createContext<ContextVariables>({
  viewer: null,
  setViewer: () => {},
  clearViewer: () => {}
});

const ViewerConsumer = ViewerContext.Consumer;
const Provider = ViewerContext.Provider;

class ViewerProvider extends React.Component<ContextProps, ContextState> {
  state: ContextState = {
    viewer: null
  };
  render() {
    return (
      <Provider
        value={{
          viewer: this.state.viewer,
          setViewer: this.setViewer,
          clearViewer: this.clearViewer
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  setViewer: SetViewerFn = viewer => {
    this.setState({
      viewer
    });
  }

  clearViewer: ClearViewerFn = () => {
    this.setState({
      viewer: null
    });
  }
}

export default ViewerContext;
export { ViewerProvider, ViewerConsumer };
