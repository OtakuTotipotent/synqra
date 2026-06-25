# Synqra landing page architecture & specification

Synqra is an autonomous AI Personal Assistant dashboard designed to consolidate digital communications, scheduling, document retrieval, media analysis, and financial tracking in a secure, local-first workspace. Below is the layout and implementation specification for the newly-created Next.js landing page.

---

## 🎨 design tokens & aesthetics

| Category | Token / Class | Description |
| :--- | :--- | :--- |
| **Theme** | Dark Mode by default | Implements a futuristic, premium, "digital brain" aesthetic. |
| **Primary Color** | `bg-slate-950` / `#030712` | Solid deep space grey background. |
| **Text Primary** | `text-slate-100` / `#f3f4f6` | Slate white for high-contrast readability. |
| **Accent Gradients** | Violet-to-Indigo & Cyan-to-Blue | Used for glowing highlights, active nodes, and key buttons. |
| **Atmospherics** | `.bg-grid-pattern` & `.glass-panel` | Dashed grid lines and heavy backdrop-blur (16px) with thin borders. |

---

## 🏗️ page structure & components

The page has been structured into reusable client/server components in [app/components](file:///D:/Code/01_Active/synqra/app/components):

### 1. Header component
* **Path**: [Header.tsx](file:///D:/Code/01_Active/synqra/app/components/Header.tsx)
* **Features**:
  * Glassmorphic header (`backdrop-blur-xl`) with scroll-detection transition.
  * Pulsing CPU-chip logo with dynamic ambient light.
  * Adaptive mobile dropdown navigation with responsive menu toggles.
  * Glowing gradient-bordered "Launch App" CTA button.

### 2. Hero section with interactive orbital map
* **Path**: [Hero.tsx](file:///D:/Code/01_Active/synqra/app/components/Hero.tsx)
* **Visual Highlights**:
  * Concentric orbital SVG lines wrapping around a pulsing **AI Neural Core**.
  * **7 Interactive Service Nodes** (Gmail, WhatsApp, Google Calendar, Slack, Spotify, YouTube, Google Drive).
  * **Dynamic Laser Beams**: Hovering over any node fires an SVG laser link to the core, triggers an scale pulse, and outputs a custom AI integration script in the core container.

### 3. Bento grid features list
* **Path**: [BentoGrid.tsx](file:///D:/Code/01_Active/synqra/app/components/BentoGrid.tsx)
* **Showcased Modules**:
  * **Omni-Channel Synthesis** (Slack, Discord, WhatsApp) — shows simulated thread summaries.
  * **Financial Autopilot** (Receipts, Sheet loggers) — lists monthly spending logs.
  * **Smart Calendar** (De-conflicting meetings) — shows a timeline optimization card.
  * **Semantic Drive Search** (PDF indexing) — shows natural language document parsing.
  * **Media Synthesizer** (YouTube timestamps) — shows timestamp outlines.
  * **Privacy Shield** (AES-256 local database routing).

### 4. Interactive playground demo
* **Path**: [InteractiveDemo.tsx](file:///D:/Code/01_Active/synqra/app/components/InteractiveDemo.tsx)
* **Autopilot Sandbox**:
  * Users can select 4 simulation scripts: *Omni-Alert Summarizer*, *Expense Auditor*, *Calendar Coordinator*, or *Document Searcher*.
  * Simulates a terminal window (`synqra-sandbox-cli`) where the query types out via a **React typewriter loop**, showing the loading states and the styled summary cards outputted by the agent.

### 5. Filterable integrations catalogue
* **Path**: [IntegrationsCatalog.tsx](file:///D:/Code/01_Active/synqra/app/components/IntegrationsCatalog.tsx)
* **Supported accounts**:
  * **Workspace**: Gmail, Outlook, Google Drive, OneDrive, Microsoft Office, Google Sheets, Google Docs, Google Photos.
  * **Communication**: WhatsApp, Telegram, Slack, Discord, TikTok, Instagram, Facebook, LinkedIn.
  * **Productivity**: Microsoft To-Do, Google Keep Notes, Google Tasks, Google Calendar.
  * **Media & Calls**: Spotify, YouTube, Zoom, Google Meet, Google Classroom.
* **UX Mechanics**:
  * Quick-search input box filtering services in real-time.
  * Functional category tabs to instantly narrow down search scopes.

### 6. Pricing tiers
* **Path**: [page.tsx](file:///D:/Code/01_Active/synqra/app/page.tsx#L40-L162)
* **Plans**:
  * *Autopilot Pro* ($15/mo): 10 active integration nodes, hourly summaries, standard scheduling.
  * *Neural Workspace* ($45/mo): Unlimited nodes, custom webhooks, local routing (Ollama/LM Studio), and custom vector stores.

### 7. Footer
* **Path**: [Footer.tsx](file:///D:/Code/01_Active/synqra/app/components/Footer.tsx)
* **Contents**:
  * Company elevator pitch and logo.
  * Links structured under *Product* and *Company*.
  * Newsletter registration form with local validation.
  * Compliance tags (GDPR & HIPAA compliant, operational status).
  * Custom SVGs for Twitter, GitHub, and LinkedIn social icons.

---

## ⚡ compilation & performance status

The project builds successfully using the Next.js Turbopack compiler.

```bash
▲ Next.js 16.2.9 (Turbopack)
✓ Compiled successfully in 4.9s
Running TypeScript ...
Finished TypeScript in 5.5s ...
✓ Generating static pages ...
Route (app)
┌ ○ /
└ ○ /_not-found
```
All assets are optimized statically to ensure sub-second initial load speeds (SEO Best Practice).
