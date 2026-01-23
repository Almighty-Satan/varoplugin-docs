---
sidebar_position: 3
sidebar_label: Presets
description: How to save and load presets
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

# Presets

Presets can be used to quickly set up the plugin for a specific style of project. You can either use one of the build-in presets, or even create your own ones.
Use `/varo preset load <preset>` to load a preset or `/varo preset list` to view a list of all available presets.
Loading a preset will overwrite the current configuration with the preset's configuration. It is recommended to create a backup before loading a preset.
`/varo preset save <preset>` can be used to create a new custom preset from your current configuration. This preset will than be stored in `./plugins/Varo/presets`.
Be aware that presets created on older versions of the plugin may no longer work or even cause errors after updating to a newer version.

## Built-In Presets
There are currently 3 built-in presets. All of them automatically change the project name and prefix, but they can be changed again manually afterwards if so desired.

### OneDayVaro
Sets the playtime to unlimited and enables team requests.

### Suro
Disables player chests and furnaces, join protection, combatlog strikes, border decreases and natural health regeneration.
Enables death sound and offline-villagers.

### Titan
Disables border decreases and enables bloodlust and team backpacks. Every team gets 3 team-lives. 
