<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="host"
    key="discord"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Setting up a Discord bot</template>
    <p>
      The aim of this is that the SMOO server connects to your private Discord server as a bot.
      It can then send logs to a dedicated logs channel and receive
      <a-int name="host" id="commands">commands</a-int>
      from you or someone else.
      (This might be way easier to use in remote scenarios than to SSH to the server and attach the CLI to the server process.)
    </p>
    <h5>Create an application</h5>
    <p>
      Go to <a-ext href="https://discord.com/developers/applications">discord.com/developers/applications</a-ext>,
      create a <code>New Application</code> and give it a name (e.g. <code>SMOO Server</code>).
    </p>
    <h5>Create a bot</h5>
    <p>
      Navigate to the <code>Bot</code> section of the new application and <code>Add Bot</code>.
      Change its username to one you like and maybe add a nice avatar (you'll see this in Discord).
      Uncheck the <code>Public Bot</code> setting that is enabled by default.
    </p>
    <h5>Generate a bot token</h5>
    <p>
      More importantly is that we call <code>Reset Token</code> for the bot.
      This will generate a new secret token that we need to connect the bot to our SMOO server.
      Copy the displayed token and paste it into the <a-int name="host" id="settings">settings.json</a-int>
      of the server (it goes to <code>Discord &gt; Token</code> and needs to be surrounded by double quotes).
      The token is only displayed once, if you forgot to copy it or lose it later,
      you can always get back here and use <code>Reset Token</code> to generate a new token (the old one will become invalid by doing this).
    </p>
    <h5>Add the application to a server</h5>
    <p>
      Navigate to the <code>OAuth2 &gt; URL Generator</code> section of the application and select the <code>bot</code> scope and nothing else.
      At the bottom there will now be a generated URL.
      Copy the generated URL and paste it into your address bar.
      On the opened site you need to authorize your Discord application to access your Discord account.
      To do so you'll have to to select a Discord server that it shall be granted access to.
      To confirm the authorization click on <code>Authorize</code>.
    </p>
    <p>
      Only servers that you have the <code>Manage Server</code> permission for are shown.
      You should select your own private Discord server for this, that only you have access to
      (otherwise others can send <a-int name="host" id="commands">commands</a-int> to the SMOO server).
      If you don't have one yet, just create one, it is free: simply click on the green plus button at the end of your server list.
    </p>
    <h5>Create a log channel</h5>
    <p>
      Create a new channel on the Discord Server where the bot shall write its log messages to.
      We'll need to give the channel ID to the SMOO server to link them, but channel IDs normally aren't shown anywhere within Discord.
      To achieve this, the <code>Developer Mode</code> needs to be enabled first in the Discord app settings (under <code>User Settings &gt; App Settings &gt; Advanced</code>).
      Once that is enabled, we can right click on the channel and choose <code>Copy ID</code>.
    </p>
    <p>
      The bot requires the following permissions for the log channel:
      <ul>
        <li><code>General Permissions &gt; View Channel</code></li>
        <li><code>Text Persmissions &gt; Send Messages</code></li>
      </ul>
    </p>
    <h5>Create a command channel</h5>
    <p>
      Create a new channel on the Discord Server where the bot shall receive commands from.
      As with the log channel we need to give the channel ID to the SMOO server to link them.
    </p>
    <p>
      The bot requires the following permissions for the command channel:
      <ul>
        <li><code>General Permissions &gt; View Channel</code></li>
        <li><code>Text Persmissions &gt; Send Messages</code></li>
        <li><code>Text Persmissions &gt; Read Message History</code></li>
      </ul>
    </p>
    <p>
      Alternatively we can also use the same channel for the logs and commands or only create and configure one of them.
    </p>
    <h5>Configure the server</h5>
<code class="style float-right ml-3 mb-3">
<label>settings.json</label>
<pre class="code">
<b>"Discord"</b>: {
  <b>"Token"</b>: <a>"MTAwND...TI0c"</a>,
  <b>"Prefix"</b>: <a>"$"</a>,
  <b>"CommandChannel"</b>: <a>"993864963574140000"</a>,
  <b>"LogChannel"</b>: <a>"993864963574140000"</a>
}
</pre>
</code>
    <p>
      Now that we have set everything else up and have the bot token and the channel IDs we need to enter them into the
      <a-int name="host" id="settings">settings.json</a-int>.
      After changing the <code>settings.json</code> we either need to restart the SMOO server or send it the
      <kbd>loadsettings</kbd> <a-int name="host" id="commands">command</a-int>.
    </p>
    <p>
      If everything is set up correctly, the Discord bot should now be shown as online on the Discord server.
      You can send the bot <a-int name="host" id="commands">commands</a-int>
      via direct messages or write them into channels the bot can read.
      The commands need to start with the prefix that is configured in the
      <a-int name="host" id="settings">settings.json</a-int>.
      For example <kbd>list</kbd> becomes <kbd>$list</kbd> with the default <code>"$"</code> prefix.
    </p>
  </smoo-card>
</template>
