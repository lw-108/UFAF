"use client";

interface Banner1Props {
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  codes?: string[];
}


const Banner1 = ({
  title = "Ufill Academy - Official Notice",
  description = "Verified and legally registered institution.",
  linkText = "View Proof",
  linkUrl = "#",
  codes = [],
}: Banner1Props) => {
  return (
    <section className="bg-background w-full px-4 py-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        
        {/* **Verified / Registration Codes** */}
        {codes.length > 0 && (
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {codes.map((code, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-md font-mono font-semibold tracking-wide uppercase"
              >
                {code}
              </span>
            ))}
          </div>
        )}

        {/* Banner Content */}
        <div className="text-center md:text-left">
          <span className="text-sm">
            <span className="font-medium">{title}</span>{" "}
            <span className="text-muted-foreground">
              {description}{" "}
              <a
                href={linkUrl}
                className="hover:text-foreground underline underline-offset-2 font-medium"
                target="_blank"
              >
                {linkText}
              </a>
              .
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export { Banner1 };
