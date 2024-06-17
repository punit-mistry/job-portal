# JobRow Component

## Overview

The `JobRow` component is a reusable React component designed to display job listings in a clean and structured format. It leverages modern CSS utility classes from Tailwind CSS to ensure a responsive and visually appealing layout.

## Features

- **Responsive Design:** The component is fully responsive, making it suitable for various screen sizes.
- **Semantic HTML:** Utilizes semantic HTML elements for better accessibility and SEO.
- **Flexible Styling:** Easily customizable through Tailwind CSS classes.
- **TypeScript Support:** Includes TypeScript for enhanced type safety and developer experience.

## Installation

To use the `JobRow` component in your project, you can install it via npm:
```bash
npm install job-row-component
```
Or with Yarn:
```bash
yarn add job-row-component
```
## Usage
Here's a basic example of how to use the JobRow component in your React application:

```bash
import React from 'react';
import { JobRow } from 'job-row-component';

const job = {
  company: "Amazon",
  title: "Product Manager",
  location: "Remote",
  city: "New York, IN",
  type: "Full Time",
  postedDate: "2 days ago",
  logo: "https://logolook.net/wp-content/uploads/2021/06/Symbol-Amazon-500x500.png"
};

function App() {
  return (
    <div className="App">
      <JobRow job={job} />
    </div>
  );
}

export default App;

```
### Job Object Structure

The job object should have the following structure:
```bash
interface Job {
  company: string;
  title: string;
  location: string;
  city: string;
  type: string;
  postedDate: string;
  logo: string;
}

```
## Thank you for viewing the project and for your interest. I appreciate your time!