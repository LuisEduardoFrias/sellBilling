import React, { useState, useEffect, CSSProperties } from "react";
import ReactDOM from "react-dom/client";
import Icon from '@mui/material/Icon';
import Draggable from 'react-draggable';

interface IToolProps {
  index: number,
  styleIcon: CSSProperties,
  icon: string,
  isInternal: boolean,
  componentName: string
}

export default function Tool(props: IToolProps): JSX.Element {

  const [component, setComponent] = useState<JSX.Element>(null);
  
  useEffect(()=>{
   const path : string = props.isInternal
    ? `../../pages/${props.componentName}`
    : `../../plugins/pages/${props.componentName}`;

   import(/* @vite-ignore */ `${path}`).then((component) => { 
     setComponent(React.createElement(component.default));
   });
   
  },[props.componentName])
  
  function handleClick(_component_: JSX.Element) {
    const root = document.querySelector('#root');
    
    const idIdentification :string = "component"+ props.componentName;
    
    const container = document.createElement('div');
    container.setAttribute("id",idIdentification);
    root.appendChild(container);
    
    const close = (id:string) => {
     const closeElement = document.querySelector(`#${id}`);
     
      if (root.contains(closeElement)) {
         root.removeChild(closeElement);
      }
    }
    
    const draggable : JSX.Element = (
        <div style={{
          border:'1px solid black', 
          borderRadius:'10px 10px',
          width: '80%',
          backgroundColor:'rgba(42,193,255,0.795)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding:'5px 5px',
            borderBottom: '1px solid black',
          }}>
            <div id="tittleContainee" style={{ width:
            '100%'}} onClick={(event) => event.stopPropagation()} >
              <h1>header</h1>
            </div>
            <button type="button" style={{border:'1px solid black',borderRadius:'15px 15px', display:'flex', justifyContent:
            'center', alignItems: 'center', width:'25px', height:'25px', backgroundColor:'rgba(0,0,0,0)'}}
            onClick={()=>close(idIdentification)} >
              <Icon>close</Icon>
            </button>
          </div>
          <div>
            {_component_}
          </div>
        </div>
    );
    
    const handleDragStart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();
    }
    
    ReactDOM.createRoot(container).render(
      <Draggable handle="#tittleContainee" onStart={handleDragStart}>
        {draggable}
      </Draggable>
    );
    
    // ReactDOM.createRoot(container).render(draggable);
  }

  return (
    <button type="button"  key={props.index} style={props.styleIcon} onClick={() => handleClick(component)}>
      <Icon>{props.icon}</Icon>
    </button>
  );
}