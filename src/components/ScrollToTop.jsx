import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // إذا كان في الـ URL hash (مثل /#bidding-links-section)
    if (hash) {
      // استخدم setTimeout لأن العنصر قد لا يكون جاهزاً فوراً
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // إذا لم يكن هناك hash، سكرول للأعلى
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
