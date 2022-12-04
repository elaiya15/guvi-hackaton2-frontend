/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";
import{useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';





const products = [
	{
		id: 1,
		name: "Sony ZV-1F Vlogging Camera, Black",
		rating: 4.3,
		description:
			"Ultra-wide 20 mm lens gets it all in the frame, even at arm's length Large 1 sensor and F2 lens, for low-light and defocusing backgroundsStay focused with Eye-AF and autofocus tracking technology",
		price: 199,
		image: require("./assets/images/product-1.png"),
	},
	{
		id: 2,
		name: "Canon PowerShot G7 X Mark II Digital Point & Shoot Camera",
		rating: 4.2,
		description:
		"CMOS sensor with Canon'snew DIGIC 7 Image Processor helps Features a bright f/1.8 (W) - f/2.8 (T), 4.2x (24-100mm) LENS Continuous shooting up to 8 fps Multi-angle capacitive 3.0 touch panel LCD ",
		price: 229,
		image: require("./assets/images/product-2.png"),
	},
	{
		id: 3,
		name: "GVM S900D 50W LED Studio Video Light Bi-Color Soft Light Panel",
		rating: 3.2,
		description:
		"Power: 50W Lumen: 26000Lux/inch Color Temperature: 3200-5600K 4-Way Barndoors CRI: 97 Lightweight ABS material",
		price: 299,
		image: require("./assets/images/product-3.png"),
	},
	{
		id: 4,
		name: " Kubra 3110 for Mobile, DSLR, Mirrorless, Sports & Action Portable Lightweight Aluminum Tripod",
		rating: 4.8,
		description:
			"Designed For: Mobile, DSLR/SLR Camera, Point & Shoot Camera Load Capacity: 1500 g Height Range: 300 mm - 1100 mm",
		price: 119,
		image: require("./assets/images/product-4.png"),
	},
	{
		id: 5,
		name: "Camera Tripod",
		rating: 4.5,
		description:
		"DSLR/SLR Camera, Point & Shoot Camera Load Capacity: 1500 g Height Range: 300 mm - 1100 mm",
		price: 85,
		image: require("./assets/images/product-5.png"),
	},
	{
		id: 6,
		name: "Camera Lens ",
		rating: 3.8,
		description:"The constant f/2.8 maximum aperture of this lens makes it appealing for APS-C users looking for a high-quality walk around lens. It closely matches the classic 24-70mm focal length usually preferred by full-frame shooters. ",
		price: 549,
		image: require("./assets/images/product-6.png"),
	},
	{
		id: 7,
		name: "3 x 250DI Strobe Flash Lights, 3 x 190cm Alluminum Stands, 4 Color Gels, 1 Barn Door",
		rating: 4.5,
		description:
		"NEW! Professional Studio Lighting Kit 750W 3 x 250w Studio Flash/Strobe They are perfect for commercial studios, location photographers and advanced amateurs.",
		price: 508,
		image: require("./assets/images/product-7.png"),
	},
	{
		id: 8,
		name: "CASON Professional 8 X 40 HD Binoculars 10X Zoom Folding Powerful Lens ",
		rating: 3.8,
		description:
		"CASON 8 X 40 HD BINOCULARS Multi-coating Porro Prisms Provides exceptional optical performance. Higher refractive index rate, produce a brighter, clarity image.",
		price: 249,
		image: require("./assets/images/product-8.png"),
	},
	{
		id: 9,
		name: "CASON Professional 8 X 40 HD Binoculars 10X Zoom Folding Powerful Lens ",
		rating: 4.5,
		description:
		"CASON 8 X 40 HD BINOCULARS Multi-coating Porro Prisms Provides exceptional optical performance. Higher refractive index rate, produce a brighter, clarity image.",
		price:385,
		image: require("./assets/images/product-9.png"),
	},
	{
		id: 10,
		name: "TES-LA Black Quadcopter One Key Take-off/One Key Land Drone",
		rating: 3.8,
		description:"Coreless motor, good quality, durable, (APP operation, remote control, easy to carry), can draw points according to the trajectory flight, easy to operate, 2.4G Frequency allows multiple players to play against each other at the same time without interference.",
		price: 449,
		image: require("./assets/images/product-10.png"),
	},
];

function App() {
  
const navigate = useNavigate();

	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};


const handleLogout =() =>{
	localStorage.removeItem("token");
	navigate("/signin");
}

	return (
		
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar"> <Button variant="contained" onClick={()=>handleLogout()}>Logout</Button>
				<img scr="logo cam.png" className="logos" alt=""/>
				<h3 className="logo"> </h3>
				
				
		
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price"> ₹
								{product.price}
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
			
		</div>
	);
}

export default App;
