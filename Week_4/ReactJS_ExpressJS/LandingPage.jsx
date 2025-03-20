import React from 'react';

function LandingPage() {
    return (
        <div>
            <header>
                <h1>Welcome to the Landing Page</h1>
                <p>Your one-stop shop for all products!</p>
            </header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <section>
                <h2>Our Products</h2>
                <div>
                    <div>
                        <img src="product1.jpg" alt="Product 1" />
                        <p>Product 1 - $10</p>
                    </div>
                    <div>
                        <img src="product2.jpg" alt="Product 2" />
                        <p>Product 2 - $20</p>
                    </div>
                </div>
            </section>
            <footer>
                <p>Follow us on social media</p>
            </footer>
        </div>
    );
}

export default LandingPage;
