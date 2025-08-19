# 🔧 Troubleshooting Guide

Common problems and their solutions. Start with the Quick Fix, then try detailed steps if needed.

---

## 🚨 Top 10 Issues

### 1. Not Getting Email Notifications

**Quick Fix**: Check your spam folder

**Detailed Fix**:
1. Open your form → Extensions → Apps Script
2. Check the email address is correct:
   ```javascript
   const COORDINATOR_EMAIL = 'your-actual-email@school.edu';
   ```
3. Click "Triggers" (clock icon)
4. Delete any existing triggers
5. Add new trigger:
   - Function: `onFormSubmit`
   - Event source: **From form** (NOT "From spreadsheet")
   - Event type: **On form submit**
6. Save and authorize again
7. Run the `testEmail` function to verify

**Still Not Working?**
- Check email quotas (100/day for personal, 1500/day for Workspace)
- Try a different email address
- Check View → Execution log for errors

---

### 2. Form Not Showing in Google Site

**Quick Fix**: Make sure form and site are in same Google domain

**Detailed Fix**:
1. Open your form → Settings (gear icon)
2. Under "General" uncheck "Restrict to users in [domain]"
3. Save the form
4. In your site, delete the embedded form
5. Re-embed using Insert → Google Forms
6. If still not working, try Insert → Embed → paste form URL

**Alternative Method**:
- Get form link: Click Send → Link icon → Copy
- In site: Insert → Embed → Embed code
- Paste: `<iframe src="YOUR-FORM-URL" width="100%" height="800"></iframe>`

---

### 3. Can't See Form Responses in Spreadsheet

**Quick Fix**: Check you're looking at the right spreadsheet

**Detailed Fix**:
1. Open form → Responses tab
2. Click spreadsheet icon
3. If "Select response destination" appears:
   - Choose "Create a new spreadsheet"
   - Name it clearly
4. If already linked, click "View in Sheets"
5. Check the correct tab (usually "Form Responses 1")

**Responses Missing?**
- Check form didn't get duplicated
- Verify form is still accepting responses
- Look for filtered/hidden rows in sheet

---

### 4. Script Authorization Errors

**Quick Fix**: Re-authorize the script

**Detailed Fix**:
1. Extensions → Apps Script
2. Click "Run" → `testEmail`
3. When popup appears, click "Review permissions"
4. Choose your Google account
5. Click "Advanced" at bottom left
6. Click "Go to [Project Name] (unsafe)"
7. Click "Allow"

**Why "Unsafe"?**
- Google shows this for all custom scripts
- It's your own script, so it's safe
- Only appears first time

---

### 5. Site Won't Publish / "You need permission"

**Quick Fix**: Check with your IT admin

**Detailed Fix**:
1. Your account might not have permission to publish sites
2. Ask IT admin to:
   - Enable Google Sites for your account
   - Give you permission to publish
3. Alternative: Ask IT to create and publish the site for you

**Workaround**:
- Create site on personal account
- Share editing access with school account
- Publish from personal account

---

### 6. Forms Look Broken on Mobile

**Quick Fix**: Reduce number of required fields

**Detailed Fix**:
1. Open form on phone browser
2. Identify problematic questions
3. Common fixes:
   - Shorten question text
   - Reduce options in checkboxes
   - Split long sections into pages
   - Avoid grid questions on mobile

**Embedding Fix**:
- In site, select embedded form
- Drag corners to make it wider
- Set minimum height to 1000px

---

### 7. Spreadsheet Formulas Not Working

**Quick Fix**: Check column references match your sheet

**Common Formula Fixes**:

If counting volunteers:
```
=COUNTIF(G:G, "*Cafe Morning*")
```
Change G:G to your actual shift column

If calculating fees:
```
=IF(I2="Small", 30, IF(I2="Medium", 50, 70))
```
Change I2 to your stall size column

**Tips**:
- Column A = 1, B = 2, C = 3, etc.
- Use column letters in formulas
- $ makes references absolute

---

### 8. Can't Share Parent Portal (Access Denied)

**Quick Fix**: Check site sharing settings

**Detailed Fix**:
1. Open parent portal site
2. Click Share button (top right)
3. Under "General access" choose:
   - "Anyone with the link" for easy sharing
   - "Restricted" then add specific emails for security
4. Get link → Copy link
5. Share ONLY in newsletter/email (not public website)

**Security Tip**:
- Change link each term
- Or use restricted access with parent emails

---

### 9. Multiple Coordinators Can't Access Admin Dashboard

**Quick Fix**: Add their emails to site sharing

**Detailed Fix**:
1. Open admin dashboard site
2. Click Share
3. Add people → Enter coordinator emails
4. Set as "Editor" not "Viewer"
5. For spreadsheets: Share → Add editors
6. For scripts: Share project with coordinators

**Best Practice**:
- Create a Google Group for coordinators
- Share everything with the group
- Easy to add/remove people

---

### 10. Vendor/Volunteer Counts Don't Match

**Quick Fix**: Check for duplicate submissions

**Common Causes**:
- Person submitted form twice
- Test entries not deleted
- Filters hiding some responses
- Looking at wrong date range

**Fix**:
1. In spreadsheet, click Data → Remove duplicates
2. Delete test entries (check email column)
3. Remove all filters: Data → Remove filter
4. Check timestamp column for date range

---

## 💡 Prevention Tips

### Before Going Live
- ✅ Test every form yourself
- ✅ Submit test entry and check email arrives
- ✅ View all sites on mobile
- ✅ Have someone else test everything

### Regular Maintenance
- Check spam folder daily first week
- Clear test data before launch
- Backup spreadsheets weekly
- Document any customizations

### Email Best Practices
- Use school email addresses (better delivery)
- Avoid sending 50+ emails at once
- Add delays between bulk sends
- Keep coordinator group small

---

## 🔍 Diagnostic Checklist

If something's not working, check:

### Forms
- [ ] Form is accepting responses
- [ ] Email collection is ON
- [ ] Not restricted to domain users
- [ ] Linked to correct spreadsheet

### Scripts
- [ ] Correct email in script
- [ ] Trigger set to "From form"
- [ ] Script is authorized
- [ ] No errors in execution log

### Sites
- [ ] Sites are published
- [ ] Sharing settings correct
- [ ] Forms embedded properly
- [ ] Mobile view tested

### Spreadsheets
- [ ] Responses going to right sheet
- [ ] No filters hiding data
- [ ] Formulas reference correct columns
- [ ] Shared with coordinators

---

## 🆘 Still Stuck?

### Get Help
1. Check execution log: Extensions → Apps Script → View → Execution log
2. Screenshot the error message
3. Note what you were trying to do
4. Check if it ever worked before

### Common Error Messages

**"Authorization required"**
- Re-run script and authorize

**"Service invoked too many times"**
- Hit email quota, wait 24 hours

**"Cannot read property of undefined"**
- Check form fields match script

**"You need permission"**
- Check sharing settings or ask IT

**"Invalid email"**
- Check email format in script

---

## 📱 Quick Mobile Fixes

### Forms Not Working on Phones
- Reduce required fields
- Shorten question text
- Avoid grid questions
- Test on iPhone and Android

### Sites Not Mobile-Friendly
- Use built-in mobile preview
- Keep navigation simple
- Make buttons bigger
- Reduce text blocks

---

## 🔄 Recovery Procedures

### Lost Access to Site/Form
1. Check email for sharing notification
2. Ask co-coordinator to re-share
3. Check Google Drive trash
4. Contact IT admin for recovery

### Accidentally Deleted Data
1. Check spreadsheet revision history
2. File → Version history → See version history
3. Restore previous version
4. Or check form's response backup

### Script Stopped Working
1. Check triggers still exist
2. Re-authorize if needed
3. Check email quotas
4. Look for script updates

---

## ✅ It's Working When...

- Test form submission → Email arrives in < 5 minutes
- Responses appear in spreadsheet immediately
- All sites load on mobile
- Multiple coordinators can access admin dashboard
- No errors in script execution log

---

**Remember**: Most problems are authorization or permission related. When in doubt, check sharing settings and re-authorize scripts.