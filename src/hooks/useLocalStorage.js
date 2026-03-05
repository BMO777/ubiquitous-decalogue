import { useState, useEffect } from "react";
import { encryptData, decryptData } from "../utils/crypto";

export default function useLocalStorage(key, initialValue, encryptionKey = null) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) {
        setStoredValue(initialValue);
        return;
      }

      if (encryptionKey) {
        const decrypted = decryptData(item, encryptionKey);
        if (decrypted) {
          setStoredValue(decrypted);
        } else {
          // If decryption fails, we keep the initial value (empty list)
          // but we don't overwrite the actual localStorage
          setStoredValue(initialValue);
        }
      } else {
        try {
          // Try to parse as plaintext JSON if no key is provided
          const parsed = JSON.parse(item);
          setStoredValue(parsed);
        } catch (e) {
          // If it's not valid JSON, it's likely encrypted and we can't read it yet
          setStoredValue(initialValue);
        }
      }
    } catch (error) {
      console.error("Error reading localStorage:", error);
      setStoredValue(initialValue);
    }
  }, [key, encryptionKey, initialValue]);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      const dataToStore = encryptionKey ? encryptData(value, encryptionKey) : JSON.stringify(value);
      window.localStorage.setItem(key, dataToStore);
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  };

  const removeItem = () => {
    try {
      setStoredValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing localStorage item:", error);
    }
  };

  return [storedValue, setValue, removeItem];
}