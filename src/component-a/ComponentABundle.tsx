import * as React from 'react';
import { Bundle } from '../Bundle';

export const ComponentABundle = () => (
  <Bundle
    bundleWillLoad={async () => {
      const { ComponentA } = await import(/* webpackChunkName: "component-a" */'./ComponentA');
      return { component: ComponentA };
    }}
    bundleDidLoad={(Component: any) => <Component />}
  />
);