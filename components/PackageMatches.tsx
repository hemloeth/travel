import Link from 'next/link';
import {TYPE_LABEL,DUR_LABEL,type Pkg} from '@/lib/packages';

export default function PackageMatches({matches,type,duration}:{
  matches:Pkg[];type:string;duration:string;
}){
  const filters=[type&&TYPE_LABEL[type],duration&&DUR_LABEL[duration]].filter(Boolean).join(' · ');
  return (
    <section
      aria-label="Matching packages"
      style={{
        width:'100%',maxWidth:1920,boxSizing:'border-box',background:'#E8DFC8',color:'#194735',
        padding:'28px clamp(16px,4vw,320px) 32px',borderBottom:'1px solid rgba(25,71,53,0.18)',
      }}
    >
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:24,marginBottom:16,flexWrap:'wrap'}}>
        <div>
          <p style={{margin:0,fontSize:11,letterSpacing:2.2,textTransform:'uppercase',fontWeight:700,color:'#EE4129'}}>Matches for you</p>
          <h2 style={{margin:'4px 0 0',fontFamily:'var(--volkhov),serif',fontWeight:700,fontSize:34,lineHeight:1.15}}>
            {matches.length>0
              ? `${matches.length} ${matches.length===1?'package':'packages'} — ${filters}`
              : `No packages match ${filters}`}
          </h2>
        </div>
        <Link href="/packages" style={{flex:'none',fontSize:12,letterSpacing:1.6,textTransform:'uppercase',fontWeight:700,color:'#194735',border:'1.5px solid rgba(25,71,53,0.4)',borderRadius:999,padding:'10px 18px',textDecoration:'none'}}>
          Clear filters
        </Link>
      </div>
      {matches.length===0 ? (
        <p style={{margin:0,fontSize:15,opacity:0.8}}>Nothing fits that combination yet — try another travel type or a wider duration.</p>
      ) : (
        <div className="package-matches-grid" style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:14}}>
          {matches.map(p=>(
            <article
              key={p.name}
              style={{
                display:'flex',gap:16,alignItems:'center',background:'rgba(255,255,255,0.55)',
                border:'1px solid rgba(25,71,53,0.14)',borderRadius:14,padding:12,
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                width={148}
                height={110}
                style={{width:148,height:110,objectFit:'cover',borderRadius:10,flex:'none'}}
              />
              <div style={{minWidth:0,flex:1}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
                  <h3 style={{margin:0,fontFamily:'var(--volkhov),serif',fontWeight:700,fontSize:21,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p.name}</h3>
                  <p style={{margin:0,fontWeight:700,fontSize:21,color:'#EE4129',whiteSpace:'nowrap'}}>{'₹'+p.price.toLocaleString('en-IN')}</p>
                </div>
                <p style={{margin:'4px 0 6px',fontSize:12,display:'flex',gap:10,alignItems:'center',flexWrap:'wrap'}}>
                  <span style={{background:'#EE4129',color:'#E8DFC8',borderRadius:999,padding:'2px 10px',fontSize:10.5,letterSpacing:0.8,textTransform:'uppercase',fontWeight:600}}>{TYPE_LABEL[p.type]}</span>
                  <span style={{opacity:0.75}}>{p.days} · {DUR_LABEL[p.bucket]}</span>
                  <span style={{color:'#C9A227',fontWeight:700}}>★ {p.rating.toFixed(1)}</span>
                </p>
                <p style={{margin:0,fontSize:12.5,lineHeight:1.45,opacity:0.8,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p.blurb}</p>
                <Link href="/tour/information" style={{display:'inline-block',marginTop:6,fontSize:11.5,letterSpacing:1.4,textTransform:'uppercase',fontWeight:700,color:'#EE4129',textDecoration:'none'}}>
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
      <p style={{margin:'12px 2px 0',fontSize:10.5,opacity:0.55,letterSpacing:0.2}}>Prices in ₹, per person. Full itineraries on each package page.</p>
    </section>
  );
}
