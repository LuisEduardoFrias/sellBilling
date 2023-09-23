
const styleContainer: CSSProperties = {
 display:'flex',
 flexDirection :'row',
 gap:'2px',
 padding:'2px',
}

const styleColumn: CSSProperties = {
 display:'flex',
 flexDirection :'column',
 gap:'2px',
 padding:'2px',
}

const styleNB: CSSProperties = {
 width: '25px',
 height: '25px',
 fontWeight: '900',
 color: 'blue',
 backgroundColor: 'rgb(124,124,124)'
}

export default function Calculator() {
 return(
  <div style={{width:'128px',border:'1px solid gray',
  margin:'4px',paddingTop:'4px'}} >
    <input placeholder="0" style={{width:'120px', marginLeft:'4px'}} />
    <div style={styleContainer}>
      <div style={styleColumn}>
        <button style={styleNB} type="button">1</button> 
        <button style={styleNB} type="button">4</button> 
        <button style={styleNB} type="button">7</button> 
        <button style={styleNB} type="button">0</button> 
      </div>
      <div style={styleColumn}>
        <button style={styleNB} type="button">2</button> 
        <button style={styleNB} type="button">5</button> 
        <button style={styleNB} type="button">8</button> 
        <button style={styleNB} type="button">=</button> 
      </div>
      <div style={styleColumn}>
        <button style={styleNB} type="button">3</button> 
        <button style={styleNB} type="button">6</button> 
        <button style={styleNB} type="button">9</button> 
        <button style={styleNB} type="button">.</button> 
      </div>
      <div style={styleColumn}>
        <button style={styleNB} type="button">+</button> 
        <button style={styleNB} type="button">-</button> 
        <button style={styleNB} type="button">*</button> 
        <button style={styleNB} type="button">÷</button> 
      </div>
    </div>
  </div>)
}