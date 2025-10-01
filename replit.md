# GlowOnCall - Beauty Services at Home

## Overview

GlowOnCall is a complete beauty services booking website that connects users with professional beauty service providers who deliver treatments directly to customers' homes. The application features facials, lash extensions, eyebrow services, and combo packages with a premium mobile-first design, sophisticated cart functionality, customer details collection with location sharing, and WhatsApp integration for seamless booking.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### 2025-09-27: Replit Environment Setup
- **Server Configuration**: Set up Node.js server with proper cache headers and static file serving
- **Workflow Setup**: Configured automatic server startup on port 5000 with webview output
- **Deployment Configuration**: Configured autoscale deployment target for production
- **Cache Management**: Implemented cache-control headers to prevent caching issues in iframe environment
- **Host Configuration**: Server properly configured to bind to 0.0.0.0:5000 for Replit proxy compatibility

## System Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: Built with vanilla JavaScript, HTML5, and CSS3
- **Mobile-First Design**: Responsive layout optimized for mobile devices with touch-friendly interfaces
- **Component-Based Structure**: Modular JavaScript functions handling different UI components and user interactions
- **Local Storage**: Client-side data persistence for cart items and user preferences
- **CSS Custom Properties**: Centralized styling system using CSS variables for consistent theming

### Data Management
- **JSON Data Structure**: Services data stored in separate JavaScript files for easy maintenance
- **Client-Side State Management**: Global cart state managed through JavaScript objects with localStorage persistence
- **Dynamic Content Generation**: Services and UI components populated programmatically from data objects

### User Interface Design
- **Material Design Inspired**: Clean, modern interface with subtle shadows and rounded corners
- **Color Scheme**: Primary burgundy (#8B1538) with complementary accent colors for brand consistency
- **Typography**: Google Fonts (Poppins) for professional appearance across different weights
- **Icon System**: Font Awesome integration for consistent iconography

### Navigation and UX
- **Section-Based Navigation**: Single-page navigation with show/hide functionality for different content areas
- **Search Functionality**: Real-time service search with input handling
- **Interactive Elements**: Hover effects, button states, and smooth transitions for enhanced user experience
- **Cart Management**: Add/remove functionality with visual feedback and quantity updates

## External Dependencies

### CDN Resources
- **Google Fonts**: Poppins font family for typography consistency
- **Font Awesome 6.0.0**: Icon library for UI elements and social media icons
- **Pixabay Images**: External image hosting for service photos and hero banners

### Third-Party Integrations
- **WhatsApp Business API**: Direct messaging integration for customer support and booking inquiries
- **Browser APIs**: localStorage for data persistence, DOM manipulation APIs for dynamic content

### Development Tools
- **Web Standards**: HTML5, CSS3, and ES6+ JavaScript features
- **Responsive Design**: CSS media queries and flexible layouts for cross-device compatibility
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features