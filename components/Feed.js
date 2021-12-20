import { SparklesIcon } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { comment } from "postcss";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Input from "./Input";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

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
        <h2>Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto ">
          <SparklesIcon className="h-5 text-white" />
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