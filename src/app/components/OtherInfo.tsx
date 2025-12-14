"use client";

type Hours = {
  days?: string;
  morning?: string;
  evening?: string;
};

type OtherInfoProps = {
  clinicName?: string;
  tagline?: string;
  clinic_address?: string;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  services?: string[];
  hours?: Hours;
  photoUrl?: string; // optional clinic photo in `public/`
  mapEmbedUrl?: string; // optional iframe src for embedded map
};

export default function OtherInfo({
  clinicName = 'Our Clinic',
  tagline = 'Compassionate care • Evidence-informed homeopathy',
  clinic_address = 'Anup Homoeo Pharmacy',
  address = 'Vober Bazar, Parbatipur',
  city = 'Dinajpur, Bangladesh',
  phone = '+8801714623846',
  email = 'info@anuphomeohall.com',
  services = [
    'Chronic Disease Management',
    'Acute Illness Treatment',
    'Pediatric Homeopathy',
    "Women's Health",
    'Lifestyle & Nutritional Counseling',
  ],
  hours = { days: 'Saturday - Friday', morning: '10:00 AM - 2:00 PM', evening: '4:00 PM - 10:00 PM' },
  photoUrl,
  mapEmbedUrl,
}: OtherInfoProps) {
  return (
    <section id="contact" className="w-full max-w-auto mb-8">
      <div className="bg-gradient-to-r from-dawn via-white to-rose-50 p-6 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold text-slate-800">{clinicName}</h2>
          <p className="text-sm text-slate-500">{tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: contact + hours */}
          <div className="flex flex-col gap-4">
            <div className="bg-white/90 p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Contact</h3>
              <div className="flex items-start gap-3 text-slate-700">
                <svg className="w-6 h-6 text-indigo-500 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="9" r="2.2" fill="currentColor" />
                </svg>
                <div>
                  <p className="font-bold">{clinic_address}</p>
                  <p className="font-medium">{address}</p>
                  <p className="text-sm text-slate-500">{city}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5v14a2 2 0 0 0 2 2h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 3H7a2 2 0 0 0-2 2v0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 11h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Phone</p>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm text-slate-600 hover:underline " >{phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-rose-500 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Email</p>
                    <a href={`mailto:${email}`} className="text-sm text-slate-600 hover:underline">{email}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Clinic Hours</h3>
              <div className="flex items-center gap-3 text-slate-700">
                <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="font-medium">{hours.days}</p>
                  <p className="text-sm text-slate-500">Morning: {hours.morning}</p>
                  <p className="text-sm text-slate-500">Evening: {hours.evening}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: services + photo/map */}
          <div className="flex flex-col gap-4">
            {photoUrl || mapEmbedUrl ? (
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                {photoUrl && !mapEmbedUrl ? (
                  <img src={photoUrl} alt={`${clinicName} photo`} className="w-full h-48 object-cover" />
                ) : null}
                {mapEmbedUrl ? (
                  <div className="w-full h-48">
                    <iframe
                      src={mapEmbedUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="clinic-location"
                    />
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="bg-white/95 p-5 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Services Offered</h3>
              <div className="flex flex-wrap -m-1">
                {services.map((s) => (
                  <span
                    key={s}
                    className="m-1 inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-pink-500 shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-500 mt-4">We combine traditional homeopathic knowledge with individualized care plans.</p>
            </div>

            <div className="bg-white/90 p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-tr from-rose-100 to-indigo-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 10v6a6 6 0 0 0 12 0v-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Patient-first Care</p>
                <p className="text-sm text-slate-500">Flexible appointments, follow-ups, and remote consultation support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
