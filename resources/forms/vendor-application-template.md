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
- Validation: Text validation > Phone number

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

"Thank you for your vendor application! 

We'll review your application and contact you within 3 business days.

Stall allocation is confirmed once payment is received.

If you have urgent questions, please email: market-coordinator@[school-domain]"

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
Add these manual columns to spreadsheet:
- Approval Status (Pending/Approved/Rejected/Waitlist)
- Payment Status (Pending/Received)
- Payment Date
- Stall Number Assigned
- Notes