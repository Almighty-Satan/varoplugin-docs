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
| `day` | The current day (e.g. `01`) |
| `hour` | The current hour in 24-hour format (e.g. `15`) |
| `minute` | The current minute (e.g. `01`) |
| `second` | The current second (e.g. `02`) |

## Config Placeholders
Almost all config entries can be used as a placeholder by using `<config-XXX>`. For example `<config-Start-doSortAtStart>` will return the value of the config entry `Start.doSortAtStart`.

## Player Placeholders
Placeholders for all players:
| Placeholder | Value |
| --- | --- |
| `name` | The player's name |
| `displayname` | The player's display-name (see `player.displayname` in message config) |
| `uuid` | The player's uuid |
| `id` | The player's internal id |
| `rank` | The player's rank |
| `kills` | The number of kills this player has made |
| `strikes` | The number of strikes this player has received |
| `countdown-hour` | The session countdown hours |
| `countdown-minute` | The session countdown minutes |
| `countdown-second` | The session countdown seconds |
| `session-hour` | The session timer hours |
| `session-minute` | The session timer minutes |
| `session-second` | The session timer seconds |
| `online-hour` | How many hours this player has been online for |
| `online-minute` | How many minutes this player has been online for |
| `online-second` | How many seconds this player has been online for |
| `online-total-hour` | How many hours in total this player has been online for |
| `online-total-minute` | How many minutes in total this player has been online for |
| `online-total-second` | How many seconds in total this player has been online for |
| `episode` | The players current episode |
| `episodes-remaining` | How many episodes the player has left |
| `remaining-disconnects` | How many times the player can disconnect before their sessions is ended prematurely |
| `luckperms-prefix` | The player's LuckPerms prefix |
| `luckperms-suffix` | The player's LuckPerms suffix |
| `blocklogger` | Returns the number of blocks of a certain material that this player has destroyed (e.g. `<blocklogger:DIAMOND_ORE>`) |
| `has-team` | Conditional placeholder that returns its first argument if the player has a team. Otherwise it returns its second argument. |
| `team-*` | See [Team Placeholders](#team-placeholders) |

Placeholders for online players:
| Placeholder | Value |
| --- | --- |
| `ping` | The player's ping in milliseconds |
| `x` | The player's x-coordinate |
| `y` | The player's y-coordinate |
| `z` | The player's z-coordinate |
| `world` | The world this player is currently located in |
| `distance-to-border` | The player's distance to the world border |
| `spawn-x` | The x-coordinate of the spawn point in the world the player is currently in |
| `spawn-y` | The y-coordinate of the spawn point in the world the player is currently in |
| `spawn-z` | The z-coordinate of the spawn point in the world the player is currently in |
| `spawn-distance` | The player's distance to the world spawn |
| `health` | The player's health |
| `food` | The player's current food level |

## Team Placeholders
Team placeholders always require a prefix. This can either be `team-` to get the current player's team, or `top-team-` to get a ranked team (see [Top Player/Team Placeholders](#top-playerteam-placeholders)).

| Placeholder | Value |
| --- | --- |
| `name` | The team's name |
| `displayname` | The team's display-name (includes color code and `#`) |
| `id` | The team's internal id |
| `kills` | The total number of kills that the members of this team have made |
| `lives` | The number of team-lives this team has left |

## Top Player/Team Placeholders
All player/team placeholders can be used with either the prefix `top-player-`/`top-team-` to select the top player/team.
The first argument is the desired ranking, where `0` means the best player/team.
The second argument is returned in case no player/team with the desired ranking is found.

Examples:
- `<top-player-name:0:->` will evaluate to the best player's name or `-` if there is no best player.  
- `<top-player-uuid:1:XXX>` will evaluate to the second-best player's UUID or `XXX` if there is no second-best player
- `<top-team-kills:3:->` will evaluate to the third-best team's kills or `-` if there is no third-best team
