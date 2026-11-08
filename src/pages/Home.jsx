import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {

    const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1509070473195-2d5c9f3c1e4f?auto=format&fit=crop&w=400&q=80",
    description: "Clear sound ar 20 ghonta battery backup shoho wireless headphones.",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 3800,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    description: "Heart rate ar step tracking shoho stylish smart watch.",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    category: "Fashion",
    price: 550,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    description: "100% cotton, norom ar aramdayok daily wear t-shirt.",
  },
  {
    id: 4,
    name: "Denim Jacket",
    category: "Fashion",
    price: 2200,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=400&q=80",
    description: "Classic denim jacket, shob pose-er sathe match kore.",
  },
  {
    id: 5,
    name: "Running Shoes",
    category: "Footwear",
    price: 3200,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    description: "Halka ar comfortable, daily running er jonno perfect.",
  },
  {
    id: 6,
    name: "Leather Wallet",
    category: "Accessories",
    price: 900,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80",
    description: "Genuine leather wallet, 6 ta card slot shoho.",
  },
  {
    id: 7,
    name: "Backpack",
    category: "Accessories",
    price: 1800,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
    description: "Waterproof backpack, laptop rakhar alada pocket shoho.",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1500,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80",
    description: "Portable speaker, joradar bass ar 8 ghonta playtime.",
  },
];
    return (
         <div className="min-h-screen bg-gray-100">

            {/* Hero Banner */}
            <section className="relative overflow-hidden">

                {/* Banner Image */}
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
                    alt="Kenakata Banner"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent"></div>

                {/* Banner Content */}
                <div className="relative mx-auto flex min-h-[420px] max-w-6xl flex-col justify-center px-5 py-16 md:min-h-[520px]">

                    <span className="w-fit rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-gray-900">
                        New Collection 2026
                    </span>

                    <h1 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl">
                        Pochhondo-moto kena-kata, ek jaygay
                    </h1>

                    <p className="mt-4 max-w-md text-gray-200">
                        Electronics, fashion ar accessories, shob kichu
                        shera dame ar druto delivery shoho.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">

                        <Link
                            to="/products"
                            className="rounded-lg bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
                        >
                            Shop Now
                        </Link>

                        <Link
                            to="/about"
                            className="rounded-lg border border-white px-8 py-3 text-white transition hover:bg-white hover:text-gray-900"
                        >
                            Learn More
                        </Link>

                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="mx-auto max-w-7xl px-5 py-12">

                {/* Section Heading */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Our Products
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Explore our latest collection
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {products.slice(0,6).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </section>

        </div>
    );
}

export default Home;