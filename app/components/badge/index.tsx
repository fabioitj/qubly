import Image from "next/image"
import React from "react"

function Badge({image, children}: {image: any, children: any}) {
    return (
        <span className="flex items-center justify-between gap-2 w-fit bg-purple-200 rounded-full px-4 py-1">
            <Image
                src={image}
                alt="Edit Brightness"
                width={16}
                height={16}
                className="h-max"
            />
            {children}
        </span>
    )
}

export default Badge;