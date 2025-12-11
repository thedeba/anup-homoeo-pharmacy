"use client";

export default function Blogs() {
  const posts = [
    {
      id: 1,
      title: "Homeopathy for Common Cold",
      excerpt: "Gentle, natural approaches to support recovery and ease symptoms.",
    },
    {
      id: 2,
      title: "Managing Chronic Conditions",
      excerpt: "How individualized homeopathic plans can support long-term wellness.",
    },
    {
      id: 3,
      title: "Lifestyle Tips for Better Health",
      excerpt: "Small daily changes that have an outsized impact on your wellbeing.",
    },
  ];

  return (
    <section id="blogs" className="w-full max-w-7xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6">Blogs & Resources</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.id} className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.excerpt}</p>
            <a href="#" className="text-blue-600 hover:underline">Read more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
