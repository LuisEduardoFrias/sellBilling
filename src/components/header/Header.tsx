
import { lazy, CSSProperties } from "react";
import styled from "styled-components";
const Icon = lazy(()=> import('@mui/material/Icon'));

export interface ITools {
 icon: string,
 
}

export interface IHeaderProps {
 tools: ITools[],
 tittle: string,
 
}

const StyledIcon = styled(Icon)`
  width: 10p;
  height: 100%;
  background-color: red;
`;

 const styleTittle: CSSProperties = {
   color: 'rgb(37,51,234)',
   fontWeight: '900',
   fontSize: '25px',
   textAlign: 'center',
   fontTamily: 'borl',
 }

 const styleIcon: CSSProperties = {
  width: '50px',
  height: '100%',
  boxSizing: 'border-box',
  marginLeft: '5px',
  border: '1px solid blue',
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
   <div style={{backgroundColor: 'rgba(37,51,234,0.64)', width:'100%'}} >
    <h1 style={styleTittle} >{props.tittle}</h1>
   </div>
   <div style={iconsContainer} >
     { props.tools.map((tool:ITools, index:number) => 
      <div key={index} style={styleIcon} >
       <StyledIcon>{tool.icon}</StyledIcon>
      </div> ) }
   </div>
 </>
 )
}