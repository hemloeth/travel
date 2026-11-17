import {Suspense} from 'react';
import DesignExperience from '@/components/DesignExperience';
import ArchiveDesign from '@/components/figma/ArchiveDesign';
import PackageMatches from '@/components/PackageMatches';
import {filterPackages} from '@/lib/packages';

async function Matches({
  searchParams,
}: {
  searchParams: Promise<{[key:string]:string|string[]|undefined}>;
}){
  const params=await searchParams;
  const travelType=typeof params.travelType==='string'?params.travelType:'';
  const duration=typeof params.duration==='string'?params.duration:'';
  const filtered=Boolean(travelType||duration);
  if(!filtered)return null;
  return <PackageMatches matches={filterPackages(travelType,duration)} type={travelType} duration={duration}/>;
}

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{[key:string]:string|string[]|undefined}>;
}){
  return (
    <DesignExperience>
      <Suspense fallback={null}>
        <Matches searchParams={searchParams}/>
      </Suspense>
      <ArchiveDesign/>
    </DesignExperience>
  );
}
