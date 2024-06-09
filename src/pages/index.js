import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className='w-full h-screenbg'>
      <Head>
        <title>Index page</title>
      </Head>
      <div className="container">
        <Link href="/homepages/homepage1">
          <a>Go to homepage 1</a>
        </Link>
      </div>
    </div>
  );
}
