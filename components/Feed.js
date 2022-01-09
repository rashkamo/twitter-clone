import { LogoutIcon, SparklesIcon } from "@heroicons/react/outline";
import { Logout } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { comment } from "postcss";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Input from "./Input";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  //CLEAN Way you can retrieve the data
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

  return (
    <div
      className="text-white flex-1 
     border-l border-r border-blue-400 max-w-2xl sm:ml-[73px] xl:ml-[370px]"
    >
      <div className="text-[#d9d9d9] flex items-center justify-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-[#0d131a] border-b border-gray-700">
        <h2 className="font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto relative ">
          <SparklesIcon className="hidden  sm:h-5 sm:text-white" />
        </div>
        <div className="group">
          <LogoutIcon className="sm:hidden font-light  text-sm m-0 pd-0 h-[30px] w-[30px]" />
          <div
            className="absolute top-[40px] right-[2px] bg-[#d9d9d9]  text-black rounded-full pl-3 pr-3 invisible group-hover:visible cursor-pointer"
            onClick={signOut}
          >
            <h5>Logout</h5>
          </div>
        </div>
      </div>
      <Input />

      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
