import Link from "next/link";
import { BsCart2, BsList, BsSearch } from "react-icons/bs";

const Header = ({ headerData }) => {
    return (
        <div className="py-4 sm:py-2 border-b">
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-5">
                        <div className="flex items-center">
                            <div className="mobile-menu sm:hidden">
                                <button type="button" className="mr-3">
                                    <BsList className="text-xl" />
                                </button>
                            </div>
                            <div className="logo">
                                <Link href="/">
                                    <img
                                        src={headerData.logo.light_logo}
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-7">
                        <div className="main-menu flex items-center justify-end">
                            <div className="mr-5 hidden sm:block">
                                <ul className="flex justify-end">
                                    {headerData.header.body.primary_menu.map(
                                        (nav) => (
                                            <li
                                                className="mr-7 last:mr-0 font-normal text-base hover:text-primary"
                                                key={nav.id}
                                            >
                                                <Link href={nav.path}>
                                                    {nav.text}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="ml-1">
                                <ul className="flex justify-end space-x-4">
                                    <li>
                                        <button
                                            type="button"
                                            className="text-xl"
                                        >
                                            <BsSearch />
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="text-xl relative"
                                        >
                                            <BsCart2 />
                                            <span className="w-4 h-4 absolute -top-2 -right-1.5 bg-primary text-[12px] rounded-full text-white text-center leading-4">
                                                0
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
