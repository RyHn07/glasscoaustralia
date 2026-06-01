## Goal
Glass Processing page (`/services/glass-processing`) er "CNC Line / SKILL E-D" section a currently AI-generated image dekhacche. Apnar uploaded asol machine photo (red conveyor rollers + striped machining centre) diye replace korbo.

## Steps
1. Apnar uploaded image (`/mnt/user-uploads/image-65.png`) k Lovable Assets a upload korbo notun pointer hisebe: `src/assets/machine-cnc-real.jpg.asset.json`.
2. `src/routes/services.glass-processing.tsx` a CNC Line section er import ta notun asset file a switch korbo.
3. Purono `src/assets/machine-cnc-line.jpg.asset.json` (AI-generated) delete korbo CDN theke.
4. Preview a verify korbo je notun real photo render hocche.

## Scope
Sudhu CNC Line section er image. Onno kichu change korbo na.