# sony-ult-ctl

[My PR](https://github.com/Leonard013/sony-ult-ctl/pull/1) · [Fork](https://github.com/anishmanchanda/sony-ult-ctl)

A macOS menu-bar app that controls Sony ULT WEAR headphones over **Bluetooth RFCOMM**.

- Reverse-engineered the undocumented binary protocol by probing candidate payloads and reading the firmware's own status replies.
- Found the level byte the device was ignoring and fixed ambient-sound control that had never worked.
- Added a live 0–20 transparency slider and a voice-passthrough toggle in SwiftUI.
- Rebuilt the receive path to be event-driven: every packet is acknowledged and handled on arrival, so the app shows the headphones' real state even when you change it from the earcup.

**Stack:** Swift, SwiftUI, Bluetooth RFCOMM
