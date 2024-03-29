// import React from "react";
// import posts from "./../data/data2.json";

// export class SocialMedia extends React {
//     constructor(props) {
//         super(props);
//         console.log("posts:", posts);
//     }

//     render() {
//         const media = posts.SocialMedias.map((media) => <li>{media}</li>);
//         return media;
//     }
// }

// // FUNCTIONAL COMPONENT

import React from "react";
import posts from "./../data/data2.json";

export const SocialMedia = () => {

  const media = posts.SocialMedias.map((media) => <li key={media}>{media}</li>);

  return <ul>{media}</ul>;
};