# Market Event Blueprint

## System Overview

The Market Event System consists of:
- **Core System**: 3 Google Sites + Forms (works for everyone)
- **Optional Enhancement**: Google Classroom (for engaged volunteers)

## Site Structure

### 1. Public Market Site
**URL:** `sites.google.com/[school-domain]/market`  
**Access:** Public  
**Purpose:** Event information and vendor applications

**Pages:**
- Homepage (event details, map, parking)
- Vendor Application (embedded form)
- Stall Information (sizes, prices, rules)
- Contact Information

### 2. Parent Portal (Market Cafe)
**URL:** `sites.google.com/[school-domain]/parent-portal`  
**Access:** Restricted (see Access Control below)  
**Purpose:** Market Cafe volunteer coordination

**Pages:**
- Homepage (volunteer information)
- Shift Signup (embedded form)
- Baking Guidelines
- What to Expect

### 3. Admin Dashboard
**URL:** `sites.google.com/[school-domain]/market-admin`  
**Access:** School staff only  
**Purpose:** Event management

**Pages:**
- Dashboard (overview metrics)
- Vendor Management (approve/reject)
- Volunteer Roster
- Reports

---

## Access Control

### Parent Portal Access Options

**Option A: Shared Link (Recommended to start)**
- Share unique URL in school newsletter
- Example: `parent-portal?token=T1MARKET2024`
- Change token each term
- Simple, no login required

**Option B: Email Magic Link (More secure)**
- Parent enters email
- Receives one-time login link
- Cookie remembers for 30 days
- Requires Apps Script setup

---

## Database Structure

### Vendors Sheet
| Field | Type | Description |
|-------|------|-------------|
| vendor_id | Auto-ID | V001, V002, etc. |
| business_name | Text | Business name |
| contact_name | Text | Primary contact |
| email | Email | Contact email |
| phone | Text | Contact number |
| products | Text | What they're selling |
| stall_size | Dropdown | Small/Medium/Large |
| power_needs | Yes/No | Electricity required |
| insurance | File link | Insurance certificate |
| payment_status | Dropdown | Pending/Paid |
| approval_status | Dropdown | Pending/Approved/Rejected |

### Market Cafe Volunteers Sheet
| Field | Type | Description |
|-------|------|-------------|
| volunteer_id | Auto-ID | MC001, MC002, etc. |
| parent_name | Text | Parent name |
| email | Email | Any email address |
| phone | Text | Contact number |
| student_info | Text | Child name/class |
| shift_type | Multiple | Cafe/EFTPOS/Cleaning |
| shift_time | Multiple | Selected time slots |
| baking_contribution | Yes/No | Providing baked goods |
| baking_item | Text | What they're baking |
| allergen_info | Text | Nuts, gluten, etc. |
| classroom_opt_in | Yes/No | Wants Google Classroom |

---

## Forms Structure

### Vendor Application Form
**Access:** Public via Market Site

**Fields:**
1. Business Information
   - Business name
   - Contact name
   - Email
   - Phone
2. Stall Requirements
   - Products/services
   - Stall size needed
   - Power requirements
3. Documentation
   - Insurance upload
   - Food permit (if applicable)
4. Payment
   - Preferred payment method

### Market Cafe Volunteer Form
**Access:** Via Parent Portal

**Fields:**
1. Contact Information
   - Parent name
   - Email (any email works)
   - Phone
2. Shift Selection (choose any):
   - **Cafe Shifts:**
     - Morning (8-10:30am)
     - Mid (10:30am-1pm)
   - **EFTPOS Shifts:**
     - Morning (8-11:30am)
     - Afternoon (11:30am-1pm)
   - **Setup and Cleaning:**
     - During event
     - End of day (3-4pm)
3. Baking Contribution (optional)
   - Item to bake
   - Quantity
   - Contains nuts? (Yes/No)
   - Other allergens
4. Optional Enhancement
   - [ ] Join Google Classroom for updates
   - Google account email (if yes)

---

## Communication Flow

### Two-Tier Communication

**Tier 1: Basic (All Volunteers)**
- Channel: Email only
- Messages:
  - Signup confirmation
  - 48-hour reminder
  - Urgent changes
  - Thank you

**Tier 2: Enhanced (Classroom Opt-ins)**
- Channels: Email + Classroom + App
- Additional features:
  - Daily updates
  - Real-time notifications
  - Document access
  - Discussion forum

---

## Shift Structure

### Market Cafe Operations

**Cafe Service Shifts**
- Morning: 8:00am - 10:30am
- Mid: 10:30am - 1:00pm 

**EFTPOS Station**
- Morning: 8:00am - 11:30am
- Afternoon: 11:30am - 1:00pm

**Setup and Cleaning Crew**
- Setup crew x2
- Cleanup crew x2

**Baking Contribution**
- Alternative to shift work
- Delivery: 8am - 10:00am on market day
- Labeled with allergens

---

## Implementation Priorities

### Phase 1: Core System (Weeks 1-2)
1. Create 3 Google Sites
2. Build 2 Forms (vendor + volunteer)
3. Set up Google Sheets database
4. Configure email automation
5. Test with small group

### Phase 2: Launch (Week 3)
1. Share vendor site publicly
2. Send parent portal link via newsletter
3. Begin collecting signups
4. Monitor and adjust

### Phase 3: Optional Enhancements (Week 4+)
1. Create Google Classroom (if desired)
2. Invite opted-in parents
3. Set up mobile notifications
4. Build volunteer community

---

## Success Metrics

### Core Metrics
- Vendor applications received
- Volunteer shifts filled
- Baking contributions committed
- No-show rate

### Enhanced Metrics (if using Classroom)
- Classroom adoption rate
- App usage statistics
- Response time to urgent requests
- Volunteer satisfaction

---

## Quick Reference

### URLs
- Public Market: `/market`
- Parent Portal: `/parent-portal`
- Admin Dashboard: `/market-admin`

### Key Dates
- 4 weeks before: Launch sites
- 3 weeks before: Open signups
- 2 weeks before: Send reminders
- 1 week before: Finalize rosters
- Day of: Execute plan

### Contacts
- Vendor Coordinator: [Role]
- Cafe Coordinator: [Role]
- Tech Support: [Role]