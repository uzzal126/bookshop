import Link from "next/link";
import { BsPersonFill, BsTelephone } from "react-icons/bs";

const HeaderTop = ({ headerTopData }) => {
    return (
        <div className="py-2 bg-white-500">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <p className="mb-0 hidden xs:block">
                            {headerTopData?.hotline.text}
                        </p>
                        <p className="flex items-center xs:ml-8 mb-0">
                            <BsTelephone className="text-primary mr-2" />
                            Call us:
                            <a href="tel:123456" className="hover:text-primary">
                                {headerTopData?.hotline.mobile}
                            </a>
                        </p>
                    </div>
                    <div className="account">
                        <div className="text-sm flex items-center hover:text-primary relative group">
                            <Link href="/" className="flex items-center">
                                <BsPersonFill />
                                <span className="relative ml-2">
                                    My Account
                                </span>
                            </Link>
                            <div className="pl-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="w-3.5 fill-heading transition-all duration-500 group-hover:rotate-180 group-hover:fill-primary"
                                >
                                    <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414" />
                                </svg>
                            </div>
                            <ul className="top-full right-0 absolute min-w-[150px] bg-white py-4 rounded border shadow-[0_0_30px_rgba(0,0,0,12%)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-[20px] group-hover:translate-y-0 z-30">
                                <li className="text-base">
                                    <Link
                                        href="/"
                                        className="block py-2 px-7 text-heading relative transition-all duration-500 hover:text-primary"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className="text-base">
                                    <Link
                                        href="/"
                                        className="block py-2 px-7 text-heading relative transition-all duration-500 hover:text-primary"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
