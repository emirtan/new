import Container from "../components/Container";
import { Link } from "react-router-dom";

const About = () => {
  const authors = [
    {
        image: "img/emirhan_sonmez.png",
        name: "Emirhan"
    },
    {
        image: "img/emirhan_sonmez2.png",
        name: "Emirhan"
    },
    {
        image: "img/emirhan_sonmez3.png",
        name: "Emirhan"
    }
  ];

  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Hakkımızda
      </h1>
      <div className="text-center">
        <p className="text-lg">Biz büyüme odaklı istikrarlı bir kuruluşuz.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = author?.image || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <img
                    src={imageProps}
                    alt={author?.name || " "}
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
        Kurumların ihtiyaçlarına özel sunduğumuz son teknoloji çözümlerle iş süreçleriniz boyunca yanınızdayız.
        </p>
        <p>
        SaaS uygulamalarımız, yapay zeka destekli yüksek kararlılık ile çalışan yazılım çözümlerimiz ile sektöre yön veren projelere imza atıyoruz.
        </p>
        <p>
          <Link href="/contact">Bizimle İletişime Geç</Link>
        </p>
      </div>
    </Container>
  )
}

export default About