# Mount Abu Heritage Trail

## Project Overview
Mount Abu Heritage Trail is a beginner-friendly HTML and CSS project created as part of the Pitsol Week 1 Day 5 assignment. It presents a walking trail featuring tourist attractions around Mount Abu.

The page uses semantic HTML elements and is designed to become responsive across different screen sizes.

## Features
- Header with Home, Route, Stops, and Safety navigation links.
- Journey summary displaying distance, estimated time, and total stops.
- Route section with an image and caption.
- Trail stop cards with location names and descriptions.
- Safety and accessibility information.
- Footer with copyright information.
- Separate CSS stylesheet for page styling.

## Technologies Used
- HTML5
- CSS3
- CSS Grid
- Flexbox
- Media Queries (for responsive layouts)

## Project Structure

```text
web/
├── heritage-trail.html
├── style.css
├── README.md
└── images/
    └── mount-abu.jpg
```

## Trail Information
- **Location:** Mount Abu, Rajasthan
- **Displayed Distance:** 40 km
- **Estimated Time:** 3 days
- **Displayed Total Stops:** 10

The current HTML contains five trail-stop cards. The displayed total of 10 stops should be updated when the remaining cards are added.

## Responsive Design Plan
The layout will use a mobile-first approach:
- **Mobile:** One card per row.
- **Medium screens:** Two cards per row.
- **Wide screens:** Three cards per row.

Flexbox will be used to arrange journey details and stop information. Media queries will adjust the grid layout at suitable breakpoints.

## Testing Checklist
- [ ] Open the HTML page in a browser.
- [ ] Check all four navigation links.
- [ ] Verify that the route image loads correctly.
- [ ] Confirm all five current stop cards are visible.
- [ ] Test the page at 320px, 375px, 768px, 1024px, and 1440px widths.
- [ ] Check that the layout does not overflow on mobile.
- [ ] Test keyboard navigation and visible focus indicators.
- [ ] Verify that the stylesheet loads correctly.

## Disclaimer
This is a training project. The route details, timings, distances, and descriptions are illustrative and should not be treated as verified travel information.

## Author
Mohit Bhadu
