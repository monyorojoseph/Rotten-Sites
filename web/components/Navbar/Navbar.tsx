import Link from 'next/link';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import Auth from './Auth';
import { AiFillStar } from 'react-icons/ai'

export default function Navbar(){
    // const id = process.env.ne
    return(
        <nav className="bg-Jet text-GhostWhite py-3 sticky top-0 z-50">
            <div className="mx-auto w-10/12
            grid grid-cols-12 gap-2 items-center py-1">
                {/* logo */}
                <div className="col-span-5">
                    <Link href={'/'}>
                        <div className='flex flex-row justify-start items-center space-x-2'>
                            <AiFillStar className='text-3xl fill-PrincetonOrange'/>
                            <h1 className='text-lg font-semibold hover:text-PrincetonOrange flex-wrap'>Sites Mwitu</h1>

                        </div>
                    </Link>
                </div>
                <div className="col-span-5 flex flex-row justify-end items-center">
                    <Link href={'/site/add'}>                    
                        <span>
                            <AiOutlineAppstoreAdd 
                            className='text-3xl cursor-pointer font-bold hover:text-PrincetonOrange'/>
                        </span>
                    </Link>
                </div>
                {/* login/signup */}
                <div className="col-span-2">
                    <Auth />
                </div>
            </div>
        </nav>
    )
}