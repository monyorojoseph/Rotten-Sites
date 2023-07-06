import { HiLightBulb } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi';
import { useSitesContext } from '@/hooks/contexts/sitesContext';
import { ContentTypes } from '@/constants/types';
import Business from './Business';
import MyHam from './MyHam';
import { useRouter } from 'next/router';
import { useTagList } from '@/hooks/swr/tagList';


export default function Navbar(){
    const { content, setContent, setCategory, category } = useSitesContext()
    const { tags } = useTagList()
    const router = useRouter()
    return(
        <nav className='bg-CaribbeanCurrent text-Isabeline pt-2 top-0 w-full sticky z-50'>
            <div className='container mx-auto'>
                {/* actions */}
                <div className='mt-1.5 grid grid-cols-12 gap-4'>
                    <div className='col-span-8 flex flex-row justify-between items-center'>
                        <span className='mx-3 px-2' onClick={()=> router.push('/')}>
                            <HiLightBulb className='text-3xl text-OrangePeel cursor-pointer fill-PrincetonOrange'/>
                        </span>

                        <span className='w-full rounded-lg bg-white flex flex-row justify-center items-center'>
                            <input type="text" name="q"
                            className="border-none rounded-s-lg outline-none w-full h-9 px-3 py-0" 
                            // value={q}
                            // onChange={(e)=> setQ(e.target.value)}
                            placeholder="Search ..."/>
                            <span className='px-3 cursor-pointer'>
                                <BiSearch className='text-xl font-semibold text-MoonStone' />
                            </span>
                        </span>

                    </div>
                    <div className='col-span-4 flex flex-row justify-between space-x-2 items-center'>
                        <div className='flex flex-row justify-start items-center'>
                            <Business />
                            <span className='px-2.5 hover:text-OrangePeel cursor-pointer py-1'>Donate</span>
                        </div>
                        <MyHam />

                    </div>
                </div>
                {/* tags */}
                <div className='mt-2.5 flex flex-row justify-start items-center'>
                    <span
                    onClick={()=> {
                        router.push('/')
                        setContent(ContentTypes.RECENT)
                    }}
                    className={`${ content === ContentTypes.RECENT && 'border-b-2 border-OrangePeel' } 
                    py-1 px-1.5 cursor-pointer`}>
                        Recent</span>
                    <div className='border h-6 mx-3' />
                    {
                        tags?.map((tag, key)=> (
                            <span key={key}
                            onClick={()=> {
                                router.push(`/?tag=${tag.name}`, undefined, { shallow: true })
                                setContent(ContentTypes.CATEGORY)
                                setCategory(tag.name)                                
                            }}
                            className={`${ (content === ContentTypes.CATEGORY && category === tag.name ) && 'border-b-2 border-OrangePeel' } 
                            py-1 px-1.5 cursor-pointer`}>{tag.name}</span>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}