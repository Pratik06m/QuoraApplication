import React from "react";
import QuoraBox from "./QuoraBox";
import "./css/feed.css";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <QuoraBox />
      <Post
        UserName="Pratik"
        TimeStamp="10:50 PM"
        TestQuestion="Can you explain the difference between synchronous and asynchronous programming? How have you applied asynchronous concepts in your projects?"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqysRzNArCWsHFa5In0BANe3wg7kaQldxbQ&s"
      />
      <Post 
        UserName="Manjiri"
        TimeStamp="11:50 AM"
        TestQuestion="Describe a challenging technical problem you encountered and how you solved it. What was the outcome, and what did you learn from the experience?"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBvc6GVZc4rxXOl0l0pG5fsF42RL80VbSkQ&s"/>
      <Post 
         UserName="Diksha"
        TimeStamp="01:50 PM"
        TestQuestion="Can you walk us through a project you worked on, detailing your role and the technologies you used? What were the biggest challenges and how did you overcome them?"
        imageUrl="https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg" />
      <Post
        UserName="Bhushan"
        TimeStamp="06:50 AM"
        TestQuestion="How do you stay updated with the latest developments in technology and software engineering? Can you give an example of a new technology or skill you've recently learned?"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdY38b13sLgNh8HhJoTPS5JsvNBirQ5gzauA&s" />
      <Post 
        UserName="Priyanshi"
        TimeStamp="09:50 PM"
        TestQuestion="Describe a situation where you worked as part of a team on a technical project. How did you handle conflicts or disagreements within the team, and what was the outcome?"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqysRzNArCWsHFa5In0BANe3wg7kaQldxbQ&s"/>
    </div>
  );
}

export default Feed;
