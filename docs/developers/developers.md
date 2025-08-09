---
sidebar_position: 1
sidebar_label: Developers
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

# Developers

## Maven
First you have to add the Maven repository:
```xml
<repository>
  <id>varoplugin-releases</id>
  <name>VaroPlugin Repository</name>
  <url>https://repo.varoplugin.de/releases</url>
</repository>
```
You can than include Varo Plugin as a dependency. Make sure to replace `5.x.x` with the correct version.
```xml
<dependency>
  <groupId>de.varoplugin</groupId>
  <artifactId>VaroPlugin</artifactId>
  <version>5.x.x</version>
</dependency>
```

## Gradle
First you have to add the Maven repository:
```kotlin
maven {
    name = "varoplugin-releases"
    url = uri("https://repo.varoplugin.de/releases")
}
```
You can than include Varo Plugin as a dependency. Make sure to replace `5.x.x` with the correct version.
```kotlin
implementation("de.varoplugin:VaroPlugin:5.x.x")
```
