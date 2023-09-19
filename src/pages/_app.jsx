import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper.min.css";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};

export default MyApp;
