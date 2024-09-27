import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true); // İlk gözlemlendiğinde görünürlük ayarla
        observer.unobserve(entry.target); // Gözlemlemeyi durdur
      }
    };

    const observer = new IntersectionObserver(observerCallback, options);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup: component unmount veya options değiştiğinde
      }
    };
  }, [options, isVisible]); // isVisible bağımlılık olarak eklenir

  return { ref, isVisible };
};

export default useIntersectionObserver;
