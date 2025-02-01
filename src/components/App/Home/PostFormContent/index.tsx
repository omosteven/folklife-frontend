import assets from "assets";

const PostFormContent = () => {
  return (
    <section className="content">
      {/* <div>
        <h1>Money-Back Guarantee</h1>
        <p>
          We are confident in Ponagon’s effectiveness. If you are unsatisfied
          within 30 days, we will offer a full refund—no questions asked.
        </p>
      </div>
      <br />
      <div>
        <h1>Have Questions? We are here to help!</h1>
        <p>Phone: 08086563502</p>
        <p>Email: forklifesolutions@gmail.com</p>
        <p>WhatsApp: 08147912128</p>
      </div> */}
      <div>
        <h1 className="center">Money-Back Guarantee</h1>
        <p className="center">
          If you are unsatisfied within 30 days, we will offer a full refund...
        </p>
        <div className="flex-images">
          <div className="imags">
            <img src={assets.images.page9} alt="Are you tired?" />
          </div>
          <div className="images">
            <img src={assets.images.page9_1} alt="Are you tired?" />
          </div>
        </div>
        <br />
        <div>
          <h1 className="center">Have Questions? We are here to help!</h1>
          <div className="middle center">
            <p className="center">Phone: 08086563502</p>
            <p className="center">Email: forklifesolutions@gmail.com</p>
            <p className="center">WhatsApp: 08147912128</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostFormContent;
