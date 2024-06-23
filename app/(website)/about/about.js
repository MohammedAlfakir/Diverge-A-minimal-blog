import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">
          Front-End Developer with 3 years of experience.
        </p>
      </div>

      <div className="mb-16 mt-6 flex items-center justify-center md:mb-32 ">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square h-72 w-72 overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`https://www.mohammedalfakir.site/`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
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
          As a dedicated Front-End Developer with 3 years of hands-on
          experience, I bring expertise in React.js, Next.js,
          Typescript, and Tailwind CSS to the table. My journey in web
          development began with a passion for coding, which has
          evolved into a professional career focused on crafting
          intuitive and visually compelling user interfaces.
        </p>
        <p>
          Im a self-taught developer who changed careers during the
          Covid pandemic. Throughout my tenure, Ive successfully
          delivered projects ranging from dynamic web applications to
          responsive websites, leveraging my proficiency in modern
          frameworks and best practices.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
