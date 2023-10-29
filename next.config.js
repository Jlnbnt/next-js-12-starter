module.exports = {
  // Enable React Strict Mode for development.
  reactStrictMode: true,

  // ESLint configuration.
  eslint: {
    // Ignore ESLint checks during the build process.
    ignoreDuringBuilds: true,
  },

  // Enable SWC minification for improved JavaScript output.
  swcMinify: true,

  // Experimental features
  experimental: {
    // Module import transformations.
    modularizeImports: {
      '@mui/material': {
        // Transform imports for '@mui/material' package.
        transform: '@mui/material/{{member}}',

        // Prevent full imports of the entire module.
        preventFullImport: true,
      },
      '@mui/icons-material': {
        // Transform imports for '@mui/icons-material' package.
        transform: '@mui/icons-material/{{member}}',

        // Prevent full imports of the entire module.
        preventFullImport: true,
      },
    },
  },
}
