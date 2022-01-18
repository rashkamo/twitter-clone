import {
  ArrowLeftIcon,
  DotsHorizontalIcon,
  RewindIcon,
} from "@heroicons/react/outline";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getProviders, getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Comment from "../components/Comment";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Login from "../components/Login";
import Modal from "../components/Modal";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import { db } from "../firebase";
import Widget from "../components/Widget";
import Moment from "react-moment";
import Link from "next/link";

function user({ trendingResults, followResults, providers, postPage }) {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  if (!session) return <Login providers={providers} />;

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  //console.log(posts);
  //console.log(post);

  return (
    <div className="text-white">
      <Sidebar />
      <div
        className="text-white flex-1 
     border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]"
      >
        <div className="border-b border-gray-700">
          <Link href="/">
            <a>
              <ArrowLeftIcon className="h-[25px] w-[40px] " />
            </a>
          </Link>
        </div>
        <div>
          <div className="flex items-center p-2 border-b border-gray-700 pb-2 pl-3">
            <img
              src={session.user.image}
              alt=""
              className="rounded-full pr-3"
            />
            <div className="font-bold group   ">
              <h1 className="">{session.user.name}</h1>
              <p className="group-hover:underline group-hover:text-blue-300 text-blue-300">
                @{session.user.tag}
              </p>
            </div>
          </div>
          {posts.map((post) => {
            const data = post.data();
            console.log(data);
            return (
              <div key={post?.id}>
                {session.user.uid === data?.id && (
                  <div
                    className="p-3 flex cursor-pointer border-b border-gray-700"
                    onClick={() => router.push(`/${id}`)}
                  >
                    {!postPage && (
                      <img
                        src={data?.userImg}
                        alt=""
                        className="h-11 w-11 rounded-full mr-4"
                      />
                    )}
                    <div className="flex flex-col space-y-2 w-full">
                      <div className={`flex ${!postPage && "justify-between"}`}>
                        {postPage && (
                          <img
                            src={data?.userImg}
                            alt="Profile Pic"
                            className="h-11 w-11 rounded-full mr-4"
                          />
                        )}
                        <div className="text-[#d9d9d9]">
                          <div className="inline-block group">
                            <h4
                              className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
                                !postPage && "inline-block"
                              }`}
                            >
                              {data?.username}
                            </h4>
                            <span
                              className={`text-sm sm:text-[15px] ${
                                !postPage && "ml-1.5"
                              }`}
                            >
                              @{data?.tag}
                            </span>
                          </div>
                          ·{" "}
                          <span className="hover:underline text-sm sm:text-[10px] font-bold">
                            <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                          </span>
                          {!postPage && (
                            <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                              {data?.text}
                            </p>
                          )}
                        </div>
                        <div className="icon group flex-shrink-0 ml-auto">
                          <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
                        </div>
                      </div>
                      {postPage && (
                        <p className="text-[#d9d9d9] mt-0.5 text-xl">
                          {data?.text}
                        </p>
                      )}
                      <img
                        src={data?.image}
                        alt=""
                        className="rounded-2xl max-h-[350px] object-contain mr-2 w-full "
                      />
                      <div
                        className={`text-[#6e767d] flex justify-between w-10/12 ${
                          postPage && "mx-auto"
                        }`}
                      >
                        {/* comment icon */}

                        {/* DELETE ICON */}

                        {/* LIKE ICON */}

                        {/* SHARE ICON */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default user;

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
