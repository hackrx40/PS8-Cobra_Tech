import React,{useState} from 'react'
import axios from 'axios'
import "./Razorpay.css";

const Razorpay = () => {
    const [Policy, setPolicy] = useState({
		name: "Bajaj Aliance Life eTouch",
		
		img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bajajallianzlife.com%2Fterm-insurance-plans%2Fetouch-term-insurance-plan.html&psig=AOvVaw2W4NlJDwxUCffUWwxZsOB9&ust=1690072876723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDV1p2KoYADFQAAAAAdAAAAABAE",
		price: 1980,
	});

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_C7P1kamutxL2XY",
			amount: data.price,
			currency: data.currency,
			name: Policy.name,
			description: "Test Transaction",
			image: Policy.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:3000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:3000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: Policy.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<div className="book_container">
				<img src={Policy.img} alt="Policy_img" className="book_img" />
				<p className="book_name">{Policy.name}</p>
				{/* <p className="book_author">By {book.author}</p> */}
				<p className="book_price">
					Price : <span>&#x20B9; {Policy.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
		</div>
	);
}

export default Razorpay
