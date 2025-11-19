---
sidebar_position: 3
sidebar_label: Blocking Enchantments
description: How to block enchantments
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

# Blocking Enchantments

Enchantments can be blocked by holding an enchanted item or book in your hand and running `/varo enchantment add`. Enchantments can be unblocked the same way by running `/varo enchantment remove`. The list of blocked
enchantments can also be modified manually via the `enchantments.yml` configuration file, though doing this is not recommended.

On Spigot/Paper 1.8.8 and Paper 1.21+ blocked enchantments will not show up in the enchantment table at all, on all other versions players will not be able to select enchantment offerings that contain blocked enchantments.
On versions other than Spigot/Paper 1.8.8 or Paper 1.21+ it is therefore possible that a player may not be able to enchant a certain item at all if no offering without a blocked enchantment is available. For this reason we
do not recommend using this feature on any of these versions. Blocked enchantments also can not be applied in an anvil on any Minecraft version.

The plugin however does **not** prevent blocked enchantments from generating in loot chests (e.g. in villages or strongholds), being dropped by mobs or being traded with villagers. Therefore players may still be able to
obtain items containing blocked enchantments through these means.
