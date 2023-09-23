
import { Link } from "react-router-dom";
import { lazy, CSSProperties } from "react";
const Img = lazy(()=> import('../img/img'));

export type option = {
 name: string,
 url: string,
 
}

interface IUser {
 UserImg: string,
 userMenu: option[],
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
  marginLeft:'5px'
 }

let isShowMenu = false;
const showUseMenu = () => {
   if(!isShowMenu) {
    
    Select('#useMenu').css(`
      width: 100px;
      height: 130px;
      display: block;
      border: 1px solid white;
      border-radius: 5px 5px;
      backgroudColor: white;
      box-shadow: -1px 0px 5px 0px rgb(171,171,171);
      position: absolute;
      right: 0.1%;
      top: 60px`);
    
    isShowMenu = true;
  } 
  else {
    Select('#useMenu').css(`display: none;`)
    
    isShowMenu = false;
  }
};

export default function UserButton(props: IUser) {
 console.log(props.userMenu)
 return (
 <>
   <button type="button" onClick={showUseMenu} style={styleContenImg} >
     <Img src={props.UserImg} alt="user" style={styleImg} />
   </button>
   <div id="useMenu" style={{
     display:'none',
     padding:'2px 2px',}} >
     <ul style={{
       listStyle: 'none',
       listStylePosition: 'absolute',
       listStyleType: 'none',
       
     }} >{
      props.userMenu.map((option: option, index: number)=>
        <li key={index}>
          <Link to={option.url}>{option.name}</Link>
        </li>)
     }</ul>
   </div>
 </>
  )
}