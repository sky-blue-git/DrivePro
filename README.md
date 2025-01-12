# DrivePro - Premium Car Test Drive Platform

A sophisticated car test drive booking platform built with Next.js, featuring a premium silver-gray design theme and advanced AI-powered vehicle search capabilities.

## ✨ Features

### 🚗 Core Functionality
- **Premium Car Listings**: Curated collection of vehicles with detailed specifications
- **Test Drive Booking**: Seamless appointment scheduling system
- **Advanced Search**: Text-based and AI-powered image search
- **User Authentication**: Secure sign-in/sign-up with Clerk
- **Wishlist System**: Save favorite vehicles for later
- **Admin Dashboard**: Vehicle management and booking oversight
- **Responsive Design**: Optimized for all devices

### 🎨 Design Features
- **Premium Silver Theme**: Sophisticated light gray and silver color palette
- **Luxury Glass Effects**: Advanced backdrop blur and shadow systems
- **Smooth Animations**: Elegant transitions and hover effects
- **Professional Typography**: Clean, readable font hierarchy
- **Premium Components**: Glass cards, gradient buttons, and luxury shadows

### 🤖 AI Integration
- **Image Recognition**: Upload vehicle photos for intelligent search
- **Smart Matching**: AI-powered vehicle recommendations
- **Content Analysis**: Automatic feature extraction from images

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Premium Components
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [Clerk](https://clerk.com/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/)
- **Security**: [Arcjet](https://arcjet.com/) for rate limiting and protection
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Clerk account for authentication
- Google AI API key for image recognition
- Arcjet account for security

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ai-car-marketplace
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/drivepro?schema=public"
DIRECT_URL="postgresql://username:password@localhost:5432/drivepro?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI Integration
GEMINI_API_KEY=your_gemini_api_key_here

# Security
ARCJET_KEY=your_arcjet_key_here
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔧 Configuration

### Database Setup

1. Create a PostgreSQL database
2. Update the `DATABASE_URL` and `DIRECT_URL` in your `.env.local` file
3. Run the Prisma migrations:
```bash
npx prisma generate
npx prisma db push
```

### Authentication Setup (Clerk)

1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Get your publishable and secret keys
3. Configure the redirect URLs in your Clerk dashboard
4. Update the environment variables

### AI Setup (Google Gemini)

1. Get a Gemini API key from [Google AI Studio](https://ai.google.dev/)
2. Add the key to your environment variables
3. The AI features will be available for image-based vehicle search

### Security Setup (Arcjet)

1. Create an Arcjet account at [arcjet.com](https://arcjet.com)
2. Get your API key
3. Configure rate limiting and security rules as needed

## 📁 Project Structure

```
ai-car-marketplace/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── cars/              # Car listings and details
│   ├── onboarding/        # User onboarding
│   ├── globals.css        # Global styles and theme
│   └── layout.js          # Root layout
├── components/            # Reusable components
│   ├── ui/                # Base UI components (shadcn/ui)
│   ├── car-card.jsx      # Car listing component
│   ├── header.jsx         # Navigation header
│   ├── home-search.jsx    # Search functionality
│   └── theme-provider.jsx # Theme context
├── actions/               # Server actions
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── prisma/                # Database schema
└── public/                # Static assets
```

## 🎨 Theme System

The application uses a premium silver-gray theme with:

- **Light Background**: Elegant gradient from `#f8f9fa` to `#e9ecef`
- **Silver Accents**: Premium gradient effects
- **Glass Components**: Advanced backdrop blur effects
- **Luxury Shadows**: Multi-layered shadow system
- **Smooth Animations**: Custom cubic-bezier transitions

### Custom CSS Classes

- `.luxury-glass`: Premium glass effect with backdrop blur
- `.premium-gradient`: Silver gradient backgrounds
- `.luxury-shadow`: Multi-layered shadow effects
- `.luxury-hover`: Elegant hover animations
- `.premium-text`: Gradient text effects

## 📱 Features Guide

### For Users
- Browse premium car collections
- Search by text or upload images
- Book test drive appointments
- Save favorite vehicles
- Manage bookings and preferences

### For Admins
- Add and manage car listings
- View and manage test drive bookings
- Monitor user activity
- Manage system settings

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js, such as:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed description
3. Include screenshots and error messages

## 🔮 Roadmap

- [ ] Mobile app development
- [ ] Advanced AI recommendations
- [ ] Integration with dealership APIs
- [ ] Real-time chat support
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

---

**DrivePro** - Elevating your automotive experience through premium design and cutting-edge technology. 🚗✨
