# Portfolio Website Creation and Deployment Plan

This document outlines the steps to create a modern, visually appealing portfolio website that showcases your GitHub projects. The website will have a dark theme based on the Gruvbox color palette and will be deployed using GitHub Pages.

## Technology Stack

*   **Framework**: [Next.js](https://nextjs.org/) (A React framework for building fast, modern web applications)
*   **UI Library**: [Chakra UI](https://chakra-ui.com/) (A simple, modular, and accessible component library that makes it easy to build React applications)
*   **Deployment**: [GitHub Pages](https://pages.github.com/) (Static site hosting directly from your GitHub repository)
*   **Content**: Your public projects from your [GitHub profile](https://github.com/UpayanChatterjee)

## Phase 1: Project Setup

1.  **Install Node.js and npm**: If you don't have them installed, download and install them from [nodejs.org](https://nodejs.org/).

2.  **Create a new Next.js app**: Open your terminal and run the following command to create a new Next.js project:
    ```bash
    npx create-next-app@latest portfolio-website
    ```
    When prompted, choose the following options:
    *   `Would you like to use TypeScript?` **Yes**
    *   `Would you like to use ESLint?` **Yes**
    *   `Would you like to use Tailwind CSS?` **No** (we will use Chakra UI)
    *   `Would you like to use 'src/' directory?` **Yes**
    *   `Would you like to use App Router (recommended)?` **Yes**
    *   `Would you like to customize the default import alias?` **No**

3.  **Navigate to the project directory**:
    ```bash
    cd portfolio-website
    ```

4.  **Set up a new GitHub repository**:
    *   Go to [GitHub](https://github.com/) and create a new repository named `portfolio-website`.
    *   Initialize a git repository in your local project directory and push it to GitHub:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/UpayanChatterjee/portfolio-website.git
        git push -u origin main
        ```

## Phase 2: UI/UX Design with Gruvbox Theme

1.  **Install Chakra UI**:
    ```bash
    npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
    ```

2.  **Set up Chakra UI Provider**: In your `src/app/layout.tsx` file, wrap the children with the `ChakraProvider`.

3.  **Create a custom theme**: Create a new file `src/theme.ts` to define your Gruvbox color theme and a color mode switcher.

    *   **Gruvbox Dark Mode Colors**:
        *   Background: `#282828`
        *   Foreground: `#ebdbb2`
        *   Primary: `#fabd2f` (Yellow)
        *   Secondary: `#83a598` (Blue)
        *   Accent: `#d3869b` (Purple)

    *   **Gruvbox Light Mode Colors**:
        *   Background: `#fbf1c7`
        *   Foreground: `#3c3836`
        *   Primary: `#d65d0e` (Orange)
        *   Secondary: `#458588` (Blue)
        *   Accent: `#b16286` (Magenta)

4.  **Implement the UI Components**: Create the following components in the `src/components` directory:
    *   `Header.tsx`: A navigation bar with links to different sections of the page and the color mode switcher.
    *   `Hero.tsx`: A section with your name, a short bio, and a call-to-action button.
    *   `Projects.tsx`: A section to display your GitHub projects in a grid or list format.
    *   `About.tsx`: A section to provide more details about your skills and experience.
    *   `Contact.tsx`: A section with your contact information (email, LinkedIn, etc.).
    *   `Footer.tsx`: A footer with copyright information and links to your social media profiles.

## Phase 3: Fetching and Displaying GitHub Projects

1.  **Fetch GitHub Repositories**: Use the GitHub API to fetch your public repositories. You can make an API call to `https://api.github.com/users/UpayanChatterjee/repos` to get the data.

2.  **Create a Project Card Component**: Create a `ProjectCard.tsx` component to display individual project details. Each card should show:
    *   Project Name
    *   Project Description
    *   Languages used
    *   Star count
    *   A link to the GitHub repository

3.  **Integrate into the Projects Section**: Use the `ProjectCard` component in the `Projects.tsx` component to display all your fetched projects.

## Phase 4: Deployment with GitHub Pages

1.  **Configure Next.js for Static Export**: GitHub Pages serves static files, so you need to configure your Next.js app to produce a static export.

    *   In your `next.config.js` file, add the following configuration to set the `basePath` and `assetPrefix` for your repository. This is necessary because your site will be deployed to a subdirectory on GitHub Pages (`https://UpayanChatterjee.github.io/portfolio-website`).

        ```javascript
        const nextConfig = {
          output: 'export',
          basePath: '/portfolio-website',
          assetPrefix: '/portfolio-website/',
        };

        module.exports = nextConfig;
        ```
    * Modify the `package.json` to add a build script ` "build": "next build",`

2.  **Create a GitHub Actions Workflow**: Create a file `.github/workflows/deploy.yml` with the following content to automate the build and deployment process:

    ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches:
          - main

    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v3

          - name: Setup Node.js
            uses: actions/setup-node@v3
            with:
              node-version: 18

          - name: Install dependencies
            run: npm install

          - name: Build
            run: npm run build

          - name: Deploy
            uses: peaceiris/actions-gh-pages@v3
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: ./out
    ```

3.  **Enable GitHub Pages**:
    *   Go to your repository's **Settings** tab on GitHub.
    *   In the **Pages** section, select the `gh-pages` branch as the source and save the changes.
    *   Your website will be available at `https://UpayanChatterjee.github.io/portfolio-website`.
