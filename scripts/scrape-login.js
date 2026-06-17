/**
 * Step 1: Open headed Chrome to Vault Portal login page.
 * User logs in manually, then script saves session state for scraping.
 *
 * Usage:  node scripts/scrape-login.js
 * After login, press Enter in terminal to save session.
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const SESSION_FILE = path.join(__dirname, "..", "tmp", "auth-session.json");
const TARGET_URL = "https://vault-portal.thoughtmachine.net/";

(async () => {
  // Ensure tmp dir exists
  fs.mkdirSync(path.join(__dirname, "..", "tmp"), { recursive: true });

  const browser = await chromium.launchPersistentContext(
    path.join(__dirname, "..", "tmp", "browser-data"),
    {
      headless: false,
      viewport: { width: 1400, height: 900 },
      channel: "chrome",
    }
  );

  const page = browser.pages()[0] || (await browser.newPage());
  await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 60000 });

  console.log("\n========================================");
  console.log("Browser opened to Vault Portal login.");
  console.log("Please LOG IN manually in the browser.");
  console.log("After you are logged in and see the portal,");
  console.log("come back here and press ENTER...");
  console.log("========================================\n");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await new Promise((resolve) => {
    rl.question("Press ENTER after login is complete: ", () => {
      rl.close();
      resolve();
    });
  });

  // Save storage state (cookies, localStorage)
  await browser.storageState({ path: SESSION_FILE });
  console.log(`\nSession saved to: ${SESSION_FILE}`);
  console.log("Current URL:", page.url());

  // Don't close browser — keep it open for scraping
  console.log("\nBrowser kept open. Run scrape-turndown.js in another terminal.");
  console.log("Or press Ctrl+C to close everything.");

  // Keep process alive
  await new Promise(() => {});
})();
