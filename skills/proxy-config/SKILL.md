---
name: proxy-config
description: Configure OpenClaw to use proxy settings for accessing restricted services like Telegram. Use when operating in regions with internet restrictions.
---

# Proxy Configuration for OpenClaw

## Overview

Configure OpenClaw to use proxy settings to access services that may be restricted in certain regions (e.g., Telegram in China).

## Environment Variables

The following proxy environment variables will be configured:

- `http_proxy` - HTTP proxy address
- `https_proxy` - HTTPS proxy address  
- `all_proxy` - SOCKS proxy address for all protocols

## Default Proxy Settings

For Chinese users with Clash-like proxies:
- HTTP/HTTPS proxy: `http://127.0.0.1:7897`
- SOCKS proxy: `socks5://127.0.0.1:7897`

## Commands

### Start OpenClaw with Proxy

Use this command to start OpenClaw with proxy settings:
```bash
HTTPS_PROXY=http://127.0.0.1:7897 HTTP_PROXY=http://127.0.0.1:7897 ALL_PROXY=socks5://127.0.0.1:7897 node /Users/lyyy/openclaw/openclaw.mjs gateway start
```

### Persistent Configuration

For persistent proxy configuration, consider adding the environment variables to your shell profile or creating a systemd service with the proxy settings.

## Verification

After starting OpenClaw with proxy settings:
1. Check gateway status: `node /Users/lyyy/openclaw/openclaw.mjs status`
2. Test Telegram connection: Send a message to your bot
3. Monitor logs for successful connections