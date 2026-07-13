// ============================================================
//  📁 src/data/index.js
//  ✅ THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR PORTFOLIO
//  - Add/remove projects, experience, skills here
//  - Images go in src/assets/screenshots/
// ============================================================

// ── Hero ──────────────────────────────────────────────────────
import hadafiScreen1 from "../images/hadafi/Phone SS 1.jpg";
import hadafiScreen2 from "../images/hadafi/Phone SS 2.jpg";
import hadafiScreen3 from "../images/hadafi/Phone SS 3.jpg";
import hadafiScreen4 from "../images/hadafi/Phone SS 4.jpg";
import hadafiScreen5 from "../images/hadafi/Phone SS 5.jpg";
import hadafiScreen6 from "../images/hadafi/Phone SS 6.jpg";
import hadafiScreen7 from "../images/hadafi/Phone SS 7.jpg";

import epicRidesScreen1 from "../images/epicRides/pic1.png";
import epicRidesScreen2 from "../images/epicRides/pic2.png";
import epicRidesScreen3 from "../images/epicRides/pic3.png";
import epicRidesScreen4 from "../images/epicRides/pic4.png";

import rideAwayScreen1 from "../images/rideAway/0x0ss.png";
import rideAwayScreen2 from "../images/rideAway/0x0ss (1).png";
import rideAwayScreen3 from "../images/rideAway/0x0ss (2).png";
import rideAwayScreen4 from "../images/rideAway/0x0ss (3).png";
import rideAwayScreen5 from "../images/rideAway/0x0ss (4).png";
import rideAwayScreen6 from "../images/rideAway/0x0ss (5).png";
import rightAwayVideoSrc from "../images/rideAway/rightAwayideo.mp4";
export { rightAwayVideoSrc };

import wonominScreen1 from "../images/wonomin/1.png";
import wonominScreen2 from "../images/wonomin/2.png";
import wonominScreen3 from "../images/wonomin/3.png";
import wonominScreen4 from "../images/wonomin/4.png";
import wonominScreen5 from "../images/wonomin/5.png";
import wonominScreen6 from "../images/wonomin/6.png";
import wonominScreen7 from "../images/wonomin/7.png";
import wonominScreen8 from "../images/wonomin/8.png";
import wonominScreen9 from "../images/wonomin/9.png";
import wonominScreen10 from "../images/wonomin/10.png";

import luciScreen1 from "../images/luci/13.png";
import luciScreen2 from "../images/luci/14.png";
import luciScreen3 from "../images/luci/15.png";
import luciScreen4 from "../images/luci/16.png";
import luciScreen5 from "../images/luci/17.png";
import luciScreen6 from "../images/luci/18.png";

import aiVideoScreen1 from "../images/AiVideoPlayer/13.png";
import aiVideoScreen2 from "../images/AiVideoPlayer/16.png";
import aiVideoScreen3 from "../images/AiVideoPlayer/17.png";
import aiVideoScreen4 from "../images/AiVideoPlayer/18.png";
import aiVideoScreen5 from "../images/AiVideoPlayer/20.png";

import dexniveLogo from "../images/logo/dexnive.webp";
import launchboxLogo from "../images/logo/launchbox.svg";
import shispareLogo from "../images/logo/shispare_logo.jpg";
import waysAviationLogo from "../images/logo/waysaviation.png";

export const HERO = {
  name: "Syed\nMuhammad Shah",
  roles: [
    "Flutter Engineer",
    "iOS Developer",
    "Backend Architect",
    "Mobile Specialist",
    "Full-Stack Mobile Dev",
  ],
  description:
    "Senior Mobile Engineer — Flutter, iOS & Node.js. 7+ production apps across ride-sharing, e-commerce, sports-tech and enterprise ERP. 100K+ users served. Full-stack ownership from mobile UI to cloud deployment.",
  availability: "Open to new opportunities",
  stats: [
    { number: "4+",   label: "Years Experience" },
    { number: "7+",   label: "Apps Shipped"     },
    { number: "100K+",label: "Downloads"         },
    { number: "6",    label: "Industry Domains"  },
  ],
  links: {
    email:    "mailto:syedmuhammadshah235@gmail.com",
    linkedin: "https://www.linkedin.com/in/smshah1",
    github:   "https://github.com/SyedMuhammdShah",
  },
};

// ── About ─────────────────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "I'm a Senior Mobile Engineer in Karachi, Pakistan. I specialize in Flutter & native iOS development backed by Node.js infrastructure on AWS — 4+ years shipping apps real people use daily.",
    "End-to-end ownership is my edge: I architect the frontend, integrate the APIs, and own the cloud infra. I've shipped for clients in Pakistan, UAE, and the US across 6 different industries.",
  ],
  cards: [
    { icon: "📱", title: "Mobile First",    desc: "Flutter & iOS — 7+ apps for 100K+ users across US, UAE & Pakistan markets" },
    { icon: "⚡", title: "Performance",     desc: "Delivered 20% improvement on high-traffic consumer app via Clean Architecture refactoring" },
    { icon: "☁️", title: "Cloud Native",   desc: "AWS EC2/S3, Firebase, GCP — full deployment, CI/CD, monitoring & scaling" },
    { icon: "🧪", title: "Quality First",  desc: "TDD, Clean Architecture, BLoC/MVVM — enterprise-grade from day one" },
  ],
};

// ── Skills ────────────────────────────────────────────────────
export const SKILLS = [
  { cat: "Mobile",       items: ["Flutter", "Swift / iOS", "Dart", "SwiftUI", "UIKit", ".NET MAUI"] },
  { cat: "State Mgmt",   items: ["BLoC", "GetX", "Riverpod", "MVVM", "Provider"] },
  { cat: "Backend",      items: ["Node.js", "Laravel / PHP", "REST APIs", "WebSockets", "JWT Auth", "RBAC"] },
  { cat: "Cloud / DB",   items: ["Firebase", "AWS EC2/S3", "Google Cloud", "MySQL", "Hive", "FCM"] },
  { cat: "Architecture", items: ["Clean Arch", "TDD", "CI/CD", "Git", "Agile/Scrum", "Modular"] },
];

// ── Projects ──────────────────────────────────────────────────
// screenshots: put image files in src/assets/screenshots/
// then import them at the top of this file and reference here
// e.g. import erLogin from '../assets/screenshots/er_login.jpg'
export const PROJECTS = [
  {
    id: "epic",
    icon: "🚗",
    title: "Epic Rides",
    sub: "Ride-Sharing Platform — US Market",
    color: "#7c6fff",
    tags: ["Live · App Store", "Ride-Sharing", "US Market"],
    tech: ["Flutter", "Node.js", "WebSockets", "Google Maps", "Firebase", "AWS", "Push Notifications"],
    desc: `Full ride-sharing ecosystem for the US market — two separate apps: Rider and Driver.

• Real-time driver tracking via WebSocket + Google Maps integration
• Economy, Luxury & Carpool categories with live fare estimation
• OTP phone authentication for secure login
• Live ETA countdown timer during active rides
• Payment gateway — card & in-app wallet
• In-app messaging between rider and driver
• Ride verification code system for safety`,
    screens: [
      { img: epicRidesScreen1, label: "Epic Rides" },
      { img: epicRidesScreen2, label: "Ride Booking" },
      { img: epicRidesScreen3, label: "Driver Tracking" },
      { img: epicRidesScreen4, label: "Ride Details" },
    ],
    links: {
      ios:    "https://apps.apple.com/us/app/epic-rides/id6759365655",
      driver: "https://apps.apple.com/us/app/epic-rides-driver/id6759365615",
    },
  },
  {
    id: "qist",
    icon: "🛍️",
    title: "Qist Bazar",
    sub: "E-Commerce — 100K+ Downloads",
    color: "#00e5a0",
    tags: ["100K+ Downloads", "Live · App Store", "E-Commerce"],
    tech: ["Flutter", "Firebase", "BLoC", "REST APIs", "iOS", "Secure Checkout", "Order Tracking"],
    desc: `High-traffic e-commerce marketplace — 100,000+ App Store downloads, my highest-reach production app.

• Full product catalogue with categories, search & filtering
• Secure multi-step checkout with multiple payment methods
• Real-time order tracking with live status updates
• User profiles with complete order history
• Firebase push notifications for order updates
• BLoC state management for testable, reliable UI`,
    screens: [],
    links: { ios: "https://apps.apple.com/pk/app/qistbazaar/id6737434447" },
  },
  {
    id: "rightaway",
    icon: "🏗️",
    title: "Right Away",
    sub: "Construction Delivery Platform",
    color: "#ff6b6b",
    tags: ["In Development", "Multi-Role", "Logistics", "Construction"],
    tech: ["Flutter", "Firebase", "BLoC", "Real-time Tracking", "REST APIs", "Multi-Role Auth"],
    desc: `All-in-one construction materials delivery — three role-based experiences in one platform.

• Users: Browse materials (cement, tools, equipment), order in taps, real-time delivery tracking
• Riders: Accept orders, live navigation, manage pickups & drop-offs with status updates
• Companies: Full ops dashboard — inventory, incoming orders, business performance metrics

Streamlines the entire supply chain from order to delivery — reducing friction for construction projects of every scale.`,
    screens: [
      { img: rideAwayScreen1, label: "Right Away" },
      { img: rideAwayScreen2, label: "Order Materials" },
      { img: rideAwayScreen3, label: "Delivery Tracking" },
      { img: rideAwayScreen4, label: "Rider View" },
      { img: rideAwayScreen5, label: "Company Dashboard" },
      { img: rideAwayScreen6, label: "Inventory" },
    ],
    video: rightAwayVideoSrc,
    links: {},
  },
  {
    id: "hadafi",
    icon: "⚽",
    title: "Hadafi",
    sub: "Football Scouting Platform — UAE",
    color: "#ff8c42",
    tags: ["Live", "Sports-Tech", "UAE / MENA"],
    tech: ["Flutter", "Firebase", "BLoC", "REST APIs", "In-App Payments", "Reels", "Arabic + English"],
    desc: `Professional football scouting & social platform for players, coaches and clubs across UAE and MENA.

• Player profiles with position, stats, age & highlight reels
• Create & manage football games, leagues & tournaments
• Squad management — invite players, approve join requests, manage slots
• Explore nearby players & coaches with search/filter
• In-app match payment in AED currency
• Short-form video Reels for football highlights
• Full bilingual UI: Arabic + English`,
    screens: [
      { img: hadafiScreen1, label: "Hadafi Home" },
      { img: hadafiScreen2, label: "Player Profile" },
      { img: hadafiScreen3, label: "Match Details" },
      { img: hadafiScreen4, label: "Squad Management" },
      { img: hadafiScreen5, label: "Explore Players" },
      { img: hadafiScreen6, label: "Reels Feed" },
      { img: hadafiScreen7, label: "In-App Payments" },
    ],
    links: {},
  },
  {
    id: "wonomin",
    icon: "🌸",
    title: "Wonomin",
    sub: "Women's Health & Wellness Platform",
    color: "#e85d9e",
    tags: ["In Development", "Health-Tech", "Women's Wellness"],
    tech: ["Flutter", "Firebase", "BLoC", "REST APIs", "Push Notifications", "In-App Purchases"],
    desc: `Comprehensive women's health & wellness platform covering all life stages — from menstrual tracking to pregnancy and menopause.

• Cycle tracking with AI-powered predictions and health insights
• Pregnancy mode with weekly milestones, baby development & symptom logging
• Mood & energy journaling with trend analytics
• Personalised wellness plans & expert article library
• Community forum for shared experiences and support
• Push reminders for medications, hydration & appointments
• Secure health data storage with end-to-end encryption`,
    screens: [
      { img: wonominScreen1, label: "Wonomin Home" },
      { img: wonominScreen2, label: "Cycle Tracking" },
      { img: wonominScreen3, label: "Health Insights" },
      { img: wonominScreen4, label: "Pregnancy Mode" },
      { img: wonominScreen5, label: "Wellness Plan" },
      { img: wonominScreen6, label: "Mood Journal" },
      { img: wonominScreen7, label: "Community" },
      { img: wonominScreen8, label: "Reminders" },
      { img: wonominScreen9, label: "Articles" },
      { img: wonominScreen10, label: "Profile" },
    ],
    links: {},
  },
  {
    id: "luci",
    icon: "🤖",
    title: "Luci",
    sub: "AI-Powered Companion App",
    color: "#6c63ff",
    tags: ["In Development", "AI / ML", "Productivity"],
    tech: ["Flutter", "OpenAI API", "Firebase", "BLoC", "REST APIs", "Dart"],
    desc: `Next-generation AI companion designed to boost productivity and provide intelligent, context-aware assistance.

• Natural language conversations powered by large language models
• Smart task planner — break goals into actionable steps with AI guidance
• Context-aware suggestions based on user history and preferences
• Voice input with real-time transcription and response
• Personalised learning — adapts tone and style to individual users
• Offline-capable with local model fallback for core features`,
    screens: [
      { img: luciScreen1, label: "Luci Home" },
      { img: luciScreen2, label: "AI Chat" },
      { img: luciScreen3, label: "Task Planner" },
      { img: luciScreen4, label: "Smart Suggestions" },
      { img: luciScreen5, label: "Voice Assistant" },
      { img: luciScreen6, label: "Personalisation" },
    ],
    links: {},
  },
  {
    id: "aivideoplayer",
    icon: "🎬",
    title: "AI Video Player",
    sub: "Intelligent Media Player",
    color: "#00c9a7",
    tags: ["In Development", "AI / ML", "Media"],
    tech: ["Flutter", "FFmpeg", "OpenAI API", "Firebase", "BLoC", "REST APIs"],
    desc: `AI-enhanced video player delivering a smart, personalised viewing experience beyond standard media playback.

• AI-generated scene summaries and chapter markers
• Smart subtitle generation & translation in 40+ languages
• Content-aware playback speed recommendations
• Facial recognition for cast identification and info overlay
• Playlist intelligence — auto-curates related content
• Background audio mode with lock-screen controls
• Cloud sync for watch history, bookmarks and preferences`,
    screens: [
      { img: aiVideoScreen1, label: "AI Video Player" },
      { img: aiVideoScreen2, label: "Scene Summary" },
      { img: aiVideoScreen3, label: "Smart Subtitles" },
      { img: aiVideoScreen4, label: "Playlist View" },
      { img: aiVideoScreen5, label: "Settings" },
    ],
    links: {},
  },
  {
    id: "market",
    icon: "🏪",
    title: "Market Toll",
    sub: "Marketplace App",
    color: "#ffa500",
    tags: ["Live · Play Store", "Marketplace"],
    tech: ["Flutter", "Firebase", "BLoC", "Secure Checkout", "REST APIs"],
    desc: "Full-featured marketplace app — product listings, secure checkout, user profiles, order tracking and Firebase integration with BLoC state management.",
    screens: [],
    links: { android: "https://play.google.com/store/apps/details?id=com.dignitestudios.markettoll" },
  },
  {
    id: "forever",
    icon: "💪",
    title: "Forever Young",
    sub: "Fitness Coach App",
    color: "#00bfff",
    tags: ["Live · Play Store", "Fitness", "Health"],
    tech: ["Flutter", "Firebase", "Push Notifications", "REST APIs"],
    desc: "Fitness coaching app with push notifications, API-driven workout workflows and personalised coaching programs for sustained fitness goals.",
    screens: [],
    links: { android: "https://play.google.com/store/apps/details?id=com.softbix.forever_young_app" },
  },
];

// ── Experience ────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    company: "Dexnive",
    role:    "Mobile Application Developer",
    period:  "Jan 2026 – Present",
    logo:    dexniveLogo,
    color:   "#00e5a0",
    desc:    "Building scalable cross-platform apps with Flutter & Swift. Clean Architecture, MVVM, BLoC, REST APIs, Firebase, real-time features.",
  },
  {
    company: "LaunchBox Global",
    role:    "Sr. Flutter Developer",
    period:  "Sep 2024 – Present",
    logo:    launchboxLogo,
    color:   "#7c6fff",
    desc:    "Led Epic Rides — real-time ride-booking with WebSockets, Google Maps & Firebase. Node.js backend on AWS. Delivered 20% performance uplift.",
  },
  {
    company: "Supersoft Technologies",
    role:    "Sr. Flutter Developer",
    period:  "Apr 2023 – Sep 2024",
    logo:    null,
    color:   "#ff6b6b",
    desc:    "Built Sharjah Charity International app — secure donations, campaign management, TDD, Firebase & API integration.",
  },
  {
    company: "Ways Aviation",
    role:    "Software Engineer",
    period:  "Jul 2022 – Apr 2023",
    logo:    waysAviationLogo,
    color:   "#ffa500",
    desc:    "Enterprise ERP development with Flutter, SQL integration, modular architecture and reusable component libraries.",
  },
  {
    company: "Shispare pvt ltd",
    role:    "Junior Software Engineer",
    period:  "Jun 2021 – Jul 2022",
    logo:    shispareLogo,
    color:   "#00bfff",
    desc:    "Laravel REST APIs for Warehouse & SphereWMS 3PL. Token auth, RBAC, audit logging, SQL query optimization.",
  },
];

// ── Education ─────────────────────────────────────────────────
export const EDUCATION = [
  { deg: "B.S. Software Engineering",     inst: "Sindh Madressa-tul-Islam University", year: "2020 – 2023" },
  { deg: "Computer Science (FSC)",        inst: "Army Public School & College",        year: "2017 – 2019" },
  { deg: "Computer Software Engineering", inst: "Aptech Pakistan",                     year: "2020 – 2022" },
];



