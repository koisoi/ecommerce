import CartTableTemplate from "./cartTable.template";

const CartTable = ({ full }: { full?: boolean }) => {
    return <CartTableTemplate items={[]} full={full} />;
};

export default CartTable;
