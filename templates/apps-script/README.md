# Google Apps Script Templates

Automation scripts for event management.

## Quick Start

Use `simple-notifications.gs` for email notifications on form submission.

### Step 1: Add Script
1. Open your Google Form
2. Click **Extensions → Apps Script**
3. Delete any existing code
4. Copy everything from `simple-notifications.gs`
5. Paste it in

### Step 2: Update Email
Find this line and change it to your email:
```javascript
const COORDINATOR_EMAIL = 'market-coordinator@school-domain.edu';
```

### Step 3: Create Trigger
1. Click the clock icon (Triggers) 
2. Click **+ Add Trigger**
3. Choose:
   - Function: `onFormSubmit`
   - Event source: **From form**
   - Event type: **On form submit**
4. Click **Save**
5. Click **Authorize** and accept permissions

### Step 4: Test
1. Click **Run** → `testEmail`
2. Check your email
3. If you got the test email, it's working!


## Available Scripts

### `simple-notifications.gs`
- Sends email on form submission
- Works for vendor and volunteer forms
- Setup: 5 minutes

## Troubleshooting

**Not getting emails?**
- Check spam folder
- Verify email address in script
- Run `testEmail` function
- Ensure trigger is "From form"

**Errors?**
- Check authorization
- View → Execution log

**Email limits:**
- Personal: 100/day
- School/Work: 1,500/day


## Support

1. Follow all setup steps
2. Test with `testEmail` function
3. Check spam folder
4. Contact IT support