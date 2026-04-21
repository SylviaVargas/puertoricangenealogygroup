---
layout: guide
title: "Module 4 — Research Planning: Breaking Through Brick Walls"
description: "Use AI to audit your research timeline, identify gaps, generate hypotheses, and build a structured research plan for ancestors who disappear from the record."
difficulty: intermediate
lang: en
permalink: /research-guides/ai-research-organization-module-4/
ref: ai-research-organization-module-4
last_modified_at: 2026-03-05
related_guides:
  - /research-guides/ai-research-organization/
  - /research-guides/census-records/
  - /ai-best-practices/
---

*Part of the [AI Tools for Research and Organization](/research-guides/ai-research-organization/) course.*

---

## Learning Objectives

By the end of this module, you will:

- Know how to use AI to audit a research timeline and surface gaps
- Be able to write a prompt that produces a structured research plan
- Understand how AI can generate hypotheses from godparent and witness patterns
- Apply GPS principles to research plans generated with AI assistance

---

## What a Brick Wall Actually Is

A brick wall is not a dead end -- it is an unresolved research problem. In Puerto Rican genealogy, the most common brick walls fall into three categories:

**Record gap:** The records you need do not survive, are not yet digitized, or are held in a repository you have not yet accessed.

**Identity confusion:** You cannot determine which of several people with the same name is your ancestor, or you cannot confirm that two records belong to the same person.

**Record transition gap:** Your ancestor disappears at a system boundary -- typically 1885 (the start of civil registration) or 1898 (the transition from Spanish to U.S. administration). Records from one era use different formats, languages, and repositories than records from the other.

AI cannot break through a brick wall for you. It cannot find records that do not exist. But it can help you think more systematically about what you have, what you have not yet searched, and where the missing evidence might be.

---

## Step 1: The Timeline Audit

Before you can identify a research gap, you need a complete timeline of what you know. An AI timeline audit starts with everything you have already documented.

**Prompt template:**

> I am a genealogist researching [ancestor name], born approximately [year] in [municipality], Puerto Rico. I follow the Genealogical Proof Standard. Below is everything I have documented about this person. Please: (1) create a chronological timeline of all life events I have documented, (2) identify the time periods where I have no documented events, (3) identify the life events I would expect to find records for (birth, baptism, confirmation, marriage, children's births, death, burial) and flag any that are missing from my documentation, (4) suggest specific record types that might fill each gap. Do not suggest records that cannot exist for this time period and location.
>
> [Paste your documented facts here, including sources]

The AI will return a structured timeline with gaps flagged. Review it carefully -- AI may flag as missing something you actually have but did not include in the prompt. It may also suggest record types that do not apply to your specific time period or municipality. Use the output as a checklist, not a prescription.

---

## Step 2: The Research Plan

Once you know your gaps, use AI to build a structured research plan. A GPS-compliant research plan specifies the research question, the records to search, the repositories where those records are held, and the expected challenges.

**Prompt template:**

> Act as a professional genealogist specializing in Puerto Rican records. Create a research plan for the following problem:
>
> **Ancestor:** [Name]
> **Research question:** [Specific question -- e.g., "Who were the parents of José Rivera, born ca. 1855 in Rincón, Puerto Rico?"]
> **What I already know:** [Summary of documented facts]
> **What I have already searched:** [List of records and repositories already checked]
>
> Please provide: (1) a prioritized list of record types to search next, with the reason each is likely to help, (2) the specific repository or database where each record type is held, (3) likely challenges for each record type (access restrictions, survival rates, indexing gaps), (4) alternative records to try if the primary record type is unavailable.

---

## Worked Example: Rincón Ancestor Before 1885

This example uses a common Puerto Rican research scenario: an ancestor in Rincón whose trail ends before civil registration began.

**The problem:**

José Rivera appears in the 1910 U.S. Federal Census in Utuado, age 55, born in Rincón. Civil registration in Puerto Rico began in 1885. If José was born around 1855, his birth record would be in the Catholic parish registers for Rincón -- not in civil registration. As of 2025, the Diocese of Mayagüez (which covers Rincón) restricts researcher access to parish registers and prohibits digitization.

**The prompt** (using the research plan template):

> Act as a professional genealogist specializing in Puerto Rican records. Create a research plan for the following problem:
>
> **Ancestor:** José Rivera, born ca. 1855 in Rincón, Puerto Rico
> **Research question:** Who were the parents of José Rivera, born ca. 1855 in Rincón?
> **What I already know:** José appears in the 1910 U.S. Federal Census in Utuado, age 55, born in Rincón. His wife is María. His death certificate (1945, Utuado) names his parents as Luis Rivera and Elena Torres.
> **What I have already searched:** 1910 and 1945 records (found). FamilySearch civil registration for Rincón (no birth record found -- birth predates 1885 registration). FamilySearch Catholic Church Records for Rincón (limited images available; no baptismal record found for José Rivera ca. 1855).

**AI response (summarized and annotated):**

The AI will typically suggest several record avenues. Here is how to evaluate each:

| Record Type | Where to Search | Likely to Help? | Known Challenge |
|-------------|----------------|-----------------|-----------------|
| Baptismal register, Parroquia de Rincón, ca. 1850--1860 | Diocese of Mayagüez archive (restricted); some images on FamilySearch | Possibly -- if images survive and are accessible | Diocese restricts access; digitization prohibited as of 2025 |
| Spanish colonial census (padrón), Rincón, ca. 1860--1880 | Archivo General de Puerto Rico (AGPR); some on FamilySearch | Yes -- padrones list household members by name and relationship | Survival is uneven by municipality; indexing is limited |
| Marriage record for Luis Rivera and Elena Torres, Rincón, ca. 1845--1860 | FamilySearch Catholic Church Records; AGPR | Yes -- confirms parents' identities and may name their own parents | Same access restrictions as baptismal registers |
| Confirmation record for José Rivera, Rincón, ca. 1865--1875 | FamilySearch Catholic Church Records | Possibly -- confirmation registers sometimes survive when baptismal registers do not | Coverage is uneven |
| 1880 Spanish census (padrón), Rincón | AGPR; FamilySearch | Yes -- would show José at approximately age 25, in his parents' or own household | Not all padrones survive or are indexed |
| Estate records (protocolos notariales) for Luis Rivera, Rincón | AGPR notarial records | Yes -- wills and property records often name children | Requires in-person or mail research at AGPR |

**Important note on parish access:** The Diocese of Mayagüez restriction is a current, documented research constraint -- not an AI error. For a full framework of alternatives when parish access is restricted, see [Module 9 of the Census Records course](/research-guides/census-records-module-9/).

---

## Step 3: Generating Hypotheses from Patterns

AI is particularly useful for generating hypotheses from data patterns you may not have noticed. Two patterns that yield results in Puerto Rican genealogy are godparent clusters and witness patterns.

**Godparent cluster analysis:**

In Catholic tradition, godparents (*padrinos*) were often chosen from within the extended family or close community. If the same person appears as godparent across multiple baptisms in your family, they likely had a close relationship -- possibly a sibling, aunt, uncle, or close neighbor of the parents.

**Prompt:**

> I have the following baptismal records from [municipality], [date range]. Each record lists the child's name, parents, and godparents. Please: (1) identify any individuals who appear as godparents in more than one record, (2) note the family connections those godparents appear with, (3) suggest possible family relationships between the godparents and the parents based on the patterns. Flag any suggestion that is speculative.
>
> [Paste baptismal records here]

**Witness pattern analysis:**

Civil registration records (birth, marriage, death) require witnesses. Like godparents, witnesses were often family members or close associates. Repeated witnesses across multiple records in the same family can point to relatives not otherwise documented.

**Prompt:**

> I have the following civil registration records from [municipality], [date range]. Each record lists the event, the principals, and the witnesses. Please: (1) identify any individuals who appear as witnesses in more than one record, (2) note which family units they appear with, (3) suggest possible relationships based on the pattern. Flag any suggestion that is speculative.
>
> [Paste records here]

---

## GPS Checkpoint: Research Plans and the GPS

A research plan is not a GPS-compliant conclusion -- it is a tool for achieving one. Two GPS principles apply directly to AI-assisted research planning:

**Reasonably exhaustive research:** The GPS requires you to search all records that might reasonably contain relevant information. An AI research plan can help you identify record types you may have overlooked, but the AI does not know what you have already searched unless you tell it. Always include a complete list of what you have already checked when writing a planning prompt -- otherwise the AI will suggest records you have already examined.

**Negative evidence:** When a record type that should exist does not turn up, that absence is meaningful. Document explicitly that you searched the 1880 padrón for Rincón and found no entry for Luis Rivera. That documented absence is part of your GPS-compliant research record, not a failure to note.

---

## Connecting Research Planning to Your Research Log

After any AI-assisted planning session, transfer the output to your research log before you begin searching. For each record type the plan suggests:

1. **Log the plan entry** -- record the record type, repository, and reason for searching
2. **Search the record** -- document exactly what you searched, including date ranges and search terms
3. **Log the result** -- record what you found, or what you did not find and why
4. **Update the plan** -- cross off what you have searched, add new leads the search uncovered

A research plan that is not connected to a research log produces no GPS-compliant record of your work. The plan is only as useful as the documentation you create while executing it.

---

## Course Complete: What to Do Next

You have completed all four modules of the AI Tools for Research and Organization course. Here is a suggested next-steps path:

- **Practice the prompts** from Modules 2 and 3 with records you already have
- **Build a research plan** using the Module 4 template for your current brick wall
- **Download the worksheets** from the [course overview](/research-guides/ai-research-organization/) and use them during your next research session
- **Read the full AI best practices guide** for a deeper treatment of GPS compliance, privacy, and limitations: [AI Best Practices for Genealogists](/ai-best-practices/)
- **If your ancestor is from Rincón or the Diocese of Mayagüez**, work through [Census Records Module 9 -- Handling Parish Access Limitations](/research-guides/census-records-module-9/) for a structured alternative-source framework

---

*[← Module 3](/research-guides/ai-research-organization-module-3/) · [Back to Course Overview](/research-guides/ai-research-organization/)*

<a href="/assets/pdfs/ai-research-organization/Module_4_Research_Planning.pdf" target="_blank" rel="noopener noreferrer">⬇ Download this module as PDF</a>

---

*© 2026 Sylvia Vargas. Teaching Genealogists AI™. All rights reserved.*
