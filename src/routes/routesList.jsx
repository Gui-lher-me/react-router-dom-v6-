import { Page1 } from '../pages/Page1';
import { Page2 } from '../pages/Page2';
import { Page3 } from '../pages/Page3';
import { Page4 } from '../pages/Page4';

import { SubPage1 } from '../pages/SubPage1';
import { SubPage2 } from '../pages/SubPage2';

export const routes = [
  { url: 'page1', path: 'page1', element: <Page1 /> },
  { url: 'page2', path: 'page2', element: <Page2 /> },
  { url: 'page3', path: 'page3', element: <Page3 /> },
  { url: 'page4', path: 'page4', element: <Page4 /> },
];

export const subRoutes = [
  { url: 'sub-page1', path: 'sub-page1', element: <SubPage1 /> },
  { url: 'sub-page2', path: 'sub-page2', element: <SubPage2 /> },
];
