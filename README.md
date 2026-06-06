7# ChargeWise AI

ChargeWise AI is a premium EV charging infrastructure planning platform designed for governments, utilities, private investors, and smart city teams.

The platform turns raw location opportunity into executive-ready deployment intelligence, helping decision makers choose the best sites for electric vehicle charging stations using cloud-powered analytics and AI-driven inputs.

## Project Overview

ChargeWise AI unifies demand forecasting, location scoring, and investment readiness into a single enterprise dashboard.

This product is built to support fast EV infrastructure decisions with a polished, AWS-ready interface that demonstrates real-world planning value.

## Problem Statement

EV charging deployment is complex, with planners balancing limited capital, network coverage, and evolving demand.

Current workflows lack an accessible way to compare candidate locations, prioritize investment, and communicate actionable recommendations to stakeholders.

## Solution

ChargeWise AI combines recommendation scoring, demand analytics, and deployment planning into a centralized platform that makes infrastructure decisions:

- Identify the strongest potential charging locations with AI-driven ranking.
- Frame network readiness in the context of deployment urgency.
- Present investor-focused summaries and planning signals.
- Provide a clean, enterprise-grade dashboard for internal and external demos.

## Key Features

- **Landing experience** with product positioning, feature highlights, and architecture context.
- **Executive dashboard** with high-level KPIs, demand overview, and investment distribution.
- **Demand analysis** that turns location demand into prioritization signals.
- **AI recommendations** table for ranked deployment tiers.
- **Investment insights** for ROI, payback, and risk context.
- **Infrastructure map** view for spatial prioritization and portfolio visibility.
- **Reports** section for export-ready summaries.
- **Settings** and API status for AWS integration transparency.

## Architecture Overview

The frontend is implemented with React and Vite, styled with Tailwind CSS, and visualized using Recharts.

The app integrates with an AWS-backed recommendation service through API Gateway and serverless infrastructure.
https://github.com/Goodness4life/Team-Spark/blob/main/DOC-20260606-WA0062..pdf
### Core architecture

- **React + Vite** for fast interface iteration and production deployment.
- **Tailwind CSS** for modern, consistent enterprise styling.
- **Axios** for lightweight API integration.
- **React Router** for a multi-page dashboard experience.
- **AWS API Gateway** + **Lambda** for serverless recommendation delivery.

## AWS Services Used

- **Amazon S3** — host and deliver the static frontend assets.
- **AWS Lambda** — execute recommendation scoring logic without managing servers.
- **Amazon API Gateway** — expose the recommendation endpoint securely.

## API Documentation

The dashboard loads recommendation data from the following endpoint:

`https://06nwru8m2b.execute-api.us-east-1.amazonaws.com/pod/recommendations`

### Sample response

```json
[
  {
    "location": "Lekki",
    "score": 92,
    "rank": 1
  },
  {
    "location": "Ikeja",
    "score": 88,
    "rank": 2
  }
]
```

### Field definitions

- `location`: The candidate area recommended for EV charging station deployment.
- `score`: AI recommendation score from 0-100, where a higher score signals stronger deployment potential.
- `rank`: Location ranking, with `1` representing the highest-priority recommendation.

## Business Impact

ChargeWise AI helps teams:

- accelerate EV charging rollout decisions with clear location rankings.
- reduce planning friction by centralizing recommendation and demand signals.
- align stakeholders around high-confidence deployment opportunities.
- elevate planning conversations with investor-friendly reporting.

## Future Enhancements

Potential rapid improvements to enhance the hackathon demo:

- add live demand telemetry and geospatial overlays.
- integrate real asset and grid consumption data.
- support role-based dashboards for planners and investors.
- build exportable narrative reports for executive review.
- add workflow actions and deployment approvals.

## Demo

Run the application locally to explore the full product experience:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` and review:

- the landing experience and product positioning.
- the dashboard overview and story-driven KPIs.
- AI recommendations with ranking tiers.
- infrastructure map and deployment readiness view.

## Team Members

- Product Design
- UX Strategy
- Frontend Engineering
- AWS Cloud Architecture

## Repository Structure

- `src/App.tsx` — application routes and page shell.
- `src/layouts/AppLayout.tsx` — responsive dashboard workspace with sidebar and topbar.
- `src/components/ui` — reusable UI components, buttons, cards, and layout elements.
- `src/pages` — landing, dashboard, recommendations, investment, map, reports, and settings views.
- `src/pages/charts` — Recharts visualization components.
- `src/services/api.ts` — Axios API client and recommendation endpoint configuration.
- `src/hooks/useFetchRecommendations.ts` — API data loader with fallback handling.

## Notes

This project is optimized as a hackathon-ready product showcase with a premium enterprise aesthetic, AWS integration, and data storytelling designed for evaluators and stakeholders.
