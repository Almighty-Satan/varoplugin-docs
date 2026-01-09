---
sidebar_position: 3
sidebar_label: Strikes
description: Configuring strikes
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

# Custom Strikes
All settings related to strikes can be found in the `strikes.yml` configuration file.

Strike-templates can be configured to do any combination of the following actions:
- Post the player's coordinates to the event log and Discord (if the Discord bot is set up)
- Clear the player's inventory
- Eliminate the player from the project
- Ban the player for a set number of hours

Strikes can also be configured to have no effect at all by disabling all actions.

When a player receives their 𝑛th strike, the 𝑛th strike-template is used to determine what actions should be applied.
If a player receives more strikes than templates exist, the last template will be applied multiple times.
