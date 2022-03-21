import Link from "next/link";
import Head from "next/head";

const MainLayout = ({children, title = "Basic Title"}) => {
  return (
    <>
    <Head>
      <title>{title} | Next Course</title>
      <meta name="keywords" content="next, js, react"/>
      <meta name="description" content="first next app"/>
      <meta charSet="utf-8"/>
    </Head>
      <nav>
        <Link href={"/"}><a>Home Page</a></Link>
        <Link href={"/about"}><a>About Page</a></Link>
        <Link href={"/posts"}><a>Posts Page</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          nav {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: auto;
            position: fixed;
            height: 60px;
            top: 0;
            left: 0;
            right: 0;
            background: black;
          }

          a {
            color: #fff;
            text-decoration: none;
          }

          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  )
};

export default MainLayout;