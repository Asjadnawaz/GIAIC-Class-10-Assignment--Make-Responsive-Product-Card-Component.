import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="grid gap-8 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="p-4 border rounded-lg shadow-lg">
                <div className="flex items-center justify-center">
                    <Image
                        src="/a_misty_enchanted_forest_at_sunrise_where.jpeg"
                        alt="Product One"
                        width={300}
                        height={300}
                        className="rounded-md"
                    />
                </div>
                <p className="text-center pt-5 text-lg font-semibold">Nature</p>
                <div className="flex justify-center items-center mt-3">
                    <button className="px-8 py-2 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 border rounded-lg shadow-lg">
                <div className="flex items-center justify-center">
                    <Image
                        src="/Fantastic City Space.jpeg"
                        alt="Product Two"
                        width={300}
                        height={300}
                        className="rounded-md"
                    />
                </div>
                <p className="text-center pt-5 text-lg font-semibold">Nature</p>
                <div className="flex justify-center items-center mt-3">
                    <button className="px-8 py-2 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 border rounded-lg shadow-lg">
                <div className="flex items-center justify-center">
                    <Image
                        src="/Untitled design (1).png"
                        alt="Product Three"
                        width={300}
                        height={300}
                        className="rounded-md"
                    />
                </div>
                <p className="text-center pt-5 text-lg font-semibold">Nature</p>
                <div className="flex justify-center items-center mt-3">
                    <button className="px-8 py-2 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
