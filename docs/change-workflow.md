# From a ticket to a release

**Fictional demonstration workflow, documented 2026-10-27.** This page closes
the previously missing local-to-QA handoff. It is a written working agreement,
not evidence that every historical change followed it or that a tool enforces it.
The commerce delivery manager owns the work queue; Store Systems owns promotion.

| Step | Owner | Input, action and evidence to retain |
|---|---|---|
| Ready | Commerce delivery manager | A CPB ticket names the problem, affected application, acceptance criteria and any payment/loyalty impact. Keep unresolved access and product questions on the ticket. |
| In progress | Author | Branch from current `main`, reproduce the issue, and keep one reviewable change per branch. Link the ticket and branch. |
| Pull request | Author | State before/after behavior, the CPB key, affected apps, verification commands and results. Call out configuration changes and rollout limits. |
| Review | A reviewer other than the author | Check intent, test evidence and sensitive paths. Payments or ledger changes require the payments lead. Record the review on the PR. |
| QA | Author and designated reviewer | Run the local build/lint/format/unit/startup checks. For behavior changes, exercise the ticket's guest/store path and record expected/actual results; health checks alone cannot satisfy business acceptance. Record anything not tested. |
| Merge | Maintainer | Confirm the approved head has successful CI and QA evidence. Merge, link the merge commit, and remove the branch when it is no longer needed. |
| Release handoff | Commerce release owner | Select the reviewed commit on `main`, identify the `vMAJOR.MINOR.PATCH` tag and release notes, and hand the version plus verification and rollback notes to Store Systems. |
| Promotion and closure | Store Systems lead and ticket owner | Promote manually through pilot stores, one region, then all stores; record each outcome on the REL release page. A merged PR and a tag are separate from a completed fleet promotion. Close the ticket against its acceptance criteria and record the delivery state. |

## Branches and review

The [ENG branching and review standard](https://copperpot-demo.atlassian.net/wiki/spaces/ENG)
names `feature/CPB-123-short-slug`, `fix/CPB-123-short-slug` and
`hotfix/CPB-123-short-slug`, conventional PR titles and no direct push to `main`.
For example, `docs(onboarding): clarify local verification (CPB-123)`.
Use the actual ticket key; the examples are not existing work items.

The baseline's live history includes unkeyed and self-merged changes. Required
review is not yet enforced. Do not describe the written standard as a working
control or count a GitHub App approval as proof of human review. The older hotfix
page uses a conflicting branch form; keep that discrepancy visible in the review.

## QA and sensitive work

QA evidence belongs on the PR or linked ticket, with the commit and commands.
A documentation change can demonstrate its corrected instruction. A behavior
change needs an acceptance example that reaches that behavior. The store app's
test depth is a separate concern from whether the guest app starts.

`src/payments/` and `src/loyalty/` move money or money equivalents in the scenario.
The payments lead reviews those changes. This statement is a human working
agreement; it does not install a path guard, grant agent authority, or claim
that self-merge is prevented. The team has not adopted a sanctioned AI work class.

## Release and recovery

The [ENG release standard](https://copperpot-demo.atlassian.net/wiki/spaces/ENG)
defines an annotated version tag on `main`; the
[REL space](https://copperpot-demo.atlassian.net/wiki/spaces/REL) holds the
promotion and rollback record. Fleet promotion is manual and outside this API
repository. Do not invent a deployment command for a system this checkout does
not control.

For a failed change, record impact, the affected tag, the recovery owner and the
actual response. The existing standard describes a revert followed by a patch
tag. Verify promotion or rollback separately; a successful build is neither.
This local baseline exercise makes no change to store data, payments or the ledger.
