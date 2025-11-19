---
sidebar_position: 1
sidebar_label: Configuring Messages
description: How to configure messages
---

<!---
    varoplugin-docs
    Copyright (C) 2025 Almighty-Satan

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
--->

# Configuring Messages
Messages can be configured in the message configuration files located in `plugin/Varo/messages`.
The default language can be configured in the main configuration file.
If `language.allowOther` is enabled, the plugin will automatically detect a players locale when they first join the server and set their language accordingly.
A player can manually change their language using the `/language` command.

## Scoreboard
The scoreboard can also be configured in the language configuration files. It consists of a title and a body (called `content` in the configuration files).
The title and body can be configured independently from each other.  

Due to limitations in the Minecraft scoreboard, no two lines of a frame can be the exact same. This also applies to empty lines.
To work around this use the `padding` placeholder with different values for empty lines.  

A player can enable/disable their own scoreboard by using `/varo scoreboard` (or `/varo sb` for short).

<!--- ## Tablist
The tablist header and footer can be configured the same way as the scoreboard.--->

## Action Bar
A player can enable/disable their own action bar by using `/varo actionbar` (or `/varo ab` for short).

<!--- ## Name Tags --->
