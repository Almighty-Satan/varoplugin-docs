---
sidebar_position: 3
sidebar_label: Join System
description: Configure when players are allowed to join the server
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

# Join Systems
All settings related to this can be found in the `joinsystems.yml` configuration file.  

There are currently two join systems available:
- Fixed number of sessions per day
- Time based

It is also possible to enable both join systems at once.
In this case players will only be able to join if conditions for both join systems are met (the player has sessions left **and** the server is open at this time of day).

Players with OP permissions can always join the server. If you do not want this, disable `ignoreJoinSystemsAsOP`. 

## Fixed number of sessions per day
Every player will receive `sessionsPerDay` sessions every day. This join system can be disabled by setting `sessionsPerDay` to `0`.
The time at which new sessions are handed out can be configured in the `main.yml` config.
If `preProduceSessions` is enabled, players are able to use up a specified number of their upcoming sessions in advance.
For example setting `preProduceSessions` to `2` would allow players to play up to two of their sessions in advance.
Enable `catchUpSessions` to allow players to play sessions they have missed on previous days, otherwise missed sessions will be removed when handing out new sessions.

## Time based
Players can join every day during a specified time period. The following example lets players join between 2 p.m. and 4:30 p.m.:
```yaml
onlyJoinBetweenHours: true
onlyJoinBetweenHoursHour1: 14
onlyJoinBetweenHoursMinute1: 0
onlyJoinBetweenHoursHour2: 16
onlyJoinBetweenHoursMinute2: 30
```
Note the 24-hour time format, where `0` means midnight and `23` means 11 p.m. of the same day. Minutes should be a value between `0` and `59`.

If `kickAtServerClose` is enabled, players will be kicked instantly once the specified time period is over, otherwise they will be kicked at the end of their session.
