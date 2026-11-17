import {TRAVEL_TYPES,DURATIONS} from '@/lib/packages';

const OPTION_STYLE = {color:'#194735'} as const;

function ModernSelect({name,placeholder,options,left}:{
  name:string;placeholder:string;options:{value:string;label:string}[];left:number;
}){
  return (
    <div className="figma-layer" style={{marginLeft:left,marginTop:610,zIndex:4}}>
      <span style={{position:'relative',display:'inline-flex',alignItems:'center'}}>
        <select
          name={name}
          aria-label={placeholder}
          defaultValue=""
          style={{
            appearance:'none',WebkitAppearance:'none',
            background:'rgba(18,38,30,0.42)',border:'1px solid rgba(232,223,200,0.45)',
            color:'#E8DFC8',borderRadius:999,padding:'8px 36px 8px 16px',
            fontFamily:'var(--poppins),sans-serif',fontSize:16,lineHeight:1.2,
            cursor:'pointer',outlineOffset:3,
          }}
        >
          <option value="" style={OPTION_STYLE}>{placeholder}</option>
          {options.map(o=><option key={o.value} value={o.value} style={OPTION_STYLE}>{o.label}</option>)}
        </select>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"
          style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',pointerEvents:'none'}}
        >
          <path d="M6 9l6 6 6-6" stroke="#E8DFC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
}

export default function PackageSearch(){
  return (
    <>
      <ModernSelect name="travelType" placeholder="Travel Type" options={TRAVEL_TYPES} left={540}/>
      <ModernSelect name="duration" placeholder="Duration" options={DURATIONS} left={783}/>
    </>
  );
}
