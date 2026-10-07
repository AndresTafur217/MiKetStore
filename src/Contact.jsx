export function Contact() {
  return (
    <div className="border border-gray-400 w-full h-20 rounded-4xl overflow-hidden flex flex-col items-center justify-center">
      
      <section className="w-full h-full flex flex-row gap-5 items-center justify-center overflow-hidden">
        <article className="size-12 rounded-full flex justify-center items-center text-gray-950 transition-all 
          hover:bg-black/20 hover:scale-105">
          <a href="">
            <svg className="size-8">
              <use xlinkHref="/sprite.svg#phone" />
            </svg>
          </a>
        </article>
        <article className="size-12 rounded-full flex justify-center items-center text-gray-950 transition-all 
          hover:bg-black/20 hover:scale-105">
          <a href="">
            <svg className="size-8">
              <use xlinkHref="/sprite.svg#whatsapp" />
            </svg>
          </a>
        </article>
        <article className="size-12 rounded-full flex justify-center items-center text-gray-950 transition-all 
          hover:bg-black/20 hover:scale-105">
          <a href="">
            <svg className="size-8">
              <use xlinkHref="/sprite.svg#instagram" />
            </svg>
          </a>
        </article>
        <article className="size-12 rounded-full flex justify-center items-center text-gray-950 transition-all 
          hover:bg-black/20 hover:scale-105">
          <a href="">
            <svg className="size-8">
              <use xlinkHref="/sprite.svg#gmail" />
            </svg>
          </a>
        </article>
      </section>
    </div>
  )
}