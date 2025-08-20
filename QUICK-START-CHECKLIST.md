# 🚀 Quick Start Checklist

**Time Required**: 2-3 hours initial setup | **Difficulty**: Easy | **People Needed**: 1-2

Print this checklist and tick off each step as you complete it. Don't skip steps!

---

## Phase 1: Preparation (15 minutes)

### Prerequisites
- [ ] You have admin access to school's Google Workspace
- [ ] You have 2-3 hours of uninterrupted time
- [ ] You know your market date
- [ ] You have coordinator email addresses ready

### Gather Information
- [ ] School's Google domain (e.g., school.edu.nz)
- [ ] Market date and times
- [ ] Stall prices (small/medium/large)
- [ ] Volunteer shift times
- [ ] Coordinator contact details

---

## Phase 2: Create Google Drive Structure (10 minutes)

### Create Folders
- [ ] Open Google Drive
- [ ] Create folder: "Market Event System"
- [ ] Inside, create 3 subfolders:
  - [ ] Forms
  - [ ] Spreadsheets  
  - [ ] Sites

---

## Phase 3: Set Up Forms (30 minutes)

### Vendor Application Form
- [ ] Go to forms.google.com
- [ ] Create new blank form
- [ ] Name it: "Market Vendor Application"
- [ ] Copy fields from `resources/forms/vendor-application-template.md`
- [ ] Turn ON Settings → Collect email addresses
- [ ] Turn ON Settings → Response receipts
- [ ] Save to Market Event System → Forms folder

### Volunteer Signup Form
- [ ] Create new blank form
- [ ] Name it: "Market Volunteer Signup"
- [ ] Copy fields from `resources/forms/volunteer-signup-template.md`
- [ ] Turn ON Settings → Collect email addresses
- [ ] Turn ON Settings → Response receipts
- [ ] Save to Market Event System → Forms folder

---

## Phase 4: Connect Spreadsheets & Add Tracking (20 minutes)

### Vendor Responses
- [ ] Open Vendor Application form
- [ ] Go to Responses tab
- [ ] Click spreadsheet icon
- [ ] Create new spreadsheet: "Market Vendors"
- [ ] Save to Spreadsheets folder

### Add Vendor Tracking Columns
- [ ] In the spreadsheet, add these column headers after the form responses:
  - [ ] Approval Status (column U or first empty)
  - [ ] Payment Status (next column)
  - [ ] Payment Date (next column)
  - [ ] Stall Number (next column)
  - [ ] Notes (next column)

### Set Up Data Validation
- [ ] For Approval Status column:
  - [ ] Select cells from row 2 down (e.g., U2:U1000)
  - [ ] Data → Data validation
  - [ ] Dropdown from a list: `Pending,Approved,Rejected,Waitlist`
  - [ ] Click Done
- [ ] For Payment Status column:
  - [ ] Select cells from row 2 down (e.g., V2:V1000)
  - [ ] Data → Data validation
  - [ ] Dropdown from a list: `Pending,Received,Refunded`
  - [ ] Click Done
- [ ] For Payment Date column:
  - [ ] Select column from row 2 down
  - [ ] Format → Number → Date

### Volunteer Responses
- [ ] Open Volunteer Signup form
- [ ] Go to Responses tab
- [ ] Click spreadsheet icon
- [ ] Create new spreadsheet: "Market Volunteers"
- [ ] Save to Spreadsheets folder
- [ ] Add tracking columns: Confirmed, Reminded, Notes

---

## Phase 5: Add Email Notifications (15 minutes)

### Set Up Script
- [ ] Open either form
- [ ] Click Extensions → Apps Script
- [ ] Delete any existing code
- [ ] Copy code from `templates/apps-script/simple-notifications.gs`
- [ ] Find this line: `const COORDINATOR_EMAIL = 'market-coordinator@school-domain.edu';`
- [ ] Replace with your actual email
- [ ] Click Save (disk icon)

### Create Trigger
- [ ] Click clock icon (Triggers)
- [ ] Click "+ Add Trigger"
- [ ] Set:
  - Function: `onFormSubmit`
  - Event source: `From form`
  - Event type: `On form submit`
- [ ] Click Save
- [ ] Authorize when prompted (click through all screens)

### Test It
- [ ] Click Run → `testEmail`
- [ ] Check your email (including spam)
- [ ] ✅ Got test email? Notifications working!

---

## Phase 6: Create Google Sites (45 minutes)

### Admin Dashboard (Private)
- [ ] Go to sites.google.com
- [ ] Create new blank site
- [ ] Name: "Market Admin"
- [ ] Add pages from `templates/google-sites/admin-dashboard-site.md`:
  - [ ] Dashboard (home)
  - [ ] Vendor Management
  - [ ] Volunteer Roster
  - [ ] Task Checklist
  - [ ] Resources
- [ ] Publish settings:
  - [ ] URL: Add "-test" for testing (e.g., `market-admin-test`)
  - [ ] Uncheck "Request public search visibility"
  - [ ] Share → Specific people → Add coordinator emails only
- [ ] Click Publish

### Parent Portal (Semi-Private)
- [ ] Create new blank site
- [ ] Name: "Market Volunteers"
- [ ] Add pages from `templates/google-sites/parent-portal-site.md`:
  - [ ] Home
  - [ ] Sign Up to Help
  - [ ] Shift Information
  - [ ] Baking Guidelines
  - [ ] Important Info
- [ ] Embed volunteer form on Sign Up page
- [ ] Publish settings:
  - [ ] URL: Add "-test" for testing (e.g., `market-volunteers-test`)
  - [ ] Uncheck "Request public search visibility"
  - [ ] Share → Anyone with link
- [ ] Click Publish
- [ ] Copy link for newsletter

### Public Market Site
- [ ] Create new blank site  
- [ ] Name: "[School] Market"
- [ ] Add pages from `templates/google-sites/public-market-site.md`:
  - [ ] Home
  - [ ] About the Market
  - [ ] Vendor Information
  - [ ] Market Map
  - [ ] FAQ
  - [ ] Contact
- [ ] Embed vendor form on Vendor Information page
- [ ] Publish settings:
  - [ ] URL: Add "-test" for testing (e.g., `school-market-test`)
  - [ ] For testing: Uncheck "Request public search visibility"
  - [ ] For production: Check it to appear in Google search
  - [ ] Share → Anyone on web (public access)
- [ ] Click Publish

---

## Phase 7: Testing (20 minutes)

### Test Vendor Flow
- [ ] Open public market site
- [ ] Submit test vendor application
- [ ] Check coordinator receives email
- [ ] Check response appears in spreadsheet
- [ ] Delete test response (right-click row → Delete row)

### Test Volunteer Flow
- [ ] Open parent portal site
- [ ] Submit test volunteer signup
- [ ] Check coordinator receives email
- [ ] Check response appears in spreadsheet
- [ ] Delete test response (right-click row → Delete row)

### Test on Mobile
- [ ] Open all sites on phone
- [ ] Check forms work on mobile
- [ ] Check navigation works
- [ ] Check text is readable

---

## Phase 8: Customize (20 minutes)

### Update Content
- [ ] Replace [school-domain] with your domain
- [ ] Add your school name
- [ ] Update market date and times
- [ ] Add real coordinator contacts
- [ ] Update stall prices
- [ ] Customize volunteer shifts

### Add Branding
- [ ] Upload school logo to sites
- [ ] Set school colors
- [ ] Add photos from previous markets

---

## Phase 9: Launch Preparation (10 minutes)

### Final Checks
- [ ] All forms working
- [ ] Email notifications working
- [ ] All sites published
- [ ] Spreadsheets ready
- [ ] Access permissions correct

### Document URLs
Write down your URLs:

| Site | URL | Share With |
|------|-----|------------|
| Public Market | ______________ | Everyone |
| Parent Portal | ______________ | Newsletter |
| Admin Dashboard | ______________ | Coordinators |
| Vendor Form | ______________ | Public site |
| Volunteer Form | ______________ | Parent portal |

---

## Phase 10: Go Live! 🎉

### Communication
- [ ] Email vendor site link to previous vendors
- [ ] Add parent portal link to school newsletter
- [ ] Share admin dashboard with coordinators
- [ ] Post public site on school website
- [ ] Share on social media

### First Week Monitoring
- [ ] Check emails daily
- [ ] Review form submissions
- [ ] Respond to questions
- [ ] Fix any issues found

---

## ✅ Success Indicators

You know it's working when:
- Vendor applications coming in ✓
- Volunteers signing up ✓
- Emails arriving automatically ✓
- Coordinators can see everything ✓
- No paper forms needed ✓

---

## 🚨 Need Help?

### Quick Fixes
- **Not getting emails?** → Check spam, verify email in script
- **Form not showing?** → Check embed permissions
- **Can't publish site?** → Check with IT admin
- **Script error?** → Re-do Phase 5 carefully

### Resources
- Full documentation: `/implementation-guide.md`
- Form templates: `/resources/forms/`
- Site templates: `/templates/google-sites/`
- Email scripts: `/templates/apps-script/`

---

## 📅 Maintenance Schedule

### Weekly
- [ ] Check form responses
- [ ] Update volunteer counts
- [ ] Send updates as needed

### Before Market
- [ ] Send reminder emails (48 hours before)
- [ ] Print rosters and lists
- [ ] Final volunteer check

### After Market
- [ ] Thank you emails
- [ ] Archive data
- [ ] Document lessons learned
- [ ] Prepare for next market

---

**Congratulations! Your market system is ready!** 🎊

Total setup time: 2-3 hours
Time saved per market: 20+ hours
Paper eliminated: 100%