"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Insights } from "@/components/insights"
import { Contact } from "@/components/contact"
import { Leva } from "leva"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Insights />
      <Contact />
      <Leva hidden />
    </>
  )
}
