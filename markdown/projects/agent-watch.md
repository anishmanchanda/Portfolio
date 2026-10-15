# Agent Watch

[GitHub](https://github.com/anishmanchanda/claude-watch) · fork of [shobhit99/claude-watch](https://github.com/shobhit99/claude-watch)

Approve your coding agent's actions from your Apple Watch.

- Rewrote notification delivery on watchOS and iOS, with actionable buttons generated per request so each prompt shows its real options.
- Split the bridge server's hook routes to match Claude Code's contract, and fixed cross-agent session collisions.
- Added background polling, persistent pairing, and **Codex support** by tailing its JSONL session logs.
- Debugged on a physical iPhone and Apple Watch, because the simulator can't reproduce wrist-down, mDNS or background-budget behaviour.

**Stack:** Swift, SwiftUI, watchOS, iOS
