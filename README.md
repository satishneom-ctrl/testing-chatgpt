# Real-Time Indian Market Options Trading Dashboard for Scalping

## Project Overview
Build a professional, real-time dashboard for Indian market options traders (Nifty 50 & Bank Nifty) that continuously collects, processes, and displays critical NSE India data with sentiment analysis and trading signals.

## Core Objective
Deliver a Bloomberg/Reuters-style trading terminal with high-density, high-contrast data visualization that refreshes every 60 seconds and surfaces actionable insights for scalping.

## How to View the Current Screen

### Option A: Open locally (fastest)
1. Download or clone the repo to your computer.
2. Open the `index.html` file in your browser.
   - On Windows: double‑click `index.html`.
   - On Mac: right‑click `index.html` → Open With → your browser.

### Option B: Use GitHub Pages (shareable link)
1. Go to your GitHub repo → **Settings** → **Pages**.
2. Under **Build and deployment**, select:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`) and `/ (root)`
3. Click **Save**.
4. Wait ~1–2 minutes, then GitHub will show a public URL.
5. Open that URL to see the dashboard screen.

## Data Sources & Automation

### Automated Data Pipeline
- Backend service fetches NSE India data every **1 minute** (even if source updates every 3 minutes).
- Primary sources: **NSE India website**, **official NSE APIs** (where available), and **reliable market data providers**.
- Robust **error handling**, **retry logic**, and **data validation**.

### Critical Data to Collect

**Option Chain (Nifty 50 & Bank Nifty)**
- Current price, open interest (OI) changes, volume
- Put-Call Ratios: **Total**, **Weighted**, **By Volume**
- **Maximum Pain** points
- **Highest OI** strikes for calls & puts
- **OI change** per strike price

**Market Sentiment Indicators**
- **FII/DII activity** (cash + F&O) buy/sell + net
- **India VIX** with direction
- **Advance/Decline ratio**
- **Market breadth** indicators

**Technical & Support/Resistance**
- Support/Resistance levels from OI concentrations
- Volume profile data
- Key pivot points (daily, weekly)

## Dashboard Design Requirements

### Visual Theme
- Professional trading terminal aesthetic (Bloomberg/Reuters)
- **Dark theme** with high-contrast typography
- **Green** = Bullish, **Red** = Bearish, **Amber** = Neutral
- Minimalist, information-dense layout

### Main Layout (5-Section Grid)

**1) Market Overview (Top Banner)**
- NIFTY 50 | Current Price | Change (%)
- BANK NIFTY | Current Price | Change (%)
- India VIX with trend arrow
- Market status (Pre-Open/Open/Closed) + timers
- Last update timestamp

**2) Option Chain Visualization (Left Panel - 60% width)**
- Interactive option chain table (Nifty/Bank Nifty toggle)
- Color-coded OI changes (green = call OI up, red = put OI up)
- Expiry filters
- Max Pain + Highest OI strike indicators
- Real-time updates with subtle “blink” on change

**3) Sentiment Gauge (Right Panel - 40% width)**
- Overall sentiment dial: Extreme Fear → Extreme Greed
- FII/DII activity (real-time + net value)
- 5-day trend chart for FII/DII
- PCR dashboard (Total/Volume/Weighted) + 1-day change
- Advance/Decline meter

**4) Support & Resistance Zone Map (Center Bottom)**
- Price ladder with OI-based support/resistance
- Immediate levels highlighted
- Current price position within zones
- OI density heat map by strike price

**5) Alerts & Notifications (Bottom Ticker)**
- Ticker for significant OI changes
- PCR threshold cross alerts
- Unusual options activity
- Large FII trade alerts

## Functional Requirements

### Real-Time Updates
- Auto-refresh every 60 seconds with refresh indicator
- Manual refresh button
- Pause/Resume data feed toggle

### Interactive Elements
- Click strike price for detailed stats
- Timeframe selector (1D, 5D, 1M)
- Export data (CSV/Excel)
- Fullscreen mode

### Mobile Responsiveness
- Desktop-first, responsive for tablets
- Mobile view shows critical metrics in simplified layout

### Performance
- Load within 3 seconds
- Smooth animations for updates

## Next Steps
If you want, I can create:
1) A **technical architecture plan** (backend + frontend + data pipeline)
2) A **design mock** of the dashboard
3) A **build roadmap** with milestones
