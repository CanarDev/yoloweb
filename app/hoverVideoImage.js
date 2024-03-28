'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function HoverVideoImage({ srcImage, srcVideo, alt }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="w-1/2" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <video className="h-full object-cover" width="200" height="400" autoPlay loop>
                    <source src={srcVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Image src={srcImage} alt={alt} width={200} height={200} />
            )}
        </div>
    );
}