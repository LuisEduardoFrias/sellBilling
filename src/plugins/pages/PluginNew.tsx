
import Img from '../../components/img/img';
import { useNavigate } from 'react-router-dom';

export interface ICardProps {
 textName: string,
 src: string,
 description : string,
 use: string,
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
  tpextName: "calculator",
  src: 'javaScript.png',
  description : `¡Con nuestro increíble plugin de calculadora, podrás realizar
  cálculos matemáticos de forma rápida y sencilla directamente desde la app!
  
  Con una interfaz intuitiva y amigable, nuestros usuarios podrán realizar operaciones
  básicas como sumar, restar, multiplicar y dividir. Además, nuestro plugin de calculadora es totalmente personalizable. ¡No esperes más y agrega esta poderosa
  herramienta a tu app para facilitar los cálculos de tus usuarios!`,
  use: `Imagina que tienes unos calculos de matemáticas y quieres realizar los cálculos en línea sin tener que abandonar la app. Con nuestro
  plugin de calculadora, puedes agregar fácilmente una sección de cálculo en
  cada artículo o página relacionada con matemáticas. Por ejemplo, si estás
  explicando cómo resolver una ecuación lineal, puedes incluir la calculadora al
  final del artículo para que tus lectores puedan ingresar los valores de la
  ecuación y obtener la solución de manera instantánea.

Además, si tienes una tienda en línea que vende productos relacionados con matemáticas, puedes utilizar el plugin de calculadora para permitir que tus clientes realicen cálculos rápidos para determinar descuentos, impuestos o incluso el costo total de su carrito de compras.

Otro ejemplo de uso sería en una página de servicios financieros, donde tus clientes pueden utilizar la calculadora para hacer cálculos de inversiones, préstamos o intereses.

En resumen, el uso de nuestro plugin de calculadora es muy versátil y se adapta a diferentes tipos de sitios web y necesidades. ¡Agrega esta funcionalidad a tu sitio y brinda a tus visitantes una herramienta útil y conveniente para realizar cálculos matemáticos en línea!`,
 },
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
        { ListPlugins.map((e,i)=> <Card textName={e.textName} src={e.src} description={e.description} use={e.use} /> ) }
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
 height:'150px'
 
};
 
const styleImg = {
 width:'100px', 
 height:'100px', 
 display:'block', 
 margin:'auto'
 
};

function Card(props: ICardProps) {
 const navigate = useNavigate();
 
 return (
  <button type='button' style={styleCard} onClick={(event:any)=> 
    { 
      navigate('/plugindetail' || "", { state: props })
    }} >
    <Img style={styleImg} src={props.src} alt="Image del plugin" />
    <label style={styleTextName} >{props.textName}</label>
  </button>
 )
}