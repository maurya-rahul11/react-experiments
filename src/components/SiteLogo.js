import { SITE_LOGO_URL } from "../utils/constants";

const SiteLogo = () => {
  return (
    <div className="site-logo">
      <img src={SITE_LOGO_URL} alt="Site Logo" />
    </div>
  );
};

export default SiteLogo;