# Contributing

Thank you for your interest in contributing!

## Prerequisites
- Node.js 18+ (recommended 20)
- npm

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create and fill your environment from `.env.sample`:
   ```bash
   cp .env.sample .env.local
   # edit .env.local with your values
   ```

## Development
- Start dev server:
  ```bash
  npm run serve
  ```
- Lint:
  ```bash
  npm run lint
  ```

## Commit style
- Use concise, descriptive messages with an emoji prefix. Examples:
  - 🐛 Fix: describe the bug fix
  - ✨ Feat: describe the new feature
  - ♻️ Refactor: describe the refactor
  - 📝 Docs: describe docs changes
  - 🧱 Build: tooling/config changes

Group related changes into one commit (commit-by-feature).

## Pull Requests
- Ensure the dev server builds and runs without errors.
- Update `CHANGELOG.md` for user-facing changes (patch/minor within current major).
- Open PRs against `main`.

# Contributing to Beenzer DAO

Thank you for your interest in contributing to Beenzer DAO! We welcome contributions from the community and are excited to have you join us in building this decentralized autonomous organization on Solana.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Community](#community)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

### Expected Behavior

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Any conduct that would be inappropriate in a professional setting

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check the [existing issues](https://github.com/been-zer/beenzer-dao/issues) to avoid duplicates.

**When filing a bug report, include:**

- A clear and descriptive title
- Detailed steps to reproduce the issue
- Expected behavior vs. actual behavior
- Screenshots (if applicable)
- Your environment:
  - Browser and version
  - Operating system
  - Wallet being used
  - Node.js version (for development)
- Any error messages or console logs

**Example:**

```markdown
**Title:** Staking dashboard fails to load on Firefox

**Description:** 
When accessing the staking page on Firefox 120, the dashboard 
displays a blank page instead of the staking interface.

**Steps to Reproduce:**
1. Open Firefox 120
2. Navigate to https://dao.beenzer.app/staking
3. Connect Phantom wallet
4. Observe blank page

**Expected:** Staking dashboard should display with balance and APY

**Actual:** Blank page with console error: "Cannot read property 'balance' of undefined"

**Environment:**
- Browser: Firefox 120.0
- OS: Ubuntu 22.04
- Wallet: Phantom v23.17.0
```

### Suggesting Features

We love new ideas! Before suggesting a feature:

1. Check if it's already been suggested in [issues](https://github.com/been-zer/beenzer-dao/issues)
2. Consider if it aligns with the project's goals and scope
3. Think about how it benefits the community

**When suggesting a feature, include:**

- Clear and descriptive title
- Detailed description of the proposed feature
- Use cases and benefits
- Potential implementation approach (optional)
- Mockups or examples (optional)

### Submitting Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/beenzer-dao.git
   cd beenzer-dao
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, maintainable code
   - Follow our coding standards
   - Add tests for new features
   - Update documentation as needed

4. **Test your changes**
   ```bash
   npm run lint
   npm run test:unit
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m "✨ Add amazing new feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure all CI checks pass

## Development Setup

### Prerequisites

- Node.js (v16.x or higher)
- npm (v8.x or higher) or yarn
- Git
- A Solana wallet (Phantom, Solflare, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/been-zer/beenzer-dao.git
   cd beenzer-dao
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.sample .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   VUE_APP_SOLANA_NETWORK=devnet
   VUE_APP_SOLANA_RPC_ENDPOINT=https://api.devnet.solana.com
   VUE_APP_SOCKET_ENDPOINT=wss://your-backend-server.com
   ```

4. **Start development server**
   ```bash
   npm run serve
   ```

5. **Access the application**
   
   Open your browser to `http://localhost:8080`

### Project Structure

```
beenzer-dao/
├── src/
│   ├── components/      # Vue components
│   ├── views/           # Page-level components
│   ├── services/        # Business logic and APIs
│   ├── router/          # Vue Router configuration
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── tests/
│   ├── unit/            # Unit tests
│   └── e2e/             # End-to-end tests
├── public/              # Static assets
└── config/              # Configuration files
```

## Coding Standards

### TypeScript/JavaScript

- **Use TypeScript** for all new code
- **ESLint**: Follow the configured ESLint rules
- **Naming Conventions**:
  - Components: PascalCase (e.g., `WalletButton.vue`)
  - Functions: camelCase (e.g., `getUserBalance`)
  - Constants: UPPER_SNAKE_CASE (e.g., `MAX_RETRIES`)
  - Interfaces: PascalCase with `I` prefix (e.g., `IUserProfile`)
  - Types: PascalCase (e.g., `TokenBalance`)

### Vue Components

- **Single File Components**: Use `.vue` files
- **Component Structure**:
  ```vue
  <template>
    <!-- Template -->
  </template>

  <script lang="ts">
  // Script
  </script>

  <style scoped>
  /* Styles */
  </style>
  ```

- **Props**: Define with TypeScript interfaces
- **Emits**: Declare all emitted events
- **Composition API**: Preferred for new components

### Styling

- **TailwindCSS**: Use utility classes when possible
- **Scoped Styles**: Use `<style scoped>` for component-specific styles
- **Responsive Design**: Design mobile-first
- **Accessibility**: Follow WCAG 2.1 AA standards

### Blockchain Code

- **Error Handling**: Always handle blockchain errors gracefully
- **Loading States**: Provide feedback during transactions
- **Transaction Confirmation**: Wait for confirmation before updating UI
- **Wallet Integration**: Test with multiple wallet providers

## Testing Guidelines

### Unit Tests

- Write unit tests for all utility functions
- Test components in isolation
- Mock external dependencies (Solana, APIs)
- Aim for >80% code coverage

```bash
npm run test:unit
```

### End-to-End Tests

- Test critical user flows
- Use Cypress for E2E testing
- Test with different wallets
- Include both success and error scenarios

```bash
npm run test:e2e
```

### Manual Testing

Before submitting a PR, manually test:
- [ ] Wallet connection/disconnection
- [ ] All navigation routes
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Cross-browser compatibility
- [ ] Error states and edge cases

## Pull Request Process

### Before Submitting

1. **Ensure all tests pass**
   ```bash
   npm run lint
   npm run test:unit
   npm run test:e2e
   npm run build
   ```

2. **Update documentation**
   - Update README.md if needed
   - Add inline code comments
   - Update CHANGELOG.md (maintainers will help)

3. **Self-review your code**
   - Check for console.logs or debug code
   - Ensure no sensitive information is committed
   - Verify code follows style guidelines

### PR Template

Use this template when creating a PR:

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #(issue number)

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
Describe how you tested these changes

## Screenshots (if applicable)
Include screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Code comments added for complex logic
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests passing
- [ ] No console warnings or errors
```

### Review Process

1. **Automated Checks**: CI/CD pipeline will run tests
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, maintainers will merge

### After Merge

- Your contribution will be included in the next release
- You'll be added to the contributors list
- Thank you for your contribution! 🎉

## Commit Message Guidelines

We use emoji prefixes for commit messages to make the git history more readable.

### Format

```
<emoji> <type>: <subject>

[optional body]

[optional footer]
```

### Emoji Guide

| Emoji | Code | Type | Description |
|-------|------|------|-------------|
| ✨ | `:sparkles:` | Feature | New feature |
| 🐛 | `:bug:` | Fix | Bug fix |
| 📚 | `:books:` | Docs | Documentation |
| 🎨 | `:art:` | Style | UI/UX improvements |
| ♻️ | `:recycle:` | Refactor | Code refactoring |
| ⚡ | `:zap:` | Performance | Performance improvements |
| 🔒 | `:lock:` | Security | Security fixes |
| 🧪 | `:test_tube:` | Test | Tests |
| 🔧 | `:wrench:` | Config | Configuration changes |
| ⬆️ | `:arrow_up:` | Upgrade | Dependency upgrades |
| ⬇️ | `:arrow_down:` | Downgrade | Dependency downgrades |
| 📝 | `:memo:` | Chore | Chores and maintenance |

### Examples

```bash
# Good commits
git commit -m "✨ Add NFT marketplace filtering"
git commit -m "🐛 Fix wallet disconnect issue on governance page"
git commit -m "📚 Update installation instructions in README"
git commit -m "⚡ Optimize token balance queries"
git commit -m "🔒 Fix XSS vulnerability in user input"

# Bad commits
git commit -m "fix stuff"
git commit -m "WIP"
git commit -m "Updated files"
```

## Community

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and discussions
- **Discord**: Real-time community chat (coming soon)
- **Twitter**: Follow us for updates (coming soon)

### Getting Help

- Check the [README](README.md) for basic information
- Search [existing issues](https://github.com/been-zer/beenzer-dao/issues)
- Ask in GitHub Discussions
- Join our Discord community

### Recognition

Contributors will be recognized in:
- The project README
- Release notes
- Community shoutouts

## Additional Resources

- [Vue.js Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Solana Documentation](https://docs.solana.com/)
- [Anchor Documentation](https://www.anchor-lang.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

---

**Thank you for contributing to Beenzer DAO! Together, we're building the future of decentralized governance on Solana.** 🐝

If you have any questions, feel free to reach out to the maintainers or open a discussion.

Happy coding! 🚀
