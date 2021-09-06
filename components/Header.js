import Image from 'next/image'
import HeaderItem from './HeaderItem'

//icons
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <header class="flex flex-col m-5 sm:flex-row  justify-between items-center h-auto header">
      <div className="flex flex-grow justify-evenly max-w-2xl header_icon">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  )
}

export default Header
