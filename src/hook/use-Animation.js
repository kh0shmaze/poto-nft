import { useRef, useEffect, useState } from "react";

const useAnimation = () => {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  // console.log("myElementIsVisible", myElementIsVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  return {
    myRef,
    myElementIsVisible,
  };
};

export default useAnimation;
