# ChemShaa Waiting Lobby – Responsive Web Recreation

React + TypeScript + Tailwind CSS recreation of the ChemShaa Android waiting lobby as a responsive web experience.

## Interview Task

The primary objective of this project is to recreate the **single ChemShaa waiting lobby screen** from the Android application as accurately as possible for the web.

The implementation focuses on:

- Pixel-accurate recreation of the waiting lobby
- Responsive behavior across mobile, tablet, laptop, and desktop screens
- Smooth waiting-lobby animations
- Real-time countdown behavior
- Layout and typography matching the supplied mobile reference
- Clean, reusable React components

## Required Screen

### Waiting Lobby

The waiting lobby is the primary interview deliverable and is displayed as the default application screen.

It includes:

- ChemShaa branding
- Dynamic show-time messaging
- Live trivia rules
- Animated loading indicators
- Feedback link
- Real-time countdown to the next trivia show
- Responsive scaling across different browser sizes

## Additional Screens – Bonus Implementation

The interview task only required the waiting lobby screen.

As an additional enhancement, I recreated several supporting screens from the ChemShaa mobile flow to demonstrate how the waiting lobby could fit into a larger responsive web experience.

These additional screens include:

- More / Account screen
- Delete-account confirmation modal
- Login screen with Kenyan phone-number validation
- SMS verification screen

These screens are supplementary and are not required for the core waiting-lobby implementation.

## Responsive Behavior

The application background fills the available browser viewport on mobile, tablet, laptop, and desktop.

The waiting lobby uses responsive widths, spacing, typography, and height-aware layouts to preserve the proportions of the Android reference while adapting naturally to larger web screens.

The design intentionally avoids simply stretching the mobile interface across desktop displays.

## Dynamic Show Time

The daily trivia show is scheduled for **2:00 PM local browser time**.

The lobby dynamically determines the next show:

- Before 2:00 PM → the lobby displays today's show
- At or after 2:00 PM → the lobby displays tomorrow's show

The countdown uses the same scheduling logic so the displayed message and countdown remain synchronized.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- React Icons

## Run Locally

```bash
npm install
npm run dev
```

## Validation

```bash
npm run typecheck
npm run build
```

Both commands pass in the delivered project.