import React, { useState } from 'react';
import { User, BookOpen, Camera, Mail, ExternalLink, Award, Microscope, ChevronRight, Github, Linkedin, Leaf } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const profile = {
    name: "Perpetual Tetteh",
    title: "Conservation Biologist & Entomologist",
    bio: "Passionate researcher focused on sustainable pest management and vector control. My work explores the intersection of botanical chemical ecology and public health, with a specific focus on natural alternatives to synthetic insecticides.",
    email: "perpetual.tetteh@example.com",
    university: "University of Cape Coast, Ghana"
  };

  const research = {
    title: "Behavioural Response of Aedes aegypti to Odours from Three Plant Materials",
    abstract: "Investigated the repellent efficacy of Chromolaena odorata, Synedrella nodiflora, and Cymbopogon citratus against Aedes aegypti using Y-tube olfactometry. My findings identified Synedrella nodiflora as a high-potential candidate for botanical repellent development.",
    skills: ["Olfactometry", "Insect Rearing", "Bioassay Design", "Statistical Analysis (SPSS/R)", "Field Identification"]
  };

  const photos = [
    { id: 1, title: "Lab Setup", category: "Research", url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Fieldwork", category: "Conservation", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Vector Study", category: "Entomology", url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" }
  ];

  // Earthy Color Palette
  const colors = {
    primary: "text-emerald-800",
    secondary: "text-amber-800",
    accent: "bg-emerald-700",
    accentHover: "hover:bg-emerald-800",
    lightBg: "bg-[#fdfcf8]", // Light parchment/soil cream
    border: "border-amber-100"
  };

  return (
    <div className={`min-h-screen ${colors.lightBg} text-slate-800 font-sans`}>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-emerald-700" size={20} />
            <span className={`font-bold text-xl tracking-tight ${colors.primary}`}>{profile.name}</span>
          </div>
          <div className="flex gap-6 text-sm font-semibold">
            {['home', 'research', 'photography', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize transition-colors ${activeTab === tab ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-amber-900/60 hover:text-emerald-700'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {activeTab === 'home' && (
          <div className="space-y-16 animate-in fade-in duration-700">
            <section className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-56 h-56 bg-amber-50 rounded-2xl flex items-center justify-center border-2 border-amber-100 shadow-sm overflow-hidden shrink-0 rotate-3">
                <User size={100} className="text-emerald-800 -rotate-3" />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <h1 className={`text-5xl font-black ${colors.primary} tracking-tight leading-tight`}>
                  Nature’s Chemistry, <br />
                  <span className="text-amber-800 italic">Redefined.</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                  {profile.bio}
                </p>
                <div className="flex gap-4 justify-center md:justify-start pt-2">
                  <button onClick={() => setActiveTab('research')} className={`${colors.accent} text-white px-8 py-3 rounded-full font-bold ${colors.accentHover} transition shadow-lg flex items-center gap-2`}>
                    Explore Research <ChevronRight size={18} />
                  </button>
                  <button className="border-2 border-amber-200 text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition">
                    Curriculum Vitae
                  </button>
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-50 hover:shadow-md transition">
                <Microscope className="text-emerald-700 mb-6" size={40} />
                <h3 className={`font-bold text-xl mb-3 ${colors.primary}`}>Olfactometry</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Specialized in bioassay design to decode how vectors interact with botanical volatiles.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-50 hover:shadow-md transition">
                <BookOpen className="text-amber-800 mb-6" size={40} />
                <h3 className={`font-bold text-xl mb-3 ${colors.secondary}`}>Sustainability</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Advocating for biopesticides as a safer, ecological alternative to synthetic chemistry.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-50 hover:shadow-md transition">
                <Camera className="text-emerald-700 mb-6" size={40} />
                <h3 className={`font-bold text-xl mb-3 ${colors.primary}`}>Conservation</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Documenting the rich biodiversity of Ghana through a lens of scientific preservation.</p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'research' && (
          <div className="space-y-10 animate-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-amber-50">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                <div className="h-px w-8 bg-amber-800"></div> Research Thesis
              </div>
              <h2 className={`text-3xl font-black mb-6 ${colors.primary} leading-tight`}>{research.title}</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  {research.abstract}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-10">
                {research.skills.map(skill => (
                  <span key={skill} className="bg-amber-50 text-amber-900 border border-amber-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="bg-emerald-900 text-emerald-50 p-8 rounded-2xl shadow-inner relative overflow-hidden">
                 <Leaf className="absolute -right-4 -bottom-4 opacity-10 rotate-45" size={120} />
                 <p className="text-lg font-medium relative z-0 italic">"My investigation identified that Cymbopogon citratus induces a 100% repellent response in female Aedes aegypti, suggesting its immense potential for commercial organic repellents."</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'photography' && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className={`text-4xl font-black mb-4 ${colors.primary}`}>The Scientific Lens</h2>
              <p className="text-slate-500 text-lg">Visual stories from field expeditions and laboratory insights across Ghana.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map(photo => (
                <div key={photo.id} className="group relative rounded-[2rem] overflow-hidden shadow-sm aspect-[4/5] bg-slate-200 border-4 border-white">
                  <img src={photo.url} alt={photo.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <p className="text-white text-xl font-bold mb-1">{photo.title}</p>
                    <p className="text-emerald-300 font-medium uppercase tracking-widest text-xs">{photo.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto text-center space-y-12 animate-in zoom-in-95 duration-700">
            <div className="space-y-4">
              <h2 className={`text-4xl font-black ${colors.primary}`}>Let's Collaborate</h2>
              <p className="text-slate-500 text-lg">Interested in vector ecology, soil health, or conservation photography? Let's start a conversation.</p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-amber-50 space-y-8">
              <a href={`mailto:${profile.email}`} className={`flex items-center justify-center gap-3 text-2xl font-bold ${colors.primary} hover:text-emerald-600 transition underline underline-offset-8 decoration-amber-200`}>
                <Mail size={28} /> {profile.email}
              </a>
              <div className="flex justify-center gap-8 pt-8 border-t border-amber-50">
                <button className="text-amber-900/40 hover:text-emerald-700 transition transform hover:-translate-y-1"><Linkedin size={32} /></button>
                <button className="text-amber-900/40 hover:text-emerald-700 transition transform hover:-translate-y-1"><Github size={32} /></button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-emerald-950 text-emerald-100/40 py-16 mt-24">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="text-emerald-500" size={16} />
            <p className="font-bold text-emerald-100">Perpetual Tetteh</p>
          </div>
          <p className="text-xs uppercase tracking-[0.3em]">Researcher Portfolio 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
