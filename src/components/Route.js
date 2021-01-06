// we only import React when we need JSX
import {useState, useEffect} from "react";

// when we want to set an event handler inside a component, use a useEffect

const Route = ({path, children}) => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {

    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("popstate", onLocationChange)

    return () => {
      window.removeEventListener("popstate", onLocationChange)
    }
  }, [])

  return currentPath === path
    ? children
    : null;
};

export default Route;