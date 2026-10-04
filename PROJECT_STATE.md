# Canonical Project State

## Mission
Build and deploy a polished standalone one-page website for Asphalt Sealcoating Solutions with cinematic hero video, parallax, mobile optimization, SEO, and production QA.

## Locked facts
- Business: Asphalt Sealcoating Solutions
- Category: Asphalt contractor
- Rating: 4.7 / 5
- Reviews: 15
- Address: 411 Zion Rd, Egg Harbor Township, NJ 08234
- Phone: (609) 300-8100
- Hours: 7:00 AM–10:00 PM daily
- Review-supported work: residential driveway sealcoating, commercial parking lot sealcoating, repair/patching, cleanup/edge work, parking lot striping.

## Excluded conflicting data
Older directory listings show a different Atlantic City address and phone. Those are not used.

## Creative direction
Premium industrial/asphalt identity: charcoal black, warm safety amber, off-white, diagonal road-mark motif, strong editorial typography, cinematic pavement footage, and no generic construction-template styling.

## Technical architecture
Single self-contained `index.html` with inline CSS/JS/SVG. Transform-only parallax is driven by `requestAnimationFrame` and CSS custom properties so rotation and translation compose safely. Reduced-motion support hides video and leaves the generated poster visible. No framework runtime.

## Video pipeline
- Veo 3.1 Ultra attempted; blocked by Higgsfield plan.
- Cinema Studio 4.0 attempted; blocked by Higgsfield plan.
- Wan 3.0 Prime generated successfully. Source job: cfe6e4b5-64a2-4fa6-b3f1-22b786723219.
- Pro AI upscale job: 730549d9-585b-437d-a450-54f9824fd372.
- Final media independently probed at 2560×1440, H.264, 24 fps, 8.084 seconds.
- Real poster frame extracted at 0.5 seconds: media id 488b3cdb-9c82-4b17-9a47-53478f7bcc63.
- OG image media id: 6093b9de-24e7-4ea7-a65f-b08a470cff7e.

## Repository
https://github.com/mhanson001/asphalt-sealcoating-solutions

## Deployment target
https://mhanson001.github.io/asphalt-sealcoating-solutions/

## Next actions
1. Commit production baseline.
2. Enable GitHub Pages source = GitHub Actions if required by first deploy.
3. Verify production video, poster, parallax, phone/Maps links, metadata, responsive behavior, and performance.
4. Record final QA evidence and portfolio summary.
