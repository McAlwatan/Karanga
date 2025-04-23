import {
    About,
    AffiliateDuoToneBlack,
    CreditCard,
    Explore,
    Home,
    IDuotoneBlack,
  } from "@/icons"
  
  export type MenuProps = {
    id: number
    label: string
    icon: JSX.Element
    path: string
    section?: boolean
    intergration?: boolean
  }
  
  export const LANDING_PAGE_MENU: MenuProps[] = [
    {
      id: 0,
      label: "Home",
      icon: <Home />,
      path: "/",
      section: true,
    },
    {
      id: 1,
      label: "Explore",
      icon: <Explore />,
      path: "#explore",
      section: true,
    },
    {
      id: 2,
      label: "About",
      icon: <About />,
      path: "/about",
    },
  ]
  
  export const SIDEBAR_SETTINGS_MENU: MenuProps[] = [
    {
      id: 0,
      label: "General",
      icon: <IDuotoneBlack />,
      path: "",
    },
    {
      id: 1,
      label: "Subscriptions",
      icon: <CreditCard />,
      path: "subscriptions",
    },
    {
      id: 2,
      label: "Affiliate",
      icon: <IDuotoneBlack />,
      path: "affiliates",
    },
    {
      id: 3,
      label: "Domain Config",
      icon: <AffiliateDuoToneBlack />,
      path: "domains",
    },
    {
      id: 4,
      label: "Intergration",
      icon: <AffiliateDuoToneBlack />,
      path: "intergration",
      intergration: true,
    },
  ]
  