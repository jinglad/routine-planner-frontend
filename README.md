# Routine Maker

## Project Objectives

The objective of the frontend part of the project is to provide an intuitive and user-friendly interface for the Routine Planner Feature. This feature aims to assist students in generating personalized study schedules based on their preferences and constraints.

## Architecture Overview

The frontend architecture is structured around Next.js, utilizing React components and various third-party libraries. Key components include:

- **LearningObjectives**: Component for displaying and inputting learning objectives.
- **AcademicTimings**: Component for managing academic timings.
- **PartTimeJobInfo**: Component to handle part-time job information.
- **Generate Routine Button**: A button triggering the routine generation process.
- **Routine Modal**: Modal to display the generated routine based on user preferences.
- **NextAuth.js**: Used for authentication and managing user sessions.

### Key Libraries Used

- **@mui/material**: Material-UI components for a consistent and modern UI.
- **@tanstack/react-query**: React Query for efficient data fetching.
- **react-hook-form**: Form library for handling form state and validation.
- **axios**: HTTP client for making API requests.
- **react-toastify**: Toast notifications for user feedback.
- **next-auth**: NextAuth.js for authentication and session management.

To use the Routine Planner Feature on the frontend, follow these steps:

### Getting Started

1. **Prerequisites**: Ensure you have Node.js installed on your machine.
2. **Installation**: Run `npm install` to install the project dependencies.

### Running the Application

- Run `npm run dev` to start the development server.

### Components

1. **LearningObjectives Component**: Use this component to view and add learning objectives.
2. **AcademicTimings Component**: Manage academic timings with this component.
3. **PartTimeJobInfo Component**: Input information related to part-time jobs.
4. **Generate Routine Button**: Click this button to initiate the routine generation process.
5. **Routine Modal**: The modal displays the generated routine based on user preferences.

### Authentication

- NextAuth.js is integrated for authentication.
- Adjust NextAuth.js configuration in `pages/api/auth/[...nextauth].js` as needed.
