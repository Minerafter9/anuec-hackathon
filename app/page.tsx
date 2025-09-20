// app/page.tsx
import SubscribeForm from "@/components/SubscribeForm";

export default function HomePage() {
  return (
    <section className="container">
      <h1 className="h1">Welcome to Anuecthing</h1>
      <p className="lede">
        Fully keyboard accessible and mobile-friendly. Use the cards below to jump in.
      </p>

      <div className="grid">
        <article className="card" tabIndex={0}>
          <h2 className="h2">
            <a href="/resources" className="link">Resources</a>
          </h2>
          <p className="muted">
            Curated links, guides, and tools. Each item includes a plain-language description and tags.
          </p>
        </article>

        <article className="card" tabIndex={0}>
          <h2 className="h2">
            <a href="/events" className="link">Events</a>
          </h2>
          <p className="muted">
            Upcoming and past events with filters for faculty, location, and accessibility features.
          </p>
        </article>
      </div>

      <hr className="rule" />

      <section aria-labelledby="subscribe-heading" className="newsletter">
        <h2 id="subscribe-heading" className="h2">Get updates</h2>
        <SubscribeForm />
      </section>
    </section>
  );
}
