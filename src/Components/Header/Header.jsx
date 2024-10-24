

const Header = () => {
    return (
        <div className="flex justify-between mt-10">
            <h2 className="text-2xl font-bold">Logo</h2>
            <div >
                <ul className="flex gap-5 text-xl font-medium">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Cart 1</li>
                    <li>$500</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;