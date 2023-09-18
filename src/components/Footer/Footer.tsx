import SingleCol from "./SingleCol";

const Footer = () => {
  return (
    <div className=" p-5 flex justify-around bg-gray-300 flex-wrap">
      <SingleCol
        title="company info"
        items={[
          "about us",
          "privacy policy",
          "terms",
          "partners",
          "sustainability",
        ]}
      />
      <SingleCol
        title="customer care"
        items={[
          "Help Center",
          "how to buy",
          "returns & refunds",
          "system",
          "complain management",
        ]}
      />
      <SingleCol
        title="Nazshop"
        items={[
          "About NazShop",
          "digital payments",
          "nazshop blog",
          "nazshop mart",
          "nazshop app",
        ]}
      />
      <SingleCol
        title="Help & support"
        items={[
          "Shipping & Delivery",
          "Return Policy",
          "Tracking order",
          "about wallet",
          "affiliate program",
        ]}
      />
    </div>
  );
};

export default Footer;
