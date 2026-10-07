# Credential cleanup

Maps integrations now use nonfunctional placeholders. Active use is not confirmed; review the maps impact before merging. Any future browser Maps key must be newly provisioned and tightly restricted.

This branch removes credential values from current files only. Existing Git history, forks, clones, cached views, and earlier deployments may still contain them. No credentials were tested or revoked, no history was rewritten, and no deployment was performed. The owner must revoke or replace exposed credentials through the provider's authenticated dashboard separately.

Do not merge or deploy this draft until its impact is reviewed. Do not commit replacement secrets, including in generated bundles or source maps.
