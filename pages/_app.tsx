import "../styles/globals.scss";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color="white"
        startPosition={0.3}
        stopDelayMs={0}
        height={3}
      />
      <Component {...pageProps} />
      {/* <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style> */}
    </>
  );
};

export default MyApp;
