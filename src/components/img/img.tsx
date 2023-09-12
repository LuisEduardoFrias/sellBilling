import { useEffect, useState, lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../ld_dual_ring/ld_dual_ring"));

interface IImgProps {
  src: string;
  alt: string;
  className?: string;
  styles?: CSSProperties;
}

export default function Img(img: IImgProps) {
  const styles : string = img.styles ?? {};
  const className : CSSProperties = img.className ?? "";
  
  const [imageUrl, setImageUrl] = useState("#");
  
  useEffect(() => {
   if(img.src === "") {
     if (img.src.search("http") === -1) {
       import(/* @vite-ignore */ `/assets/${img.src}`).then((imageModule) => setImageUrl(imageModule.default  )).catch((error) => console.error(`Error loading   image: ${error}`));
     } else {
      setImageUrl(img.src);
     }
   }
  }, [img.src]);

  return (
    <Suspense fallback={<LdDualRing error={false} />} >
      <img className={className} src={imageUrl} alt={img.alt} style={styles}/>
    </Suspense>
  );
}