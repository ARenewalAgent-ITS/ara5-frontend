import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import Overscrollplugin from 'smooth-scrollbar/plugins/overscroll';

const overscrolloptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.05,
  maxOverScroll: 150,
};

const monitor = {
  duration: 5,
};

const options = {
  damping: 0.02,
  plugins: {
    overscroll: { monitor, ...overscrolloptions },
  },
};

export default function Scroll() {
  useEffect(() => {
    Scrollbar.use(Overscrollplugin);
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);

  return null;
}
