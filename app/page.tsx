import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto md:p-2 lg:p-6 xl:p-12">
      <h1 className="text-3xl font-bold mb-4">Hello 👋</h1>
      <p className="text-lg mb-4">
        My name is Brian Coyle. I am a proud parent of two boys and a very lucky husband.
      </p>
      <p className="text-lg mb-4">
        I have spent the majority of my 25-year career in and around the contact center technology space. Most recently, I held a couple of roles at Twilio, including helping build and scale Twilio&apos;s first Professional Services team.
      </p>
      <p className="text-lg mb-4">
        Currently, I am getting back to building with a focus on computer vision. Check out my current projects on{' '}
        <Link
          href="https://github.com/bcoyle73?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          GitHub
        </Link>
        .
      </p>
    </div>
  );
}
