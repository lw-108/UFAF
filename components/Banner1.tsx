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
  description = "Verified and legally registered institution",
  linkText = "View Proof",
  linkUrl = "#",
  codes = [],
}: Banner1Props) => {
  return (
    <section className="w-full px-4 py-4 mt-4 bg-transparent">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        
        {/* **Verified / Registration Codes** */}
        {codes.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {codes.map((code, index) => (
              <span
                key={index}
                className="px-3 py-1 font-mono text-xs font-semibold tracking-wide uppercase rounded-md bg-primary/10 text-primary md:text-sm"
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
              {/* <a
                href={linkUrl}
                className="font-medium underline hover:text-foreground underline-offset-2"
                target="_blank"
              >
                {linkText}
              </a> */}
              .
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export { Banner1 };


