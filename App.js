import React ,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Restro from "./src/Components/Restro";
import Body from "./src/Components/Body";
// import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Cart from "./src/Components/Cart";
import DetailedCard from "./src/Components/DetailedCard";
import Search from "./src/Components/Search";
import Offer from "./src/Components/Offer";
// import Grocery from "./src/Components/Grocery";



// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamic import....
//ABove 6 terms are all same and below two lines are the examples of how we will implemt lazy laoding...

//Earlier i was using About component in other component so i was not able to apply lazy laoding bcz of this so i have to remove about component from other component...

const Grocery = lazy(()=> import("./src/Components/Grocery"));
const About = lazy(()=> import("./src/Components/About"));








// const heading = React.createElement("h1", {id:"heading"}, "HEY, I'm Nikhil..!")

//component compsoition....Its basically using one component inside another component.

const Rand = () => {
  return (
    <>
      <h3>Random comp</h3>
    </>
  );
};

const ele = (
  <span>
    React Random Element
    <Rand />
  </span>
);

const title = <h1> {ele} This is a title</h1>;

const Head = () => {
  return (
    <>
      {console.log("Cosnoling")}
      {title}
      <h1>Hello again</h1>
      {Rand()}
    </>
  );
};

const appRouter = createBrowserRouter([
  { path:"/",
    element:<Restro />,
    children:[
      {
        path:"/",
        element:<Body />,
       
      },
    //   { path:"/about",
    //   element: <Suspense fallback={<h1>Loading About Page 😄 Keep Waiting...</h1>}><About /></Suspense>,//this Suspense component will be used when we want lazy loading;
    // },
    // {
    //   path:"/contact",
    //   element: <Contact />,
    // },
    // {
    //   path:"/grocery",
    //   element: <Suspense fallback={<h1>Loading Grocery Page 😄 Keep Waiting...</h1>}><Grocery /></Suspense>,
    // },
    {
      path:"/restaurant/:resid",
      element: <DetailedCard />
    },{
      path:"/cart",
      element:<Cart />
    },{
      path:"/search",
      element:<Search />
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/offer",
      element:<Offer/>
    }
    ],
    errorElement:<Error />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// ReactDOM.render(<Head />, document.getElementById("root"))... In this we have to import only ReactDOM and not client part at line no 2...
