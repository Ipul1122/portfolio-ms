# design.md — Portfolio Architecture & Design Specification

## 1. Design System & Visual Identity
* **Color Palette (Warm Minimalist):**
  * `Background Primary`: `#FDFBF7` (Alabaster / Warm Cream)
  * `Background Secondary / Card`: `#F4F0EA` (Soft Oatmeal / Muted Paper)
  * `Foreground / Primary Text`: `#1E1E1E` (Soft Charcoal)
  * `Muted Text`: `#6E6A67` (Warm Slate)
  * `Accent / Border`: `#E2DDD5` (Subtle Sand)
  * `Primary Accent`: `#C25E3E` (Muted Terracotta / Clay)
* **Typography:**
  * Heading: Modern Serif (e.g., *Playfair Display* / *Instrument Serif*)
  * Body & UI: Clean Geometric Sans (e.g., *Geist Sans* / *Inter*)
* **Design Tone:** Clean, editorial, tactile, human-crafted, anti-AI slop.

---

## 2. Tech Stack & Integration Architecture
* **Core Framework:** React (TSX) + Vite (Single Page Application).
* **Styling:** Tailwind CSS (configured for warm white palette).
* **UI Components:** Shadcn UI (Customized primitive components: Button, Badge, Card, Dialog/Drawer).
* **Scroll Animations:** AOS (Animate On Scroll) via CDN for viewport transitions.
* **Micro-interactions & Physics:** Anime.js via CDN for custom SVG drawing, magnetic hover, and kinetic typography.

---

## 3. CDN Integration Blueprint
Injected into `index.html` via CDN to keep bundle footprint lightweight:
* `Anime.js` CDN Script tag.
* `AOS` CSS (`aos.css`) & JS (`aos.js`) CDN tags.
* TypeScript Declaration interface for `window.anime` and `window.AOS`.

---

## 4. SPA Layout & Component Blueprint

### A. Navigation Bar (Sticky / Floating)
* **Elements:** Logo, `Home`, `About`, `Skill`, `Experience`, `Get In Touch`.
* **Design:** Floating pill navbar with subtle backdrop blur (`backdrop-blur-md bg-[#FDFBF7]/80`).
* **Interaction:** Smooth auto-scroll anchor navigation with animated active section indicator.

### B. Home Section (Hero)
* **Layout:** Editorial-style split layout. Big warm typography with micro-tagline.
* **Animations:**
  * Anime.js letter/word stagger entrance.
  * Interactive floating cursor-following dot or soft canvas accent.
* **Actions:** Shadcn UI action button (`Get in touch` / `Download CV`).

### C. About Section
* **Layout:** Storytelling column paired with an interactive tactile card.
* **Animations:**
  * AOS fade-up & zoom-in transitions.
  * Subtle hover tilt and SVG line drawing via Anime.js on key metric badges.

### D. Skill Section
* **Layout:** Categorized interactive badge ecosystem (Frontend, Backend, Tools, Soft Skills).
* **Components:** Shadcn `Badge` & `Card`.
* **Interaction:** Floating bounce physics on hover using Anime.js rather than generic percentage bars.

### E. Experience Section
* **Layout:** Vertical editorial timeline with sticky milestone markers.
* **Components:** Shadcn Accordion or Card with expandable project highlights.
* **Animations:**
  * AOS triggered progressive line-fill and card reveals.

### F. Get In Touch (Contact & Footer)
* **Layout:** Minimalist contact form + direct links / social handles.
* **Components:** Shadcn `Input`, `Textarea`, and `Button`.
* **Interaction:** Magnetic button physics and smooth focus outlines.

---

## 5. File Structure Blueprint
```text
src/
├── components/
│   ├── ui/               # Shadcn UI primitives (Button, Card, Badge, Input, etc.)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── types/
│   └── cdn.d.ts          # Anime.js and AOS global definitions
├── App.tsx               # SPA root assembling all sections + AOS init
└── main.tsx