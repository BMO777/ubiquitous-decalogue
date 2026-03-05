import CryptoJS from 'crypto-js';

/**
 * Encrypts data using a provided key.
 * @param {any} data - The data to encrypt.
 * @param {string} key - The encryption key.
 * @returns {string} The encrypted ciphertext.
 */
export const encryptData = (data, key) => {
  if (!key) return JSON.stringify(data);
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

/**
 * Decrypts ciphertext using a provided key.
 * @param {string} ciphertext - The encrypted data.
 * @param {string} key - The decryption key.
 * @returns {any|null} The decrypted data or null if decryption fails.
 */
export const decryptData = (ciphertext, key) => {
  if (!key || !ciphertext) return null;
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedData) return null;
    return JSON.parse(decryptedData);
  } catch (e) {
    return null;
  }
};