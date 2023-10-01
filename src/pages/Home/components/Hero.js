import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row text-justify dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-4xl font-bold">eBooks</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">Collection of digital version of alltime favorite books.</p>
        <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View Store</Link>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-5 gap-2">
        <div>
        <Link to="/products/10001"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10001.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10012"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10012.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10014"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10014.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10003"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10003.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10013"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10013.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10015"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10015.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10004"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10004.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10005"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10005.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10006"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10006.avif" alt="product#_image"/></Link>
        </div>
        <div>
        <Link to="/products/10007"><img className="h-auto hover:scale-125 max-w-auto rounded-lg" src="/assets/images/10007.avif" alt="product#_image"/></Link>
        </div>
      </div>

      {/*<div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-auto" src={HeroImage} alt="ebookstore Hero Section" />
        </div>*/}
    </section>
  )
}