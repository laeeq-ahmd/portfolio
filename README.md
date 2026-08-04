# Mission Control — Portfolio

Personal portfolio of **Laeeq Ahmed** — Software Engineer, AI Engineer, and Full Stack Developer.

Live at: [laeeq.vercel.app](https://laeeq.vercel.app) *(update after deploy)*

---

## Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 — neubrutalism design system
- **Animations:** Framer Motion
- **Scroll:** Lenis smooth scroll
- **3D:** React Three Fiber (Architecture diagrams)

## Sections

- Hero — Terminal boot sequence
- Mission Objectives — Checklist
- Systems — Skills with Tech Radar
- Architecture — Interactive click-to-inspect node diagrams
- Projects — CareerX AI, SmartFirePredict, Tic-Tac-Toe Plus, Finance Dashboard, Summer of AI (VisWAM)
- Experience — VisWAM AI + Infosys Springboard internships
- Achievements — TCS CodeVita, Sprint Hackathon, Oracle Certification
- Contact — Terminal-styled form

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `Ctrl+\`` | Open terminal overlay |
| `Ctrl+K` | Open command palette |

## Deploy

Deployed on Vercel. No environment variables required for basic deployment.  
To activate contact form emails, add `RESEND_API_KEY` to Vercel environment variables and uncomment the Resend block in `app/api/contact/route.ts`.
