import React from "react";

const Link = ({ className, href, children }) => {

  const onClick = (event) => {

    if(event.metaKey || event.ctrlKey) {
      return;  
    }

    event.preventDefault();

    window.history.pushState({}, "", href)
    // vid 204, 2:40 - changes url on browser

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    // communicate to route components that the url changed
  }

  return <a
    onClick={onClick}
    className={className}
    href={href}
  >
    {children}
  </a>;
}

export default Link;