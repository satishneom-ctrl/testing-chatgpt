# Build To-Do List

## 1) Project Setup
- [ ] Initialize frontend app structure (HTML/CSS/JS or React/Vue).
- [ ] Set up backend service for market-data ingestion.
- [ ] Configure environment variables and secrets management.
- [ ] Add linting, formatting, and pre-commit hooks.

## 2) Data Ingestion & Processing
- [ ] Connect to NSE/approved market data sources.
- [ ] Implement 60-second fetch scheduler with retry + backoff.
- [ ] Normalize option-chain, FII/DII, VIX, and breadth data.
- [ ] Add validation rules and fallback handling for missing data.

## 3) Trading Metrics Engine
- [ ] Calculate PCR metrics (total, weighted, volume-based).
- [ ] Compute Max Pain and highest OI strikes.
- [ ] Derive support/resistance zones from OI concentrations.
- [ ] Create sentiment scoring logic (fear/greed style index).

## 4) Dashboard UI Development
- [ ] Build top market overview banner.
- [ ] Build interactive option-chain panel with filters/toggles.
- [ ] Build sentiment gauge + mini trend visualizations.
- [ ] Build support/resistance zone map and bottom alert ticker.

## 5) Interactivity & UX
- [ ] Add manual refresh and pause/resume controls.
- [ ] Add strike-click drill-down for detailed stats.
- [ ] Add timeframe selectors (1D/5D/1M).
- [ ] Add export options (CSV/Excel) and fullscreen mode.

## 6) Quality, Performance, and Release
- [ ] Add unit/integration tests for calculations and APIs.
- [ ] Ensure dashboard loads within 3 seconds in target environment.
- [ ] Optimize rendering for frequent updates.
- [ ] Deploy with monitoring, logging, and alerting.
