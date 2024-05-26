import React from "react";
import { TopicProps } from "../model";

export default function ProjectInfo({
  topicName,
  topicName2,
  briefMe,
}: TopicProps) {
  return (
    <>
      <div className="topic">
        <p>{topicName}</p>
      </div>
      <div className="topic-abt">
        <p>{topicName2}</p>
      </div>
      <div className="brief-me">
        <p>{briefMe}</p>
      </div>
    </>
  );
}
