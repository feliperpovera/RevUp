"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", email: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 container">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-6">
            Let's <i className="font-light">Connect</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-white/80">
            Ready to rev up your business? Get in touch with us today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-mono text-sm text-white">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-background/50 border-foreground/20 focus:border-primary font-mono text-white placeholder:text-white/50"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-mono text-sm text-white">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-background/50 border-foreground/20 focus:border-primary font-mono text-white placeholder:text-white/50"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-mono text-sm text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-background/50 border-foreground/20 focus:border-primary font-mono text-white placeholder:text-white/50"
              placeholder="your@email.com"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full font-mono bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? "[Sending...]" : "[Send Message]"}
          </Button>

          {submitStatus === "success" && (
            <p className="text-center font-mono text-sm text-primary">Thank you! We'll be in touch soon.</p>
          )}

          {submitStatus === "error" && (
            <p className="text-center font-mono text-sm text-red-500">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
