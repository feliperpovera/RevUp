import { TrendingUp, ShoppingBag } from "lucide-react"

export function Insights() {
  const stories = [
    {
      icon: TrendingUp,
      client: "Ian Greenberg",
      role: "Owner",
      testimonial:
        "We had no idea what Google Ads was or how it worked. They took over and exceeded all expectations—our site got tons of traffic, sales went up, and the return on investment was quick and impressive.",
    },
    {
      icon: ShoppingBag,
      client: "Laura Castro",
      role: "Marketing Director",
      testimonial:
        "Before working with this team, our Google Ads campaigns were going nowhere. In just a short time, they completely turned things around—our website traffic and sales increased significantly, and the ROI is so fast we barely feel the ad spend.",
    },
  ]

  return (
    <section id="insights" className="py-24 md:py-32 container">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-6">
          Client <i className="font-light">Success Stories</i>
        </h2>
        <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-[600px] mx-auto">
          Real results from real businesses we've helped grow
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {stories.map((story, index) => {
          const Icon = story.icon
          return (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6">
                <Icon size={28} />
              </div>

              <blockquote className="font-mono text-sm text-foreground/80 mb-6 leading-relaxed">
                "{story.testimonial}"
              </blockquote>

              <div className="border-t border-foreground/10 pt-4">
                <div className="font-sentient text-lg">{story.client}</div>
                <div className="font-mono text-sm text-foreground/50">{story.role}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
