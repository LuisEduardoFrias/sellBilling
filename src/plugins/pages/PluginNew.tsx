
import Img from '../../components/img/img';

interface ICardProps {
 textName: string,
 src: string,
 Descriptio : string,
 Use: string,
}

const styleContainerPlugin = {
 padding: '15px 15px'
 
};

const styleContainerCard = {
 display:'flex', 
 flexWrap: 'wrap', 
 gap: '10px',
 padding: '10px'
 
};

const ListPlugins: ICardProps[] = [
 {
  textName: "calculator",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "excel",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "word",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "temaNigth",
  src: 'react.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "calculator",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "excel",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "word",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "temaNigth",
  src: 'react.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "calculator",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "excel",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "word",
  src: 'javaScript.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "temaNigth",
  src: 'react.png',
  Descriptio : 'string',
  Uso: 'string',
 },
 {
  textName: "font family arial",
  src: 'react.png',
  Descriptio : 'string',
  Uso: 'string',
 }
]

export default function PluginNew() : JSX.Element {
  return (
    <div style={styleContainerPlugin} >
      <h1 style={{
      textAlign:'center',
      margin: '5px 5px', 
      fontSize: '50px',
      fontWeight: 'bold',
       
      }} >Plugins</h1>
      <div style={styleContainerCard} >
        { ListPlugins.map((e,i)=> <Card textName={e.textName} src={e.src} Descriptio={e.Descriptio} use={e.use} /> ) }
      </div>
    </div>
  )
};

const styleTextName = {
 display:'block',
 textAlign:'center',
 width:'100%'
 
};

const styleCard = { 
 border:'1px solid rgba(98,157,208,0.1)', 
 borderRadius:'10px 10px', 
 boxShadow: '0 0 2px 0px rgba(98,157,208,1)',
 padding:'5px 5px',
 display:'inline-block',
 backgroundColor:'rgb(255,255,255)',
 backdropFilter: 'blur(10px)',
 width: '120px',
 
};
 
const styleImga = {
 width:'100px', 
 heigth:'100px', 
 display:'block', 
 margin:'auto'
 
};

function Card(props: ICardProps) {
 return (
  <button type='button' style={styleCard} onClick={(event:any)=> 
    { 
     alert('click')
      navigate('/' || "", { state: props  })
    }} >
    <img style={styleImga} src={props.src} alt="Image del plugin" />
    <label style={styleTextName} >{props.textName}</label>
  </button>

//     const location = useLocation();
//     const _obj = location.state as ISkill;

 )
}