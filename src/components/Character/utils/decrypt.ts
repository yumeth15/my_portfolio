async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch encrypted file: ${response.status} ${response.statusText}`);
    }
    const encryptedData = await response.arrayBuffer();
    if (encryptedData.byteLength < 16) {
      throw new Error("Invalid encrypted file: file too short");
    }
    const iv = new Uint8Array(encryptedData.slice(0, 16));
    const data = encryptedData.slice(16);
    const key = await generateAESKey(password);
    return await crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
  } catch (error) {
    console.error("Decryption error:", error);
    throw error;
  }
};
