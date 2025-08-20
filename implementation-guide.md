# Implementation Guide - Event Management System

## Quick Start
This guide walks you through setting up the Market Event Management System using Google Workspace for Education (free for schools).

## What You're Building

### Core System (Required)
- 3 Google Sites (Public Market, Parent Portal, Admin Dashboard)
- 2 Google Forms (Vendors, Volunteers)
- 2 Google Sheets databases
- Automated email notifications

### Optional Enhancement
- Google Classroom for engaged volunteers
- Mobile app access

**Time Required:** 2.5-3 hours initial setup, 1-2 hours per event maintenance

## Prerequisites

- Google Workspace for Education account
- Admin access to school Google domain
- Basic familiarity with Google tools

## Phase 1: Google Workspace Setup

### Create Folder Structure
In Google Drive, create:
```
Market Event System/
├── Database/
│   ├── Vendors.sheets
│   └── Volunteers.sheets
├── Forms/
│   ├── Vendor_Application.form
│   └── Volunteer_Signup.form
└── Sites/
    ├── Market_Public/
    ├── Parent_Portal/
    └── Admin_Dashboard/
```

### User Groups
Create these groups in Admin Console:
- **event-staff@[school-domain]** - School staff managing events
- **parents@[school-domain]** - Parent volunteer mailing list
- **vendors@[school-domain]** - Vendor mailing list

## Phase 2: Database Setup (Google Sheets)

Create two Google Sheets with the structures shown in the [Market Event Blueprint](market-event-blueprint.md).

### Vendors Sheet
- Columns for business info, contact, products, stall requirements
- Approval status tracking
- Payment status

### Volunteers Sheet  
- Parent contact info
- Shift selections (Cafe, EFTPOS, Setup/Cleaning)
- Baking contributions
- Optional Classroom opt-in

## Phase 3: Google Sites Creation

### Site 1: Public Market Site
**URL:** `sites.google.com/[school-domain]/market`

1. Create new Google Site
2. Set to public access
3. Add pages:
   - Home (event info)
   - Vendor Application (embed form)
   - Stall Information
   - Contact

### Site 2: Parent Portal
**URL:** `sites.google.com/[school-domain]/parent-portal`

1. Create new Google Site
2. Set to "Anyone with link"
3. Share link via school newsletter
4. Add pages:
   - Home (volunteer info)
   - Sign Up (embed form)
   - Shift Information
   - Baking Guidelines

### Site 3: Admin Dashboard
**URL:** `sites.google.com/[school-domain]/market-admin`

1. Create new Google Site
2. Restrict to school staff only
3. Add pages:
   - Dashboard (embed sheets)
   - Vendor Management
   - Volunteer Roster
   - Reports

## Phase 4: Forms Setup

### Vendor Application Form
1. Create new Google Form
2. Add fields from blueprint
3. Set response destination to Vendors sheet
4. Turn on email receipts
5. Embed in Public Market Site

### Volunteer Signup Form
1. Create new Google Form
2. Add fields from blueprint
3. Include optional Classroom checkbox
4. Set response destination to Volunteers sheet
5. Turn on email receipts
6. Embed in Parent Portal

## Phase 5: Basic Automation (Optional)

For basic email confirmations, Google Forms can send automatic receipts without coding:
1. In Form settings → Responses
2. Turn on "Collect email addresses"
3. Turn on "Response receipts" → Always

If you need notifications to coordinators, add this simple script:

```javascript
// Notify coordinator when someone signs up
function onFormSubmit(e) {
  const coordinatorEmail = 'market-coordinator@[school-domain]';
  const responses = e.values;
  const name = responses[1]; // Adjust based on your form
  
  MailApp.sendEmail(
    coordinatorEmail,
    'New Market Volunteer: ' + name,
    'Check the spreadsheet for details'
  );
}
```

That's it for automation - keep it simple!

## Phase 6: Security & Access Control

### Site Permissions
- **Public Market Site:** Anyone can view
- **Parent Portal:** Anyone with link (shared via newsletter)
- **Admin Dashboard:** Restricted to school staff

### Data Protection
- Don't collect unnecessary information
- Use school Google Drive for storage
- Regular backups of sheets
- Clear data retention policy

## Phase 7: Testing

### Before Launch Checklist
- [ ] Test vendor form submission
- [ ] Test volunteer form submission
- [ ] Verify email receipts work
- [ ] Check sheet permissions
- [ ] Test on mobile devices
- [ ] Review all site content

## Phase 8: Launch

### Week Before Event
1. Share Parent Portal link in newsletter
2. Open vendor applications
3. Monitor submissions daily

### During Signup Period
- Check sheets regularly
- Approve/reject vendors
- Fill volunteer shifts
- Send reminders as needed

## Optional: Google Classroom Enhancement

If you want enhanced coordination, see [Optional Features](optional-features.md) for Google Classroom setup.

## Maintenance

### Per Event
- Clear old data from sheets (archive first)
- Update dates and information
- Test forms before opening
- 1-2 hours total time

### Annual
- Review and update all content
- Archive previous year's data
- Update volunteer database

## Troubleshooting

**Forms not working?**
- Check form permissions
- Verify sheet connection
- Test in incognito mode

**Can't access sites?**
- Check sharing settings
- Verify user permissions
- Clear browser cache

**Email not sending?**
- Check form settings
- Verify email addresses
- Check spam folders

## Support Resources

- [Google Sites Help](https://support.google.com/sites)
- [Google Forms Help](https://support.google.com/forms)
- [Google Sheets Help](https://support.google.com/sheets)

---

This simplified guide focuses on what you actually need without complex automation. The system works great with just Forms, Sheets, and Sites!