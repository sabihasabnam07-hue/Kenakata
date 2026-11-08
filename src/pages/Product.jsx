import React from 'react'
import ProductCard from '../components/ProductCard';

function Product() {
    const products = [
        // ---------- Electronics ----------
        {
            id: 1,
            name: "Wireless Headphones",
            category: "Electronics",
            price: 2500,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
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
            name: "Bluetooth Speaker",
            category: "Electronics",
            price: 1500,
            rating: 4.0,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80",
            description: "Portable speaker, joradar bass ar 8 ghonta playtime.",
        },

        // ---------- Fashion ----------
        {
            id: 4,
            name: "Cotton T-Shirt",
            category: "Fashion",
            price: 550,
            rating: 4.1,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
            description: "100% cotton, norom ar aramdayok daily wear t-shirt.",
        },
        {
            id: 5,
            name: "Denim Jacket",
            category: "Fashion",
            price: 2200,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=400&q=80",
            description: "Classic denim jacket, shob pose-er sathe match kore.",
        },
        {
            id: 6,
            name: "Formal Shirt",
            category: "Fashion",
            price: 1200,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
            description: "Office ar meeting er jonno slim fit formal shirt.",
        },

        // ---------- Footwear ----------
        {
            id: 7,
            name: "Running Shoes",
            category: "Footwear",
            price: 3200,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
            description: "Halka ar comfortable, daily running er jonno perfect.",
        },
        {
            id: 8,
            name: "Leather Sandals",
            category: "Footwear",
            price: 1400,
            rating: 4.0,
            image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=400&q=80",
            description: "Norom leather er sandal, grishmokale aram dey.",
        },
        {
            id: 9,
            name: "Formal Shoes",
            category: "Footwear",
            price: 2800,
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=400&q=80",
            description: "Polished finish shoho classic black formal shoes.",
        },

        // ---------- Accessories ----------
        {
            id: 10,
            name: "Leather Wallet",
            category: "Accessories",
            price: 900,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80",
            description: "Genuine leather wallet, 6 ta card slot shoho.",
        },
        {
            id: 11,
            name: "Backpack",
            category: "Accessories",
            price: 1800,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
            description: "Waterproof backpack, laptop rakhar alada pocket shoho.",
        },
        {
            id: 12,
            name: "Sunglasses",
            category: "Accessories",
            price: 750,
            rating: 4.1,
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80",
            description: "UV protection shoho stylish sunglasses.",
        },

        // ---------- Home ----------
        {
            id: 13,
            name: "Table Lamp",
            category: "Home",
            price: 1100,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80",
            description: "Halka alo, ghor ar study table er jonno shundor lamp.",
        },
        {
            id: 14,
            name: "Ceramic Mug Set",
            category: "Home",
            price: 650,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=400&q=80",
            description: "4 ta ceramic mug er set, cha ba coffee er jonno.",
        },
        {
            id: 15,
            name: "Cushion Cover",
            category: "Home",
            price: 400,
            rating: 4.0,
            image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80",
            description: "Norom fabric er cushion cover, ghor shajate bhalo.",
        },

        // ---------- Beauty ----------
        {
            id: 16,
            name: "Face Wash",
            category: "Beauty",
            price: 350,
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80",
            description: "Gentle face wash, shob dhoroner twok er jonno.",
        },
        {
            id: 17,
            name: "Perfume",
            category: "Beauty",
            price: 1900,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80",
            description: "Dirghoshthayi sugondhi, shara din fresh thakar jonno.",
        },
        {
            id: 18,
            name: "Hair Dryer",
            category: "Beauty",
            price: 1600,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
            description: "2 speed ar cool shot shoho powerful hair dryer.",
        },

        // ---------- Sports ----------
        {
            id: 19,
            name: "Yoga Mat",
            category: "Sports",
            price: 850,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=400&q=80",
            description: "Non-slip yoga mat, ghore exercise er jonno perfect.",
        },
        {
            id: 20,
            name: "Football",
            category: "Sports",
            price: 700,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80",
            description: "Size 5 football, mathe ar practice dui e bhalo.",
        },
        {
            id: 21,
            name: "Dumbbell Set",
            category: "Sports",
            price: 2400,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
            description: "Adjustable dumbbell set, ghore gym korar jonno.",
        },

        // ---------- Books & Stationery ----------
        {
            id: 22,
            name: "Notebook Pack",
            category: "Stationery",
            price: 300,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=400&q=80",
            description: "5 ta ruled notebook er pack, school ar office er jonno.",
        },
        {
            id: 23,
            name: "Gel Pen Set",
            category: "Stationery",
            price: 180,
            rating: 4.1,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80",
            description: "10 ta rongin gel pen, smooth lekhar jonno.",
        },
        {
            id: 24,
            name: "Desk Organizer",
            category: "Stationery",
            price: 520,
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
            description: "Kolom, notebook ar chhoto jinish gochhiye rakhar organizer.",
        },
    ];



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}

export default Product