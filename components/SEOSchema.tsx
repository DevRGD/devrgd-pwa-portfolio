'use client';

export default function SEOSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'DevRGD',
    url: 'https://devrgd.vercel.app/',
    sameAs: ['https://github.com/DevRGD', 'https://www.linkedin.com/in/devrgd', 'https://twitter.com/devrgd'],
    jobTitle: 'Full Stack MERN Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Self-employed',
    },
    knowsAbout: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Frontend',
      'Backend',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}
