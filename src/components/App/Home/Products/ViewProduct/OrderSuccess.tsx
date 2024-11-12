const OrderSuccess = ({
  noOfItems,
  productName,
}: {
  noOfItems: number;
  productName: string;
}) => {
  return (
    <div className="view-product">
      <h3>Order Successful</h3>
      <p>
        Thank you for placing an order for {noOfItems} piece(s) of {productName}.
        We will be in touch with you via either email or phone.
      </p>
    </div>
  );
};

export default OrderSuccess;
