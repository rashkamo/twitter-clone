import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Widget from "../components/Widget";
import Bottombar from "../components/Bottombar";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  if (!session) return <Login providers={providers} />;
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="https://rb.gy/ogau5a" />
      </Head>
      <main className="bg-[#0d131a] min-h-screen max-w-[1500px] flex relative mx-auto">
        <Sidebar />
        <Feed />
        <Widget
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
        <div className="fixed bottom-0 left-0 right-0 w-[100%]">
          <Bottombar />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
