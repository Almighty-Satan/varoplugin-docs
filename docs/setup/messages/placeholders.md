---
sidebar_position: 2
sidebar_label: Placeholders
description: List of all available placeholders and how to use them
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

# Placeholders

## General Placeholders
| Placeholder | Value |
| --- | --- |
| `varo-author` | `Cuuky` |
| `varo-contributors` | The Varo Plugin contributors |
| `varo-version` | The current plugin version |
| `varo-version-latest` | The latest available plugin version |
| `varo-discord` | `https://discord.varoplugin.de/` |
| `projectname` | The name of the current project |
| `prefix` | The prefix, can be changed in the config |
| `colorcode` | The default color code, can be changed in the config |
| `discord` | The project Discord server, can be changed in the config |
| `num-players` | The number of total players |
| `num-alive` | The number of players alive |
| `num-online` | The number of players online |
| `project-hour` | The number of hours since this project was started |
| `project-minute` | The number of minutes since this project was started |
| `project-second` | The number of seconds since this project was started |
| `border-size` | The current border size |
| `border-radius` | The current border radius (`border-size` / 2) |
| `spawn-world` | The world name where the spawn is located |
| `heart` | `♥` |
| `newline` | Newline character |
| `padding` | Whitespace (e.g. `<padding:2>` evaluates to two spaces) |
| `year` | The current year (e.g. `2025`) |
| `month` | The current month (e.g. `04`) |
| `day` | The current month (e.g. `01`) |
| `hour` | The current hour in 24-hour format (e.g. `15`) |
| `minute` | The current minute (e.g. `01`) |
| `second` | The current second (e.g. `02`) |

## Config Placeholders
Almost all config entries can be used as a placeholder by using `<config-XXX>`. For example `<config-Start-doSortAtStart>` will return the value of the config entry `Start.doSortAtStart`.

## Player Placeholders
TODO
