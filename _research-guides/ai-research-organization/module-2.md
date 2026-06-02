---
layout: guide
title: "Module 2 — Record Matching: Solving Common-Name Problems"
description: "Use AI to compare two records and assess whether they belong to the same person — including how to handle name variations, phonetic spelling differences, and repeated names across generations in Puerto Rican genealogy."
difficulty: beginner
lang: en
permalink: /research-guides/ai-research-organization-module-2/
ref: ai-research-organization-module-2
last_modified_at: 2026-03-05
related_guides:
  - /research-guides/ai-research-organization/
  - /ai-best-practices/
---

*Part of the [AI Tools for Research and Organization](/research-guides/ai-research-organization/) course.*

---

## Learning Objectives

By the end of this module, you will:

- Understand why common Puerto Rican names create record-matching challenges
- Know how to write a comparison prompt that produces useful AI analysis
- Recognize the types of evidence AI can identify -- and where its assessment must be verified
- Apply the GPS Three-Layer Framework to evaluate any AI-assisted match

---

## The Common-Name Problem in Puerto Rican Genealogy

Puerto Rican genealogy regularly produces three name-matching challenges:

**Repeated names across generations.** Religious names (José, María, Juan, Carmen) were extremely common, and many families reused the same given name in consecutive generations. A search for "José Rivera" in Utuado between 1880 and 1920 may return dozens of results from the same family.

**Name variations across record systems.** The same person may appear as *José* in a church record, *Joseph* in a U.S. federal census, and *Joe* in a draft registration card. Surname spelling shifts as well: *Jiménez* becomes *Gimenez* or *Jimenez* depending on who wrote the record and when.

**Dropped or added surnames.** In Puerto Rican naming conventions, a person carries two surnames: the father's first surname and the mother's first surname. Records, especially later U.S.-era documents, frequently drop the maternal surname. *Rivera Torres* becomes *Rivera* -- or occasionally, only *Torres* appears if the enumerator recorded the wrong surname first.

AI handles all three of these challenges reasonably well when you give it the right prompt.

---

## How AI Approaches Record Matching

AI does not search databases. It compares the text you provide. When you paste two record transcriptions and ask for a comparison, the AI looks for:

- **Age consistency:** Does the age in record A match the expected age in record B given the years involved?
- **Geographic consistency:** Are the locations the same municipality, neighboring towns, or a plausible migration path?
- **Name cluster overlap:** Do the same family members (spouse, children, parents, siblings) appear in both records?
- **Phonetic equivalence:** Are the name spellings phonetically identical or close enough to be the same name?
- **Surname logic:** Does the apparent name difference follow a known Puerto Rican naming pattern (dropped maternal surname, U.S.-era anglicization)?

The AI will give you an analysis, not a verdict. The decision -- whether two records belong to the same person -- remains yours.

---

## The Comparison Prompt

Use this prompt structure when asking AI to compare two records. Replace the bracketed text with your actual transcriptions.

**Prompt:**

> I am a genealogist researching Puerto Rican families. I have two records that may refer to the same person. Please compare them and assess the likelihood they belong to the same individual. Analyze: age consistency (accounting for the years between records), geographic consistency, name cluster overlap (shared family members), name spelling variations, and Puerto Rican surname conventions (dropped maternal surname, anglicization). List supporting evidence, contradicting evidence, and unresolved questions. Do not reach a conclusion for me -- present the evidence so I can evaluate it.
>
> **Record A:** [Paste transcription of first record]
>
> **Record B:** [Paste transcription of second record]

---

## Worked Example: Census to Death Certificate

This example uses the scenario from the course content strategy, expanded with GPS analysis.

**Record A -- 1910 U.S. Federal Census, Utuado, Puerto Rico:**

> José Rivera, head of household, age 25. Wife: María. Son: Pablo, age 3.

**Record B -- 1945 Death Certificate, Utuado, Puerto Rico:**

> José Rivera Torres, age 61. Cause of death: heart failure. Spouse: María Delgado. Parents: Luis Rivera and Elena Torres.

**The prompt** (using the template above) produces this type of analysis:

**Supporting evidence:**
- Age is consistent: age 25 in 1910 would be approximately 60--61 in 1945. (Matches.)
- Location is consistent: both records place this person in Utuado.
- Spouse name is consistent: "María" in 1910 matches "María Delgado" in 1945. (The 1910 census often recorded only the given name of spouses.)
- Surname logic: "Rivera Torres" in 1945 is the full double surname. "Rivera" in 1910 is the paternal surname only -- consistent with how U.S. enumerators recorded Puerto Rican names.

**Contradicting evidence:**
- No contradictions identified in the information provided.

**Unresolved questions:**
- The 1910 census does not record José's parents. The death certificate names Luis Rivera and Elena Torres as parents. These cannot be confirmed from these two records alone.
- Pablo, age 3 in 1910, does not appear in the death certificate. His presence or absence from later records is unknown.

---

## GPS Checkpoint: Evaluating This Match

The AI analysis is useful evidence, but it is not a GPS-compliant conclusion. Before you treat these two records as belonging to the same person, apply the Three-Layer Framework:

**Source analysis:**
- Record A (1910 U.S. Federal Census): Derivative source (a digitized image of an original enumeration schedule). Information quality for age and location: primary if José provided it himself, secondary if a neighbor or relative reported for the household. Evidence: direct for name and location, indirect for identity match.
- Record B (1945 Death Certificate): Derivative source (a digitized image of an original civil registration). Information quality for age and location at death: secondary (the informant is typically a family member, not the deceased). Information for parents' names: potentially primary if the informant knew the parents directly, secondary if based on family knowledge.

**What the AI cannot do:** The AI did not examine the original images. It did not assess the handwriting, check for alterations, or note whether the enumerator recorded other households nearby that might add context. It had no information about the informant on the death certificate.

**Your next step:** Verify both records against the original images on FamilySearch. Search for Pablo Rivera (born ca. 1907, Utuado) in subsequent census years to corroborate the family unit. Look for a marriage record for José Rivera and María Delgado in Utuado civil registration to add a third corroborating source.

---

## Handling Name Variations: A Practical Guide

When names in two records do not match exactly, use this table to assess whether the variation is a known pattern or a genuine discrepancy:

| Variation Type | Example | Likely Explanation | Action |
|---------------|---------|-------------------|--------|
| Dropped maternal surname | Rivera Torres vs. Rivera | U.S. enumerator convention | Probable match -- verify with a third record |
| Phonetic spelling | Jiménez vs. Gimenez | Enumerator transcribed by ear | Probable match -- verify age and location |
| Anglicization | José vs. Joseph | U.S.-era records | Probable match -- verify cluster |
| Given name abbreviation | María de los Ángeles vs. María | Common practice | Probable match -- verify cluster |
| Wrong surname first | Rivera Torres vs. Torres Rivera | Enumerator error | Possible match -- verify parents |
| Different name entirely | José vs. Juan | Possible error or different person | Investigate further before concluding match |

When a variation is unexplained by any known pattern, treat it as contradicting evidence and document it explicitly before reaching a conclusion.

---

## When AI Gets the Match Wrong

AI will sometimes identify a plausible match that is actually two different people, or miss a match because of an unexpected spelling. Watch for these signals:

- The AI expresses high confidence based on age and location alone, without family cluster overlap
- The family cluster in one record (spouse, children) does not appear in the other at all
- The geographic locations are in the same general region but different municipalities with no documented migration path
- The age gap is more than five years and no explanation is offered

When you see these signals, treat the match as unconfirmed. Document what you found, record why you cannot confirm it, and move to a third source before drawing a conclusion.

---

## What's Next

In [Module 3 -- Organizing Your Data with AI](/research-guides/ai-research-organization-module-3/), you will learn how to turn raw transcriptions, notes, and narrative text into structured tables, standardized dates, and GEDCOM-ready data using targeted AI prompts.

---

*[← Module 1](/research-guides/ai-research-organization-module-1/) · [Back to Course Overview](/research-guides/ai-research-organization/) · [Module 3 →](/research-guides/ai-research-organization-module-3/)*

<a href="/assets/pdfs/ai-research-organization/Module_2_Record_Matching.pdf" target="_blank" rel="noopener noreferrer">⬇ Download this module as PDF</a>

---

*© 2026 Sylvia Vargas. Teaching Genealogists AI™. All rights reserved.*
