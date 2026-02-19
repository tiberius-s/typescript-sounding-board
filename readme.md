# TypeScript Sounding Board

A tiny TypeScript sandbox for running quick scripts and experiments locally.

## Quick start

- Clone and install:

  ```sh
  git clone git@github.com:tiberius-s/typescript-sounding-board.git
  cd typescript-sounding-board
  npm i
  ```

- Run a script (uses `tsx`):

  ```sh
  npm run script --file=get-even-numbers
  ```

- Run tests (Vitest):

  ```sh
  npm test
  ```

## Conventions

- scripts/ is local-only and ignored by Git — do **not** upload files from `scripts/`.
- You may colocate tests with scripts for convenience (e.g. `scripts/foo.test.ts`) — those files remain local.

## Tooling

- Script runner: `tsx`
- Formatter & linter: `biome`
- Test runner: `vitest`

## Example (script + test)

- Implementation: `scripts/get-even-numbers.ts`
- Test: `scripts/get-even-numbers.test.ts`

Run the example script with `npm run script --file=get-even-numbers` and run tests with `npm test`.

---

## Sharing scripts

Want to make some scripts available to others? pick one of the options below:

- **Commit a shared folder (recommended)** — add a committed directory like `shared-scripts/`. Optionally add a Vite alias (`@shared`) in `vite.config.ts` to import files.

  Example:

  ```sh
  mkdir shared-scripts
  git add shared-scripts && git commit -m "chore: add shared-scripts for public examples"
  ```

- **Publish as a package / separate repo** — create a dedicated repo or npm package and consume it as a dependency when you need versioning or reuse.

- **Use a Git submodule** — keep the library in its own repository and add it as a submodule (`git submodule add <repo> shared-scripts`).

Tell me which option you prefer and I will implement it (update `.gitignore`, add folder/alias, or create a submodule).
