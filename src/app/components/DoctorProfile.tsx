
type DoctorProfileProps = {
  name?: string;
  specialization?: string;
  bio?: string;
  education?: string;
  experience?: string;
  photoUrl?: string;
  phone?: string;
  appointmentUrl?: string;
};

export default function DoctorProfile({
  name = 'Dr. Bir Bhdro Roy',
  specialization = 'Homeopathic Physician',
  bio = 'Dr. Bir Bhdro Roy is a highly experienced and compassionate homeopathic physician with over 20 years of practice. He is dedicated to providing holistic and individualized treatment to his patients, focusing on the root cause of illnesses. Dr. Roy believes in empowering his patients with knowledge and guiding them towards a healthier lifestyle.',
  education = 'DHMS, DHAKA',
  experience = '35+ Years',
  photoUrl = '/doctor.jpg',
  phone = '+8801714623846',
  appointmentUrl = '/appointments',
}: DoctorProfileProps) {
  return (
    <div className="w-full mb-8">
      <div className="bg-gradient-to-r from-indigo-50 via-white to-pink-50 p-6 rounded-2xl shadow-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            <div className="rounded-full p-1 bg-gradient-to-tr from-indigo-300 via-purple-200 to-pink-300 shadow-md">
              <div className="rounded-full overflow-hidden w-36 h-36 bg-white ring-4 ring-white">
                <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between flex-col md:flex-row gap-3 md:gap-0">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">{name}</h2>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-100/80 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="9" r="2.2" fill="currentColor" />
                    </svg>
                    {specialization}
                  </span>
                  <span className="text-sm text-slate-500">•</span>
                  <span className="text-sm text-slate-600">{experience}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-black px-3 py-2 rounded-md text-sm font-medium shadow-sm border "
                >
                  <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 5.11 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75c.12.75.37 1.86.8 2.86a1 1 0 0 1-.24 1l-1.27 1.27a16 16 0 0 0 6.22 6.22l1.27-1.27a1 1 0 0 1 1-.24c1 .43 2.11.68 2.86.8a1 1 0 0 1 .75 1V22z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Call
                </a>

                <a
                  href={appointmentUrl}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transform hover:-translate-y-0.5 transition"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 7V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                  Book
                </a>
              </div>
            </div>

            <p className="text-slate-700 mt-4 leading-relaxed">{bio}</p>

            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <div className="text-sm text-slate-600">Education: <span className="font-medium text-slate-800">{education}</span></div>
              <div className="text-sm text-slate-600">Experience: <span className="font-medium text-slate-800">{experience}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
