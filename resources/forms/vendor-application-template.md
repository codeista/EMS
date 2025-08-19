# Vendor Application Form Template

## Form Settings
- **Title**: [Event Name] - Vendor Application
- **Description**: Apply for a vendor stall at our upcoming market event
- **Collect email addresses**: Yes
- **Response receipts**: Always send
- **Limit to 1 response**: Optional (prevents duplicate applications)

## Form Sections & Fields

### Section 1: Business Information

**Business Name** *
- Type: Short answer
- Required: Yes
- Description: Your business or stall name

**Contact Person** *
- Type: Short answer
- Required: Yes
- Description: Primary contact name

**Email Address** *
- Type: Email (automatic if collecting emails)
- Required: Yes
- Validation: Email format

**Phone Number** *
- Type: Short answer
- Required: Yes
- Validation: Regular expression > Matches > `^[\d\s\-\+\(\)\.]+$`
- Description: Accepts digits, spaces, dashes, plus sign, parentheses, and dots

**Business Website/Social Media**
- Type: Short answer
- Required: No
- Description: Website, Facebook, or Instagram page

### Section 2: Stall Details

**Products/Services Description** *
- Type: Paragraph
- Required: Yes
- Description: What will you be selling or offering? Please be specific.

**Product Categories** *
- Type: Checkboxes
- Required: Yes
- Options:
  - Food - Prepared/Ready to eat
  - Food - Packaged/Take home
  - Beverages
  - Fresh Produce
  - Arts & Crafts
  - Clothing & Accessories
  - Plants & Garden
  - Books & Stationery
  - Toys & Games
  - Health & Beauty
  - Services
  - Other

**Stall Size Required** *
- Type: Multiple choice
- Required: Yes
- Options:
  - Small (3m x 3m) - $30
  - Medium (3m x 6m) - $50
  - Large (3m x 9m) - $70
  - Multiple stalls needed (contact us)

### Section 3: Setup Requirements

**Do you need access to power?** *
- Type: Multiple choice
- Required: Yes

### Section 4: Food Vendors Only
*Show this section only if "Food" is selected in Product Categories*

**Do you have a current Food Safety Certificate?** *
- Type: Multiple choice
- Required: Yes (if food vendor)
- Options:
  - Yes - will provide copy
  - No - not applicable
  - In progress

**Allergen Information** *
- Type: Checkboxes
- Required: Yes (if food vendor)
- Options:
  - Our products contain NO allergens
  - Nuts (peanuts, tree nuts)
  - Gluten
  - Dairy
  - Eggs
  - Shellfish
  - Soy
  - Other allergens (specify below)

**Other Allergen Details**
- Type: Short answer
- Required: No
- Show if "Other allergens" selected

### Section 5: Insurance & Compliance

**Public Liability Insurance** *
- Type: Multiple choice
- Required: Yes
- Options:
  - Yes - I have current public liability insurance
  - No - I will obtain before the event
  - No - I need information about insurance options

**Insurance Certificate Upload**
- Type: File upload
- Required: No
- Description: Please upload your insurance certificate (PDF or image)
- File types: PDF, PNG, JPG, JPEG

### Section 6: Payment & Terms

**Preferred Payment Method** *
- Type: Multiple choice
- Required: Yes
- Options:
  - Bank transfer
  - Cash on market day
  - School office payment

**Terms and Conditions** *
- Type: Checkboxes
- Required: Yes
- Options (all must be checked):
  - I agree to the market terms and conditions
  - I understand stall fees are non-refundable
  - I will comply with all health and safety requirements
  - I will setup between 7:00-8:00am and pack down by 2:00pm

**Additional Comments or Special Requirements**
- Type: Paragraph
- Required: No
- Description: Any other information we should know?

## Form Confirmation Message

### How to Set Up:
1. In your Google Form (edit mode)
2. Click on **Settings** tab at the top (next to Questions and Responses)
3. Scroll down to **Presentation** section
4. Find **Confirmation message** field
5. Replace default text with your custom message
6. Save changes

### Suggested Message:
"Thank you for your vendor application! 

We'll review your application and contact you within 3 business days.

Stall allocation is confirmed once payment is received.

If you have urgent questions, please email: marketcoordinator@schoolname.school.nz"

Note: Replace with your actual contact email. This could be:
- A school domain email (e.g., market@schoolname.school.nz)
- A Gmail account created for the event (e.g., schoolnamemarket@gmail.com)
- A parent volunteer's email designated for the event

## Response Spreadsheet Columns

The form will automatically create these columns:
1. Timestamp
2. Email address
3. Business Name
4. Contact Person
5. Phone Number
6. Business Website/Social Media
7. Products/Services Description
8. Product Categories
9. Stall Size Required
10. Power Requirements
11. Equipment Bringing
12. Vehicle Access
13. Food Safety Certificate (if applicable)
14. Allergen Information (if applicable)
15. Other Allergens (if applicable)
16. Public Liability Insurance
17. Insurance Certificate (file link)
18. Payment Method
19. Terms Agreement
20. Additional Comments

## Additional Configuration

### Email Notifications
Add Apps Script trigger to notify coordinator on form submission (see implementation guide)

### Auto-Calculate Fees
Add formula column in spreadsheet:
```
=IF(I2="Small (3m x 3m) - $30", 30, 
  IF(I2="Medium (3m x 6m) - $50", 50, 
    IF(I2="Large (3m x 9m) - $70", 70, "Contact")))
```

### Status Tracking

Set up tracking columns immediately after creating your form - don't wait for responses!

#### Initial Setup:
1. In your form, go to **Responses** tab
2. Click the Google Sheets icon to **Create Spreadsheet** (or link existing)
3. Open the spreadsheet - it will have column headers from your form questions
4. Add your tracking columns right away in the first empty columns
5. Set up data validation and formatting before any responses arrive

#### How to Add Columns:
1. Click on the first empty column after the form response columns
2. Add column headers for each tracking field
3. Use data validation for dropdown options (Data > Data validation)
4. Format columns appropriately (dates, currency, etc.)

#### Recommended Tracking Columns:

**Column: Approval Status**
- Purpose: Track application review progress
- Options: Pending, Approved, Rejected, Waitlist
- Setup: Add data validation with dropdown list
- Use: Update as you review each application

**Column: Payment Status**
- Purpose: Track vendor fee payments
- Options: Pending, Received, Refunded
- Setup: Add data validation with dropdown list
- Use: Update when payment confirmed

**Column: Payment Date**
- Purpose: Record when payment was received
- Format: Date (Format > Number > Date)
- Use: Enter date of payment receipt

**Column: Stall Number Assigned**
- Purpose: Track specific stall allocation
- Format: Text or number (e.g., "A12", "Food Court 3")
- Use: Assign after payment received

**Column: Notes**
- Purpose: Internal comments and special requirements
- Format: Plain text
- Examples: "Needs corner spot", "Returning vendor", "Requires 2 tables"

#### Pro Tips:
- Use conditional formatting to highlight pending items (Format > Conditional formatting)
- Create filters to view only approved vendors or pending payments (Data > Create a filter)
- Sort by stall number for setup day logistics
- Consider adding email sent checkboxes for tracking communications