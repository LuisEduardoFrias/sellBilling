import { lazy, CSSProperties, useEffect, useState } from "react";
import routes from '../../routes.json';

const Outlet = lazy(()=> import("react-router-dom").then(module => ({ default: module.Outlet})));

const Icon = lazy(()=> import('@mui/material/Icon'));

const Header = lazy(()=> import("../header/Header"));
import { ITools } from "../header/Header";

const NavBar = lazy(()=> import( '../navbar/navbar'));
import { IOption } from '../navbar/navbar';

import './dashboard.css';

interface IDashBoard {
 layoutCss?: CSSProperties;
 asideCss?: CSSProperties;
 headerCss?: CSSProperties;
 mainCss?: CSSProperties;
}

// let menus : IOption[] = [
//   {
//     name:"Home",
//     icon:"home",
//     href:"/",
//     isLoad: false,
//     sub: []
//   },
//   {
//     name:"Contact",
//     href: "/contact",
//     icon:"checklist_rtl",
//     isLoad: false,
//     sub: []
//   },
//   {
//     name:"About",
//     icon:"folder_copy",
//     href:"/about",
//     isLoad: false,
//     sub: []
//   }
// ]

const tools: ITools[] = [
 {icon:"more", isInternal: true, componentName: "Home" },
 {icon:"more", isInternal: true, componentName: "About"},
 {icon:"supervised_user_circle", isInternal: true, componentName: "Contact"},
 {icon:"more", isInternal: true, componentName: "Home" },
 {icon:"more", isInternal: true, componentName: "About"},
 {icon:"supervised_user_circle", isInternal: true, componentName: "Contact"},
 {icon:"more", isInternal: true, componentName: "Home" },
 {icon:"more", isInternal: true, componentName: "About"},
 {icon:"supervised_user_circle", isInternal: true, componentName: "Contact"},
 {icon:"more", isInternal: true, componentName: "Home" },
 {icon:"more", isInternal: true, componentName: "About"},
 {icon:"supervised_user_circle", isInternal: true, componentName: "Contact"},

];

export default function DashBoard(props:IDashBoard) : JSX.Element {
 
 const [menus, setMenus] = useState<IOption[]>([]);
 
 useEffect(() => {
   routes.map((route: _route) => {
     setMenus(prevChildren => [...prevChildren,  {
       name: route.name,
       icon: route.icon,
       href: route.path,
       isLoad: route.isLoad,
       sub: route.sub
     }])
   })
 }, []);
 
  return (
   <div id="layout" style={props.layoutCss} >
    <aside style={props.asideCss} >
     <NavBar menus={menus} />
    </aside>
    <header style={props.headerCss} >
     <a href="#" id="menuIcon" ><Icon>menu</Icon></a>
     <Header tools={tools} tittle={"EComers"} />
    </header>
    <main style={props.mainCss} >
     <Outlet />
    </main>
   </div>
  );
}