
import { lazy, CSSProperties } from "react";
const Img = lazy(()=> import('../img/img'));
import { Link } from "react-router-dom";
import Icon from '@mui/material/Icon';

import "./navbar.css";

export interface IOption {
  name: string;
  icon?: string;
  href: string;
  isLoad: boolean;
  sub: IOption[]
}

interface INavBarProps {
  menus: IOption[]
}

const headerMenu = {
 height:'60px',
 display: 'flex',
 flexDirection: 'column'
}

export default function NavBar(props: INavBarProps) : JSX.Element {
  return (
    <nav id="contontainer-menu">
      <div style={headerMenu} >
        <Img src={"#"} alt={"x img"} className={"cla"} />
        <span>text</span>
      </div>
      <ul id="first-list">
        { props.menus.map((e: IOption, i: number) : JSX.Element => e.sub.length
        !== 0 ? OptionSub(e, i) : Option(e, `option-${i}`, i) )}
      </ul>
    </nav>
  );
};

//----------------------------------

const openSubMenu = (classElement: string) : void => {

  if(classElement) {
    const ele: any = document.querySelector(`#${classElement}`);
    const icon: any = document.querySelector(`#icon-${classElement}`);
  
    ele.style.display !== "none" ?
    icon.innerHTML = "chevron_right" :
    icon.innerHTML = "expand_more";
  
    ele.style.display === "none" ?
    ele.style.display = "block" :
    closeSubMenu(classElement);
  }
}

const closeSubMenu = (classElement: string) : void => {
  if(classElement) {
    const ele: any = document.querySelector(`#${classElement}`);
  
    if(ele) ele.style.display = "none";
  }
}

//----------------------------------

function a(menuOp: IOption, subMenuList: string, i: number ) : JSX.Element {
    return (
    <li key={i} id="menu-item" className="li-item" onClick={() => closeSubMenu(subMenuList)} >
      <a href={menuOp.href} className={ menuOp.icon ? "links" : "link-item" }>
        { menuOp.icon ? 
        <span className="menu-icon">
        <Icon>{menuOp.icon}</Icon> 
        </span>    
        : null }
        <span className="menu-title">{menuOp.name}</span>
      </a>
    </li>)
}

function link(menuOp: IOption, subMenuList: string, i: number) : JSX.Element {
  return (
  <li key={i} id="menu-item" className="li-item" onClick={_ => closeSubMenu(subMenuList)} >
    <Link to={menuOp.href} className={ menuOp.icon ? "links" : "link-item" }>
      { menuOp.icon ? 
      <span className="menu-icon">
      <Icon>{menuOp.icon}</Icon>
      </span>    
      : null }
      <span className="menu-title">{menuOp.name}</span>
    </Link>
  </li>)
}

function Option(menuOp: IOption, subMenuList: string, i: number) : JSX.Element {
  return menuOp.isLoad ? a(menuOp, subMenuList, i) : link(menuOp, subMenuList, i);
}

function OptionSub(menuOp: IOption, index : number) : JSX.Element {

 const subMenuList: string = 
    `sub-menu-${menuOp.name}-${index}`.replace(/\s+/g, '')  
 
  return( 
  <li key={index} id="menu-item" >
  
    <div className="first-option-menu" onClick={_ => openSubMenu(subMenuList)} >
    
      <div className="container-tittle-icon" >
      
        { menuOp.icon ? 
          <span className="menu-icon">
          <Icon>{menuOp.icon}</Icon>
          </span>    
        : null }
       
        <span className="menu-title" >{menuOp.name}</span>
      </div>
      
      <Icon id={`icon-${subMenuList}`}>chevron_right</Icon> 

    </div>
    
    <div style={{display:"none"}} id={subMenuList} className="sub-menu-list slide-rotate-ver-left">
    
      <ul className="secondari-list" >
        { menuOp.sub?.map( (ele: IOption, i: number) : JSX.Element =>
        ele.sub.length !== 0 ? OptionSub(ele, i) : Option(ele, subMenuList, i) )}
      </ul>
      
      <hr />
      
    </div>
    
  </li>)
}