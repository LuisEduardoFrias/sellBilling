import { useState, useEffect, lazy, Suspense } from 'react';
import routes from '../routes.json';

const DashBoard = lazy(()=> import("../components/dashboard/DashBoard"));
const LdDualRing = lazy(()=> import("../components/ld_dual_ring/ld_dual_ring"));
const NotFound = lazy(()=> import("../pages/NotFound"));

import { createBrowserRouter, RouterProvider } from "react-router-dom";

interface _route {
 name: string;
 path: string;
 isInternal: boolean
}

interface ChildrenElement {
  path: string;
  element: JSX.Element;
}

export default function Router(): JSX.Element {
  const [children, setChildren] = useState<ChildrenElement[]>([]);
  
  useEffect(() => {
    routes.map((route: _route) => {
      const path = route.isInternal
        ? `../pages/${route.name}`
        : `./plugins/pages/${route.name}`;

      import(/* @vite-ignore */ path).then(component =>
        setChildren(prevChildren => [...prevChildren, { path: route.path,
        element: <component.default /> }]));
    });
  }, []);
  
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <DashBoard />,
        errorElement: <NotFound />,
        children: children
      },
    ]
  );
  
  return (
    <Suspense fallback={<LdDualRing error={false} />} >
      { 
      children.length > 0 ? 
      <RouterProvider router={router} /> : 
      <LdDualRing error={false} />
      }
    </Suspense>);
}