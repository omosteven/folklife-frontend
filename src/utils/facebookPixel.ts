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

const trackEvent = (event: string, data?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", event, data);
  }
};

export { trackEvent };

export default initFacebookPixel;
