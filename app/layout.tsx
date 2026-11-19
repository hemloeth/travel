import type {Metadata, Viewport} from 'next';
import Script from 'next/script';
import {Poppins,Volkhov,Manrope,Yesteryear,Roboto} from 'next/font/google';
import './globals.css';
const poppins=Poppins({subsets:['latin'],weight:['300','400','500','600','700'],variable:'--poppins',display:'swap'});
const volkhov=Volkhov({subsets:['latin'],weight:['400','700'],variable:'--volkhov',display:'swap'});
const manrope=Manrope({subsets:['latin'],weight:['400','500','700'],variable:'--manrope',display:'swap'});
const yesteryear=Yesteryear({subsets:['latin'],weight:'400',variable:'--yesteryear',display:'swap'});
const roboto=Roboto({subsets:['latin'],weight:['400'],variable:'--roboto',display:'swap'});
export const metadata:Metadata={title:'Travel — Tour Booking',description:'Travel and tour booking website, implemented from the supplied Figma design.'};
export const viewport:Viewport={
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" className={`${poppins.variable} ${volkhov.variable} ${manrope.variable} ${yesteryear.variable} ${roboto.variable}`}><body><Script id="design-scale" strategy="beforeInteractive">{`(function(){var d=document.documentElement;var s=function(){if(window.innerWidth>1100){d.style.setProperty('--design-scale',String(Math.min(1,window.innerWidth/1920)))}else{d.style.setProperty('--design-scale','1')}};s();window.addEventListener('resize',s)})();`}</Script><a className="skip-link" href="#main">Skip to content</a><main id="main">{children}</main></body></html>}
