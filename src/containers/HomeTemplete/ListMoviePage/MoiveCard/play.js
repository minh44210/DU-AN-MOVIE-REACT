import React from "react";
import ReactPlayer from "react-player";

export default function Play() {
  return (
    <ReactPlayer
      url="https://vimeo.com/243556536"
      width="100%"
      height="500px"
      playing
      playIcon={<button>Play</button>}
      light="https://i.stack.imgur.com/zw9Iz.png"
    />
  );
}
