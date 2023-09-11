
import InternalComponentProps from '../interfaces/InternalComponentProps';

export default function InternalComponent(props : InternalComponentProps) : JSX.Element {
  // Lógica del componente interno
  return (
    <div>
      <h2>Componente Interno</h2>
        <span>{props.prop1}</span>
      {/* Contenido del componente interno */}
    </div>
  );
};
// Permite que otros plugins puedan extender el componente interno
export const extendInternalComponent = (props: InternalComponentProps): JSX.Element => {
  return (
      <div>
        <InternalComponent prop1={props.prop1} prop2={0o12} />
      </div>
    );
};