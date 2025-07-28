# Alternative: GitHub App Setup (More Secure)

If you want maximum security, you can create a GitHub App instead of using PATs:

## Benefits of GitHub Apps:
- ✅ More granular permissions
- ✅ Better audit trail
- ✅ No expiration issues
- ✅ Can be scoped to specific repositories

## Setup Steps:
1. Go to GitHub Settings → Developer settings → GitHub Apps
2. Click "New GitHub App"
3. Configure:
   - **Name**: "Content-to-Site Trigger"
   - **Homepage URL**: Your main site URL
   - **Repository permissions**:
     - Actions: Write
     - Contents: Read
     - Metadata: Read
   - **Subscribe to events**: Push
4. Install the app on both repositories
5. Use the app's installation token in workflows

## Workflow Changes:
Replace the `token` in workflows with:
```yaml
token: ${{ steps.app-token.outputs.token }}
```

And add a step to get the app token:
```yaml
- name: Get App Token
  id: app-token
  uses: actions/create-github-app-token@v1
  with:
    app-id: ${{ secrets.APP_ID }}
    private-key: ${{ secrets.PRIVATE_KEY }}
    repository: oshears/oshears.github.io
```

This is more complex but provides better security for production setups.
