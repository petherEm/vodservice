import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { 
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

const Headers = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl h-auto">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="USER" Icon={UserIcon} />
            </div>
            <div className="relative w-16 h-16 flex justify-center items-center z-40 cursor-pointer">
                <Image src="/white_logo.svg" alt="logo" layout="fill" objectFit="contain" />
            </div>
            {/* <Image
                    // className="object-contain"
                    src="https://links.papareact.com/ua6" 
                    width={200}
                    height={100}
                    objectFit='contain'
                    alt=""
                /> */}
        </header>
    )
}

export default Headers
