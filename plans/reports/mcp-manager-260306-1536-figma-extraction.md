# Figma MCP Server Integration Report

**Date:** 2026-03-06 15:36
**Work Context:** C:/Users/ADM/Workspace/CexDex
**Task:** Extract design data from Figma file using MCP servers

## Status: BLOCKED - Configuration Required

### Findings

1. **MCP Configuration Missing**
   - No `.mcp.json` file exists in `~/.claude/`
   - Only `.mcp.json.example` available
   - MCP script requires valid configuration to connect to servers

2. **Figma MCP Servers Available (Not Configured)**
   - **figma** (Cloud): https://mcp.figma.com/mcp
   - **figma-desktop** (Local): http://127.0.0.1:3845/mcp

3. **Project Structure**
   - CexDex is a React + TypeScript + Vite project
   - No existing `.claude/` directory in project root
   - Using git branch: `fix/i8n-bug`

### Figma File Details

- **URL:** https://www.figma.com/design/mdne3G4UshTLcUo6u1WlW0/CEXDEX--2026-
- **File ID:** mdne3G4UshTLcUo6u1WlW0
- **Node ID:** 1253-143287
- **Target:** Extract layout, colors, typography, spacing, components

### Next Steps Required

1. **Create MCP Configuration** (`~/.claude/.mcp.json`)
   - Add Figma MCP server entries
   - Add authentication tokens if required
   - Reference: `~/.claude/.mcp.json.example`

2. **Verify Figma API Access**
   - Check if Figma desktop server is running (localhost:3845)
   - Or ensure cloud server (mcp.figma.com) is accessible
   - May require Figma API token

3. **Execute Tool Discovery**
   - Run `npx tsx scripts/cli.ts list-tools` from mcp-management skill
   - Identify available Figma extraction tools
   - Map tools to design extraction requirements

4. **Extract Design Data**
   - Use identified Figma tools to query node 1253-143287
   - Extract: layout info, color values, typography specs, spacing, components
   - Save output to structured format (JSON/YAML)

### Unresolved Questions

1. Do you have a Figma API token for authentication?
2. Is the Figma desktop MCP server running locally on port 3845?
3. Should we use cloud (mcp.figma.com) or local (127.0.0.1:3845) server?
4. What format should extracted design data be in?
5. Should design data be saved to docs/ for project reference?
