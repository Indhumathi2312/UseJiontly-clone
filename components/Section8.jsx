import React from "react";
const Section8CompanyLogoAlice = "/images/698b0454f423fd677b43bfda_alicepgraphic.avif";
const Section8AvatarAlice = "/images/68449725bc4d7af1614425b1_alice.avif";
const Section8CompanyLogoChloe = "/images/6989dce7e1d2bd947ac6f95f_CarichCare-LogoExtended-RGB-White.avif";
const Section8AvatarChloe = "/images/684497e2dfe4e67d0ecf1464_chloe.avif";
const Section8CompanyLogoAndrew = "/images/6989dd7a082f20cd0076c6d3_Vector.avif";
const Section8AvatarAndrew = "/images/6844976551a8b2f1e3aa1970_andrew.avif";
const Section8CompanyLogoCharles = "/images/6989ddafe4a0725437eb3e79_cloudline.avif";
const Section8AvatarCharles = "/images/68bb1e801fd681de3b81865e_charles.avif";
const Section8CompanyLogoJarl = "/images/6989ddd81913ef45a7826052_logo.avif";
const Section8AvatarJarl = "/images/684498fadecf4549780b64ec_Jarl Hobbs.avif";
const Section8CompanyLogoAimee = "/images/698b1101ffa511ca29c7962c_thx.avif";
const Section8AvatarAimee = "/images/6989df0f0448aea01fb4a38b_4c2b0bf9-5b5b-45a6-87ef-fea5754d4267_thumb.avif";
const Section8AvatarMemojiOne = "/images/69a07934e40c7c34af9e081b_Female Memojis.png";
const Section8AvatarMemojiTwo = "/images/69a0794475d6417c97fbefb1_Female Memojis-1.png";
const Section8AvatarMemojiThree = "/images/69a0795fa62594e1e55db1aa_asdasd.png";

const testimonials = [
  {
    quote: "It's so refreshing to have an agency break the stereotypical agency mould and work with their clients in a revitalised way.",
    name: "Alice Simmonds",
    title: "Creative Director",
    companyLogo: Section8CompanyLogoAlice.src || Section8CompanyLogoAlice,
    avatar: Section8AvatarAlice.src || Section8AvatarAlice
  },
  {
    quote: "Jointly have been responsive and professional throughout the entire website building process. They supported us with a rebrand and we are excited to see where it can take our business!",
    name: "Chloe Dyer",
    title: "Quality Development Manager",
    companyLogo: Section8CompanyLogoChloe.src || Section8CompanyLogoChloe,
    avatar: Section8AvatarChloe.src || Section8AvatarChloe
  },
  {
    quote: "I've been working with Jointly for a while now, and they're an absolute gem. Their team is incredibly creative and technically sound.",
    name: "Andrew McLelland",
    title: "Marketing Director",
    companyLogo: Section8CompanyLogoAndrew.src || Section8CompanyLogoAndrew,
    avatar: Section8AvatarAndrew.src || Section8AvatarAndrew
  },
  {
    quote: "Partnering with Jointly has reduced our creative spend by 40%, boosted website quality and social media engagement, and helped us open doors to new industries!",
    name: "Charles Rogers",
    title: "CEO, Cloudline",
    companyLogo: Section8CompanyLogoCharles.src || Section8CompanyLogoCharles,
    avatar: Section8AvatarCharles.src || Section8AvatarCharles
  },
  {
    quote: "Love the personal account relationship we have and we are made to feel like the best customer. The enthusiasm, cheerfulness, and speed of the team is awesome and the communication is always incredible!",
    name: "Jarl Hobbs",
    title: "Head of Brand & Marketing",
    companyLogo: Section8CompanyLogoJarl.src || Section8CompanyLogoJarl,
    avatar: Section8AvatarJarl.src || Section8AvatarJarl
  },
  {
    quote: "It's been a pleasure working with Jointly on a number of projects. They really took the time to understand our brand, brought fresh creative to the table, and delivered designs that felt thoughtful and impactful.",
    name: "Aimee-Louise Janes",
    title: "Marketing Executive",
    companyLogo: Section8CompanyLogoAimee.src || Section8CompanyLogoAimee,
    avatar: Section8AvatarAimee.src || Section8AvatarAimee
  }
];

export default function Section8() {
  return (
    <section id="testimonials" className="bg-[#181124] py-24 overflow-hidden border-t border-white/10">
      <div className="max-w-container mx-auto px-6 mb-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          
          <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-md">
            <div className="flex -space-x-2">
              <img src={Section8AvatarMemojiOne.src || Section8AvatarMemojiOne} alt="User 1" className="w-8 h-8 rounded-full border-2 border-[#181124] bg-pink-100" />
              <img src={Section8AvatarMemojiTwo.src || Section8AvatarMemojiTwo} alt="User 2" className="w-8 h-8 rounded-full border-2 border-[#181124] bg-green-100" />
              <img src={Section8AvatarMemojiThree.src || Section8AvatarMemojiThree} alt="User 3" className="w-8 h-8 rounded-full border-2 border-[#181124] bg-purple-100" />
            </div>
            <div className="flex flex-col items-start ml-2 border-l border-white/20 pl-3">
              <div className="flex text-majorelle text-xs mb-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <span className="text-white text-[10px] uppercase font-semibold tracking-wider">Trusted by busy marketing teams</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            This is why we do what we do
          </h2>
          <p className="text-lg text-gray-300">
            We love our clients, and the feeling is mutual.
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Animated Track */}
        <div className="flex animate-marquee group-hover:pause space-x-6 px-3">
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[350px] md:w-[450px] bg-white/5 border border-white/10 rounded-[32px] p-8 flex flex-col justify-between h-[400px] hover:bg-white/10 transition-colors">
              
              <div className="mb-6 h-12">
                <img src={item.companyLogo} alt="Company Logo" className="h-full w-auto object-contain brightness-0 invert opacity-70" />
              </div>
              
              <div className="flex-grow">
                <p className="text-gray-300 text-lg leading-relaxed font-medium">"{item.quote}"</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-white/10">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border border-white/20 bg-gray-800" />
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .pause {
          animation-play-state: paused;
        }
        `
      }} />
    </section>
  );
}
