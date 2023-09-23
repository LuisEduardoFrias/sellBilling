
import { lazy, CSSProperties } from "react";
import styled from "styled-components";
import { option } from '../userbutton/UserButton';

const Icon = lazy(()=> import('@mui/material/Icon'));
const Tool = lazy(()=> import('../tool/Tool'));
const UserButton = lazy(()=> import('../userbutton/UserButton'));

export interface ITools {
 icon: string,
 isInternal: bool,
 componentName: string
}

export interface IHeaderProps {
 tools: ITools[],
 tittle: string,
 user: string,
 userMenu: option[],
 
}

const StyledIcon = styled(Icon)`
  width: 10p;
  height: 100%;
  
`;

 const styleTittle: CSSProperties = {
   color: 'rgb(37,51,24)',
   fontWeight: '900',
   fontSize: '25px',
   textAlign: 'center',
   fontTamily: 'arial',
 }

 const styleIcon: CSSProperties = {
  width: '30px',
  height: '100%',
  boxSizing: 'border-box',
  float: 'rigth',
  backgroundColor: 'rgba(0,0,0,0)',
  borderWidth: '0',
  marginLeft: '5px',
 };

 const iconsContainer: CSSProperties = {
  minWidth: '150px',
  maxWidth: '150px',
  display: 'flex',
  overflowX: 'scroll',
 }

export default function Header(props:IHeaderProps) :JSX.Element {
 return (
 <>
   <div style={{ width:'100%'}} >
    <h1 style={styleTittle} >{props.tittle}</h1>
   </div>
   <div style={iconsContainer} >
     { props.tools.map((tool:ITools, index:number) => <Tool 
       key={index}
       index={index}
       icon={tool.icon}
       styleIcon={styleIcon}
       componentName={tool.componentName}
       isInternal={tool.isInternal} /> ) }
   </div>
   <UserButton UserImg={props.user} userMenu={props.userMenu} />
 </>
 )
}