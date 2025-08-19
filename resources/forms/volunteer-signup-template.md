# Market Cafe Volunteer Signup Form Template

## Form Settings
- **Title**: [Event Name] - Market Cafe Volunteer Signup
- **Description**: Help run our Market Cafe! Choose from cafe service, EFTPOS, cleaning, or contribute baked goods.
- **Collect email addresses**: Yes (any email accepted)
- **Response receipts**: Always send
- **Allow response editing**: Yes (so volunteers can update availability)

## Form Sections & Fields

### Section 1: Contact Information

**Your Name** *
- Type: Short answer
- Required: Yes

**Email Address** *
- Type: Email (automatic if collecting emails)
- Required: Yes
- Description: We'll send confirmation and reminders here

**Phone Number** *
- Type: Short answer
- Required: Yes
- Validation: Phone number
- Description: For urgent contact on market day

### Section 2: How Would You Like to Help?

**Volunteer Type** *
- Type: Multiple choice
- Required: Yes
- Options:
  - Work a shift on market day
  - Contribute baked goods only
  - Both - work a shift AND bring baking

### Section 3: Shift Selection
*Show this section if "Work a shift" or "Both" selected*

**Available Shifts** *
- Type: Checkboxes
- Required: Yes (if shown)
- Description: Select ALL shifts you're available for - we'll confirm your assignment
- Options:
  - Supervisor (8:00am - 3:00pm) (admin change only)
  - Cafe Morning (8:00am - 10:30am) - Serving customers
  - Cafe Mid (10:30am - 1:00pm) - Serving customers
  - EFTPOS Morning (8:00am - 11:30am) - Processing payments
  - EFTPOS Afternoon (11:30am - 1:00pm) - Processing payments
  - Crew (7:00am - 3:00pm) - Setting up cafe area, cleaning and packing up
  - Crew (7:00am - 3:00pm) - Setting up cafe area, cleaning and packing up
  - Crew (7:00am - 3:00pm) - Setting up cafe area, cleaning and packing up
  - Crew (7:00am - 3:00pm) - Setting up cafe area, cleaning and packing up

**Shift Preferences/Restrictions**
- Type: Paragraph
- Required: No
- Description: Any preferences or restrictions? (e.g., "Can only work morning", "Prefer to work with friend")

### Section 4: Baking Contribution
*Show this section if "Contribute baked goods" or "Both" selected*

**What Will You Bake?** *
- Type: Short answer
- Required: Yes (if shown)
- Description: e.g., "Chocolate chip cookies", "Banana muffins"

**Quantity** *
- Type: Short answer
- Required: Yes (if shown)
- Description: e.g., "2 dozen", "24 pieces", "1 large cake"

**Contains Nuts?** *
- Type: Multiple choice
- Required: Yes (if shown)
- Options:
  - No nuts
  - Contains peanuts
  - Contains tree nuts
  - Contains both peanuts and tree nuts

**Other Allergens** *
- Type: Checkboxes
- Required: Yes (if shown)
- Options:
  - No other major allergens
  - Gluten/Wheat
  - Dairy
  - Eggs
  - Soy
  - Other (specify below)

**Other Allergen Details**
- Type: Short answer
- Required: If "Other" selected
- Description: Please specify other allergens

**Baking Delivery Time** *
- Type: Multiple choice
- Required: Yes (if shown)
- Description: When will you deliver your baking?
- Options:
  - 7:30am - 8:00am (before market opens)
  - 8:00am - 9:00am
  - 9:00am - 10:00am
  - Day before (arrange storage)

### Section 5: Optional Features

**Google Classroom Participation**
- Type: Multiple choice
- Required: No
- Description: Join our Google Classroom for enhanced coordination and updates
- Options:
  - Yes - I'd like to join Google Classroom
  - No - Email only please
  - Maybe - send me more information

**Google Account Email**
- Type: Short answer
- Required: If "Yes" to Classroom
- Description: Your Google account email for Classroom invite (if different from above)

**Communication Preferences**
- Type: Checkboxes
- Required: No
- Options:
  - Email updates are fine
  - Text me for urgent updates
  - I can be contacted on market day for last-minute needs
  - Add me to the volunteer WhatsApp group (if applicable)

### Section 6: Additional Information

**Volunteer With Friends/Family**
- Type: Short answer
- Required: No
- Description: Names of people you'd like to volunteer with

**Additional Comments**
- Type: Paragraph
- Required: No
- Description: Anything else we should know?

**Emergency Contact**
- Type: Short answer
- Required: No
- Description: Name and phone for market day emergencies

## Form Confirmation Message

"Thank you for volunteering for our Market Cafe!

**What happens next:**
1. We'll confirm your shift assignment within 3 days
2. You'll receive a reminder email 48 hours before the market
3. If you selected Google Classroom, watch for an invite

Questions? Email market-coordinator@[school-domain]

Thank you for supporting our school!"

## Response Spreadsheet Columns

The form will automatically create:
1. Timestamp
2. Email address
3. Name
4. Phone Number
6. Volunteer Type
7. Available Shifts
8. Shift Preferences
9. Baking Item
10. Quantity
11. Contains Nuts
12. Other Allergens
13. Allergen Details
14. Delivery Time
15. Previous Volunteer
17. Google Classroom Choice
18. Google Account Email
19. Communication Preferences
22. Emergency Contact(optional)

## Additional Spreadsheet Configuration

### Add Management Columns
Manually add these columns for tracking:
- Assigned Shift (filled by coordinator)
- Confirmed (Yes/No)
- Attended (Yes/No for post-event)
- Hours Credited
- Coordinator Notes

### Shift Counter Formulas
Add summary formulas to count volunteers per shift:
```
=COUNTIF(G:G, "*Cafe Morning*")
=COUNTIF(G:G, "*EFTPOS Morning*")
```

### Baking Tracker
Create separate sheet tab for baking:
```
=FILTER(Form Responses!A:N, Form Responses!F:F<>"Work a shift on market day")
```

### Auto-Sort by Shift
Sort by volunteer type, then by shift preference for easy roster creation.

## Email Notification Script

Add this simple script for coordinator notifications:
```javascript
function onFormSubmit(e) {
  const responses = e.values;
  const name = responses[2]; // Name column
  const type = responses[5]; // Volunteer type
  
  MailApp.sendEmail(
    'market-coordinator@[school-domain]',
    'New Cafe Volunteer: ' + name,
    'Type: ' + type + '\nCheck the spreadsheet for details'
  );
}
```