import { lazy, CSSProperties } from "react";

const Outlet = lazy(()=> import("react-router-dom").then(module => ({ default: module.Outlet})));

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

let menus : IOption[] = [
  {
    name:"Home",
    icon:"home",
    href:"/",
    isLoad: false,
    sub: []
  },
  {
    name:"Contact",
    href: "/contact",
    icon:"checklist_rtl",
    isLoad: false,
    sub: []
  },
  {
    name:"About",
    icon:"folder_copy",
    href:"/about",
    isLoad: false,
    sub: []
  }
]

const tools: ITools[] = [
 {icon:"more"},
 {icon:"more"},
 {icon:"supervised_user_circle"},
 {icon:"more"},
 {icon:"more"},
 {icon:"supervised_user_circle"},
 {icon:"more"},
 {icon:"more"},
 {icon:"supervised_user_circle"},
 {icon:"more"},
 {icon:"more"},
 {icon:"supervised_user_circle"},
 {icon:"more"},
 {icon:"supervised_user_circle"}
];

export default function DashBoard(props:IDashBoard) : JSX.Element {
  return (
   <div id="layout" style={props.layoutCss} >
    <aside style={props.asideCss} >
     <NavBar menus={menus} />
    </aside>
    <header style={props.headerCss} > 
      <Header tools={tools} tittle={"EComers"} />
    </header>
    <main style={props.mainCss} >
     <Outlet />
    </main>
   </div>
  );
}