"use client";
import AddNewPost from "../../modules/AddNewPost";
import Post from "../../modules/Post";
export default function Home() {
  return (
    <main>
      <AddNewPost />
      <Post />
    </main>
  );
}
