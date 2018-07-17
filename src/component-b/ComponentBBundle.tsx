import * as React from 'react';
import { Bundle } from '../Bundle';

export const ComponentBBundle = () => (
  <Bundle
    bundleWillLoad={async () => {
      const { ComponentB } = await import(/* webpackChunkName: "component-b" */'./ComponentB');
      return { component: ComponentB };
    }}
    bundleDidLoad={(Component: any) => <Component />}
  />
);