import Image from "next/image";
import Link from "next/link";
import { User } from "../types";

type Props = {
  user: User;
};

const Header = async ({ user }: Props) => {
  return (
    <header className="bg-white shadow-md">
      <div className=" mx-auto flex justify-between items-center py-4 px-6 ">
        {/* Logo */}
        <Link href="/products" className="flex items-center">
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
          <div>
            <Image
              src="/icons/search.svg"
              alt="Search Icon"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-80"
            />
          </div>

          {/* Error Icon */}
          <div>
            <Image
              src="/icons/error.svg"
              alt="Error Icon"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-80"
            />
          </div>

          {/* Notifications Icon */}
          <div>
            <Image
              src="/icons/notification.svg"
              alt="Notifications Icon"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-80"
            />
          </div>

          {/* Profile Section */}
          {user && (
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-[#e6ffe6] text-primary font-bold w-8 h-8 flex items-center justify-center rounded-full">
                {user.firstName[0] + user.lastName[0]}
              </div>
              <span className="text-gray-700 font-medium group-hover:text-primary whitespace-nowrap">
                {user.firstName + " " + user.lastName}
              </span>
              <Image
                src="/icons/arrow-down.svg"
                alt="Arrow-down Icon"
                width={24}
                height={24}
                className="cursor-pointer group-hover:opacity-80"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
