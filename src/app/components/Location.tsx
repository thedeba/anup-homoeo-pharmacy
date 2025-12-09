"use client";

export default function Location() {
  return (
    <section id="location" className="w-full max-w-7xl mx-auto mt-12 bg-white p-6 rounded shadow-sm">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Location & Hours</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-2 font-medium text-gray-600 mb-3">Anup Homeo Pharmacy</p>
          <p className="text-gray-700">Voberbazar, Parbatipur, Dinajpur, Bangladesh</p>
          <h3 className="mt-4 font-semibold text-gray-800 mb-2">Opening Hours</h3>
          <ul className="text-gray-700">
            <li>Sun - Mon</li>
            <li>Morning: 10:00 AM - 2:00 PM</li>
            <li>Evening: 4:00 PM - 10:00 PM</li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="w-full h-64 bg-gray-100 rounded overflow-hidden">
            {/* Updated OpenStreetMap embed for Anup Homeo Hall location */}
            <iframe
              title="clinic-map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.848716%2C25.661573%2C88.850716%2C25.663573&layer=mapnik&marker=25.66279%2C88.84933"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
