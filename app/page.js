import Head from 'next/head';

export default function MaPage() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#009473] to-[#5F4B8B] p-8">
      <Head>
        <title>Page Dégradé</title>
      </Head>
      <h1 style={{
          background: 'linear-gradient(to bottom, #009473, #F5DF4D)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          fontSize: '95px',
          margin: 0, // Pour s'assurer que le texte est vraiment tout en haut à gauche
        }}
        className="text-left font-bold"
      >
        ILLUMINATI
      </h1>
    </div>
  );
}
