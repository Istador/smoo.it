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
      <a-ext href="https://github.com/Sanae6/SmoOnlineServer/releases">releases</a-ext> page.
      <ul>
        <li><code>Server</code> is for <font-awesome-icon icon="fa-brands fa-linux"/> GNU/Linux x64</li>
        <li><code>Server.arm</code> is for <font-awesome-icon icon="fa-brands fa-linux"/> GNU/Linux ARM</li>
        <li><code>Server.arm64</code> is for <font-awesome-icon icon="fa-brands fa-linux"/> GNU/Linux ARM64</li>
        <li><code>Server.exe</code> is for <font-awesome-icon icon="fa-brands fa-windows"/> Windows</li>
      </ul>
      Just execute them (preferable in a CLI) and you're running the server.
      On <font-awesome-icon icon="fa-brands fa-linux"/> GNU/Linux you might need to install additional runtime dependencies
      (Debian/Ubuntu: <code>libicu67</code>).
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
      Building it requires the <a-ext href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0">.NET 6.0 SDK</a-ext>.
      The builded binary files for your system will be located at <code>./Server/bin/Release/net6.0/</code>, you can change this path by using the <kbd>-o</kbd> parameter.
      To run your own builds you'll also need the <code>.NET Runtime</code> installed.
    </p>
    <p>
      Alternatively you can build with <kbd>--self-contained</kbd> which allows you to run the binary on systems without the <code>.NET Runtime</code>.
      But that requires you to specify the <a-ext href="https://docs.microsoft.com/en-us/dotnet/core/rid-catalog">runtime</a-ext>
      for which to build for (e.g. <kbd>-r linux-x64</kbd>, <kbd>-r linux-arm</kbd>, <kbd>-r linux-arm64</kbd> or <kbd>-r win-x64</kbd>).
      If you're providing the runtime anyway consider also using <kbd>-p:publishSingleFile=true</kbd> to bundle everything into one single binary file.
    </p>
    <hr/>
    <p>
      An easier alternative to building it directly is to use <a-ext href="https://docs.docker.com/get-docker/">Docker</a-ext>.
      That way the only required software you need to install on your system is Docker.
      All other dependencies will not be installed on your system directly but are only downloaded and used sandboxed.
      The source code of the server comes with an <code>docker-build.sh</code> script to easily trigger building the server:
      <ul>
        <li><kbd>./docker-build.sh x64</kbd> to build a <code>Server</code> binary for <font-awesome-icon icon="fa-brands fa-linux"/> GNU/Linux x64</li>
        <li><kbd>./docker-build.sh arm</kbd> to build a <code>Server.arm</code> binary for <font-awesome-icon icon="fa-brands fa-linux"/> GNU/Linux ARM</li>
        <li><kbd>./docker-build.sh arm64</kbd> to build a <code>Server.arm64</code> binary for <font-awesome-icon icon="fa-brands fa-linux"/> GNU/Linux ARM64</li>
        <li><kbd>./docker-build.sh win64</kbd> to build a <code>Server.exe</code> binary for <font-awesome-icon icon="fa-brands fa-windows"/> Windows</li>
        <li><kbd>./docker-build.sh all</kbd> to build the binaries for all systems</li>
      </ul>
      The builded server artifacts should be in the <code>bin</code> directory afterwards.
    </p>
  </smoo-card>
</template>
