# Google Apps Script Templates

Simple automation scripts for your Market Event Management System.

## Quick Start - Simple Notifications

### The Simplest Setup (5 minutes)

Use `simple-notifications.gs` for basic email alerts when someone fills out your form.

#### Step 1: Add the Script
1. Open your Google Form
2. Click **Extensions → Apps Script**
3. Delete any existing code
4. Copy everything from `simple-notifications.gs`
5. Paste it in

#### Step 2: Update Email
Find this line and change it to your email:
```javascript
const COORDINATOR_EMAIL = 'market-coordinator@school-domain.edu';
```

#### Step 3: Set Up Trigger
1. Click the clock icon (Triggers) 
2. Click **+ Add Trigger**
3. Choose:
   - Function: `onFormSubmit`
   - Event source: **From form**
   - Event type: **On form submit**
4. Click **Save**
5. Click **Authorize** and accept permissions

#### Step 4: Test It
1. Click **Run** → `testEmail`
2. Check your email
3. If you got the test email, it's working!

That's it! You'll now get an email every time someone submits the form.

## What Each Script Does

### 1. `simple-notifications.gs` ⭐ START HERE
**What it does**: Sends you an email when someone fills out a form  
**Setup time**: 5 minutes  
**Use for**: Both vendor and volunteer forms

### 2. `form-notifications.gs` (Advanced)
**What it does**: Multiple notification options, custom confirmations, bulk reminders  
**Setup time**: 15 minutes  
**Use when**: You need more than basic notifications

### 3. `sheet-automation.gs` (Advanced)
**What it does**: Automates spreadsheet tasks like assigning stalls, creating rosters  
**Setup time**: 20 minutes  
**Use when**: You have many vendors/volunteers to manage

## Troubleshooting

### Not Getting Emails?
1. Check your spam folder
2. Make sure you updated the email address in the script
3. Run the `testEmail` function to check it works
4. Check the trigger is set to "From form" not "From spreadsheet"

### Getting Errors?
1. Make sure you authorized the script
2. Check you're using the right type of form trigger
3. View → Execution log to see what went wrong

### Email Limits
- Personal Gmail: 100 emails per day
- School/Work account: 1,500 emails per day

## Next Steps

Once basic notifications work, you can:
1. Customize the email message
2. Add volunteer shift assignments
3. Create automatic rosters
4. Send reminder emails

But start simple - just get notifications working first!

## Need Help?

The simplest script (`simple-notifications.gs`) should work for 90% of schools. If you need help:
1. Make sure you followed all 4 steps above
2. Try the `testEmail` function first
3. Check your spam folder
4. Ask your school's IT support