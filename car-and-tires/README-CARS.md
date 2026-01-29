# 🚗 CarHub - Cars & Tires Marketplace

A modern, fully-featured e-commerce marketplace for buying and managing cars and tires with a comprehensive admin panel.

---

## 📑 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technologies](#technologies)
5. [Installation](#installation)
6. [Usage Guide](#usage-guide)
7. [File Structure](#file-structure)
8. [Data Models](#data-models)
9. [API Reference](#api-reference)
10. [Admin Panel Guide](#admin-panel-guide)
11. [Browser Compatibility](#browser-compatibility)
12. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

CarHub is a complete cars and tires marketplace solution featuring:

- **Customer Storefront** (`index.html`) - Browse, search, and filter products
- **Admin Dashboard** (`cars-admin.html`) - Manage inventory with full CRUD operations
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Local Data Storage** - Uses browser localStorage for data persistence
- **Dynamic Images** - Real car images from Unsplash API
- **Modern UI** - Gradients, animations, and smooth transitions

---

## ✨ Features

### Customer Storefront Features

#### Navigation & Structure
- Sticky header with logo and search functionality
- Tab-based navigation (Cars | Tires)
- Breadcrumb navigation for location awareness
- Quick access to About and Contact pages
- Responsive mobile menu

#### Cars Section
- **Hot Cars Carousel**
  - Auto-rotating featured car showcase
  - Navigation buttons for manual control
  - Dynamic car images from Unsplash
  - Featured products only

- **Advanced Search & Filters**
  - Brand filter (dropdown)
  - Model filter (text input)
  - Year range filter
  - Price range filter
  - Mileage filter
  - Real-time search results

- **Product Cards**
  - High-quality car images
  - Brand, model, year, price display
  - Mileage and condition information
  - Discount percentage badge
  - Add to cart button

- **Product Details Accordion**
  - Expandable/collapsible details
  - Full specifications (color, fuel, transmission, owner)
  - Customer rating
  - Warranty information

- **Pagination System**
  - 6 items per page
  - Page navigation controls
  - Total count display
  - Previous/Next buttons

#### Tires Section
- Similar search and filter functionality
- Tire-specific filters (type, size)
- Tire specifications display (width, height, wheel size)
- Warranty and lifespan information
- Pagination control

#### About Page
- Company mission statement
- Statistics grid (2x2 layout)
  - Total cars sold
  - Happy customers
  - Years in business
  - Vehicles managed

- Core values cards
  - Quality
  - Reliability
  - Customer First
  - Innovation

- Feature highlights with icons

#### Contact Page
- Contact information cards
- Support details
- Service hours
- Email and phone support
- Service description

#### Footer
- Quick links
- Company information
- Social media placeholders
- Copyright information

### Admin Panel Features

#### Dashboard Overview
- Sidebar navigation with Cars/Tires tabs
- Real-time statistics display
- Total car count
- Total tire count

#### Cars Management
- List all cars as visual cards
- View Details - Modal with complete car information
- Add New - Form to add cars with validation
- Edit - Modify existing car details
- Delete - Remove cars with confirmation
- All operations require confirmation button

#### Tires Management
- List all tires as visual cards
- View Details - Full tire specifications
- Add New - Create new tire entries
- Edit - Update tire properties
- Delete - Remove tires with confirmation
- All operations require confirmation

#### User Experience
- Icon-based action buttons with tooltips
- Modal popups for all operations
- Form validation before submission
- Auto-closing alert notifications (3 seconds)
- Success, error, and info messages
- Smooth animations and transitions

---

## 🛠️ Technologies

### Frontend Stack
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with:
  - CSS Gradients
  - Flexbox and CSS Grid
  - Smooth transitions and animations
  - Responsive design
  - Custom property variables (CSS variables)

- **JavaScript (ES6+)** - Dynamic functionality with:
  - Arrow functions
  - Template literals
  - Array methods (map, filter, find)
  - Event handling
  - localStorage API

- **Bootstrap 5.3.0** - Responsive framework
  - Grid system (12-column layout)
  - Modal components
  - Form controls
  - Navbar and navigation
  - Carousel component

- **Bootstrap Icons 1.11.0** - Icon library
  - 1000+ icons available
  - Integrated in buttons and UI elements

### External Services
- **Unsplash Source API** - Free car images
  - Pattern: `https://source.unsplash.com/400x300/?brand,model,car`
  - Random relevant images
  - No API key required

### Storage
- **Browser localStorage API** - Client-side data persistence
  - Stores cars array
  - Stores tires array
  - Persists across page reloads
  - ~5-10MB storage limit

---

## 📦 Installation

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Internet connection (for Bootstrap CDN and images)
- No server installation required

### Quick Start

1. **Navigate to project folder:**
   ```bash
   cd car-and-tires
   ```

2. **Open in browser:**
   - Storefront: Open `index.html`
   - Admin Panel: Open `cars-admin.html`

3. **Using a local server (recommended):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # Ruby
   ruby -run -ehttpd . -p8000
   ```
   Then open: `http://localhost:8000/car-and-tires/index.html`

---

## 📖 Usage Guide

### Customer Storefront (index.html)

#### Browsing Products

1. **View Featured Cars:**
   - Carousel automatically rotates every 5 seconds
   - Click navigation arrows to manually browse
   - Featured cars displayed with high-quality images

2. **Search & Filter:**
   - Enter brand in search (e.g., "Toyota")
   - Use dropdown to select brand
   - Enter model name
   - Set year range
   - Set price range ($10,000 - $500,000)
   - Set mileage range (0 - 500,000 KM)
   - Results update in real-time

3. **View Product Details:**
   - Click on any product card to expand accordion
   - View color, fuel type, transmission
   - Check owner information and rating
   - See full specifications

4. **Navigate Pages:**
   - Use pagination buttons at bottom
   - Each page shows 6 items
   - View current page and total count

#### Switching Sections

1. **Tab Navigation:**
   - Click "Cars" tab for vehicles
   - Click "Tires" tab for tire products
   - Breadcrumb updates to show location

2. **Access Other Pages:**
   - Click "About" for company info
   - Click "Contact" for support details
   - Click "Home" to return to storefront

#### Tires Section

1. **Search Tires:**
   - Use brand search field
   - Filter by tire type (All-Season, Winter, etc.)
   - Filter by size (width/height/wheel)
   - View results with pagination

2. **Tire Specifications:**
   - Size display (205/55R16)
   - Warranty period
   - Lifespan expectancy
   - Price per tire
   - Customer rating

---

### Admin Panel (cars-admin.html)

#### Adding Items

**Add New Car:**
1. Click "[+] Add New Car" button
2. Fill in form fields:
   - Brand (e.g., "BMW")
   - Model (e.g., "X5")
   - Year (2024)
   - Current Price ($)
   - Original Price ($)
   - Mileage (KM)
   - Color
   - Fuel Type (Petrol/Diesel/Hybrid/Electric)
   - Transmission (Manual/Automatic)
   - Featured checkbox (optional)
3. Click "[✓] Confirm" button
4. Success notification appears
5. New car added to list

**Add New Tire:**
1. Click "[+] Add New Tire" button
2. Fill in form fields:
   - Brand (e.g., "Michelin")
   - Type (e.g., "All-Season")
   - Width (205)
   - Height (55)
   - Wheel (16)
   - Price ($)
   - Original Price ($)
   - Warranty (e.g., "3 years")
   - Lifespan (e.g., "3-5 years")
   - Featured checkbox
3. Click "[✓] Confirm"
4. Item added successfully

#### Editing Items

1. Click pencil (✏️) icon on product card
2. Modal opens with current values
3. Modify fields as needed
4. Click "[✓] Confirm" to save
5. Changes reflected immediately
6. Success notification displays

#### Deleting Items

1. Click trash (🗑️) icon on product card
2. Confirmation modal appears
3. Review item to be deleted
4. Click "[✓] Delete Permanently" to confirm
5. Item removed from inventory
6. Success notification displays

#### Viewing Details

1. Click eye (👁️) icon on product card
2. Details modal opens
3. View full specifications
4. Images displayed (if available)
5. Close modal to return

#### Monitoring Statistics

1. Check sidebar for real-time counts
2. Total Cars count updates automatically
3. Total Tires count updates automatically
4. Stats update after each operation

---

## 📁 File Structure

```
car-and-tires/
├── index.html                # Storefront (1,200+ lines)
│   ├── Header with search
│   ├── Navigation tabs
│   ├── Home section
│   ├── Cars section
│   ├── Tires section
│   ├── About page
│   ├── Contact page
│   └── Footer
│
├── cars-admin.html          # Admin panel (500+ lines)
│   ├── Admin header
│   ├── Sidebar navigation
│   ├── Cars management tab
│   ├── Tires management tab
│   ├── Modals for CRUD
│   └── Statistics sidebar
│
├── styles.css               # Storefront styling (500+ lines)
│   ├── Root variables (colors)
│   ├── Header & navigation
│   ├── Hero section
│   ├── Product cards
│   ├── Search forms
│   ├── Pagination
│   ├── About & contact
│   ├── Footer
│   ├── Responsive design
│   └── Animations
│
├── script.js                # Storefront logic (600+ lines)
│   ├── Data generation
│   ├── localStorage management
│   ├── Search & filter
│   ├── Rendering functions
│   ├── Event listeners
│   ├── Tab switching
│   └── Pagination control
│
├── admin-styles.css         # Admin styling (400+ lines)
│   ├── Layout structure
│   ├── Sidebar design
│   ├── Card styles
│   ├── Modal styling
│   ├── Alert notifications
│   ├── Responsive layout
│   └── Animations
│
└── admin-script.js          # Admin logic (400+ lines)
    ├── Data loading
    ├── CRUD operations
    ├── Modal management
    ├── Form validation
    ├── Statistics update
    └── Alert system
```

---

## 🗂️ Data Models

### Car Object
```javascript
{
    id: 1,                          // Unique identifier
    brand: "Toyota",                // Manufacturer
    model: "Camry",                 // Model name
    year: 2023,                     // Model year
    price: 28500,                   // Current selling price
    originalPrice: 32000,           // Original MSRP
    km: 45000,                      // Mileage in kilometers
    color: "Silver",                // Vehicle color
    fuel: "Petrol",                 // Fuel type
    transmission: "Automatic",      // Manual or Automatic
    featured: true,                 // Featured in carousel
    condition: "Used",              // Vehicle condition
    owner: "Private",               // Ownership type
    rating: 4.5,                    // Customer rating (0-5)
    image: "https://source.unsplash.com/400x300/?Toyota,Camry,car"
}
```

### Tire Object
```javascript
{
    id: 1,                          // Unique identifier
    brand: "Michelin",              // Tire brand
    type: "All-Season",             // Tire category
    width: 205,                     // Tire width (mm)
    height: 55,                     // Tire profile (%)
    wheel: 16,                      // Wheel diameter (inches)
    price: 125,                     // Price per tire
    originalPrice: 145,             // Original price
    warranty: "3 years",            // Warranty period
    lifespan: "3-5 years",         // Expected lifespan
    featured: true,                 // Featured product
    rating: 4.7                     // Customer rating
}
```

---

## 🔌 API Reference

### Main Functions (script.js)

#### Data Initialization
```javascript
generateSampleCars()            // Creates 20 random cars with data
generateSampleTires()           // Creates 20 random tires with data
initializeLocalStorage()        // Initializes localStorage on first load
loadDataFromStorage()           // Loads cars and tires from localStorage
saveDataToStorage()             // Saves data to localStorage
```

#### Search & Filter
```javascript
filterCars(filters)             // Filters cars by criteria
filterTires(filters)            // Filters tires by criteria
handleCarsSearch()              // Event handler for car search
handleTiresSearch()             // Event handler for tire search
```

#### Rendering
```javascript
renderHotCarsCarousel()         // Displays featured cars carousel
renderCarCards(cars, page)      // Displays car product cards
renderTireCards(tires, page)    // Displays tire product cards
renderPagination(total, page)   // Displays pagination controls
```

#### Navigation
```javascript
switchSection(sectionId)        // Switches between Cars/Tires/About/Contact
updateBreadcrumb(section)       // Updates breadcrumb navigation
scrollToTop()                   // Smoothly scrolls to page top
```

### Admin Functions (admin-script.js)

#### CRUD Operations
```javascript
openCarModal(mode, id)          // Opens car modal (add/edit/delete)
openTireModal(mode, id)         // Opens tire modal (add/edit/delete)
confirmCarAction()              // Confirms car operation
confirmTireAction()             // Confirms tire operation
```

#### Display Operations
```javascript
renderCars()                    // Displays all cars as cards
renderTires()                   // Displays all tires as cards
viewCarDetails(id)              // Opens car details modal
viewTireDetails(id)             // Opens tire details modal
```

#### Utility Functions
```javascript
updateStats()                   // Updates sidebar statistics
showAlert(message, type)        // Displays alert notification
switchTab(tabName)              // Switches between Cars/Tires
```

---

## 👨‍💻 Admin Panel Guide

### Dashboard Overview

**Header:**
- CarHub Admin logo and branding
- Welcome message
- "Back to Store" link to return to storefront

**Sidebar:**
- Cars Management tab
- Tires Management tab
- Statistics panel showing total items
- Sticky navigation for easy access

**Main Content:**
- Responsive grid of product cards
- 4 cards on desktop, 2 on tablet, 1 on mobile
- Each card displays product image/icon, details, and price

### Product Card Layout

**Car Card Contains:**
```
[Car Image from Unsplash]
Brand Model
Year: XXXX
Mileage: XX,XXX KM
Fuel: Type
$XX,XXX (Price)
[View] [Edit] [Delete]
```

**Tire Card Contains:**
```
[Tire Icon]
Brand Type
Size: 205/55R16
Warranty: X years
Lifespan: X-X years
$XXX (Price)
[View] [Edit] [Delete]
```

### Modal Forms

#### Add Car Modal
- Fields: Brand, Model, Year, Price, Original Price, Mileage, Color, Fuel, Transmission, Featured
- Validation: All fields required
- Action: [Cancel] [Confirm]

#### Edit Car Modal
- Pre-filled with current data
- Same fields as Add
- Action: [Cancel] [Confirm]

#### Delete Car Modal
- Displays item to be deleted
- Confirmation text
- Action: [Cancel] [Delete Permanently]

#### Similar modals for Tires

### Notifications

**Success Alerts:**
- Green background with checkmark
- "Car added successfully!"
- "Car updated successfully!"
- "Car deleted successfully!"
- Auto-closes in 3 seconds

**Error Alerts:**
- Red background with exclamation
- Displays validation errors
- Auto-closes in 3 seconds

---

## 🌐 Browser Compatibility

### Fully Supported
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Chrome Mobile
- ✅ Safari Mobile (iOS 14+)

### Requirements
- JavaScript ES6+ support
- CSS Grid and Flexbox support
- localStorage API support
- Fetch API for images
- Bootstrap 5.3.0 compatibility

### Not Supported
- ❌ Internet Explorer (any version)
- ❌ Browsers without localStorage

---

## 🔧 Troubleshooting

### Data Issues

**Problem:** Data disappears after page reload
- **Cause:** localStorage disabled or cleared
- **Solution:** 
  - Check browser settings for localStorage
  - Try private/incognito mode (may not support localStorage)
  - Clear browser cache and reload
  - Check Developer Tools > Application > Storage

**Problem:** Sample data not loading initially
- **Cause:** First-time load or storage cleared
- **Solution:**
  - Page auto-generates 20 cars and 20 tires
  - Wait 2 seconds for data initialization
  - Check browser console for errors

### Display Issues

**Problem:** Images not showing
- **Cause:** No internet connection or Unsplash down
- **Solution:**
  - Check internet connection
  - Try refreshing page
  - Clear browser cache
  - Check browser console for image errors

**Problem:** Layout broken on mobile
- **Cause:** Viewport not set
- **Solution:**
  - Ensure `<meta name="viewport">` in HTML
  - Try full page refresh
  - Check Developer Tools device emulation

**Problem:** Bootstrap styles not loading
- **Cause:** CDN not reachable
- **Solution:**
  - Check internet connection
  - CDN link: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0
  - Try refreshing with hard reload (Ctrl+Shift+R)

### Functionality Issues

**Problem:** Search/filter not working
- **Cause:** JavaScript error or data issue
- **Solution:**
  - Check browser console for errors
  - Verify data in localStorage (DevTools)
  - Try page refresh
  - Clear localStorage and reload

**Problem:** Modals not opening
- **Cause:** Bootstrap JS not loaded
- **Solution:**
  - Check Bootstrap JS CDN in HTML
  - Verify modal IDs match JavaScript
  - Check console for errors
  - Try hard refresh

**Problem:** Pagination not updating
- **Cause:** Filter results empty or pagination bug
- **Solution:**
  - Clear all filters
  - Ensure search fields are empty
  - Check results count
  - Refresh page

**Problem:** Admin operations not saving
- **Cause:** localStorage full or JavaScript error
- **Solution:**
  - Clear browser storage
  - Check console for errors
  - Verify form validation passes
  - Try different browser

### Performance Issues

**Problem:** Page loads slowly
- **Cause:** Many images loading or network slow
- **Solution:**
  - Wait for images to load
  - Check internet speed
  - Disable browser extensions
  - Try different browser

**Problem:** Carousel stutters
- **Cause:** Animation performance
- **Solution:**
  - Reduce number of featured items
  - Disable other animations
  - Check browser CPU usage

---

## 💡 Tips & Best Practices

### For Users
- Use filters to narrow down search results
- Featured carousel automatically rotates - click arrows to manually browse
- Expand product cards to view detailed specifications
- Check About page for company information

### For Admins
- Always click "Confirm" button to save changes
- Use View Details before editing to verify data
- Consider featured checkbox for popular items
- Monitor statistics sidebar for inventory levels
- Alert notifications confirm successful operations

### Data Management
- Original Price should be >= Current Price
- Images auto-generate from Unsplash based on car brand/model
- Ratings automatically assigned (3.0-5.0 stars)
- Total localStorage usage: ~50KB for 40 items

---

## 📈 Future Enhancements

- User authentication system
- Shopping cart functionality
- Wishlist feature
- Advanced sorting (newest, price, rating)
- User reviews and comments
- Image upload for admin
- Email notifications
- Payment gateway integration
- Inventory management alerts
- Export/import data features

---

## 📞 Support

For issues:
1. Check this README.md documentation
2. Review browser console (F12 > Console tab)
3. Check Developer Tools storage (F12 > Application)
4. Test in different browser
5. Clear cache and reload

---

**Version:** 1.0.0  
**Last Updated:** January 29, 2026  
**Status:** Production Ready ✅
