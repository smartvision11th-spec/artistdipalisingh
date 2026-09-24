import Image from "next/image";
import Link from "next/link";
import artworks from "../../../data/artworks";

export default async function ArtworkDetailPage({ params }) {
const { id } = await params;
const artwork = artworks.find((item) => item.id === id);

if (!artwork) {
return ( <main className="artwork-detail-page"> <div className="container artwork-not-found"> <p className="eyebrow">Artwork</p> <h1>Artwork not found.</h1> <Link href="/shop" className="editorial-link">
Return to the collection </Link> </div> </main>
);
}

return ( <main className="artwork-detail-page"> <section className="artwork-detail"> <div className="container artwork-detail-grid">
<div
className="artwork-detail-image"
style={{
aspectRatio: `${artwork.width} / ${artwork.height}`,
}}
>
<Image
src={artwork.image}
alt={artwork.title}
fill
sizes="(max-width: 900px) 100vw, 58vw"
style={{ objectFit: "contain" }}
priority
/> </div>

      <div className="artwork-detail-content">
        <p className="eyebrow">{artwork.category}</p>

        <h1>{artwork.title}</h1>

        <p className="artwork-detail-artist">Dipali Singh</p>

        <p className="artwork-detail-price">
          ₹{artwork.price.toLocaleString("en-IN")}
        </p>

        <div className="artwork-detail-description">
          <p>{artwork.description}</p>
        </div>

        <div className="artwork-detail-meta">
          <div>
            <span>Medium</span>
            <strong>{artwork.medium}</strong>
          </div>

          <div>
            <span>Size</span>
            <strong>
              {artwork.width} × {artwork.height} px
            </strong>
          </div>

          <div>
            <span>Edition</span>
            <strong>Original</strong>
          </div>

          <div>
            <span>Availability</span>
            <strong>
              {artwork.available ? "Available" : "Sold"}
            </strong>
          </div>
        </div>

        {artwork.available && (
          <button type="button" className="button button-primary">
            Add to Cart
          </button>
        )}

        <div className="artwork-detail-commission">
          <p>
            Looking for something created specifically for you?
          </p>
          <Link href="/commission" className="editorial-link">
            Explore commissions
          </Link>
        </div>
      </div>
    </div>
  </section>
</main>
);
}
