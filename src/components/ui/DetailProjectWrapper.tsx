'use client';

import { ReactNode } from 'react';

interface DetailProjectWrapperProps {
  children: ReactNode;
}

export default function DetailProjectWrapper({
  children,
}: DetailProjectWrapperProps) {
  return <div className='project-detail-page pt-12'>{children}</div>;
}
