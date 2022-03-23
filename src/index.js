import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Soorim",
  lastName: "Choi",
  avatarUrl:
    "https://w.namu.la/s/254294b86f5ce9b28d6b319b106860f192b9f26bedf411afca1ca7ed73e640ac3111131fe99ace36182921fecc96ea4eafa5df13ea74fa079397d1ad66b2a840b719b0816396d7f29d447759d95f99a6",
};

// const element = <h1>{getGreeting(user)}</h1>
// const element = <img src={user.avatarUrl}></img>;
// const element = <a href="https://www.reactjs.org"> link </a>;
// const element = (
//   <div>
//     <h1>{getGreeting(user)}</h1>
//     <h2>
//       <img src={user.avatarUrl}></img>
//     </h2>
//   </div>
// );

// const element = <h1 className="greeting">Hello, world!</h1>;
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

ReactDOM.render(element, document.getElementById("root"));
reportWebVitals();
