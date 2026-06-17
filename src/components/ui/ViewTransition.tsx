import { Fragment, ReactNode } from 'react';

interface ViewTransitionProps {
  children: ReactNode;
  name?: string;
}

export default function ViewTransition({ children }: ViewTransitionProps) {
  return <Fragment>{children}</Fragment>;
}
