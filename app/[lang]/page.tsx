import { HeroSection } from "./components/hero-section"
import { WhatWeSeek } from "./components/what-we-seek"
import { WeNeedYou } from "./components/we-need-you"
import { Merchandising } from "./components/merchandising"
import { Workshops } from "./components/workshops"
import { Mission } from "./components/mission"
import { Team } from "./components/team"
import { BusinessModel } from "./components/business-model"
import { getDictionary } from "./dictionaries"

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="flex flex-col items-center">
      <HeroSection dict={dict.hero} />
      <WhatWeSeek dict={dict.whatWeSeek} />
      <WeNeedYou dict={dict.weNeedYou} />
      <Merchandising dict={dict.merchandising} />
      <Workshops dict={dict.workshops} />
      <Mission dict={dict.mission} />
      <Team dict={dict.team} />
      <BusinessModel dict={dict.businessModel} />
    </div>
  )
}
