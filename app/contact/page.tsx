'use client';

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 bg-bg text-text-primary">
      <div className="absolute inset-0 -z-10 bg-tech-gradient opacity-15 blur-[100px]" />
      <div className="relative w-full max-w-xl rounded-md border border-border/80 bg-surface/70 shadow-glow p-10 text-center backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold text-primary mb-6">Contact</h1>
        <p className="text-text-secondary mb-8">
          Want to collaborate or just say hi? Reach out through the form below!
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-bg/40 border border-border rounded-md p-3 focus:outline-none focus:border-primary text-text-primary placeholder-text-secondary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-bg/40 border border-border rounded-md p-3 focus:outline-none focus:border-primary text-text-primary placeholder-text-secondary"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="bg-bg/40 border border-border rounded-md p-3 focus:outline-none focus:border-primary text-text-primary placeholder-text-secondary"
          />
          <button
            type="submit"
            className="mt-2 bg-primary text-text-primary hover:bg-accent px-6 py-3 rounded-md font-semibold text-lg shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-100"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
