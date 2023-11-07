
export default function Home() {
  return (
  <div className="wrapper">
    <header className="header">
      <div className="shell">
        <div className="header__inner">
          <div className="logo">
            <p>BelleBloom</p>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Cosmetics Info</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    {/*header*/}
    <div className="main">
      <section className="hero">
        <img src="/images/Background-image.png" alt="" />
        <div className="shell">
          <div className="hero__inner">
            <div className="hero__content">
              <h1>About Cosmetics</h1>
              <p>Learn more about other cosmetics with BELLEBLOOM</p>
              <a href="" className="btn">
                <span>More Information </span>
              </a>
            </div>
          </div>
        </div>
      </section>{" "}
      {/*hero*/}
      <section className="section-image-text">
        <div className="shell">
          <div className="section__inner">
            <header className="section__head">
              <h2>About Us</h2>
            </header>
            <div className="section__body">
              <div className="section__text">
                <h2>Start new info</h2>
                <p>
                  When venturing into the world of cosmetics, knowledge is your
                  beauty compass. That's where our site comes in – your trusted
                  companion in the exciting realm of makeup and skincare. We're
                  here to assist you in discovering the cosmetics that perfectly
                  align with your desires.
                </p>
                <p>
                  At our virtual beauty hub, we don't just introduce you to
                  products; we're your beauty mentors, dedicated to familiarizing
                  you with the art and science of cosmetics. Whether you're a
                  teenager combating unique skin challenges, an adult seeking
                  tailored solutions, or an elegant elder woman embracing the
                  wisdom of age, our expertise spans all generations and skin
                  types.
                </p>
                <p>
                  We delve deeper, not only providing insights into these cosmetic
                  wonders but also addressing skin concerns specific to teenagers,
                  adults, and elder women. Discover the transformative power of
                  our face skin cosmetics, the enchantment of hair cosmetics, and
                  the allure of makeup essentials – all meticulously curated to
                  elevate your beauty experience. Let us be your guides, helping
                  you navigate this vibrant world of colors, textures, and
                  formulations. Here, beauty isn't just skin deep; it's a
                  celebration of individuality. Welcome to a space where your
                  cosmetic aspirations come to life, and your radiant self shines
                  through!
                </p>
              </div>
              <div className="section__image">
                <img src="/images/about-image.png" alt="" />
              </div>
            </div>
            <a href="" className="btn btn--reverse ">
              <span>More </span>
            </a>
          </div>
        </div>
      </section>
      <section className="section-products">
        <div className="shell">
          <div className="section__inner">
            <header className="section__head">
              <h2>Cosmetics Info</h2>
              <nav className="section__nav-categories">
                <ul>
                  <li>
                    <a href="">Blush</a>
                  </li>
                  <li>
                    <a href="">Bronzer</a>
                  </li>
                  <li>
                    <a href="">Eyebrow</a>
                  </li>
                </ul>
              </nav>
              <a href="" className="">
                More<span> </span>
              </a>
            </header>
            <div className="section__body">
              <div className="cards">
                <ul>
                  <li className="card">
                    <img
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/88d74b22173b3f912b2263c4fd505a2b_ra,w158,h184_pa,w158,h184.jpg"
                      alt=""
                    />
                    <h3>Anna Sui Pencil Eyeliner WP</h3>
                  </li>
                  <li className="card">
                    <img
                      src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw6790cad4/ProductImages/Lips/Simply_Nude_Lip_Cream/simplynudlipcream_main.jpg?sw=390&sh=390&sm=fit"
                      alt=""
                    />
                    <h3>Blotted Lip</h3>
                  </li>
                  <li className="card">
                    <img
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/baf991d5944d310d8c337423486b77ea_ra,w158,h184_pa,w158,h184.jpeg"
                      alt=""
                    />
                    <h3>Lippie Stix</h3>
                  </li>
                  <li className="card">
                    <img
                      src="https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803"
                      alt=""
                    />
                    <h3>Diorshow Iconic</h3>
                  </li>
                  <li className="card">
                    <img
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/87772297ba0794c272d7e9f751d3beac_ra,w158,h184_pa,w158,h184.jpeg"
                      alt=""
                    />
                    <h3>Cargo Cosmetics BeachBlush</h3>
                  </li>
                  <li className="card">
                    <img
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/baf991d5944d310d8c337423486b77ea_ra,w158,h184_pa,w158,h184.jpeg"
                      alt=""
                    />
                    <h3>
                      Pacifica Natural Minerals Solar Complete Color Mineral
                      Palette
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-blogs">
        <div className="shell">
          <div className="section__inner">
            <h2>Blogs</h2>
            <ul className="blogs">
              <li>
                <img src="" alt="" />
                <h3 />
                <a href="" />
              </li>
              <li>
                <img src="" alt="" />
                <h3 />
                <a href="" />
              </li>
              <li>
                <img src="" alt="" />
                <h3 />
                <a href="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    {/*main*/}
  </div>
  
  )
}
