import React from 'react'

export default function Hero() {
  return (
    <section
      name="Home"
      className="bg-white text-black flex flex-col md:flex-row justify-center items-center text-white px-6 md:px-8 py-20"
    >
      <div className="text-black text-center md:text-left text-3xl md:text-2xl container mx-auto px-4 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Welcome to El-Taref The <br />
          <span className="text-orange-600">Ultimate App</span>
          <br />
          For El-Taref Citizen
        </h1>
        <p className="text-lg text-gray-600 md:text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
          Your one-stop solution for all your needs.
        </p>
        <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition">
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dnibra.eltarf.dz%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSnV4RWxkeGp4YVRqTEtrTQEe2hedlmf50WInahq39ji6sY28HUl0j5KaUKIzAJZIQmeuQqhE5ucxkb9ODdE_aem_SdOeS3CSedOuQYdbcsbtHA&h=AT3DtdSxfsL5UeJIVpGEtLChELT-dqWNBSuZE74XzpVhND0-S02nfTQ5Wjr7-hXw1Wei9Lme_DuLnz2NYBIDwDcptRg4Mzq5xE84OJdcXznzwYmaQ0-04Ndi2Xa1Du4vCTN0DNYgvba9T8o6Hg&__tn__=-UK-R&c[0]=AT0gCWmxe8zvcNwpGR09IUhDauKbeTySDsFaZSwo6J4oodZn1ic_5owYekQnBh0JMCDA7qOHxR48LJPqvVR7M3NjvV-ei6ss3nPWzeGYRnzugoWP2EiEkYfSzDQbBJV3yos_b4SqFxgJpkMpBm4yknEQa_XlUpeIQj0CW49g2djipFnN-q11MSnVb2aK96zhXjgw4l15PoIS9oqv6-j4_jv3h5SgniKfcEWRliqpG6DPa-8Fi2q6WQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </button>
      </div>
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/decoration.png"
          alt="Hero Image"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

