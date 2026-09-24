const selectedWorks = [
{
title: "Artwork One",
category: "Original Work",
image: "/artworks/artwork-1.jpg",
},
{
title: "Artwork Two",
category: "Original Work",
image: "/artworks/artwork-2.jpg",
},
{
title: "Artwork Three",
category: "Original Work",
image: "/artworks/artwork-3.jpg",
},
];

export default function Home() {
return ( <main> <section className="hero"> <div className="container hero-inner"> <div className="hero-copy"> <p className="eyebrow">Artist · Dipali Singh</p>

```
        <h1>
          Art that holds
          <em> a moment.</em>
        </h1>

        <p className="hero-description">
          Contemporary artwork created with attention to colour,
          texture, atmosphere, and the quiet details that make a piece
          feel personal.
        </p>

        <div className="hero-actions">
          <a href="/shop" className="button button-primary">
            Explore Artwork
          </a>

          <a href="/commission" className="editorial-link">
            Commission Artwork
          </a>
        </div>
      </div>

      <div className="hero-artwork">
        <div className="hero-artwork-placeholder">
          <span>Artwork Image</span>
        </div>

        <p className="artwork-caption">
          Featured work · Dipali Singh
        </p>
      </div>
    </div>
  </section>

  <section className="selected-works">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected Works</p>
          <h2>A quiet collection of recent work.</h2>
        </div>

        <a href="/shop" className="editorial-link">
          View all artwork
        </a>
      </div>

      <div className="artwork-grid">
        {selectedWorks.map((work, index) => (
          <article
            className={`artwork-card artwork-card-${index + 1}`}
            key={work.title}
          >
            <div className="artwork-image-placeholder">
              <span>Artwork {index + 1}</span>
            </div>

            <div className="artwork-card-info">
              <div>
                <h3>{work.title}</h3>
                <p>{work.category}</p>
              </div>

              <a href="/shop" className="editorial-link">
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="artist-intro">
    <div className="container artist-intro-grid">
      <p className="eyebrow">The Artist</p>

      <div>
        <h2>
          A practice shaped by observation, material, and expression.
        </h2>

        <p>
          Dipali Singh's work explores the relationship between colour,
          form, texture, and feeling. Each artwork is developed with a
          focus on the physical qualities of the medium and the character
          of the finished piece.
        </p>

        <a href="/about" className="editorial-link">
          Discover the artist
        </a>
      </div>
    </div>
  </section>

  <section className="commission">
    <div className="container commission-inner">
      <p className="eyebrow">Commission</p>

      <h2>
        Have an artwork in mind?
      </h2>

      <p>
        Share your idea and discuss a custom artwork created specifically
        for you.
      </p>

      <a href="/commission" className="button button-light">
        Request a Commission
      </a>
    </div>
  </section>
</main>
```

);
}
