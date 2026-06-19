# 30 Days of Angular

Personal learning repo following the Udemy course
[30 Days of Angular: Build 30 Projects with Angular](https://www.udemy.com/course/30-days-of-angular/?couponCode=KEEPLEARNING)

|                     |                   |
|---------------------|-------------------|
| **Started**         | 2026-06-07        |
| **Course duration** | 27 hours          |
| **My elapsed time** | tracking manually |

---

## Structure

```
30-days-of-angular/
  angular-fe/
    day01-profile-card/
    day02-counter/
    day03-todo/
    day04-stopwatch/
    ...
    package.json        ← Angular CLI lives here
  .gitignore
  README.md
```

---

## Setup from scratch

### Prerequisites

- [Volta](https://volta.sh/) - Node version manager
- Node 24 via Volta: `volta install node@24`
- pnpm via Volta: `volta install pnpm`
- [Git](https://git-scm.com/) + [GitHub CLI](https://cli.github.com/)

### Clone and install

```bash
git clone https://github.com/ApofisX/30-days-of-angular.git
cd 30-days-of-angular/angular-fe
pnpm install
```

### Run a project

```bash
cd day01-profile-card
pnpm start
```

App runs at http://localhost:4200

---

## Running on a different PC

1. Install Volta
2. Install node: `volta install node@24`
2. Install pnpm: `volta install pnpm`
3. Clone repo
4. `cd angular-fe && pnpm install`
5. `cd day##-name && pnpm start`

Volta reads the pinned Node version from `package.json` automatically.

---

## Adding a new day project

```bash
cd angular-fe
pnpm exec ng new day##-name --skip-git
cd day##-name
pnpm install
volta pin node@24
pnpm exec ng config cli.packageManager pnpm
```

If pnpm warns about ignored build scripts, add `pnpm-workspace.yaml` to the day project folder:

```yaml
allowBuilds:
  '@parcel/watcher': true
  esbuild: true
  lmdb: true
  msgpackr-extract: true
```

Then run `pnpm install` again.

---

## Daily Log

### Day 01 - Profile Card
**Concepts:** `{ componentProperty }` one-way binding - renders component data into the template. Read-only, component → view.

### Day 02 - Counter
**Concepts:** `[( componentProperty )]` two-way binding via `ngModel` - syncs input field with component field in both directions. Requires `FormsModule`.

### Day 03 - Todo List
**Concepts:**
- `@if` / `@else if` - new control flow, replaces `*ngIf`
- `@for (item of items; track item.id; let i = $index)` - replaces `*ngFor`. `track` is mandatory; use unique ID when available, fall back to `$index` for primitives
- `[ngClass]` - conditionally apply CSS classes
- `[ngStyle]` - conditionally apply inline styles

### Day 04 - Stopwatch
**Concepts:**
- `(click)` / `(keydown)` - event bindings
- `(keydown.enter)` / `(keydown.escape)` - key-specific shorthand
- `$event` (of type KeyboardEvent) - pass native event object to handler: `(keydown)="onKey($event)"`
- Calling component methods from template

### Day 05 - Guess the Number
**Concepts:**
- `[disabled]="expression"` - conditionally disable input or button from template
- `private static readonly` constants on the component class - good pattern for constant values
- `private static` methods - utility logic that doesn't need instance access
- Optional fields with `?` - `guessedNumber?: number` the same as `guessedNumber: number | null`
- Template calling methods with arguments: `[disabled]="!isValidGuess(guessedNumber)"`
- `protected` visibility - accessible from template but not from outside the class

### Day 06 - Tic Tac Toe
**Concepts:**
- `Array(9).fill("")` - create and initialize a fixed-length array
- Iterating an array by index: `@for (cell of board; track i; let i = $index)`
- Decomposing logic into small private methods (`_isCellOccupied`, `_isGameOver`, etc.)
- `array.every()` / `array.some()` for board state checks
- Array destructuring in `.some()`: `([a, b, c]) => ...`

### Day 07 - Dynamic List Filter
**Concepts:**
- Custom pipe: `@Pipe({ name: 'filter' })` + `implements PipeTransform` with `transform(value, ...args)` method
- Using a pipe in template: `items | filter : searchText`
- Pipes must be imported in the component's `imports: []` array (standalone)
- Pipe receives the left-hand value as first argument, colon-separated params as the rest

### Day 08 - Rock Paper Scissors
**Concepts:**
- `[src]="expression"` / `[alt]="expression"` - dynamic image binding
- Calling `.toLowerCase()` / `.toLocaleLowerCase()` directly in template expressions
- Static class constants used as both data source and logic reference (`choices` array driven by the same constants used in `determineWinner`)

### Day 09 - FAQ Accordion
**Concepts:**
- Toggle pattern: `this.openIndex = this.openIndex === index ? null : index`
- `readonly` data arrays on the component - good for static content that never changes
- `animate.enter` / `animate.leave` attributes - Angular animations API (declarative syntax)
- Tracking by a property value: `track faq.question` when no numeric ID exists

---

## Notes

- Angular CLI is local per workspace, not global - always use `pnpm exec ng`
- `pnpm-lock.yaml` is committed intentionally - ensures reproducible installs
- `track $index` is safe for static lists; for dynamic lists always prefer a unique ID
- `[ngModel]` is one-way (component → input); `[(ngModel)]` is two-way
- `event.preventDefault()` in `keydown` handler stops a character from being inserted
- `protected` members are accessible from the template but not from outside the class; prefer over `public` for template-only bindings
- Pipes are pure by default - they only re-run when input reference changes, not on mutation; use impure pipes (`pure: false`) only when necessary as they run on every change detection cycle
- Custom pipes must be added to `imports: []` in standalone components, same as modules
