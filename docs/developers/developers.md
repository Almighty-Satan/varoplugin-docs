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
The VaroPlugin has an [API](https://github.com/CuukyOfficial/VaroPlugin/tree/master/varo-spigot/src/main/java/de/varoplugin/varo/api)
which can be used to write extensions or get information about the game for use in your own plugin. To access the API you have to add
the VaroPlugin as a dependency using either Maven or Gradle.  

Please always make sure to respect the [VaroPlugin license](https://github.com/CuukyOfficial/VaroPlugin/blob/master/LICENSE) when
writing plugins or other software that depend on the VaroPlugin.

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
