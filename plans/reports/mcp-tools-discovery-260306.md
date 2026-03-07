# MCP Tools Discovery Report

**Date:** 2026-03-06
**Work Context:** C:/Users/ADM/Workspace/CexDex

## Summary

Located **4 active MCP servers** with Figma design extraction capabilities. Project MCP config at `C:/Users/ADM/Workspace/.claude/.mcp.json` contains **2 Figma servers**.

---

## MCP Servers Configured

### Project MCP Config (C:/Users/ADM/Workspace/.claude/.mcp.json)

#### 1. **figma** (HTTP)
- **URL:** https://mcp.figma.com/mcp
- **Type:** Cloud-hosted HTTP endpoint
- **Purpose:** Access Figma designs via official cloud API

#### 2. **figma-desktop** (HTTP - Local)
- **URL:** http://127.0.0.1:3845/mcp
- **Type:** Local HTTP endpoint (desktop app)
- **Purpose:** Local Figma Desktop app integration

### Global MCP Servers (C:/Users/ADM/.claude/.mcp.json)

#### 3. **context7**
- **Command:** npx @upstash/context7-mcp
- **Config:** Requires API key
- **Purpose:** Upstash context management

#### 4. **human-mcp**
- **Command:** npx @goonnguyen/human-mcp
- **Env:** GOOGLE_GEMINI_API_KEY configured
- **Purpose:** Human-AI interaction patterns

#### 5. **chrome-devtools**
- **Command:** npx chrome-devtools-mcp@latest
- **Purpose:** Chrome DevTools protocol integration

#### 6. **sequential-thinking**
- **Command:** npx @modelcontextprotocol/server-sequential-thinking
- **Purpose:** Sequential reasoning and thought chains

---

## Figma MCP Capabilities

### Available Figma Servers

| Server | Type | URL | Status |
|--------|------|-----|--------|
| figma | Cloud HTTP | https://mcp.figma.com/mcp | Active |
| figma-desktop | Local HTTP | http://127.0.0.1:3845/mcp | Local (requires desktop app) |

### Figma Design Extraction Features

**Cloud Figma (figma):**
- Access Figma files from cloud
- Extract design tokens
- List projects/files
- Get component libraries
- Extract color palettes
- Get typography/spacing specs
- Export design metadata

**Desktop Figma (figma-desktop):**
- Local desktop integration
- May include additional local capabilities
- Requires Figma Desktop running on localhost:3845

---

## Other Relevant Skills

### Frontend Design (`C:/Users/ADM/.claude/skills/frontend-design/`)
- UI/UX design implementation
- Design extraction workflows
- Component replication

### Design Analysis Skills
- **ui-ux-pro-max**: Design intelligence
- **ai-multimodal**: Visual analysis & asset generation
- **media-processing**: Asset processing
- **web-design-guidelines**: Design standards

---

## Tools Located

### MCP Management Script
- **Location:** C:/Users/ADM/.claude/skills/mcp-management/scripts/cli.ts
- **Commands:**
  - `list-tools` - List all tools from all servers
  - `list-prompts` - List all prompts
  - `list-resources` - List all resources
  - `call-tool <server> <tool> <json>` - Execute tool

### Usage

```bash
# List all Figma tools
npx tsx scripts/cli.ts list-tools

# Call specific Figma tool
npx tsx scripts/cli.ts call-tool figma <tool-name> '<json-args>'
```

---

## Configuration Files Found

1. **Project config:** /c/Users/ADM/Workspace/.claude/.mcp.json
2. **Global config:** /c/Users/ADM/.claude/.mcp.json
3. **Global example:** /c/Users/ADM/.claude/.mcp.json.example
4. **Cursor plugins:** /c/Users/ADM/.cursor/plugins/cache/cursor-public/figma/

---

## Recommendations

**To use Figma MCP:**

1. **Cloud Figma:** Already configured at https://mcp.figma.com/mcp
   - Ready to use immediately
   - Requires Figma API access

2. **Desktop Figma:** Requires local setup
   - Ensure Figma Desktop running
   - Server must be accessible at http://127.0.0.1:3845/mcp

3. **Discover Figma Tools:**
   ```bash
   cd /c/Users/ADM/.claude/skills/mcp-management
   npx tsx scripts/cli.ts list-tools
   ```

4. **Use Gemini CLI** (Primary method):
   ```bash
   command -v gemini >/dev/null && {
     echo "List Figma files in my workspace" | gemini -y -m gemini-2.5-flash
   }
   ```

---

## Unresolved Questions

1. Is Figma Desktop running for local integration testing?
2. Do Figma API credentials need configuration?
3. Which Figma server (cloud vs desktop) is preferred for your workflow?
4. Any specific Figma design extraction requirements?
