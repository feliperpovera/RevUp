import { TrendingUp, ShoppingBag, Zap, Users } from "lucide-react"

export function Insights() {
  const stories = [
    {
      icon: ShoppingBag,
      client: "E-Commerce Retailer",
      challenge: "Low online sales and poor website conversion rates",
      solution: "Complete website redesign with optimized checkout flow and targeted SEM campaigns",
      result: "320% increase in online revenue within 6 months",
      metric: "+320%",
    },
    {
      icon: TrendingUp,
      client: "B2B SaaS Company",
      challenge: "Struggling to generate qualified leads",
      solution: "Implemented AI-powered lead scoring and automated marketing campaigns",
      result: "5x increase in qualified leads and 40% reduction in customer acquisition cost",
      metric: "5x Leads",
    },
    {
      icon: Zap,
      client: "Local Service Business",
      challenge: "Limited online visibility and outdated website",
      solution: "Modern responsive website with local SEO optimization and Google Ads strategy",
      result: "250% increase in website traffic and 180% more customer inquiries",
      metric: "+250%",
    },
    {
      icon: Users,
      client: "Healthcare Provider",
      challenge: "Manual appointment scheduling causing inefficiencies",
      solution: "Custom web portal with AI chatbot for automated appointment booking",
      result: "70% reduction in administrative time and improved patient satisfaction",
      metric: "-70% Time",
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

      <div className="grid md:grid-cols-2 gap-8">
        {stories.map((story, index) => {
          const Icon = story.icon
          return (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                  <Icon size={28} />
                </div>
                <div className="text-3xl font-bold text-primary">{story.metric}</div>
              </div>

              <h3 className="text-xl font-sentient mb-3">{story.client}</h3>

              <div className="space-y-3 font-mono text-sm">
                <div>
                  <span className="text-foreground/50">Challenge: </span>
                  <span className="text-foreground/80">{story.challenge}</span>
                </div>

                <div>
                  <span className="text-foreground/50">Solution: </span>
                  <span className="text-foreground/80">{story.solution}</span>
                </div>

                <div>
                  <span className="text-primary font-bold">Result: </span>
                  <span className="text-foreground/90">{story.result}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
