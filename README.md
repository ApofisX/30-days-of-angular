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

---

## Notes

- Angular CLI is local per workspace, not global - always use `pnpm exec ng`
- `pnpm-lock.yaml` is committed intentionally - ensures reproducible installs
- `track $index` is safe for static lists; for dynamic lists always prefer a unique ID
- `[ngModel]` is one-way (component → input); `[(ngModel)]` is two-way
- `event.preventDefault()` in `keydown` handler stops a character from being inserted
