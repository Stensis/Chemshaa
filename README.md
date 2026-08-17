# ChemShaa Responsive Web Recreation

React + TypeScript + Tailwind recreation of the ChemShaa waiting lobby and supporting account/login flow.

## Included screens

- Waiting lobby (default interview screen)
- More/account screen
- Delete-account confirmation modal
- Login screen with Kenyan phone validation
- SMS verification screen

## Responsive behavior

The yellow application canvas fills the viewport on mobile, tablet, laptop and desktop. Content uses constrained responsive columns and height-aware styles so laptop browser windows do not introduce unwanted scrolling on the waiting lobby.

## Countdown

The waiting lobby counts down in real time to **tomorrow at 2:00 PM local browser time**. The target date is memoized so it does not drift as the component rerenders.

## Run

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
