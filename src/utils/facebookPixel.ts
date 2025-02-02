import ReactPixel from "react-facebook-pixel";

const pixelId = "1990429981453307";

const options = {
  autoConfig: true,
  debug: false,
};

const initFacebookPixel = () => {
  ReactPixel.init(pixelId, {} as any, options);
  ReactPixel.pageView();
};

export default initFacebookPixel;
