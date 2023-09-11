
interface ILdDualRingProps {
  error: boolean;
  errorMessage?: string;
}

const errorlabel = {
  color: 'red',
  fontSize: '18px',
}

const ldDualRing = {
  margin: 'auto',
  width: '35px',
  height: '35px',
  marginBottom: '10px',
  borderRadius: '50%',
  border: '6px double #32fffe',
  boxShadow: '0 0 2px 1px #1adae8 inset, 0 0 2px 1px #1adae8',
  borderColor: '#32fffe transparent',
  animation: 'ld-dual-ring 1.2s linear infinite',
};

const keyframes = `@keyframes ld-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

export default function LdDualRing(props: ILdDualRingProps) {
  return (
  <div style={{margin: 'auto'}} >
    { !props.error ? 
      ( <><div style={ldDualRing}></div>
          <style>{keyframes}</style></> ) : 
      ( <label style={errorlabel} >{props?.errorMessage}</label> )
    }
  </div>
  )
}