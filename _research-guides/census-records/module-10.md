---
layout: guide
title: "Module 10 — Using AI for Census Analysis"
description: "Practical workflows for using AI tools to compare census years, extract patterns, identify discrepancies, and accelerate analysis in Puerto Rican genealogical research."
difficulty: advanced
lang: en
permalink: /research-guides/census-records-module-10/
ref: census-records-module-10
last_modified_at: 2026-02-26
---

*Part of the [Census Records for Puerto Rican Genealogy](/research-guides/census-records/) course.*

---

## Learning Objectives

By the end of this module, you will:

- Identify what AI tools can and cannot do in genealogical census research
- Apply practical AI workflows for extracting, comparing, and organizing census data
- Write effective prompts for census analysis tasks
- Recognize and guard against AI hallucination
- Maintain GPS compliance in AI-assisted research

---

## What AI Can and Cannot Do

### What AI Does Well

AI tools are most useful for organizing, formatting, and pattern-spotting across text you provide:

- Extract structured data from transcribed census entries and format it as a table
- Compare multiple census entries for the same family and flag age discrepancies
- Calculate implied birth years from reported ages across multiple census years
- Translate Spanish-language census column headers and genealogical terminology
- Suggest alternative spellings and anglicizations for Spanish names
- Explain the historical context of census categories (race classification, occupational terms)
- Help draft narrative summaries from data tables you have already built

### What AI Cannot Do

- **Search databases.** AI tools cannot search FamilySearch, Ancestry, or AGPR. They only work with text you provide.
- **Read images reliably.** Do not paste census images and ask AI to transcribe them without verifying every character against the original.
- **Know what records exist.** An AI tool cannot tell you whether a specific record survives for a given municipality.
- **Cite records.** AI output is not a genealogical source and cannot be cited.
- **Avoid hallucination.** AI tools generate plausible-sounding but sometimes completely false information. See below.

---

## GPS Compliance When Using AI

Any conclusion reached with AI assistance must still meet all five elements of the Genealogical Proof Standard:

1. **Reasonably exhaustive research** — AI does not search for you. Conduct searches through proper repositories.
2. **Complete and accurate citations** — Cite the original census record, not the AI output.
3. **Thorough analysis of each source** — The Three-Layer analysis (source type, information quality, evidence value) is your responsibility.
4. **Resolution of conflicting evidence** — AI can flag discrepancies; you reason through the resolution.
5. **A soundly reasoned, coherently written conclusion** — AI can help draft language; the logic and interpretation are yours.

> **Core rule:** AI is a data organization tool. It is not a research authority. Treat AI output as a starting point, not a conclusion.

---

## Practical Workflows

### Multi-Year Data Extraction

Transcribe census entries from original images, paste them into AI with a clear prompt, ask for a structured comparison table, then verify every cell against your transcriptions before using the table.

### Age Discrepancy Analysis

Provide the name, census year, and reported age for each entry. Ask AI to calculate implied birth years and flag discrepancies greater than 3 years. Use flagged discrepancies as starting points for further investigation.

### Spanish Terminology Translation

List the terms you need translated and ask AI to provide translations plus historical context. Verify unfamiliar terms against a reference source such as Elizabeth Shown Mills' *Evidence Explained* or the FamilySearch wiki.

### Name Variation Generation

Provide the original Spanish name and ask AI to list possible anglicizations, abbreviations, and phonetic misspellings that might appear in U.S. federal census records. Use the list to run additional searches — verify every result.

### Migration Pattern Summary

Provide the "where living 5 years ago" field from the 1940 census for each household member and ask AI to summarize the movement pattern. Treat the summary as an organizational aid, not as evidence.

### Worked Example: A Complete Census Comparison

**The researcher's transcriptions (from original census images):**

> 1910 — Juan García, head, age 35, Barrio Ensenada, Rincón; wife María López, 30; children: Pedro 8, Carmen 5, Rosa 2\
> 1920 — Juan García, head, age 48, Barrio Ensenada, Rincón; wife María López, 42; children: Pedro 18, Carmen 15, Rosa 12, Luis 7\
> 1930 — Juan García, head, age 57, Barrio Partido, Rincón; wife María López, 50; Luis 17

**The prompt:**

> "I am doing genealogical research on a Puerto Rican family from Rincón. Below are my transcriptions of U.S. Federal Census entries for Juan García across three census years. Build a comparison table with columns for: census year, name as recorded, age, implied birth year, barrio, and household members. Flag any implied birth year that differs by more than 3 years from another entry. Use only the information I provide. Leave blank any field missing from my data."

**The AI's output (verified against original transcriptions):**

| Census Year | Name as Recorded | Age | Implied Birth Year | Barrio | Household Members |
| --- | --- | --- | --- | --- | --- |
| 1910 | Juan García | 35 | **1875** | Ensenada | Wife: María López (30); Pedro (8), Carmen (5), Rosa (2) |
| 1920 | Juan García | 48 | **1872** | Ensenada | Wife: María López (42); Pedro (18), Carmen (15), Rosa (12), Luis (7) |
| 1930 | Juan García | 57 | **1873** | Partido | Wife: María López (50); Luis (17) |

> **Discrepancy flagged:** The 1910 implied birth year (1875) differs from 1920 (1872) by 3 years — at the threshold. The 1920 and 1930 entries are consistent (1872 and 1873).

**What the researcher does next:** The 1910 entry warrants further investigation. The researcher will search civil registration and, where available, baptismal records to establish a documented birth year. The barrio change from Ensenada to Partido is noted but not evidence of migration — both barrios are within the *municipio* of Rincón. Children's ages are internally consistent across all three years, which strengthens confidence that all three entries describe the same household.

---

## Effective Prompt Structure

Every effective AI prompt for census work has three parts:

**Context:** Tell the AI what you are working with.
> "I am doing Puerto Rican genealogical research. I have census entries for the same individual from 1910, 1920, and 1930."

**Task:** Tell the AI exactly what to do.
> "Build a comparison table with one row per census year. Include: name as recorded, age, implied birth year, household members, and municipality/barrio."

**Constraints:** Tell the AI what not to add.
> "Use only the information I provide. If a field is missing from my data, leave it blank."

---

## The Hallucination Problem

AI tools predict words based on patterns — they do not look things up and do not know when they are wrong. In genealogical research, hallucination is especially dangerous because invented facts look identical to real facts in AI output.

**Common hallucination risks:**

- Fake FamilySearch collection IDs or Ancestry record numbers
- Invented census entries or birth dates
- Wrong historical facts presented with confidence

**How to guard against it:**

- Never ask AI to tell you what records exist for a specific person or place — use repositories directly
- Verify every fact AI returns against the document you provided
- If AI introduces a name, date, or detail you did not provide, investigate before trusting it
- Treat AI output as a draft to be checked, not a finding to be published

> **Practical rule:** If you did not put it in the prompt and the AI added it to the output, verify it before using it.

---

## Where AI Belongs in Your Workflow

| Research Stage | AI Role | Your Role |
| --- | --- | --- |
| Searching repositories | None | You search FamilySearch, Ancestry, AGPR |
| Transcribing records | Verification only | You transcribe from original images |
| Organizing data | Strong — table building, comparison | You verify every cell |
| Translating terminology | Helpful — verify unfamiliar terms | You confirm against reference sources |
| Analyzing discrepancies | Helpful — flags inconsistencies | You reason through the resolution |
| Writing citations | None | You write every citation |
| Drawing conclusions | None | You write the reasoned conclusion |

---

## AI Tools for Genealogical Research

| Tool | Access | Notes |
| --- | --- | --- |
| <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer"><em>Claude (Anthropic)</em></a> | Free tier; subscription for extended use | Strong at structured data tasks and precise instructions |
| <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer"><em>ChatGPT (OpenAI)</em></a> | Free tier; subscription for GPT-4 | Widely used; good at translation and table formatting |
| <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer"><em>Gemini (Google)</em></a> | Free tier available | Useful for translation; integrates with Google Workspace |

All three share the same fundamental limitation: none can search genealogical databases on your behalf. For more on evaluating AI tools, see the <a href="https://puertoricangenealogy.org/ai-genealogy/" target="_blank" rel="noopener noreferrer"><em>Teaching Genealogists AI</em></a> resources on this website.

---

## Reflection Questions

1. You ask an AI tool to "find all census records for my family in Rincón from 1900 to 1950 and describe what each one contains." The AI produces a detailed response naming specific FamilySearch collections and describing what each contains. What is the fundamental problem with this output, and how would you reformulate the request to get something genuinely useful?

2. You paste your transcriptions of a family's 1910, 1920, and 1930 census entries into an AI tool and ask for a comparison table. The table includes a household member named "Josefina," age 14 in 1920, who does not appear in any of your transcriptions. What do you do next, and what does this situation illustrate about AI output?

3. Looking at the workflow table in this module, a colleague argues that "AI can't draw conclusions or write citations, so it's not really useful for serious genealogical research." Using specific examples from this module, explain what AI can genuinely contribute to GPS-compliant census research and where its boundaries lie.

---

## Course Complete

This is the final module of *Census Records for Puerto Rican Genealogy*. You have now covered the full arc from Spanish colonial padrones through AI-assisted analysis — always within a GPS-compliant research framework. Return to the [Course Overview](/research-guides/census-records/) for a complete module list and downloadable worksheets.

---

*[← Module 9](/research-guides/census-records-module-9/) · [Back to Course Overview](/research-guides/census-records/)*

<a href="/assets/pdfs/census-records/Module_10_AI_Census_Analysis.pdf" target="_blank" rel="noopener noreferrer">⬇ Download this module as PDF</a>
<a href="/assets/pdfs/census-records/WS_07_AI_Census_Analysis_Worksheets.pdf" target="_blank" rel="noopener noreferrer">⬇ Worksheet: AI Census Analysis Worksheets (PDF)</a>

---

*© 2026 Sylvia Vargas. Teaching Genealogists AI™. All rights reserved.*
