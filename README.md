# Clinicode Labs

**Official website for Clinicode Labs** - Clinical coding and healthcare technology solutions.

Clinicode Labs provides innovative healthcare technology solutions focused on clinical coding and decision-making tools for medical professionals.

**[Visit Website](https://clinicode-labs.github.io)**

## 🚀 Our Tools

We build small projects to solve specific problems encountered in clinical practice.

### [PomoDoist](https://clinicode-labs.github.io/tools/pomodoist)
**Status:** ✅ Available Now

Pomodoro timer that syncs with Todoist. Track focus time, estimate tasks, and get smart productivity insights across all your devices.

### [Frailty Calculator](https://clinicode-labs.github.io/tools/frailty-calculator)
**Status:** 🚧 In Development

Point-of-care risk stratification tool for assessing patient frailty and predicting clinical outcomes.

### [MSHPrescribe App](https://clinicode-labs.github.io/tools/mshprescribe)
**Status:** 🧪 Beta Testing

Unofficial native mobile app for accessing MSHPrescribe clinical guidelines offline on your phone. Designed for Queensland Health clinicians.

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

Copyright © 2025 Clinicode Labs. All rights reserved.