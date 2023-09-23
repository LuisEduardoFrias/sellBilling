
import { ICardProps } from './PluginNew';
import { useLocation } from 'react-router-dom';

const styleCard = {
 display:'grid',
 gridTemplateColumns: 'auto',
 gridTemplateRows: '280px auto 1fr',
 gridTemplateAreas: "'img' 'desc' 'use'",
 gridRowGap: '10px',
 padding: '0 3px 0 3px'
};

const styleImg = {
 width:'200px',
 height:'200px',
 display:'block', 
 margin:'auto'
 
};

const styleButton = {
 width:'100%',
 height:'30px',
 borderWidth:'0',
 backgroundColor:'rgb(60,206,249)',
 fontWeight:'900',
 borderBlock: '1px solid rgb(0,68,88)'
 
}

const styleTextName = {
 display:'block',
 textAlign:'center',
 width:'100%',
 fontSize: '40px',
 fontWeight: '900',
 
};

const styleSubTittle = {
 display:'block',
 textAlign:'center',
 width:'100%',
 fontSize: '20px',
 fontWeight: '900',
 
};

const styleCtImg = {
 gridArea: 'img',
 
};

const styleCtDesc = {
 gridArea: 'desc',
 overflow: 'auto'
};

const styleCtUse= {
 gridArea: 'use',
 overflow: 'auto'
 
};

export default function PluginDetail() {
 const location = useLocation();
 const obj = location.state as ICardProps;
 
 return (
  <div style={styleCard} >
    <div style={styleCtImg} >
      <img style={styleImg} src={obj.src} alt="Image del plugin" />
      <label style={styleTextName} >{obj.textName}</label>
      <button
      style={styleButton}
      >Install</button>
    </div>
    <div style={styleCtDesc} >
      <label style={styleSubTittle} >Description</label>
      <p>{obj.description}</p>
    </div>
    <div style={styleCtUse} >
      <label style={styleSubTittle} >Use</label>
      <p>{obj.use}</p>
    </div>
  </div>
 )
}