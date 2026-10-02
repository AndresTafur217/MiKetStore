import { Categories } from "./Categories";
import { Products } from "./Products";
import { Slide } from "./Slide";

export function Content() {
  document.addEventListener('DOMContentLoaded', function() {
      const marquee = document.querySelector('.marquee');
      if (marquee) {
          const containerWidth = marquee.parentElement.offsetWidth;
          const contentWidth = marquee.scrollWidth;
          const totalDistance = containerWidth + contentWidth;

          // Velocidad en píxeles por segundo (ajústala según prefieras)
          const speed = 100;
          const duration = totalDistance / speed;

          marquee.style.animationDuration = duration + 's';
      }
  });
  return(
    <div className="h-max w-full flex flex-col gap-7.5 items-center">
      <section className="w-full h-65 sm:h-75 md:h-91 p-5 overflow-hidden border-x-2 border-border-gray">
        <Slide />
      </section>
      <section className="w-full p-2.5">
        <Categories compact />
      </section>
      <section className="w-full">
        <Products />
      </section>
    </div>
  )
}