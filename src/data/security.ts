
import { Category } from "@/types";

// Sample markdown content
const cryptoSecurityContent = `
# Crypto Security Best Practices

Securing your cryptocurrency is one of the most important aspects of participating in this digital ecosystem. This guide covers essential security practices every crypto user should follow.

## Wallet Security

### Types of Wallets

1. **Hardware Wallets**
   - Physical devices that store private keys offline
   - Examples: Ledger Nano X, Trezor Model T
   - Best for long-term storage and large amounts

2. **Software Wallets**
   - Desktop or mobile applications
   - Examples: Metamask, Exodus, Trust Wallet
   - Convenient for regular use but less secure than hardware options

3. **Paper Wallets**
   - Physical documents containing keys and QR codes
   - Completely offline but vulnerable to physical damage
   - Best for cold storage of long-term holdings

![Wallet Security](/images/content/wallet-security.jpg)

### Best Practices for Wallet Security

- **Never share your private keys or seed phrases**
- Store seed phrases in multiple secure locations
- Use hardware wallets for significant holdings
- Enable 2FA wherever available
- Regularly update wallet software

## Exchange Security

When using cryptocurrency exchanges, follow these guidelines:

- Choose reputable, regulated exchanges
- Don't store large amounts on exchanges long-term
- Use unique, strong passwords for each exchange
- Enable all available security features (2FA, email confirmations, etc.)
- Be wary of phishing attempts targeting exchange credentials

## General Security Tips

- **Use unique passwords** for all crypto-related accounts
- **Enable 2FA** using an authenticator app (not SMS)
- **Verify all transactions** before confirming
- **Be cautious of public WiFi** when accessing wallets or exchanges
- **Keep your devices secure** with updated antivirus software
- **Create a separate email** dedicated to cryptocurrency accounts
- **Beware of scams** like fake giveaways, impostor websites, or suspicious links

## Security Red Flags

Watch out for these warning signs:
- Promises of guaranteed returns
- Pressure to act quickly
- Requests to share private keys
- Unsolicited investment advice
- Projects with anonymous teams
- Poor or copied documentation

> Remember: If something seems too good to be true, it probably is.
`;

// Export category data
export const securityCategory: Category = {
  id: "security",
  label: "Security",
  slug: "security",
  position: 2,
  pages: [
    {
      id: "crypto-security",
      title: "Crypto Security Best Practices",
      slug: "/security/crypto-security",
      sidebar_label: "Security Best Practices",
      sidebar_position: 1,
      content: cryptoSecurityContent,
    },
  ],
};
