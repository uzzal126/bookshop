import Link from "next/link";
import { BsEnvelope, BsPinMap, BsTelephone } from "react-icons/bs";

const Footer = ({ footerData }) => {
    return (
        <div className="py-15 border-t">
            <div className="container">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <div className="logo mb-5">
                            <Link href="/">
                                <img
                                    src={footerData.logo.light_logo}
                                    alt="bookshop"
                                />
                            </Link>
                        </div>
                        <div
                            className="desc lg:pr-15"
                            dangerouslySetInnerHTML={{
                                __html: footerData?.footer.body.column1.list
                                    .text_oaT6SY.content,
                            }}
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                        <div className="widget">
                            <h2 className=" uppercase text-2xl md:text-4xl font-bold">
                                {
                                    footerData?.footer.body.column2.list
                                        .newsletter_nvABLM.title
                                }
                            </h2>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="border w-full py-3 px-4"
                                />
                                <button
                                    type="submit"
                                    className="bg-primary text-white uppercase text-sm font-bold py-4 px-10 mt-5"
                                >
                                    subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                        <div className="widget">
                            <ul>
                                <li className="flex items-center text-[#777] mb-3.5">
                                    <BsPinMap />
                                    <span className="ml-3 text-sm">
                                        {footerData?.locations[0].address}
                                    </span>
                                </li>
                                <li className="flex items-center text-[#777] mb-3.5">
                                    <BsTelephone />
                                    <span className="ml-3 text-sm">
                                        {footerData?.locations[0].mobile}
                                    </span>
                                </li>
                                <li className="flex items-center text-[#777] mb-3.5">
                                    <BsEnvelope />
                                    <span className="ml-3 text-sm">
                                        {footerData?.locations[0].email}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                        <div className="widget">
                            <h3 className=" uppercase text-lg font-bold mb-5">
                                {footerData?.footer.body.column4.title}
                            </h3>
                            <ul>
                                {footerData?.footer.body.column4.list.menubar_87srO8.list.map(
                                    (nav) => (
                                        <li
                                            className="flex items-center text-[#777] mb-3.5"
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
