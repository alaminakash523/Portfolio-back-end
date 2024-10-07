import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

function Carousel() {
    useEffect(() => {
        // Initialize Glide.js
        new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 10,
        }).mount();
    }, []);

    return (
        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide">Slide 1</li>
                    <li className="glide__slide">Slide 2</li>
                    <li className="glide__slide">Slide 3</li>
                    <li className="glide__slide">Slide 4</li>
                    <li className="glide__slide">Slide 5</li>
                    <li className="glide__slide">Slide 6</li>
                </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
            </div>
        </div>
    );
}

export default Carousel;

