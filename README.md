# User Directory Dashboard

A modern, professional web application for browsing and managing user information with an elegant dark theme UI.

## Features

✨ **User Directory Dashboard**
- View all users in a beautiful card-based grid layout
- Responsive design that works on mobile, tablet, and desktop
- Modern dark theme with gradient backgrounds

🔍 **Search Functionality**
- Real-time search by user name or email
- Client-side filtering for instant results

⬆️⬇️ **Sorting Options**
- Sort users by name (A-Z or Z-A)
- Sort users by company name (A-Z or Z-A)
- Visual indicators showing current sort order

👤 **User Detail View**
- Click any user to view comprehensive profile information
- Displays personal contact information
- Shows complete address with geographical coordinates
- Company information and business details
- Beautiful layout with emoji icons for each section

🎨 **Beautiful UI Design**
- Dark purple and slate gradient background
- Smooth animations and hover effects
- Emoji avatars for visual appeal
- Professional typography and spacing
- Loading states with animated spinners

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first styling
- **JSONPlaceholder API** - Mock data source

## Installation

```bash
# Clone the repository
git clone https://github.com/HarshaGankidi/BuyerForeSightFrontend.git
cd BuyerForeSightFrontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

## Build

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── UserDashboard.jsx    # Main dashboard with user grid
│   └── UserDetail.jsx       # Individual user detail page
├── App.jsx                  # Route configuration
├── main.jsx                # Application entry point
└── index.css               # Global styles
```

## API

The application uses the JSONPlaceholder API for user data:
- Base URL: `https://jsonplaceholder.typicode.com`
- Endpoint: `/users`

## Features in Detail

### Dashboard Page
- Displays 10 mock users in a responsive 3-column grid
- Search box filters users in real-time
- Sort buttons toggle between ascending/descending order
- Click any user card to navigate to their detail page

### Detail Page
- Comprehensive user profile with all available information
- Organized into three main sections:
  - Personal Information (email, phone, website)
  - Address (street, city, zipcode, coordinates)
  - Company (name, catch phrase, business focus)
- Back button to return to dashboard
- Responsive layout for all screen sizes

## Deployment

### Deploy to Render (Recommended)

1. Push code to GitHub
2. Go to [Render.com](https://render.com/)
3. Create a new **Static Site**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. Deploy and get a live URL

The app will automatically redeploy whenever you push to the main branch.

## Environment Variables

No environment variables are required for this project as it uses a public API.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Author

Created with ❤️ by Harsha Gankidi

---

**Live Demo**: Check the deployment on [Render](https://render.com/docs/)
