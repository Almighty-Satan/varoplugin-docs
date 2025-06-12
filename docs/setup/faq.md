---
sidebar_position: 2
sidebar_label: FAQ
description: Frequently asked questions
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

# Frequently Asked Questions

## How do I revive a player?
Open the menu with `/varo player <player>` and change the `PlayerState` to `ALIVE`.
Alternatively, you can use the command `/varo stats set playerstate ALIVE <player>`.

## How do I remove the holograms at spawn?
Enter `/minecraft:kill @e[type=Armorstand]`.
On other Minecraft versions, the command may vary slightly.
**Please always make a backup before using `/kill`!**

## How do I give a player more sessions?
You can edit the player's stats through the GUI.
Use `/varo player <player>` and change the number sessions by clicking.
Alternatively, use `/varo stats set sessions <number> <player>` or `/varo stats set sessions <number> @a` to give sessions to all players.

## My time is incorrect!
The time is set by the server, not the plugin!
On Linux, you can easily change the time by using `dpkg-reconfigure tzdata` (tested on Debian 12). If you do not have access to a shell, you need to contact your server provider.

## How do I display top players/teams?
Read [this](./messages/placeholders.md#top-playerteam-placeholders)  

TL;DR Use `<top-player-name:0:->` or `<top-team-name:0:->`

## Where can I change a certain settings?
If you don't know, for example, where to change the prefix, use `/varo config search <word>` to show all entries containing that word.
You'll get results in the format `File.Entry`, e.g., `world.Example`. You’ll find the entry `Example` in the `world.yml` file or in the admin section of `/varo menu` under `World`.

## How do I set up the Discord bot?
Read [this](./discordbot/setup.md)

## What is a placeholder?
A placeholder is used in messages, the tab list, or the scoreboard and is replaced automatically by the plugin.
Placeholders are recognized by the `<>` symbols — for example, `<name>` is replaced with the player's name.
You can find a list of all placeholders [here](./messages/placeholders.md).

## My server isn’t open to everyone, what should I do?
If your players can’t join the server despite being registered, you need to turn off the whitelist with `/whitelist off`.
If you’re running a OneDayVaro or another project where players should join without registering, you need to enable `unregisteredPlayerJoin` in the config.

## How do I set a player to spectator mode?
Open the menu with `/varo player <player>` and change the `PlayerState` to `SPECTATOR`.
Alternatively, you can use the command `/varo stats set playerstate SPECTATOR <player>`.

## How do I change the session duration?
In the `main.yml`, there’s a setting called `playTime`. This can be used to change the number of minutes per session.

## How do I change ore generation?
This feature is not included in the plugin. For versions below 1.13, you can use [this website](https://minecraft.tools/de/custom.php).
