# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-11-10

### 🐛 Fixed
- TypeScript compile errors with vue-router types by pinning `vue-router@4.2.5`.
- Removed unsupported wallet adapters from `@solana/wallet-adapter-wallets` imports.
- Hardened `setLocation()` against missing fields to avoid runtime crashes.
- Replaced deprecated `getConfirmedSignaturesForAddress2` with `getSignaturesForAddress` and added null-safety when parsing transactions.
- Guarded Holders components against empty data to prevent `supply` access errors.
- Minor lint fix for webpack config.

### 🔧 Changed
- Updated `vue.config.js` to improve dev experience (polyfills, friendlier stats, safer minimizer).

## [1.0.1] - 2025-11-05

### 🐛 Fixed

#### 🚀 Render Deployment Issues
- **Webpack build failures** - Resolved "Build failed with errors" during Vue CLI webpack compilation
- **Memory allocation** - Added NODE_OPTIONS with 4GB heap size to prevent out-of-memory errors
- **Build configuration** - Fixed render.yaml to use consistent Yarn workflow throughout build process

#### 📦 Configuration Files Added
- **`render.yaml`** - Infrastructure-as-code deployment configuration:
  - Proper static site configuration with `./dist` publish path
  - NODE_OPTIONS set to `--max-old-space-size=4096` for memory optimization
  - Node.js version pinning (20.18.0)
  - Environment variables for Solana RPC and socket endpoints
- **`.yarnrc`** - Yarn configuration to suppress peer dependency warnings

### 🔧 Technical Details

#### Build Process Improvements
- **Memory optimization**: Increased Node.js heap size from default (~1.5GB) to 4GB
- **Consistent package manager**: Uses Yarn throughout (install + build) instead of mixing npm/yarn
- **Vue CLI webpack**: Properly configured to handle large Solana dependencies
- **Static site deployment**: Configured for Render's static site hosting

#### Why This Fixes the Issue
1. **Root cause**: Vue CLI webpack build running out of memory when processing large dependencies (Solana SDK, wallet adapters, ApexCharts)
2. **Solution**: Increased Node.js memory limit via NODE_OPTIONS environment variable
3. **Prevention**: Infrastructure-as-code (render.yaml) ensures consistent deployment configuration
4. **Consistency**: Single package manager (Yarn) throughout the build pipeline

## [1.0.0] - 2025-10-21

### Added
- Comprehensive professional README with project documentation
- Full NFT minting functionality with countdown timers
- Token staking dashboard with APY calculations
- Governance and voting system with motion tracking
- NFT marketplace for buying, selling, and trading
- Statistics dashboard with real-time analytics
- User profile pages with wallet integration
- Support for 15+ Solana wallets (Phantom, Solflare, Brave, Ledger, etc.)
- Real-time WebSocket integration for live updates
- Interactive charts and data visualizations using ApexCharts
- Metaplex integration for NFT standards
- Comprehensive test suite (unit and E2E tests)
- PWA support with service worker
- Deployment script for easy production deployment

### Fixed
- 🔧 TranspileDependencies syntax error in Vue configuration
- 🔧 ApexCharts Babel transpilation build error
- Wallet connection/disconnection stability issues
- Governance page loading and display issues

### Changed
- ⬆️ Upgraded ApexCharts to v4 to resolve peer dependency conflicts
- Updated Solana wallet adapters for better compatibility
- Improved wallet connection flow with welcome modal
- Enhanced UI/UX across all views
- Refactored Vuex store to TypeScript for better type safety
- Migrated to Pinia for state management
- Updated color scheme and design system

## [0.9.0] - 2024-05-11

### Changed
- Updated Solana wallet adapters to latest versions

## [0.8.0] - 2023-03-21

### Changed
- Updated application link to beenzer.app domain

### Fixed
- General codebase refactoring and cleanup

## [0.7.0] - 2023-03-06

### Changed
- Updated Vue configuration settings
- Refactored component templates
- Updated package dependencies

## [0.6.0] - 2023-02-10

### Added
- WebSocket integration for real-time updates
- User info retrieval after wallet connection
- Improved socket communication

### Changed
- Updated WalletMultiButton to fetch user info on connection
- Enhanced user socket handling

## [0.5.0] - 2023-02-09

### Added
- Mint DSC and burn countdown functionality
- User information socket events

### Fixed
- Removed deprecated favicon.svg

## [0.4.0] - 2023-02-07

### Added
- Color customization for buttons and UI elements
- Favicon configuration
- Babel compact mode configuration

### Fixed
- Navigation menu rounded corners
- Color settings and theme consistency
- Public path in Vue configuration

### Changed
- Updated package dependencies
- Enhanced wallet button design
- Improved minting view UI

## [0.3.0] - 2023-02-06

### Added
- Welcome modal with wallet selection
- DAO logo to wallet selection button
- Color button customization

### Changed
- Updated navigation menu and header design
- Enhanced navbar wallet component
- Improved overall UI consistency

## [0.2.0] - 2023-02-04

### Added
- Updated navbar design and functionality

### Changed
- Multiple favicon iterations and improvements

## [0.1.0] - 2023-01-19

### Added
- Initial project setup and structure
- Staking view with bar charts
- Governance view with voting functionality
- Profile page with NFT display
- Transaction and holder statistics areas
- Message area for community chat
- NFT wallet integration
- Token transaction tracking
- Token holder analytics
- Login and authentication flow
- Welcome modal with fireworks animation
- Signup modal and user registration
- Pinia state management
- Notification system
- Vuetify component library
- Mint dashboard and panel
- Tokenomics information display
- Voting area UI
- Profile area with cover and NFT display
- Multiple wallet support
- User balance display in wallet button
- Router configuration
- Social buttons and links

### Changed
- Ordered and structured component folders
- Refactored Vuex store to TypeScript
- Improved component organization in v2 structure
- Enhanced MintDash and StakingView components
- Updated HoldersArea and TransactionsArea UI

### Fixed
- Profile public key to use connected wallet
- Wallet modal functionality
- Governance page stability
- NFT fetching and display

## [0.0.1] - 2022-12-29

### Added
- Initial commit
- Project initialization
- Basic project structure

---

## Versioning Policy

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version (1.x.x): Incompatible API changes
- **MINOR** version (x.1.x): New functionality in a backwards compatible manner
- **PATCH** version (x.x.1): Backwards compatible bug fixes

## Links

- [Repository](https://github.com/been-zer/beenzer-dao)
- [Live Application](https://dao.beenzer.app)
- [Report Issues](https://github.com/been-zer/beenzer-dao/issues)
- [Contributing Guidelines](CONTRIBUTING.md)
- [MIT License](LICENSE)
