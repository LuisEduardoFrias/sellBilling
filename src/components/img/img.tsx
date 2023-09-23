import { useEffect, useState, lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../ld_dual_ring/ld_dual_ring"));

interface IImgProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

export default function Img(img: IImgProps) {
  const styles : string = img.style ?? {};
  const className : CSSProperties = img.className ?? "";
  
  return (
    <Suspense fallback={<LdDualRing error={false} />} >
      <img className={className} src={img.src} alt={img.alt} style={styles}/>
    </Suspense>
  );
}