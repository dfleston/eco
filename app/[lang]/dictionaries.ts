import "server-only"

interface Dictionary {
  navigation: {
    home: string
    whatWeSeek: string
    weNeedYou: string
    merchandising: string
    workshops: string
    mission: string
    team: string
    businessModel: string
    switchLocale: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  whatWeSeek: {
    title: string
    description: string
    items: Array<{
      title: string
      description: string
    }>
  }
  weNeedYou: {
    title: string
    description: string
    cta: string
  }
  merchandising: {
    title: string
    description: string
    products: Array<{
      name: string
      description: string
      price: string
    }>
  }
  workshops: {
    title: string
    description: string
    items: Array<{
      title: string
      description: string
      date: string
    }>
  }
  mission: {
    title: string
    description: string
    values: Array<{
      title: string
      description: string
    }>
  }
  team: {
    title: string
    description: string
    members: Array<{
      name: string
      role: string
      bio: string
    }>
  }
  businessModel: {
    title: string
    description: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  footer: {
    rights: string
    contact: string
  }
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return (dictionaries[locale] || dictionaries.es)()
}
