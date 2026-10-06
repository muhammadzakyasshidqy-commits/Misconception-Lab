# EurekaDev 2026 Submission Draft

## Project
Misconception Lab

## Track / Category
Coding Track — Computer Science + AI (Technology)

## Problem
Most learning software collapses every wrong answer into the same signal. A learner who chose the wrong concept, a learner who made an algebraic procedure error, and a learner who simply missed a constraint may all receive the same remediation: more practice. That wastes time and can reinforce the wrong intervention.

## Solution
Misconception Lab treats each mistake as evidence about an underlying failure mode. The learner records the topic, suspected cause, and confidence. A transparent evidence engine updates a misconception profile and selects the next discriminating test designed to separate competing explanations.

Instead of asking “what score did you get?”, the system asks “what mechanism produced the error, and what is the cheapest next test that can falsify that hypothesis?”

## What makes it different
- Error-cause tracking rather than score-only tracking.
- Confidence-aware evidence weighting.
- A visible misconception graph rather than an opaque recommendation.
- Next-test selection optimized to diagnose, not merely drill.
- Local-first browser storage for a low-friction prototype.

## Technology
HTML/CSS/JavaScript front end, a standalone JavaScript inference core, localStorage persistence, JSON export format, and deterministic Node.js tests.

## Current limitations
The present prototype depends on the learner or teacher selecting an initial suspected failure mode. Future versions can infer that signal from solution traces, response time, confidence calibration, and natural-language reasoning.
