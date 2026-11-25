import type { ImageMetadata } from "astro";

import bsWeihnachtsMarkt from "@images/locations/bs-weihnachtsmarkt/burgplatz.png";
import bsVirtuaLounge from "@images/locations/bs-virtualounge/nix-ug-virtualounge.png";
import bsVRevent1_1 from "@images/events/2025-07-virtualounge/arian-talk.jpg";
import bsVRevent1_2 from "@images/events/2025-07-virtualounge/lassulus-kenji-talk.jpg";
import bsVRevent1_3 from "@images/events/2025-07-virtualounge/IMG_4794.jpeg";
import bsVRevent2_alex from "@images/events/2025-10-virtualounge/alex-talk.jpeg";
import bsVRevent2_chicken from "@images/events/2025-10-virtualounge/chicken-horse.jpeg";

export interface Location {
  name: string;
  href?: string;
}

export interface Talk {
  /** May contain HTML (links). */
  title: string;
  /** May contain HTML (links). */
  description?: string;
}

export interface Picture {
  src: ImageMetadata;
  alt: string;
}

export interface Meetup {
  /** ISO date, YYYY-MM-DD. The weekday is derived from it. */
  date: string;
  title?: string;
  location: Location;
  /** Extra location note, e.g. where exactly to meet. */
  locationNote?: string;
  time: string;
  /** [time, what] pairs. `what` may contain HTML (links). */
  agenda: [string, string][];
  talks?: Talk[];
  /** May contain HTML (links). */
  notes?: string[];
  rsvp?: boolean;
  flyer?: Picture;
  pictures?: Picture[];
  /** Heading for `pictures`, defaults to "pictures". */
  picturesLabel?: string;
}

const locations = {
  virtuaLounge: {
    name: "VirtuaLounge Braunschweig",
    href: "/locations/virtualounge-braunschweig",
  },
  hafven: { name: "Hannover, Hafven", href: "/locations/hafven-hannover" },
  schiller40: {
    name: "Wolfsburg, Coworking Space Schiller 40",
    href: "/locations/schiller40-wolfsburg",
  },
  theos: {
    name: "Braunschweig, Theos Coworking Space",
    href: "/locations/theos-coworking-space-braunschweig",
  },
} satisfies Record<string, Location>;

const virtuaLoungeFlyer: Picture = {
  src: bsVirtuaLounge,
  alt: "Nix UG HaBraWo Special Event at VirtuaLounge in Braunschweig",
};

const chickenHorse =
  '<a href="https://store.steampowered.com/app/386940/Ultimate_Chicken_Horse/">Ultimate Chicken Horse</a>';

const classicAgenda: [string, string][] = [
  ["18:00", "Get together"],
  ["18:20", "Tech Talk"],
  ["19:20", "Discussion"],
  ["20:00", "Restaurant or Bar (until open end)"],
];

export const nextMeetup: Meetup = {
  date: "2026-12-16",
  title: "Nix Christmas Party!",
  location: locations.virtuaLounge,
  time: "17:00 - open end",
  agenda: [
    ["17:00 - 20:00", `VR gaming and ${chickenHorse} tournament`],
    ["20:00", "Christmas Market (until open end)"],
  ],
  talks: [{ title: "TBD" }],
  rsvp: true,
  flyer: virtuaLoungeFlyer,
  picturesLabel: "pictures of earlier events at this location",
  pictures: [
    { src: bsVRevent1_1, alt: "Talk at the July 2025 VirtuaLounge event" },
    { src: bsVRevent1_2, alt: "Talk at the July 2025 VirtuaLounge event" },
    { src: bsVRevent1_3, alt: "Gaming at the July 2025 VirtuaLounge event" },
    {
      src: bsVRevent2_chicken,
      alt: "Ultimate Chicken Horse at the October 2025 VirtuaLounge event",
    },
  ],
};

export const pastMeetups: Meetup[] = [
  {
    date: "2026-07-16",
    location: locations.schiller40,
    time: "18:00 - open end",
    agenda: classicAgenda,
    talks: [
      {
        title:
          '<a href="https://github.com/applicative-systems/declarative-runtime">applicative-systems/declarative-runtime</a>',
        description:
          "NixOS manages services declaratively — but the declarative surface is largely determined by the service itself. More often than not, there’s a gap between what you can declare (package, config file, systemd unit) and the service’s runtime state: Grafana dashboards, a Git forge’s organizations and repositories. Conveniently, many such services already ship a Terraform provider that manages exactly this state. declarative-runtime bridges the gap by pairing NixOS modules with these providers: you declare runtime state right in your Nix config, and it’s reconciled against the live service — making runtime configuration a first-class, declarative citizen of the NixOS world.",
      },
    ],
  },
  {
    date: "2025-12-09",
    title: "Nix Christmas Party 2025",
    location: locations.virtuaLounge,
    time: "16:00 - open end",
    agenda: [
      ["16:00", "2 hours of VR gaming"],
      ["18:00", `${chickenHorse} tournament`],
      ["20:00", "Christmas Market (until open end)"],
    ],
  },
  {
    date: "2025-10-26",
    location: locations.virtuaLounge,
    time: "16:00 - open end",
    agenda: [
      ["16:00", "2 hours of VR gaming"],
      ["18:00", "Super Smash Brothers and Dance Dance Revolution tournament"],
      ["20:00", "Restaurant or Bar (until open end)"],
    ],
    talks: [
      {
        title:
          "cake: flake-parts inspired configuration framework for classic Nix projects",
      },
    ],
    pictures: [
      { src: bsVRevent2_alex, alt: "The cake talk at the VirtuaLounge" },
      {
        src: bsVRevent2_chicken,
        alt: "Ultimate Chicken Horse at the VirtuaLounge",
      },
    ],
  },
  {
    date: "2025-08-26",
    location: locations.hafven,
    time: "18:00 - open end",
    agenda: classicAgenda,
    talks: [
      {
        title: "systemd-repart and systemd-sysupdate in NixOS",
        description:
          "In this session, we will see how to build a minimal NixOS image using systemd-repart and systemd-sysupdate, which are nicely integrated in NixOS. We will also have a look into how to minimize NixOS images and debug excess closure size!",
      },
    ],
  },
  {
    date: "2025-07-12",
    title:
      "Special Event: Let's Play Coop VR Games and Console Games Together!",
    location: locations.virtuaLounge,
    time: "17:00 - open end",
    notes: [
      'There will be talks from special guests from Berlin (@lassulus &amp; @arianvp), console and fun coop VR games and food - Sponsored by <a href="https://nixcademy.com">Nixcademy</a>!',
    ],
    agenda: [
      ["17:00", "Get together"],
      ["18:00", "Tech Talks"],
      ["19:00", "Games, Games, Games"],
      ["22:00", "Bar/Pub (until open end)"],
    ],
    talks: [
      {
        title:
          '<a href="http://clan.lol/">Clan</a> Demo (<a href="https://github.com/lassulus">@lassulus</a>)',
      },
      {
        title:
          'Deploying NixOS on AWS (<a href="https://github.com/arianvp">@arianvp</a>)',
      },
    ],
    flyer: virtuaLoungeFlyer,
  },
  {
    date: "2025-05-26",
    location: locations.schiller40,
    time: "18:00 - open end",
    agenda: classicAgenda,
  },
  {
    date: "2025-04-25",
    location: locations.hafven,
    time: "18:00 - open end",
    agenda: classicAgenda,
    talks: [
      {
        title: "nixos-diff: view differences in NixOS configurations",
        description:
          "Viewing differences between NixOS configurations has been possible by viewing differences of the resulting derivations, as well as interactive exploration using nixos-option. With nixos-diff it is possible to view all relevant configuration differences. In this session we will introduce and explore this early prototype.",
      },
    ],
  },
  {
    date: "2025-03-27",
    location: locations.theos,
    time: "18:00 - open end",
    agenda: [
      ["18:00", "Get together"],
      ["18:20", "Tech Talk"],
      [
        "19:20",
        'Discussion about <a href="https://planetnix.com/">Planet Nix</a>, dynamic derivations, and more!',
      ],
      ["20:00", "Restaurant or Bar (until open end)"],
    ],
    talks: [
      {
        title: "Automatic Deployment with Sanity-Checked Configurations",
        description:
          '<a href="https://github.com/applicative-systems/nxbd">nxbd</a> is a lightweight, safety-focused NixOS deployment tool that helps you manage multiple NixOS systems with confidence. Unlike other deployment tools, nxbd focuses on validating your configurations before deployment to prevent common pitfalls and system lockouts.',
      },
    ],
  },
  {
    date: "2025-02-27",
    location: locations.schiller40,
    time: "18:00 - open end",
    agenda: classicAgenda,
  },
  {
    date: "2025-01-13",
    location: locations.hafven,
    time: "18:00 - open end",
    agenda: classicAgenda,
    talks: [
      {
        title:
          "How to set up a Grafana Dashboard for your server infrastructure",
        description:
          "It's important to see all your server's health and performance at one glance. For that reason, let's see how to set up a Grafana dashboard with automatically collected data via an encrypted Wireguard network - complete with encrypted secret management!",
      },
    ],
  },
  {
    date: "2024-12-10",
    title: "Let's Celebrate Christmas and the end of the year together",
    location: { name: "Burgplatz, Braunschweig" },
    locationNote: "On the christmas market! We meet right at the lion statue.",
    time: "18:00 - open end",
    agenda: [
      ["18:00", "Get together"],
      ["21:00", "Restaurant or Bar (until open end)"],
    ],
    notes: ["There will be a little Nix-related present for everyone!"],
    pictures: [
      {
        src: bsWeihnachtsMarkt,
        alt: "The Burgplatz in Braunschweig. We meet at the Lion statue.",
      },
    ],
    picturesLabel: "meeting point",
  },
  {
    date: "2024-11-19",
    location: locations.schiller40,
    time: "18:00 - open end",
    agenda: classicAgenda,
  },
  {
    date: "2024-10-29",
    location: locations.hafven,
    time: "18:00 - open end",
    agenda: classicAgenda,
    talks: [
      {
        title:
          "asecret - automatically provision secrets through configuration",
        description:
          "Service configuration through Nix is a blast!: it is both easily discoverable and does not require expert knowledge. That fun is spoiled whenever we encounter secrets, since their generation usually is not as easily discoverable and does require expert knowledge. Can we maintain the fun when encountering secrets?",
      },
    ],
  },
  {
    date: "2024-09-17",
    location: locations.theos,
    time: "18:00 - open end",
    agenda: [
      ["18:00", "Get together"],
      ["18:20", "Talk"],
      ["19:20", "Discussion"],
      ["20:00", "Restaurant or Bar (until open end)"],
    ],
  },
];

/**
 * Start of a meetup as an ISO timestamp with the Europe/Berlin offset,
 * derived from `date` and the first HH:MM in `time`.
 */
export function startsAt(meetup: Meetup): string | undefined {
  const hhmm = meetup.time.match(/\b(\d{1,2}):(\d{2})\b/);
  if (!hhmm) return undefined;
  const local = `${meetup.date}T${hhmm[1].padStart(2, "0")}:${hhmm[2]}:00`;
  // Offset of Europe/Berlin on that day ("GMT+01:00" or "GMT+02:00").
  const offset = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Berlin",
    timeZoneName: "longOffset",
  })
    .formatToParts(new Date(`${local}Z`))
    .find((p) => p.type === "timeZoneName")!
    .value.replace("GMT", "");
  return `${local}${offset || "+00:00"}`;
}

export function weekday(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: "UTC",
  });
}
