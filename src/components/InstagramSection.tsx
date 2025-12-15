import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
const InstagramSection = () => {
  const instagramHandle = "@77multimarcas";
  const instagramUrl = "https://www.instagram.com/77multimarcas";
  const posts = [{
    id: 1,
    likes: "124",
    comments: "18"
  }, {
    id: 2,
    likes: "89",
    comments: "12"
  }, {
    id: 3,
    likes: "156",
    comments: "24"
  }, {
    id: 4,
    likes: "98",
    comments: "15"
  }];
  return <section id="instagram" className="section-padding bg-background relative overflow-hidden">
      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full glass-gold animate-float opacity-20 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full glass animate-float-delayed opacity-30 hidden lg:block" />

      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass-gold flex items-center justify-center">
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Siga a <span className="gold-text font-bookman">77 Multimarcas</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-2">
            Acompanhe nossas novidades, ofertas exclusivas e os melhores veículos do mercado.
          </p>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
            {instagramHandle}
            <ExternalLink className="w-4 h-4" />
          </a>
          <div className="w-20 sm:w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-muted rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                <div className="flex items-center gap-4 text-white">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>;
};
export default InstagramSection;