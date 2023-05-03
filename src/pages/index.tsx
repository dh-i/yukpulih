import type { NextPage } from "next";
import Head from "next/head";

import Pillars from "src/components/sections/pillars/pillars.component";
import Navbar from "../components/navigation/navbar/navbar.component";
import Hero from "../components/sections/hero/hero.component";

const menu = [
  {
    title: "Workshop",
    url: "#",
    submenu: [
      {
        title: "Fundamental Skills",
        url: "#",
        submenu: [
          { title: "Your Brain on Pron", url: "#", submenu: null },
          {
            title: "Effective Recovery from Porn Addiction",
            url: "#",
            submenu: null,
          },
          { title: "Time Management", url: "#", submenu: null },
          {
            title: "News and Research",
            url: "#",
            submenu: [
              {
                title: "Effective Recovery from Porn Addiction and anything",
                url: "#",
                submenu: null,
              },
              { title: "Erectile Dysfunction", url: "#", submenu: null },
            ],
          },
        ],
      },
      {
        title: "Basic Skills",
        url: "#",
        submenu: [
          { title: "Sub Sub-menu 1", url: "#", submenu: null },
          { title: "Sub Sub-menu 2", url: "#", submenu: null },
        ],
      },
      {
        title: "Specific Skills",
        url: "#",
        submenu: [
          { title: "Sub Sub-menu 1", url: "#", submenu: null },
          { title: "Sub Sub-menu 2", url: "#", submenu: null },
        ],
      },
    ],
  },
  {
    title: "About",
    url: "#",
    submenu: [
      {
        title: "Our Mission",
        url: "#",
        submenu: null,
      },
      {
        title: "Our Team",
        url: "#",
        submenu: null,
      },
      {
        title: "Financials",
        url: "#",
        submenu: null,
      },
      {
        title: "Careers",
        url: "#",
        submenu: null,
      },
    ],
  },
  {
    title: "Blog",
    url: "#",
    submenu: null,
  },
  {
    title: "Community",
    url: "#",
    submenu: null,
  },
  {
    title: "Donate",
    url: "#",
    submenu: null,
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yuk Pulih</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar menu={menu} />
      <Hero />
      <Pillars />
    </div>
  );
};

export default Home;
