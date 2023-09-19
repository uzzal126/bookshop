import Link from "next/link";

const Custom404 = () => {
    return (
        <div className="py-section">
            <div className="container">
                <div className="text-center">
                    <h1 className="mb-7">Page Not Found</h1>
                    <Link
                        href="/"
                        className="bg-primary text-white py-4 px-7 rounded inline-block"
                    >
                        Go Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Custom404;
