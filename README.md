# 🌟 Zentra - Decentralized Trust Circles Lending Platform

<img width="1470" height="956" alt="Screenshot 2025-11-30 at 3 48 36 AM" src="https://github.com/user-attachments/assets/f4a8b76f-56ac-4ebc-a927-a842106f0c03" />

**Zentra** is a blockchain-based micro-lending platform that leverages peer accountability through Trust Circles to provide loans without traditional collateral. Built on Polygon Amoy testnet with Next.js and Solidity.

## 🚀 Live Demo

- **Website**: [https://zentra-platform.vercel.app](https://zentra-platform.vercel.app)
- **Contract**: [0x9B49ba60762A2196377dC671E8bE3463a49e6806](https://amoy.polygonscan.com/address/0x9B49ba60762A2196377dC671E8bE3463a49e6806)
- **Network**: Polygon Amoy Testnet (Chain ID: 80002)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Smart Contract](#smart-contract)
- [Credit Scoring System](#credit-scoring-system)
- [User Roles](#user-roles)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

Traditional micro-lending faces high default rates due to lack of accountability. **Zentra** solves this using **Trust Circles** - peer groups where members vouch for each other. If one member defaults, the entire circle's credit score drops, creating social pressure to repay loans on time.

### The Problem
- Unbanked populations lack access to credit
- Traditional banks require collateral/credit history
- High interest rates for small loans
- High default rates in individual lending

### The Solution
- **Peer accountability** through Trust Circles
- **Progressive credit building** (scores 50-100)
- **Dynamic interest rates** (2-6% based on score)
- **Transparent blockchain** lending
- **No traditional collateral** required

---

## ✨ Key Features

### 🤝 Trust Circles
- Create or join lending circles (3-10 members)
- Stake 0.5 POL to join
- Circle activates with 3+ members
- Peer accountability system

### 📊 Credit Scoring
- **Individual Score (60% weight)**: Personal repayment history
- **Circle Score (40% weight)**: Average of circle members' scores
- **Final Trust Score**: Determines loan eligibility
- Scores range: 0-100 (starts at 50)

### 💰 Dynamic Loans
| Trust Score | Max Loan | Interest Rate |
|-------------|----------|---------------|
| 50-59 | 10 POL | 6% |
| 60-69 | 20 POL | 4% |
| 70-79 | 50 POL | 4% |
| 80-89 | 100 POL | 2% |
| 90-100 | 200 POL | 2% |

### ⚡ Credit Progression
- **Day 0**: Score 50 → Borrow 10 POL at 6%
- **Day 7**: Repay on time → Score 60 (+10)
- **Day 14**: Second loan repaid → Score 70 (+10)
- **Day 21**: Third loan repaid → Score 80 (+10)
- **Day 28**: Fourth loan repaid → Score 90 (+10)
- **Day 35**: Fifth loan repaid → Score 100 (+10) ⭐

### 🎁 Repayment Bonuses
- **Early Repayment**: +15 points
- **On-Time Repayment**: +10 points
- **Late (3-7 days)**: +5 points
- **Very Late (7-14 days)**: 0 points
- **Default (14+ days)**: -50 points + account frozen

### ⚠️ Penalty System
- **Individual Default**: -50 points, account frozen
- **Circle Penalty**: All members lose -20 points
- Creates peer pressure to repay

---

## 🔄 How It Works

### For Borrowers

1. **Create/Join Circle**
   - Connect wallet (MetaMask/WalletConnect)
   - Create new circle or join existing
   - Stake 0.5 POL
   - Wait for 3 members to activate

2. **Check Credit Score**
   - View Individual Score (starts at 50)
   - View Circle Score (average of members)
   - View Final Trust Score (weighted average)
   - See max loan amount and interest rate

3. **Request Loan**
   - Enter loan amount (within limit)
   - Specify purpose
   - Submit request

4. **Get Approved**
   - Admin reviews and approves
   - Funds automatically disbursed to wallet
   - 7-day repayment period starts

5. **Repay Loan**
   - Repay principal + interest within 7 days
   - Earn credit score increase (+10 to +15)
   - Unlock higher loan limits
   - Build credit history

### For Admins

1. **Deposit Liquidity**
   - Add POL to contract for lending

2. **Review Requests**
   - See all pending loan requests
   - View borrower's trust score
   - Check loan purpose

3. **Approve & Disburse**
   - One-click approval
   - Funds auto-sent from contract balance
   - Track all loans in real-time

4. **Manage Defaults**
   - Penalize borrowers 14+ days overdue
   - Slash defaulter's score by -50
   - Freeze defaulter's account
   - Penalize circle members by -20

5. **Monitor Platform**
   - View contract balance
   - Track total loans issued
   - Monitor trust circles created
   - Analyze platform metrics

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Framer Motion** - Animations

### Blockchain
- **Solidity 0.8.20** - Smart contracts
- **Hardhat** - Development environment
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript Ethereum library
- **WalletConnect** - Multi-wallet support

### Deployment
- **Vercel** - Frontend hosting
- **Polygon Amoy** - Testnet deployment
- **IPFS** - Decentralized storage (future)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- MetaMask or WalletConnect-compatible wallet
- Polygon Amoy testnet POL tokens

### Installation

```bash
# Clone the repository
git clone https://github.com/anindhabiswas25/Zentra.git
cd Zentra

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
PRIVATE_KEY=your_private_key_for_deployment
```

Get WalletConnect Project ID: https://cloud.walletconnect.com/

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

---

## 📜 Smart Contract

### Contract Address
```
0x9B49ba60762A2196377dC671E8bE3463a49e6806
```

### Key Functions

#### User Functions
- `createCircle(string _name)` - Create new Trust Circle
- `joinCircle(uint256 _circleId)` - Join existing circle
- `requestLoan(uint256 _amount, string _purpose)` - Request loan
- `repayLoan(uint256 _loanId)` - Repay loan with interest
- `getTrustScore(address _user)` - Get user's final trust score
- `getUserStats(address _user)` - Get complete user statistics

#### Admin Functions
- `approveLoan(uint256 _loanId)` - Approve and disburse loan
- `penalizeDefault(uint256 _loanId)` - Penalize defaulted loan
- `depositLiquidity()` - Add funds to contract
- `withdraw(uint256 _amount)` - Withdraw funds

#### View Functions
- `getCircleDetails(uint256 _circleId)` - Get circle information
- `getLoanDetails(uint256 _loanId)` - Get loan information
- `getMaxLoanAmount(address _user)` - Get max loan based on score
- `getInterestRate(address _user)` - Get interest rate based on score

### Deploy Contract

```bash
# Compile contract
npx hardhat compile

# Deploy to Polygon Amoy
node scripts/deploy.js
```

### Verify Contract

```bash
npx hardhat verify --network amoy 0x9B49ba60762A2196377dC671E8bE3463a49e6806
```

---

## 📊 Credit Scoring System

### Formula

```
Final Trust Score = (Individual Score × 60%) + (Circle Score × 40%)
```

### Example Scenarios

#### Scenario 1: Solo User
```
Individual Score: 50
Circle Score: 50 (default)
Final Score: (50 × 0.6) + (50 × 0.4) = 50
Result: 10 POL at 6%
```

#### Scenario 2: Good Circle
```
Your Individual: 70
Circle Members: [80, 90, 60]
Circle Average: (70+80+90+60)/4 = 75
Final Score: (70 × 0.6) + (75 × 0.4) = 72
Result: 50 POL at 4% ✅ (boosted!)
```

#### Scenario 3: Bad Circle
```
Your Individual: 80
Circle Members: [50, 40, 0 (defaulted)]
Circle Average: (80+50+40+0)/4 = 42.5
Final Score: (80 × 0.6) + (42.5 × 0.4) = 65
Result: 20 POL at 4% ❌ (penalized)
```

### Score Adjustments

| Event | Score Change |
|-------|-------------|
| Early Repayment | +15 points |
| On-Time Repayment | +10 points |
| Late Repayment (3-7 days) | +5 points |
| Very Late (7-14 days) | 0 points |
| Default (14+ days) | -50 points + frozen |
| Circle Member Defaults | -20 points (entire circle) |

---

## 👥 User Roles

### Borrower
- Create/join Trust Circles
- View credit scores
- Request loans
- Repay loans
- Track loan history

### Circle Member
- Vouch for other members
- Affected by members' actions
- Share collective responsibility
- Build trust together

### Admin
- Deposit platform liquidity
- Approve loan requests
- Disburse funds
- Penalize defaulters
- Monitor platform health

---

## 📁 Project Structure

```
Zentra/
├── app/
│   ├── admin/
│   │   └── page.tsx          # Admin dashboard
│   ├── user/
│   │   └── page.tsx          # User dashboard
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Shadcn UI components
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   └── Features.tsx          # Features section
├── contracts/
│   └── TrustCircles.sol      # Main smart contract
├── hooks/
│   └── useContract.ts        # Contract interaction hooks
├── lib/
│   ├── contract.ts           # Contract config & ABI
│   └── wagmi.ts              # Wagmi configuration
├── public/
│   ├── logo.svg              # Zentra logo
│   └── favicon.ico           # Favicon
├── scripts/
│   └── deploy.js             # Deployment script
├── hardhat.config.js         # Hardhat configuration
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Dependencies
```

---

## 🧪 Testing

### Local Testing

```bash
# Run development server
npm run dev

# Test contract functions
npx hardhat test

# Check TypeScript types
npx tsc --noEmit
```

### Test Accounts

Use Polygon Amoy Faucet: https://faucet.polygon.technology/

1. Get testnet POL tokens
2. Connect wallet to Polygon Amoy
3. Create test circles
4. Request and repay test loans

---

## 🎨 Features Walkthrough

### User Dashboard

**Score Cards** (Top Row)
- Individual Score (60% weight)
- Circle Score (40% weight)  
- Final Trust Score (determines eligibility)

**Trust Circle Card**
- Create new circle
- Join existing circle
- View circle members
- See circle statistics

**Loan Eligibility Card**
- Max loan amount
- Interest rate
- Based on Final Trust Score

**Request Loan Card**
- Enter amount
- Specify purpose
- Submit request

**Active Loan Card**
- Current loan details
- Amount + interest
- Due date countdown
- Repay button

**Loan History Table**
- All past loans
- Status tracking (Pending, Approved, Active, Due, Paid)
- Real-time updates

### Admin Dashboard

**Stats Cards** (Top Row)
- Contract Balance
- Total Loans Issued
- Trust Circles Created

**Liquidity Management**
- Deposit POL to contract
- Withdraw funds
- Track balance

**Pending Approvals**
- Review loan requests
- See borrower details
- One-click approve & disburse

**All Loans Table**
- Complete loan history
- Filter by status
- Borrower addresses
- Loan amounts
- Real-time status updates

---

## 🔐 Security Features

- **Smart Contract Audited** (Self-audited for hackathon)
- **Access Control** (Admin-only functions)
- **Reentrancy Protection** (Checks-Effects-Interactions pattern)
- **Input Validation** (Require statements)
- **Frozen Account System** (Prevent defaulter abuse)
- **Transparent Transactions** (All on-chain)

---

## 🌍 Supported Networks

Currently deployed on:
- **Polygon Amoy Testnet** (Chain ID: 80002)

Future support planned for:
- Polygon Mainnet
- Ethereum
- Arbitrum
- Optimism

---

## 📈 Roadmap

### Phase 1: MVP (Current)
- ✅ Trust Circles creation
- ✅ Credit scoring system
- ✅ Loan management
- ✅ Admin dashboard
- ✅ User dashboard

### Phase 2: Enhancement
- [ ] Circle chat/messaging
- [ ] Loan insurance pool
- [ ] Governance token
- [ ] DAO for platform decisions
- [ ] Mobile app (React Native)

### Phase 3: Scale
- [ ] Multi-chain deployment
- [ ] Fiat on/off ramps
- [ ] Credit score NFTs
- [ ] Institutional partnerships
- [ ] AI-powered risk assessment

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow ESLint rules
- Add comments for complex logic
- Write tests for new features

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Authors

- **Anindha Biswas** - [@anindhabiswas25](https://github.com/anindhabiswas25)
- **Samya Deb Biswas** - [@SamyaDeb](https://github.com/SamyaDeb)
- **Akash Biswas** - [@saxux2](https://github.com/saxux2)

---

## 🙏 Acknowledgments

- **Polygon** for the Amoy testnet
- **WalletConnect** for wallet integration
- **Grameen Bank** for pioneering micro-lending concept
- **Shadcn/ui** for beautiful components
- **Vercel** for hosting

---

## 🌟 Star the Repo!

If you find this project useful, please give it a ⭐ on GitHub!

---

**Built with ❤️ for the unbanked** | **Powered by Blockchain** | **Community-Driven Lending**
