// import React from 'react';

// export const Exercise4 = () => {
//   return (
//     <div>
//       <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>Hello, Exercise4!</h1>
//       <p>This is a paragraph.</p>
//       <a href="https://example.com">Link</a>
//       <form>
//         <input type="text" placeholder="Enter text" />
//         <button type="submit">Submit</button>
//       </form>
//       <img src="image.jpg" alt="Example" />
//       <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ul>
//     </div>
//   );
// };

//Part2

import React from 'react';
import './Exercise4.css';
export const Exercise4 = () => {
  const style_header={
color: "white",
backgroundColor: "DodgerBlue",
padding: "10px",
fontFamily: "Arial"
  };
  return (
    <div>
      <h1 style={style_header}>Hello, Exercise4!</h1>
      <p className="para">This is a paragraph.</p>
      <a href="https://example.com">Link</a>
      <form>
        <input type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
      <img src="image.jpg" alt="Example" />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

//part3
