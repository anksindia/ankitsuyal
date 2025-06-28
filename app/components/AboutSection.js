import React from 'react'
import { GlowingCard } from './ui/GlowingCard'
import { Code, Brain, Gamepad2 } from 'lucide-react'
import { PinContainer } from './ui/PinContainer'

const AboutSection = () => {
  return (
    <div className="relative z-10 bg-[#020718] py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <GlowingCard
          title="MERN Developer"
          text="I’m currently sharpening my skills as a full stack developer, working extensively with the MERN Stack to build real-world applications and solve meaningful problems."
          icon={<Code className="w-5 h-5 text-yellow-400" />}
          color="#FACC15"
        />

        <GlowingCard
          title="AI & Android Explorer"
          text="As a software developer in progress, I’m exploring Android (Java/Kotlin), strengthening my grasp on DSA, OOP, and System Design, and diving into the basics of AI/ML, all while pursuing my MCA."
          icon={<Brain className="w-5 h-5 text-emerald-400" />}
          color="#10b981"
        />

        <GlowingCard
          title="Curious Gamer & Learner"
          text="Whether it’s exploring new tech, decoding backend systems, or diving into AI, I’m always curious. And when I’m not coding, I’m probably gaming"
          icon={<Gamepad2 className="w-5 h-5 text-pink-400" />}
          color="#ec4899"
        />
      </div>

      <div className="flex justify-center items-center mt-16">
        <PinContainer
          title="Almora, Uttarakhand"
          href="https://www.google.com/maps/place/Almora,+Uttarakhand/@29.6015032,79.6120927,13z/data=!3m1!4b1!4m6!3m5!1s0x39a0b7328910d81f:0x9811d25dd87d8ed5!8m2!3d29.5892407!4d79.646666!16zL20vMGYzZDNn!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
          imageSrc="/assets/Almoramap.png"
        />
      </div>
    </div>
  )
}

export default AboutSection
