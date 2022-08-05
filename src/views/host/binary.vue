<template>
  <smoo-card
    header="Using binary files to run the server"
    :visible="$attrs.visible"
    accordion="host"
    key="binary"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <p>
      You'll find binary files of recent server versions attached on its
      <a href="https://github.com/Sanae6/SmoOnlineServer/releases" class="extern" target="_blank">releases</a> page.
      <ul>
        <li><code>Server</code> is for Linux x64</li>
        <li><code>Server.arm</code> is for Linux ARM</li>
        <li><code>Server.arm64</code> is for Linux ARM64</li>
        <li><code>Server.exe</code> is for Windows</li>
      </ul>
      Just execute them (preferable in a CLI) and you're running the server.
      On Linux you might need to install additional runtime dependencies (Debian/Ubuntu: <code>libicu67</code>).
    </p>
    <hr/>
    <p>
      If you don't trust those binaries or want to build a server version with your own changes,
      you can build the binary files from the source code:
<br/>
<code class="style">
<pre class="code">
<b>git  clone</b>  <a href="https://github.com/Sanae6/SmoOnlineServer" target="_blank">https://github.com/Sanae6/SmoOnlineServer</a>
<b>cd</b>  <i>SmoOnlineServer</i>
<b>dotnet  publish</b>  <i>./Server/Server.csproj</i>  -c <a>Release</a>
</pre>
</code>
<br/>
      Building it requires the <a href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0" class="extern" target="_blank">.NET 6.0 SDK</a>.
      The builded binary files for your system will be located at <code>./Server/bin/Release/net6.0/</code>, you can change this path by using the <kbd>-o</kbd> parameter.
      To run your own builds you'll also need the <code>.NET Runtime</code> installed.
    </p>
    <p>
      Alternatively you can build with <kbd>--self-contained</kbd> which allows you to run the binary on systems without the <code>.NET Runtime</code>.
      But that requires you to specify the <a href="https://docs.microsoft.com/en-us/dotnet/core/rid-catalog" class="extern" target="_blank">runtime</a>
      for which to build for (e.g. <kbd>-r linux-x64</kbd>, <kbd>-r linux-arm</kbd>, <kbd>-r linux-arm64</kbd> or <kbd>-r win-x64</kbd>).
      If you're providing the runtime anyway consider also using <kbd>-p:publishSingleFile=true</kbd> to bundle everything into one single binary file.
    </p>
  </smoo-card>
</template>
