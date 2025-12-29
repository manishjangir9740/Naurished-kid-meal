import { useCallback } from "react";


function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const labelStyle = {
    fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
  };

  const inputStyle = {
    fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
  };

  return (
    <section className="relative  py-20">
      <div className="mx-auto max-w-[1240px] px-6">
      <div
  className="relative mx-auto w-full overflow-hidden"
  style={{
    backgroundImage: "url('/Naurished-kid-meal/assets/wave for 8th section.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "100% 93%",
    minHeight: "677px",
  }}
>
<img
  src={`/Naurished-kid-meal/assets/section8/inspyrenet2.png`}
  alt="Child holding a lunchbox"
  className="
    pointer-events-none
    absolute
    bottom-0
    left-[-10px]
    hidden
    md:block
    h-[720px]
    w-auto
    max-w-[720px]
    object-contain
    select-none
  "
  style={{
    WebkitMaskImage:
      "linear-gradient(to bottom, black 97%, transparent 98%)",
    maskImage:
      "linear-gradient(to bottom, black 97%, transparent 98%)",
  }}
/>



          {/* content */}
          <div className="relative z-10 px-1 py-12 md:px-4 md:py-14 md:pl-[520px] md:pr-14">
            {/* Mobile image */}
            <div className="mb-8 flex justify-center md:hidden">
              <img
                src={`/Naurished-kid-meal/assets/section8/inspyrenet2.png`}
                alt="Child holding a lunchbox"
                className="h-[400px] sm:h-[500px] w-full max-w-[550px] sm:max-w-[750px] object-contain"
              />
            </div>

            <div className="max-w-[620px] p-6 sm:p-8 md:p-10">
              <h2
                className="text-black"
                style={{
                  fontFamily: "'Chillax', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: "1.05",
                }}
              >
                We&apos;re Here to Help
              </h2>

              <p
                className="mt-2 text-black"
                style={{
                  fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                Send us a message and our team will get back to you quickly.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-black text-[16px] mb-2" style={labelStyle}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-[10px] bg-white px-4 py-3 text-black placeholder:text-black/70 outline-none"
                    style={inputStyle}
                  />
                </div>

                {/* Email + Mobile */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-black text-[16px] mb-2" style={labelStyle}>
                      Email ID
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email id..."
                      className="w-full rounded-[10px] bg-white px-4 py-3 text-black placeholder:text-black/70 outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-black text-[16px] mb-2" style={labelStyle}>
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number..."
                      className="w-full rounded-[10px] bg-white px-4 py-3 text-black placeholder:text-black/70 outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-black text-[16px] mb-2" style={labelStyle}>
                    Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your Message...."
                    className="w-full resize-none rounded-[10px] bg-white px-4 py-3 text-black placeholder:text-black/70 outline-none"
                    style={inputStyle}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-3 rounded-tr-[16px] rounded-bl-[16px] bg-white text-black px-6 py-3 overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.25)]"
                    style={{
                      fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                    }}
                  >
                    {/* LEFT-BOTTOM → CENTER */}
                    <span
                      className="absolute inset-0 bg-black translate-x-[-100%] translate-y-[100%] transition-transform duration-400 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                      style={{
                        clipPath: "polygon(0% 100%, 0% 0%, 110% 100%)"
                      }}
                    />

                    {/* RIGHT-TOP → CENTER */}
                    <span
                      className="absolute inset-0 bg-black translate-x-[100%] translate-y-[-100%] transition-transform duration-400 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                      style={{
                        clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)"
                      }}
                    />

                    {/* Content */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Submit
                    </span>
                    <ArrowRightIcon className="relative z-10 h-5 w-5 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


