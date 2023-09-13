
import { lazy, CSSProperties } from "react";
import styled from "styled-components";
const Icon = lazy(()=> import('@mui/material/Icon'));
const Img = lazy(()=> import('../img/img'));
const Tool = lazy(()=> import('../tool/Tool'));

export interface ITools {
 icon: string,
 isInternal: bool,
 componentName: string
}

export interface IHeaderProps {
 tools: ITools[],
 tittle: string,
 user: string,
}

const StyledIcon = styled(Icon)`
  width: 10p;
  height: 100%;
  background-color: red;
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
 
 const styleImg: CSSProperties = {
  border:'1px solid transparent', 
  borderRadius:'20px 20px'
 }
 
 const styleContenImg: CSSProperties = {
  border:'1px solid transparent', 
  width: '30px',
  height: '30px',
  borderRadius:'20px 20px',
  backgroundColor:'green',
  marginLeft:'5px'
 }

export default function Header(props:IHeaderProps) :JSX.Element {
 
 return (
 <>
   <div style={{backgroundColor: 'rgba(37,51,234,0.64)', width:'100%'}} >
    <h1 style={styleTittle} >{props.tittle}</h1>
   </div>
   <div style={iconsContainer} >
     { props.tools.map((tool:ITools, index:number) => <Tool key={index}
     index={index} icon={tool.icon} styleIcon={styleIcon}
     componentName={tool.componentName} isInternal={tool.isInternal} /> ) }
   </div>
   <button type="button" style={styleContenImg} >
     <Img src={props.user} alt="user" style={styleImg} />
   </button>
 </>
 )
}