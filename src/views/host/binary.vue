<template>
  <smoo-card
    header="Using binary files to run the server"
    :visible="$attrs.visible"
    :link="{ name: 'host', params: { id: 'binary' } }"
  >
    <p>
      You'll find binary files of recent server versions attached on its
      <a href="https://github.com/Sanae6/SmoOnlineServer" class="extern" target="_blank">releases</a> page.
      <ul>
        <li><code>Server</code> is for Linux x64</li>
        <li><code>Server.arm</code> is for Linux ARM</li>
        <li><code>Server.arm64</code> is for Linux ARM64</li>
        <li><code>Server.exe</code> is for Windows</li>
      </ul>
      Just execute them (preferable in a CLI) and you're running the server.
      On Linux you might need to install additional runtime dependencies (Debian/Ubuntu: <code>libicu67</code>).
    </p>
    <p>
      If you don't trust those binaries or want to build a server version with your own changes,
      you can build the binary files from the source code:
<br/>
<code class="style">
<pre class="code">
<b>git  clone</b>  <a href="https://github.com/Sanae6/SmoOnlineServer" target="_blank">https://github.com/Sanae6/SmoOnlineServer</a>
<b>cd</b>  <i>SmoOnlineServer</i>
<b>dotnet  build</b>  --project <i>./Server/Server.csproj</i>  -c <a>Release</a>  --self-contained
</pre>
</code>
<br/>
      Building it requires the <a href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0" class="extern" target="_blank">.NET SDK 6.0</a>.
    </p>
  </smoo-card>
</template>
