export default function handler(req, res) {
  // Adresse du contrat TALON
  const contractAddress = "0x0c6417054f8b303ddb821b1349124d656ea4be13";
  
  // Montant de 100 TALON (avec 18 décimales) en hexadécimal
  const amountHex = "0x56bc75e2d63100000";
  
  // Votre adresse Farcaster sans le '0x'
  const recipientAddress = "872bD846596Cc1aEde8Fd800997d242e3473fA83";
  
  // Construction du data pour la fonction ERC-20 'transfer'
  // Méthode : 0xa9059cbb
  // Padding de l'adresse destinataire sur 64 caractères (32 octets)
  const data = "0xa9059cbb" + recipientAddress.padStart(64, '0') + amountHex.replace("0x", "").padStart(64, '0');
  
  res.status(200).json({
    chainId: "eip155:8453",
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: contractAddress,
      data: data,
      value: "0"
    }
  });
}
