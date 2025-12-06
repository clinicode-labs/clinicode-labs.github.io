# Clinicode Labs

**Official website for Clinicode Labs** - Clinical coding and healthcare technology solutions.

Clinicode Labs provides innovative healthcare technology solutions focused on clinical coding and decision-making tools for medical professionals.

**[Visit Website](https://clinicode-labs.github.io)**

## 🚀 Our Tools

We build small projects to solve specific problems encountered in clinical practice.

### [PomoDoist](https://clinicode-labs.github.io/tools/pomodoist)
**Status:** ✅ Available Now

Pomodoro timer that syncs with Todoist. Track focus time, estimate tasks, and get smart productivity insights across all your devices.

### [MSHPrescribe App](https://clinicode-labs.github.io/tools/mshprescribe)
**Status:** 🧪 Beta Testing

Unofficial native mobile app for accessing MSHPrescribe clinical guidelines offline on your phone. Designed for Queensland Health clinicians.

### [Frailty Calculator](https://clinicode-labs.github.io/tools/frailty-calculator)
**Status:** 🚧 In Development

Point-of-care risk stratification tool for assessing patient frailty and predicting clinical outcomes.

### [The 'One-Stop' Liver Screen](https://clinicode-labs.github.io/tools/liver-screen)
**Status:** 🚧 In Development

Single-input calculator for Child-Pugh, MELD, MELD-Na, and Maddrey’s Discriminant Function. Enter values once, get all scores.

### [Electrolyte Replacement Wizard](https://clinicode-labs.github.io/tools/electrolyte-wizard)
**Status:** 🚧 In Development

Digitized Queensland Health electrolyte replacement guidelines. Select element (K, Mg, PO4) and level to get recommended dose and route.

### [Prep-Pal](https://clinicode-labs.github.io/tools/prep-pal)
**Status:** 🚧 In Development

Bowel Prep Timeline Generator. Visual timeline generator for bowel prep with simple instructions for patients.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Analytics:** Vercel Analytics

## 📦 Deployment

This project is deployed to **GitHub Pages** using a custom CI/CD pipeline.

- **Workflow:** `.github/workflows/deploy.yml`
- **Package Manager:** `pnpm`
- **Build Output:** Static HTML export (`output: 'export'` in `next.config.mjs`)

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright © 2025 Ashane Herath. All rights reserved.