import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const whatsappNumber = "+50241781132";
    const message = `Hola, me interesa el producto: ${product.name} - Cantidad: ${quantity}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const handleAddToCart = () => {
        window.location.href = whatsappUrl;
    };

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="category">{product.category}</p>
            <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
            <button onClick={handleAddToCart}> 🛒 Comprar por WhatsApp </button>
        </div>
    );
};

export default ProductCard;