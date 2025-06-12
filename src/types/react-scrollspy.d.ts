declare module 'react-scrollspy' {
  import * as React from 'react';

  export interface ScrollspyProps {
    items: string[];
    currentClassName?: string;
    componentTag?: string | React.ElementType;
    offset?: number;
    children?: React.ReactNode;
  }

  const Scrollspy: React.FC<ScrollspyProps>;

  export default Scrollspy;
}
