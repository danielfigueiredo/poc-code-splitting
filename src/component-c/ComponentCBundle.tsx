import * as React from 'react';
import { Bundle } from '../Bundle';

export const ComponentCBundle = () => (
  <Bundle
    bundleWillLoad={async () => {
      const { ComponentC } = await import(/* webpackChunkName: "component-c" */'./ComponentC');
      return { component: ComponentC };
    }}
    bundleDidLoad={(Component: any) => <Component />}
  />
);