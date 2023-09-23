
import { lazy, CSSProperties, useEffect, useState } from "react";
import routes from '../../routes.json';

const Outlet = lazy(()=> import("react-router-dom").then(module => ({ default: module.Outlet})));

const Icon = lazy(()=> import('@mui/material/Icon'));

const Header = lazy(()=> import("../header/Header"));
import { ITools, option } from "../header/Header";

const NavBar = lazy(()=> import( '../navbar/navbar'));
import { IOption } from '../navbar/navbar';

import './dashboard.css';

interface IDashBoard {
 layoutCss?: CSSProperties;
 asideCss?: CSSProperties;
 headerCss?: CSSProperties;
 mainCss?: CSSProperties;
}

const tools: ITools[] = [];

const layoutCss = {};
const headerCss = {backgroundColor:'rgb(0,142,184)'};
const asideCss  = {};
const mainCss   = {};

let isShowMenu = false;
const ShowMenu = () => {

  if(!isShowMenu) {
    
    Select("aside").css(`
      display: inline-block;
    `);
    
    Select("#layout").css(`
      grid-template-areas: '_header _header' '_aside _main';
    `);
    
    isShowMenu = true;
  } 
  else {
    Select("#layout").css(`
      grid-template-areas: '_header _header' '_main _main';
    `);
    
    Select("aside").css(`
      display: none;
    `);
    
    isShowMenu = false;
  }
};

const SandwishMenu = {
   width: '30px',
   height: '30px',
   border: '0px solid transparent',
   backgroundColor: 'transparent',
}

interface IRoute {
  name: string,
  path: string,
  isInternal: bool,
  icon: string,
  isLoad: bool,
  sub: object
}


export default function DashBoard(props:IDashBoard) : JSX.Element {
 
 const [menus, setMenus] = useState<IOption[]>([]);
 const [userMenu, setUserMenu] = useState<option[]>([]);
 const [tools, setTools] = useState<ITools[]>([]);

 const _headerCss = props.headerCss ?? headerCss;
 const _asideCss  = props.asideCss  ?? asideCss;
 const _layoutCss = props.layoutCss ?? layoutCss;
 const _mainCss   = props.mainCss   ?? mainCss;
 
 useEffect(() => {
   routes.map((route: IRoute) => {
    if(!route?.isTool && !route?.userMenu)
     setMenus(prevChildren => [...prevChildren,  {
       name: route.name,
       icon: route.icon,
       href: route.path,
       isLoad: route.isLoad,
       sub: route.sub
     }])
    if(route?.userMenu === true)
      setUserMenu(prev => [...prev, {
       name: route.name,
       path: route.path,
      }])
    if(route?.isTool === true)
      setTools(prev => [...prev, {
       icon: route.icon,
       isInternal: route.isInternal,
       componentName: route.name
      }])
   })
 }, []);
 
  return (
   <div id="layout" style={_layoutCss} >
    <header id="header" style={_headerCss} >
     <button type="button" style={SandwishMenu} id="menuIcon" onClick={ShowMenu} >
       <Icon>menu</Icon>
     </button>
     <Header tools={tools} userMenu={userMenu} tittle={"EComers"} />
    </header>
    <aside id="aside" style={_asideCss} >
     <NavBar menus={menus} />
    </aside>
    <main id="main" style={_mainCss} >
     <Outlet />
    </main>
   </div>
  );
}