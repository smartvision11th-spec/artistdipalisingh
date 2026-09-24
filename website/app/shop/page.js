import Link from "next/link";
import Image from "next/image";
import artworks from "../../data/artworks";

export default function ShopPage() {
return ( <main className="shop-page"> <section className="shop-header"> <div className="container"> <p className="eyebrow">The Collection</p> <h1>Artwork available to collect.</h1> <p className="shop-intro">
Explore original works by Dipali Singh, created with attention to
colour, texture, material, and atmosphere. </p> </div> </section>

  <section className="shop-collection">
    <div className="container">
      <div className="shop-grid">
        {artworks.map((artwork) => (
          <article className="shop-artwork" key={artwork.id}>
            <Link
              href={`/artwork/${artwork.id}`}
              className="shop-image"
              style={{
                aspectRatio: `${artwork.width} / ${artwork.height}`,
              }}
            >
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </Link>

            <div className="shop-artwork-info">
              <div>
                <h2>{artwork.title}</h2>
                <p>{artwork.medium}</p>
              </div>

              <div className="shop-artwork-meta">
                <p>₹{artwork.price.toLocaleString("en-IN")}</p>
                <Link
                  href={`/artwork/${artwork.id}`}
                  className="editorial-link"
                >
                  View Artwork
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
</main>

);
}
