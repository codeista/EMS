# Optional Features - Google Classroom Enhancement

## Overview
Google Classroom is an **optional** enhancement layer that provides real-time coordination for volunteers who want more engagement. The core Sites & Forms system works perfectly without it.

## When to Consider Google Classroom

### Good Fit If:
- Same volunteers help regularly
- Parents comfortable with apps
- Need real-time event-day coordination
- Want to build volunteer community
- 20+ volunteers to coordinate

### Skip It If:
- Different volunteers each event
- Parents prefer simple email
- Quarterly or less frequent events
- Small volunteer group (<10)
- Want simplest possible system

---

## Google Classroom Setup

### Creating the Classroom

**Naming Convention:**
- Per Event: "[School] Market Term 1 2024"
- Annual: "[School] Markets 2024"
- Ongoing: "[School] Market Volunteers"

**Initial Setup:**
1. Create new Classroom
2. Set class code to something memorable
3. Add coordinators as teachers
4. Configure Stream for announcements

### Structure

**Stream Tab**
- Announcements and updates
- Day-of coordination
- Urgent requests

**Classwork Tab**
- Shift rosters (as Materials)
- Volunteer guides (as Materials)
- Confirmation assignments

**People Tab**
- All opted-in volunteers
- Coordinators as teachers

---

## Integration with Core System

### How They Work Together

**Form Signup Flow:**
1. Parent fills volunteer form
2. Checks "Join Google Classroom" box
3. Provides Google account email
4. Gets:
   - Email confirmation (everyone)
   - Classroom invite (if opted-in)

### Database Tracking
Add columns to volunteer sheet:
- `classroom_opt_in` (Yes/No)
- `google_email` (for invite)
- `classroom_joined` (tracking)

---

## Classroom Features for Markets

### Pre-Event (2 weeks before)

**Post: Welcome & Roster**
```
Welcome Market Cafe Volunteers!

Your shift assignments are attached.
Please confirm by marking "Done"

Questions? Comment below!
```

**Assignment: Shift Confirmation**
- Type: Assignment
- Due: 1 week before
- Instructions: "Mark done to confirm your shift"

### Event Week

**Daily Posts:**
- Monday: "5 days to go! Check your shift time"
- Wednesday: "Baking reminder - deliver 7:30am Saturday"
- Friday: "See you tomorrow! Parking map attached"

### Event Day

**Real-time Updates:**
- 7:30am: "Cafe setup starting - team check in"
- 9:45am: "Need 1 more for afternoon EFTPOS"
- 12:00pm: "Lunch rush starting - all hands!"
- 3:00pm: "Cleanup crew please report"

### Post-Event

**Thank You Post:**
```
Amazing work everyone! 

We served 200+ customers and raised $X,XXX
Photos from today are posted below.

See you next term!
```

---

## Mobile App Benefits

### For Volunteers
- Push notifications for urgent needs
- Check shift time on the go
- Mark arrival with comment
- See who else is working
- Access maps offline

### For Coordinators
- Post updates from anywhere
- See who's confirmed
- Fill gaps quickly
- Share photos instantly

---

## Classroom Management

### Adding Volunteers
**Option 1: Class Code**
- Share code in email/newsletter
- Parents join themselves
- Easiest for large groups

**Option 2: Email Invites**
- Send individual invites
- More control
- Better for small groups

### After the Event
**Archive Don't Delete:**
- Preserves history
- Can copy for next event
- Volunteers can still access

**For Next Event:**
1. Copy archived classroom
2. Update dates/details
3. Remove old assignments
4. Invite new volunteers

---

## Measuring Success

### Adoption Metrics
- What % opted in?
- How many joined Classroom?
- App downloads?
- Active participation?

### Engagement Metrics
- Response time to urgent posts
- Assignment completion rate
- Comments/discussion level
- Photo shares

### Value Assessment
After each event, ask:
- Did Classroom help coordination?
- Did volunteers use it?
- Was it worth the setup time?
- Should we continue/expand?

---

## Common Scenarios

### "Need 2 more cafe volunteers NOW"
1. Post to Stream with @all
2. First to respond get shifts
3. Update roster in Classwork
4. Thank volunteers

### "Market cancelled due to weather"
1. Post announcement immediately
2. Email all (for non-Classroom)
3. Update Stream with updates
4. Plan rescheduling

### "New volunteer wants to join"
1. They fill core form first
2. If opted-in, add to Classroom
3. Share materials/roster
4. Welcome them

---

## Decision Framework

### Start Without Classroom If:
- First time running digital system
- Want to test basic process
- Unsure about volunteer tech skills
- Need quickest possible setup

### Add Classroom When:
- Core system working well
- Volunteers asking for more features
- Need better day-of coordination
- Have time to manage it

### Success Indicators:
- 30%+ volunteers opt in
- Active engagement in posts
- Reduced phone calls/emails
- Positive volunteer feedback
- Easier event-day management

---

## Quick Reference

### Setup Checklist
- [ ] Create Classroom
- [ ] Configure settings
- [ ] Add welcome post
- [ ] Create roster material
- [ ] Set up assignments
- [ ] Test with coordinator team
- [ ] Share join code

### Event Day Checklist
- [ ] Morning welcome post
- [ ] Monitor for issues
- [ ] Post urgent needs
- [ ] Share progress photos
- [ ] Thank you message

### Post-Event Checklist
- [ ] Share final photos
- [ ] Post success metrics
- [ ] Thank volunteers
- [ ] Archive classroom
- [ ] Note improvements