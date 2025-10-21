import Link from "next/link"
import { Button } from "./ui/button"
import { Globe, Megaphone, Sparkles, ShoppingCart } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Page Creation",
      description:
        "Custom-built websites and e-commerce platforms that drive results and elevate your brand presence online. From landing pages to full-scale online stores.",
      highlight: true,
    },
    {
      icon: ShoppingCart,
      title: "Web Management",
      description:
        "Comprehensive website maintenance, updates, and optimization services to keep your digital presence running smoothly.",
      highlight: false,
    },
    {
      icon: Megaphone,
      title: "SEM & Ads Campaigns",
      description:
        "Strategic advertising campaigns that maximize ROI and reach your target audience across all major platforms.",
      highlight: false,
    },
    {
      icon: Sparkles,
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence implementations to automate and optimize your business processes.",
      highlight: false,
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 container">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-6">
          Our <i className="font-light">Services</i>
        </h2>
        <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-[600px] mx-auto">
          Comprehensive digital solutions tailored to accelerate your business growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                service.highlight
                  ? "border-primary/50 bg-primary/5 hover:border-primary"
                  : "border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-primary/30"
              }`}
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                <Icon size={32} />
              </div>
              <h3 className="text-2xl font-sentient mb-4">{service.title}</h3>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed">{service.description}</p>
            </div>
          )
        })}
      </div>

      <div className="text-center">
        <Link href="/#contact">
          <Button size="lg" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90">
            [Contact Us]
          </Button>
        </Link>
      </div>
    </section>
  )
}
