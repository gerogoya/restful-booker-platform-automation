# Restful Booker Platform Automation

Portfolio-ready QA automation framework for the Restful Booker Platform using Playwright.

## Goal

This project is designed to showcase a realistic QA automation approach for a hospitality-style SaaS application. It combines UI testing, API validation, reusable page objects, test data management, and a structure suitable for CI pipelines and future expansion.

## Tech Stack

- Playwright
- TypeScript
- REST API testing with Playwright `request`
- Dotenv for environment-based configuration

## What This Project Demonstrates

- UI smoke testing
- Admin login validation
- API authentication testing
- Booking endpoint validation
- Booking lifecycle API coverage
- Hybrid UI + API inventory validation
- Reusable page object structure
- Externalized test data
- ATS and recruiter-friendly portfolio project structure

## Project Structure

```text
restful-booker-platform-automation/
|-- data/
|-- fixtures/
|-- pages/
|-- tests/
|   |-- api/
|   `-- ui/
|-- utils/
|-- .env.example
|-- package.json
|-- playwright.config.ts
`-- README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

3. Copy environment file:

```bash
copy .env.example .env
```

4. Run the full test suite:

```bash
npm test
```

## Useful Commands

```bash
npm run test:smoke
npm run test:e2e
npm run test:api
npm run test:headed
npm run report
```

## Portfolio Notes

This repository is intentionally structured to reflect how a QA Automation Engineer or SDET might organize a maintainable automation framework in a real project. It is also a good foundation for adding:

- authenticated session reuse
- fixtures for shared setup
- GitHub Actions CI
- test reporting artifacts
- hybrid UI + API validation flows
- AI-assisted test design examples
