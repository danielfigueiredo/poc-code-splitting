import * as React from 'react';

export class Bundle extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public async componentWillMount() {
    const { component } = await this.props.bundleWillLoad();
    this.setState({ component });
  }

  public render() {
    return this.state.component
      ? this.props.bundleDidLoad(this.state.component)
      : null;
  }
}
