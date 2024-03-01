
function ProductCard({ product }) {
    return (
        <div
            className="cardContainer block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                    className="imageCard rounded-t-lg"
                    src={product.image}
                    alt="" />
            </div>
            <div className="p-6">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {product.item}
                </h5>
                <p className="mt-1 text-lg font-medium text-gray-900">£{product.price}</p>
                <p className="text-base text-neutral-600 dark:text-neutral-200">
                    {product.description}
                </p>
            </div>
            <div className="p-6">
                <a
                    type="button"
                    href="#"
                    className="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
                    Add to favourite
                </a>
            </div>
        </div>

    );
}

export default ProductCard;