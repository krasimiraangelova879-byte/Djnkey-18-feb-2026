# DJ NKEY Website - Product Requirements Document

## Original Problem Statement
Create a professional website for a DJ (DJ NKEY) in Bulgarian language with custom navigation sections: Информация за мен, Стил музика, Професионален опит, Защо да изберете DJ NKEY, and Галерия.

## Project Overview
**Project Name:** DJ NKEY Professional Website  
**Language:** Bulgarian  
**Type:** Single-page application with smooth scrolling navigation  
**Stack:** React + TailwindCSS + Shadcn UI Components

## User Personas
1. **Event Organizers**: Looking to book a professional DJ for events
2. **Club Owners**: Seeking resident DJs or guest performances
3. **Individual Clients**: Want to hire DJ for private parties/weddings
4. **Fans**: Want to follow DJ's work and music style

## Core Features (Static - MVP Requirements)

### 1. Hero Section
- Full-screen hero with DJ NKEY's professional photo as background
- Welcome text: "Welcome to the official website of DJ NKEY"
- Tagline in Bulgarian
- Two CTA buttons (Book Now, View Events)
- Smooth scroll indicator

### 2. Информация за мен (About)
- DJ biography
- Three info cards: About Me, Musical Passion, Professionalism

### 3. Стил музика (Music Style)
- Four music genre cards (House, Electronic/EDM, Progressive/Techno, Commercial)
- Featured mix section with SoundCloud/Spotify links

### 4. Професионален опит (Professional Experience)
- Statistics showcase (Years, Events, Clubs, Clients)
- Experience timeline with venues and achievements
- Skills and certifications section

### 5. Защо да изберете DJ NKEY (Why Choose)
- Six reasons with descriptions
- Testimonial section with 5-star rating
- CTA section for booking

### 6. Галерия (Gallery)
- Photo grid (3 columns)
- Lightbox modal on click
- Professional performance photos

### 7. Contact Section
- Contact information cards (Email, Phone)
- Working hours
- Inquiry form

### 8. Navigation
- Fixed header with custom menu items
- Smooth scroll navigation
- Mobile responsive menu
- Transparent → solid on scroll

### 9. Footer
- Quick links to all sections
- Social media icons
- Copyright info

## What's Been Implemented (December 11, 2025)

### ✅ Completed Features
1. **Frontend Structure** (Frontend-only with mock data)
   - Created all custom sections as requested
   - Implemented navigation with specific Bulgarian labels
   - Integrated user's uploaded photo as hero background
   - All content in Bulgarian language

2. **Custom Sections Created**
   - `/app/frontend/src/components/About.jsx` - Информация за мен
   - `/app/frontend/src/components/MusicStyle.jsx` - Стил музика
   - `/app/frontend/src/components/ProfessionalExperience.jsx` - Професионален опит
   - `/app/frontend/src/components/WhyChoose.jsx` - Защо да изберете DJ NKEY
   - `/app/frontend/src/components/Gallery.jsx` - Галерия

3. **Design System**
   - Custom color scheme with vibrant cyan (#00d9ff) as primary accent
   - Responsive typography system
   - Rounded button styles following Bigfish design guidelines
   - Dark theme with proper contrast
   - Custom animations and transitions

4. **Interactive Features**
   - Smooth scroll navigation
   - Mobile hamburger menu with all custom sections
   - Gallery lightbox modal
   - Contact form with toast notifications
   - Hover animations on all cards
   - Experience timeline with icons

### Files Created/Updated
- `/app/frontend/src/data/mock.js` - Updated with new data structures
- `/app/frontend/src/components/Header.jsx` - Updated with custom navigation
- `/app/frontend/src/components/Hero.jsx` - Hero with uploaded photo
- `/app/frontend/src/components/About.jsx` - Информация за мен section
- `/app/frontend/src/components/MusicStyle.jsx` - Стил музика section
- `/app/frontend/src/components/ProfessionalExperience.jsx` - Experience section
- `/app/frontend/src/components/WhyChoose.jsx` - Why choose section
- `/app/frontend/src/components/Gallery.jsx` - Gallery section
- `/app/frontend/src/components/Contact.jsx` - Contact form
- `/app/frontend/src/components/Footer.jsx` - Updated footer links
- `/app/frontend/src/App.js` - Updated with all new sections

## Prioritized Backlog

### P0 Features (Next Phase - Backend Development)
- [ ] Backend API setup with FastAPI
- [ ] MongoDB models for experiences, gallery, inquiries
- [ ] Contact form backend integration with email notifications
- [ ] Content management for experiences and music styles
- [ ] Admin authentication

### P1 Features (Enhancement Phase)
- [ ] Music player integration (SoundCloud/Spotify embeds)
- [ ] Real social media feed integration
- [ ] Testimonials management system
- [ ] Blog section for news and updates
- [ ] SEO optimization

### P2 Features (Future Enhancements)
- [ ] Event booking calendar system
- [ ] Multi-language support (Bulgarian/English)
- [ ] Video gallery section
- [ ] Live performance streaming
- [ ] Analytics dashboard

## Next Tasks
1. Gather real content (actual bio, experience details, real photos)
2. Implement backend API for contact form
3. Set up email service integration
4. Create admin panel for content management
5. Add real music player embeds

## Recent Updates (December 11, 2025 - Evening)

### ✅ Custom DJ Disc Cursor
- Implemented custom cursor using uploaded CD/disc image
- CSS-based cursor replacement across entire site
- CustomCursor component with mouse tracking
- Spinning animation (2s normal, 0.5s when clicking)
- Glowing effect with cyan shadow
- Works on all interactions: scrolling, clicking, hovering
- Faster spin and brighter glow when clicking

**Files Modified:**
- `/app/frontend/src/App.css` - Added cursor CSS variables and animations
- `/app/frontend/src/components/CustomCursor.jsx` - New cursor component
- `/app/frontend/src/App.js` - Integrated CustomCursor component

**Technical Implementation:**
- CSS custom cursor property with CD image
- React component for enhanced cursor with spin animation
- Mouse event listeners for click detection
- Fixed positioning with pointer-events: none to avoid interference
