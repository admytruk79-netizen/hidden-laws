# Hidden Laws

Primary website for Oleksandr Dmytruk's body of work, including ASCEND Keys, ASCEND Path, ASCEND Journey, Ancestral Roots, Qigong, Reiki, energetic practice, books, teaching and private sessions.

## Cloudflare Pages

- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`

The root `index.html` is the public site. Cloudflare Pages Functions under `functions/api/` provide the dynamic layer.

## Booking

The site reads its booking destination from `/api/config`. In Cloudflare Pages, add a plain-text environment variable:

- `BOOKING_URL` — full booking URL, for example a Cal.com booking page.

Once set, every **Book a Session** button automatically opens that URL. Until then the buttons fall back to the booking/contact section on the site.

## Contact backend

`POST /api/contact` validates inquiries and supports either of two backends.

### Option A — Cloudflare KV

Create a KV namespace and bind it to the Pages project as:

- `CONTACTS`

Inquiries are stored with keys beginning `inquiry:`.

### Option B — Email via Resend

Add these encrypted/plain variables in Cloudflare as appropriate:

- `RESEND_API_KEY`
- `CONTACT_TO` — destination inbox, e.g. `admytruk@proton.me`
- `CONTACT_FROM` — verified sender address/domain in Resend

If `CONTACTS` is bound, KV storage takes priority. If neither backend is configured, the form fails safely and directs the visitor to email instead.

## Editable content backend

The `hidden-laws-v2` branch adds runtime-editable public content without hard-coding future copy changes into `index.html`.

Create a second KV namespace and bind it to the Pages project as:

- `CONTENT`

The public site reads editable copy from `GET /api/content`. A Pages middleware injects `dynamic-content.js` into the homepage so saved values override the built-in defaults at runtime.

### Admin area

Open `/admin.html` after deployment. Configure these Cloudflare environment variables/secrets:

- `ADMIN_PASSWORD` — password used to access the editor
- `SESSION_SECRET` — long random secret used to sign the 12-hour admin cookie

The admin can edit the hero, mission, about copy and booking introduction. Changes are saved to the `CONTENT` KV binding and appear on the public homepage immediately without a redeploy.

## Content direction

Hidden Laws is the umbrella home for Oleksandr's mission and work. ASCEND is presented as a coherent system with three distinct expressions: Keys, Path and Journey. Ancestral Roots, Reiki/energetic work, Qigong/subtle-body work, books and private sessions sit beneath the same mission: preserving, developing and passing on practical knowledge while uniting inner and outer worlds through grounded practice and integration.
