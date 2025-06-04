# Crossmint Amazon Checkout

A Next.js application that allows users to purchase Amazon products using cryptocurrency through Crossmint's checkout system.

## Features

- 🔍 Search Amazon products by URL, ASIN or keywords
- 💳 Pay with cryptocurrency (USDC, ETH, etc.)
- 💳 Alternative credit card payment option
- 🔗 Support for Amazon product URLs and ASINs
- 🛒 Seamless checkout experience
- 📱 Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Crossmint API key
- Search API key (for product search)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
CROSSMINT_API_KEY=your_crossmint_api_key
SEARCH_API_KEY=your_search_api_key
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
NEXT_PUBLIC_CROSSMINT_ENV=staging
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/checkout-amazon-e2e-v0.git
cd checkout-amazon-e2e-v0
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Searching Products

You can search for products in several ways:
- Enter an Amazon ASIN (e.g., `B07MJL8NXR`)
- Paste an Amazon product URL
- Use keywords to search for products

### Making a Purchase

1. Search for a product using any of the methods above
2. Click on the product to view details
3. Click "Buy Now"
4. Connect your wallet or choose credit card payment
5. Complete the checkout process

## Supported Payment Methods

- Cryptocurrency:
  - USDC
  - ETH
  - Other supported cryptocurrencies
- Credit Card

## Technical Details

### Project Structure

```
├── app/
│   ├── api/              # API routes
│   ├── components/       # React components
│   ├── config/          # Configuration files
│   ├── contexts/        # React contexts
│   ├── providers/       # App providers
│   ├── utils/           # Utility functions
│   └── page.tsx         # Home page
├── public/              # Static files
└── package.json         # Dependencies
```

### Key Technologies

- Next.js 14
- React
- Tailwind CSS
- Wagmi (Web3)
- Crossmint API
- Search API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 
