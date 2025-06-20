---
sidebar_position: 1
sidebar_label: Setup
description: How to set up the Discord Bot
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

# Discord Bot Setup

## Creating a bot

Open https://discord.com/developers/applications/ and log in with your account. Click **New Application**, enter a name for your bot and click **Create**.  
![](/img/bot/new_application.png)  

You can now optionally change your bot's profile picture and add a description.  
![](/img/bot/description.png)  

## Inviting your bot

Copy your **Application ID**.  
![](/img/bot/application_id.png)  

Add your application id to the end of this link and open it in a new browser tab:
```
https://discord.com/api/oauth2/authorize?permissions=8&scope=bot%20applications.commands&client_id=
```
:::tip
For example if your application id is `1234`, you get the link `https://discord.com/api/oauth2/authorize?permissions=8&scope=bot%20applications.commands&client_id=1234`
:::

If you followed the instructions above correctly, you should now see the following dialog asking you to add your bot to a server (Notice: You might have to log into you Discord account first). Select you server and press **Continue**.  
![](/img/bot/invite_server.png)  

Click **Authorize**  
![](/img/bot/invite_authorize.png)  

Your bot should new have joined your server. You can now close this browser tab.  
![](/img/bot/invite_success.png)  
![](/img/bot/invite_join.png)  

## Installation link

Select **Installation** in the sidebar on the left.  
![](/img/bot/sidebar_installation.png)  

Change **Install Link** to `None`.  
![](/img/bot/install_link.png)  

Click **Save Changes** at the bottom of your screen.  
![](/img/bot/save_changes.png)  

## Disabling public bot and enabling gateway intents

Select **Bot** in the sidebar on the left.  
![](/img/bot/sidebar_bot.png)  

Disable **PUBLIC BOT**, enable **SERVER MEMBERS INTENT** and click **Save Changes**.  
![](/img/bot/settings.png)  

## Copying the bot token

:::danger
Do not share your bot token with anyone!
:::

Click **Reset Token** and press confirm in the popup dialog.  
![](/img/bot/reset_token.png)  

Click **Copy** to copy your token to your clipboard.  
![](/img/bot/copy_token.png)  

Open the config file `plugins/Varo/config/discord.yml` with your favorite editor, insert your bot token and set **discordBotEnabled** to `true`. Make sure to save the file afterwards.  
![](/img/bot/paste_token.png)  

## Enabling Discord developer mode
Click the cogwheel next to your username to open the settings page.  
![](/img/bot/user_settings.png) 

Select **Advanced** and enable **Developer Mode**.  
![](/img/bot/developer_mode.png) 

## Copying the guild id
Right-click on your Discord server and select **Copy Server ID**.  
![](/img/bot/copy_guild_id.png) 

Insert the guild id into your config file.  
![](/img/bot/paste_guild_id.png)  

## Configuring event channels
:::note
This step is optional. If you do not want your bot to send announcements and events you can skip this step.
:::
Right-click on whatever channel you want your bot to send events/announcements to and select **Copy Channel ID** and paste this value into your config.  
![](/img/bot/copy_channel_id.png)
![](/img/bot/paste_channel_id.png)

## Setting the invite link
Right-click your Discord server and select **Invite People**.  
![](/img/bot/invite_people.png)

Click **Edit invite link**.  
![](/img/bot/link_edit.png)

Make sure the link does not expire and has no user limit and select **Generate a New Link**.  
![](/img/bot/link_generate.png)

You can now copy the link and insert it into your config.  
![](/img/bot/link_copy.png)
![](/img/bot/paste_link.png)
