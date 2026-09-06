import Image from 'next/image';
import Link from 'next/link';

export function Logo({compact=false,className=''}:{compact?:boolean;className?:string}){
  return <Link href="/" className={`brand ${className}`} aria-label="FahadDev home">
    <Image src="/brand/fahaddev-mark.png" alt="" width={38} height={38} priority />
    {!compact && <span>Fahad<span>Dev</span></span>}
  </Link>;
}
