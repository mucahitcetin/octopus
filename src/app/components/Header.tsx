import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className=" mx-auto flex justify-between items-center py-4 px-6 ">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.svg"
                        alt="Octopus Logo"
                        width={150}
                        height={50}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Navigation Icons and User */}
                <div className="flex items-center sm:space-x-6 space-x-2">
                    {/* Search Icon */}
                    <Link href="/search">
                        <Image
                            src="/icons/search.svg"
                            alt="Search Icon"
                            width={24}
                            height={24}
                            className="cursor-pointer hover:opacity-80"
                        />
                    </Link>

                    {/* Error Icon */}
                    <Link href="/error">
                        <Image
                            src="/icons/error.svg"
                            alt="Error Icon"
                            width={24}
                            height={24}
                            className="cursor-pointer hover:opacity-80"
                        />
                    </Link>

                    {/* Notifications Icon */}
                    <Link href="/notifications">
                        <Image
                            src="/icons/notification.svg"
                            alt="Notifications Icon"
                            width={24}
                            height={24}
                            className="cursor-pointer hover:opacity-80"
                        />
                    </Link>

                    {/* Profile Section */}
                    <Link href="/profile" className="flex items-center space-x-2 group">
                        <div className="bg-[#e6ffe6] text-primary font-bold w-8 h-8 flex items-center justify-center rounded-full">
                            SG
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-primary whitespace-nowrap">
                            Selin Gülece
                        </span>
                        <Image
                            src="/icons/arrow-down.svg"
                            alt="Arrow-down Icon"
                            width={24}
                            height={24}
                            className="cursor-pointer group-hover:opacity-80"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
