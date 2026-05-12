import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

const [posts, setPosts] = useState([]);
useEffect(() => {}, []);
appwriteService.getPosts([]).then((posts) => {
  if (posts) {
    setPosts(posts.documents);
  }
});
