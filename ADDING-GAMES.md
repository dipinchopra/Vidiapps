# Adding games to vidiapps.com

Keep every game's source in its own repository. This existing `dipinchopra/Vidiapps` repository receives only reviewed production output in `games/<slug>/`.

## Build and copy

1. Update your local checkout of `Vidiapps` (`git pull --ff-only`). Choose a lowercase, hyphenated slug, such as `sneaker-wash`.
2. In the separate game repository, configure Vite's `base` as `/games/<slug>/`, then run `npm ci` and `npm run build`. An explicit equivalent is `npm run build -- --base=/games/<slug>/`. Phaser loaders should prefix public assets with `import.meta.env.BASE_URL`. Vite rewrites CSS public-asset URLs during the build; check the emitted CSS. For plain HTML/JS, use `./assets/...` and `./game.js` relative URLs.
3. Inspect the build directory. It must contain `index.html` and only runtime JS, CSS, images, audio, fonts, and necessary licenses. Never copy the repository, `src/`, `node_modules/`, `.git/`, `.env` files, private notes, credentials, or source maps. Check bundled code for embedded credentials too: client-side environment variables are public.
4. Copy the **contents** of the build directory into `Vidiapps/games/<slug>/`, not into an extra `dist` subdirectory. For a new game:

   ```sh
   mkdir -p /path/to/Vidiapps/games/sneaker-wash
   cp -R /path/to/sneaker-wash/dist/. /path/to/Vidiapps/games/sneaker-wash/
   ```

   For an update, replace only that game's old output, removing stale hashed assets after reviewing the target path. Keep all other games intact.
5. Add a card to `games/index.html` with a relative link such as `./sneaker-wash/`. Give every game launch link `target="_blank" rel="noopener noreferrer"` so it opens in a new tab or window, and label that behavior accessibly. Match the website typography: `Russo One`, with a sans-serif fallback and the existing Google Fonts stylesheet. List only playable games. The current Sneaker Wash directory is a coming-soon placeholder; replace it when its build is ready.

## Validate and publish

6. In `Vidiapps`, run `npm install` and `npm run build`, then:

   ```sh
   cp -R games dist/games
   cp CNAME dist/CNAME
   python3 -m http.server 8080 --directory dist
   ```

   Open `http://localhost:8080/games/` and the game's nested URL. Check startup, play/restart, and images/audio/fonts, and confirm no missing requests or JavaScript errors.
7. Review `git status` and the diff. Stage only `games/<slug>/` and `games/index.html` (plus any intentional documentation changes), commit, and push to `main` in the **existing** `Vidiapps` repository. Do not commit local `dist/` or `node_modules/`.
8. Wait for the existing **Deploy Vite Site** GitHub Actions workflow to succeed. It builds the landing page and copies `games/` and `CNAME` into the Pages artifact. Confirm `https://vidiapps.com/games` and `https://vidiapps.com/games/<slug>` redirect to the working directory URLs, then check gameplay and all assets live. The existing canonical Pages domain is `www.vidiapps.com`; retain its domain settings.

## Clean Pour

Source: `https://github.com/dipinchopra/clean-pour`. Its default production build targets `/games/clean-pour/`. Its separate repository's Pages workflow explicitly overrides the base to `/clean-pour/` to preserve that standalone deployment. Updating Clean Pour on vidiapps.com requires copying a fresh default build here and pushing this repository.
