import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row text-justify dark:text-slate-100 items-center">
      <section className="flex flex-col bg-white dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Buy digital version of your favorite book</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"></p>
            <Link to="/products" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Store
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-5 gap-2">
        <div>
          <Link to="/products/10001"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10001.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10012"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10012.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10006"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10006.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10003"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10003.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10007"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10007.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10002"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10002.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10004"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10004.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10005"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10005.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10008"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10008.avif" alt="product#_image" /></Link>
        </div>
        <div>
          <Link to="/products/10009"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10009.avif" alt="product#_image" /></Link>
        </div>
      </div>
    </section>
  )
}