export default function Footer() {
  const headingStyle = {
    fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
    fontWeight: 600,
    fontSize: "16px",
  };

  const linkStyle = {
    fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
    fontWeight: 400,
    fontSize: "14px",
  };

  const bodyStyle = {
    fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "1.6",
  };

  const iconWrap =
    "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white";

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: "url('/assets/wave for footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* top spacing so content starts below the wave curve */}
        <div className="pt-24 md:pt-28 pb-10 md:pb-14">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
            {/* brand */}
            <div>
              <div className="flex items-start gap-3">
                <img
                  src="/assets/logo.png"
                  alt="Nourished"
                  className="h-12 w-12"
                />
              </div>

              <p className="mt-6 max-w-[320px] text-white/85" style={bodyStyle}>
                Fresh, vegetarian meals designed for growing kids. Delivered daily
                with safety, nutrition, and parent transparency at the core
              </p>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className={iconWrap}
                >
                  <img
                    src="/assets/socailmediaicon/facebook (1).png"
                    alt=""
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className={iconWrap}
                >
                  <img
                    src="/assets/socailmediaicon/insta.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className={iconWrap}
                >
                  <img
                    src="/assets/socailmediaicon/x.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>

            {/* quick links */}
            <div>
              <div style={headingStyle} className="text-white/90">
                Quick Links
              </div>
              <ul className="mt-6 space-y-4 text-white/75" style={linkStyle}>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Weekly Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* locations */}
            <div>
              <div style={headingStyle} className="text-white/90">
                Locations We Serve
              </div>
              <ul className="mt-6 space-y-4 text-white/75" style={linkStyle}>
                <li>Schools</li>
                <li>Hostels</li>
                <li>Learning Centers</li>
              </ul>
            </div>

            {/* address */}
            <div>
              <div style={headingStyle} className="text-white/90">
                Address
              </div>

              <div className="mt-6 space-y-4 text-white/75" style={linkStyle}>
                <div>
                  <div className="text-white/90" style={{ ...headingStyle, fontSize: "15px" }}>
                    Nourished Foods Pvt. Ltd.
                  </div>
                  <div className="mt-2 leading-relaxed">
                    Plot No. 24, Evergreen Towers, 5th Floor,
                    <br />
                    Hitech City, Hyderabad, Telangana – 500081
                  </div>
                </div>

                <div className="space-y-2">
                  <div>Email: support@nourished.com</div>
                  <div>Phone: +91 XXXXXXXXXX</div>
                </div>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="mt-14 h-px w-full bg-white/20" />

          {/* bottom bar */}
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-white/70" style={linkStyle}>
              Copyright © 2025 | Naurished
            </div>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-white/70" style={linkStyle}>
              <a href="#" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


