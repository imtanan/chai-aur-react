
import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components';
import { set } from 'react-hook-form';
function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
      appwriteService.getPosts().then((posts)=>{
        if(posts){
            setPosts(posts.documents);
        }
      })
    },[])
 if(posts.length === 0){
    return (
        <div className="w-full mt-4 text-center py-8">
          <Container>
            <div className="flex flex-wrap">
                <div className='p-2 w-full'>

            <h2 className="text-2xl font-bold hover:text-gray-500 text-center">Login to read posts</h2>
                </div>

            </div>
          </Container>
        </div>
      )
 }

 return(
   < div className="w-full py-8">
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>{
                <div className='p-2 w-1/4' key={post.$id}>

                    <PostCard {...post} />
                </div> 
            })
            }

        </div>
    </Container>
   </div>
 )
}

export default Home