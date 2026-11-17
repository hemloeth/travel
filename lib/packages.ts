export type Pkg = {
  name: string;
  type: string;
  bucket: string;
  days: string;
  price: number;
  rating: number;
  img: string;
  blurb: string;
};

export const PACKAGES: Pkg[] = [
  {name:'Kashmir',type:'honeymoon',bucket:'8-14',days:'8 Days',price:1100,rating:5.0,img:'/design/2ea08199-da23-4ed6-b6dd-de4fe16123fb.png',blurb:'Srinagar, Gulmarg and scenic rides across the Himalayas.'},
  {name:'Andaman',type:'luxury',bucket:'4-7',days:'6 Days',price:3000,rating:5.0,img:'/design/a112c104-54c2-49ee-a657-ac4c3d4d33a4.png',blurb:'Overwater villas, house reefs and sunset dolphin cruises.'},
  {name:'Rishikesh',type:'adventure',bucket:'8-14',days:'8 Days',price:1223,rating:4.9,img:'/design/e96be50e-8926-4b62-93fd-85fedf0bc89e.png',blurb:'River rafting, bungee jumps and riverside camps on the Ganga.'},
  {name:'Agra',type:'family',bucket:'8-14',days:'8 Days',price:1200,rating:5.0,img:'/design/7bd6940e-298e-4cd5-adef-1b79d9d15428.png',blurb:'The Taj Mahal, Agra Fort and a Yamuna sunset.'},
  {name:'Mumbai',type:'group',bucket:'4-7',days:'5 Days',price:1230,rating:4.9,img:'/design/5f92219f-1432-435b-8e40-4bb5a7e97215.png',blurb:'Gateway of India, Marine Drive and nightlife with your crew.'},
  {name:'Varanasi',type:'budget',bucket:'4-7',days:'4 Days',price:1440,rating:5.0,img:'/design/aabb1aa3-4d1d-4cd8-b826-33a335cb454c.png',blurb:'Ghats, Ganga aarti and the riverfront at dawn.'},
  {name:'Manali',type:'adventure',bucket:'8-14',days:'9 Days',price:2000,rating:4.6,img:'/design/ff661ccc-9e48-4917-bab8-0a1475380e2c.png',blurb:'Solang Valley, Rohtang Pass and riverside kayaking.'},
  {name:'Delhi',type:'group',bucket:'1-3',days:'3 Days',price:1210,rating:4.0,img:'/design/cc1a07d4-c3b0-431b-871b-9cdcdec5e49e.png',blurb:'Old Delhi lanes, the skyline and late-night street food.'},
];

export const TRAVEL_TYPES = [
  {value:'honeymoon',label:'Honeymoon'},
  {value:'family',label:'Family'},
  {value:'adventure',label:'Adventure'},
  {value:'luxury',label:'Luxury'},
  {value:'budget',label:'Budget'},
  {value:'group',label:'Group'},
];

export const DURATIONS = [
  {value:'1-3',label:'1–3 Days'},
  {value:'4-7',label:'4–7 Days'},
  {value:'8-14',label:'8–14 Days'},
  {value:'15+',label:'15+ Days'},
];

export const TYPE_LABEL = Object.fromEntries(TRAVEL_TYPES.map(o=>[o.value,o.label]));
export const DUR_LABEL = Object.fromEntries(DURATIONS.map(o=>[o.value,o.label]));

export function filterPackages(type:string, duration:string): Pkg[] {
  return PACKAGES.filter(p=>(!type||p.type===type)&&(!duration||p.bucket===duration));
}
