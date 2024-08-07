import React from 'react';
import './css/Notifications.css'

const Post = ({ title, date, content, extra }) => (
  <div className="post">
    <div className="post-header">
      <div className="post-title">{title}</div>
      <div className="post-date">{date}</div>
    </div>
    <div className="post-content">{content}</div>
    {extra && <div className="post-extra">{extra}</div>}
  </div>
);

const Feed = () => (
  <div className="feed">
    <Post 
      title="Daily Dose Of Idioms"
      date="October 24"
      content="Idiom #1167 — 'To Have One's Back Against The Wall'"
      extra="Read this and 15 more new items."
    />
    <Post 
      title="Daily Dose Of Vocabulary"
      date="October 24"
      content="Word #1401 — 'Aglow'"
      extra="Read this and 15 more new items."
    />
    <Post 
      title="Highlight in Success and Happiness"
      date="October 21"
      content='The Question about the money spells: "I need my financial situation to change. I want abundance to flow so that I don...'
      extra={<span>Posted by <b>Anastasia Bulava</b></span>}
    />
    <Post 
      title="Question for You"
      date="October 19"
      content="Which one is better, Nootan or Chugh, for preparing an ISC board exam in chemistry?"
      extra="Write an answer and share your knowledge."
    />
    <Post 
      title="October 18"
      date=""
      content="Congratulations, your answers had 4,224 views in the past week!"
    />
    <Post 
      title="Highlight in Unboxing JEE"
      date="October 13"
      content="Help him man..."
      extra={<span>Posted by <b>Ankit Kumar Gupta</b></span>}
    />
  </div>
);

export default Feed;
