import Link from "next/link"
import styles from "../styles/error.module.scss"

const ErrorPage = () => {
  return (
    <>
      <h1 className={styles.error}>Page not found</h1>
      <Link href={"/"}><a>Go to Home Page</a></Link>
    </>
  )
};

export default ErrorPage;