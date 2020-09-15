import giphy from "giphy-api";
import React, { Component, useEffect, useState } from "react";
import Gif from "./Gif";

const giphyKey = "c4qRU28NcQPWaXFyehEAIlsfLBaoEWzA";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isDarkMode: false,
//     };
//   }

//   toggleDarkMode = () => {
//     this.setState((prevState) => ({
//       isDarkMode: !prevState.isDarkMode,
//     }));
//   };

//   render() {
//     return (
//       <div
//         className={`app-container ${this.state.isDarkMode ? "dark-mode" : ""}`}
//       >
//         <div>
//           <h1 className={this.state.isDarkMode ? "text-white" : ""}>
//             Hello there
//           </h1>
//           <button
//             className={`btn ${
//               this.state.isDarkMode ? "btn-light" : "btn-dark"
//             }`}
//             onClick={this.toggleDarkMode}
//           >
//             Toggle dark mode
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    giphy(giphyKey).search(
      {
        q: query,
        rating: "g",
        limit: 10,
      },
      (err, res) => {
        if (err) return console.log(err);
        console.log(res);
      }
    );
  }, [query]);

  return (
    <div className="app-container">
      <Gif id="KB0z3W3Er2Z7HLORTk" />
    </div>
  );
};

// const App = () => {
//   const [project, setProject] = useState({
//     name: "",
//     description: "",
//     //
//   });

//   const toggleDarkMode = () => {
//     setState((prevState) => {
//       return { ...prevState, isDarkMode: !prevState.isDarkMode };
//     });
//   };

//   return (
//     <div
//       className={`app-container ${this.state.isDarkMode ? "dark-mode" : ""}`}
//     >
//       <div>
//         <h1 className={this.state.isDarkMode ? "text-white" : ""}>
//           Hello there
//         </h1>
//         <button
//           className={`btn ${this.state.isDarkMode ? "btn-light" : "btn-dark"}`}
//           onClick={toggleDarkMode}
//         >
//           Toggle dark mode
//         </button>
//       </div>
//     </div>
//   );
// };

export default App;